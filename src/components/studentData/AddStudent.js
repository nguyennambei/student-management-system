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
    }
    handleChangeFiles(e){
        
    }
    handleSubmit(e){

    }

    render(){
        return(
            <div>
            <h3>学生情報を追加</h3>
            <div className="container">
                <form>
                    <div class="progress mb-3">
                        <div class="progress-bar" role="progressbar" style={{width : this.state.progress}} aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100">{this.state.progress}</div>
                    </div>                        
                    <div className="form-group row">
                        <label for="staticName" className="col-sm-2 col-form-label">名前</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticName" name="student_name" value={this.state.student_name} onChange={this.handleChangeInput}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="staticNameJP" className="col-sm-2 col-form-label">フリガナ</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticNameJP" name="furi_name" value={this.state.furi_name} onChange={this.handleChangeInput}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label className="col-sm-3 col-form-label">性別</label>
                        <div className="form-check form-check-inline col-sm-1">
                            <input className="form-check-input" type="radio" name="gender" value="true" onChange={this.handleChangeInput}/>
                            <label className="form-check-label" >男</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-1">
                            <input className="form-check-input" type="radio" name="gender" value="false" onChange={this.handleChangeInput}/>
                            <label className="form-check-label" >女</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="staticCountry" className="col-sm-2 col-form-label">国籍</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" id="staticCountry" name="country" value={this.state.country} onChange={this.handleChangeInput}/>
                        </div>
                        <label for="staticCountry" className="col-sm-1 offset-1  col-form-label">誕生日</label>
                        <div className="col-sm-1">
                            <input type="text" className="form-control" id="staticCountry" name="year" value={this.state.year} onChange={this.handleChangeInput}/>
                        </div>
                        <label for="staticCountry" className="col-sm-1 col-form-label">年</label>
                        <div className="col-sm-1">
                            <input type="text" className="form-control" id="staticCountry" name="month" value={this.state.month} onChange={this.handleChangeInput}/>
                        </div>
                        <label for="staticCountry" className="col-sm-1 col-form-label">月</label>
                        <div className="col-sm-1">
                            <input type="text" className="form-control" id="staticCountry" name="day" value={this.state.day} onChange={this.handleChangeInput}/>
                        </div>
                        <label for="staticCountry" className="col-sm-1 col-form-label">日</label>
                    </div>
                    <div className="form-group row">
                        <label for="staticPhone" className="col-sm-2 col-form-label">学生番号</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="staticPhone" name="student_number" value={this.state.student_number} onChange={this.handleChangeInput}/>
                        </div>
                        <label for="staticPhone" className="col-sm-1 offset-1 col-form-label">電話番号</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="staticPhone" name = "phone" value={this.state.phone} onChange={this.handleChangeInput}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="staticAddress" className="col-sm-2 col-form-label">住所</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticAddress" name="address" value={this.state.address} onChange={this.handleChangeInput}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="staticAvatar" className="col-sm-2 col-form-label">学生の写真</label>
                        <div className="col-sm-10">
                            <input type="file" className="form-control-file" id="staticAvatar" name="student_img"  onChange={this.handleChangeFiles}/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>送信</button>
                </form>
            </div>
            </div>
        );
    }
}