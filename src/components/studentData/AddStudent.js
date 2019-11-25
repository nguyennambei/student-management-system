import React from 'react';
import {firebaseApp} from '../../FirebaseConfig';

export default class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            progress:'0%',student_img:null,url:'',
            student_name:'',furi_name:'',country:'',student_number:'',phone:'',address:'',
            year:'',month:'',day:'',date:''
        }
        this.database = firebaseApp.database().ref('student-data');
        this.storage = firebaseApp.storage();

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeFiles = this.handleChangeFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeInput(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value});
    }
    handleChangeFiles(e){
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState({student_img: image})
        }
    }
    handleSubmit(e){
        const date = this.state.year+'-'+this.state.month+'-'+this.state.day;
        this.setState({date});
        const {student_img} = this.state;
        const uploadTask = this.storage.ref(`student_img/${student_img.name}`).put(student_img);
        uploadTask.on('state_changed',
        (snapshot)=>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100).toString()+'%';
            this.setState({progress});
        },
        (error)=>{
            alert(error);
        },
        ()=>{
            this.storage.ref('student_img').child(student_img.name).getDownloadURL().then(url=>{
                this.setState({url});
                this.database.push({
                    id: this.state.student_number,
                    name: this.state.student_name,
                    furi_name: this.state.furi_name,
                    image: this.state.url,
                    country : this.state.country,
                    phone : this.state.phone,
                    address : this.state.address,
                    date: this.state.date
                });
                this.setState({
                    progress:'0%',student_img:null,url:'',
                    student_name:'',furi_name:'',country:'',student_number:'',phone:'',address:'',
                    year:'',month:'',day:'',date:''
                })
            })
        })
    }

    render(){
        
        return(
            <div>
            <h3>学生情報を追加</h3>
            <div className="container">
                <form>
                    <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width : this.state.progress}} aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100">{this.state.progress}</div>
                    </div>                        
                    <div className="form-group row">
                        <label htmlFor="staticName" className="col-sm-2 col-form-label">名前</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticName" name="student_name" value={this.state.student_name} onChange={this.handleChangeInput}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticNameJP" className="col-sm-2 col-form-label">フリガナ</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticNameJP" name="furi_name" value={this.state.furi_name} onChange={this.handleChangeInput}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">性別</label>
                        <div className="col-sm-10">
                            <select className="form-control" name='gender' onChange={this.handleChangeInput}>
                                <option value="true">男</option>
                                <option value="false">女</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticCountry" className="col-sm-2 col-form-label">国籍</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" id="staticCountry" name="country" value={this.state.country} onChange={this.handleChangeInput}/>
                        </div>
                        <label htmlFor="staticCountry" className="col-sm-1 col-form-label">誕生日</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" id="staticCountry" name="year" value={this.state.year} onChange={this.handleChangeInput}/>
                        </div>
                        <label htmlFor="staticCountry" className="col-sm-1 col-form-label">年</label>
                        <div className="col-sm-1">
                            <input type="text" className="form-control" id="staticCountry" name="month" value={this.state.month} onChange={this.handleChangeInput}/>
                        </div>
                        <label htmlFor="staticCountry" className="col-sm-1 col-form-label">月</label>
                        <div className="col-sm-1">
                            <input type="text" className="form-control" id="staticCountry" name="day" value={this.state.day} onChange={this.handleChangeInput}/>
                        </div>
                        <label htmlFor="staticCountry" className="col-sm-1 col-form-label">日</label>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticPhone" className="col-sm-2 col-form-label">学生番号</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="staticPhone" name="student_number" value={this.state.student_number} onChange={this.handleChangeInput}/>
                        </div>
                        <label htmlFor="staticPhone" className="col-sm-2 col-form-label">電話番号</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="staticPhone" name = "phone" value={this.state.phone} onChange={this.handleChangeInput}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticAddress" className="col-sm-2 col-form-label">住所</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticAddress" name="address" value={this.state.address} onChange={this.handleChangeInput}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="staticAvatar" className="col-sm-2 col-form-label">学生の写真</label>
                        <div className="col-sm-10">
                            <input type="file" className="form-control-file" id="staticAvatar" value name="student_img"  onChange={this.handleChangeFiles}/>
                        </div>
                    </div>
                    <input type="button" className="btn btn-primary" onClick={this.handleSubmit} value="送信"/>
                </form>
            </div>
            </div>
        );
    }
}