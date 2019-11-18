import React from 'react';
import './ClassPage.css';
import StudentList from './StudentList';
import {firebaseApp} from '../../FirebaseConfig.js'


export default class ClassPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            dates: this.getNow(),
            listStudents:  []
        };
        this.itemRef = firebaseApp.database();
    }
    getNow(){
        let omar = new Date();
        let y  = omar.getFullYear().toString();
        let m = (omar.getMonth()+1).toString();
        let d = omar.getDate().toString();
        return y+'-'+m+'-'+d;
      }
    onHandleChange=(e)=>{
        let day=e.target.value.split('-');
        this.setState({dates : e.target.value});
        // this.itemRef.ref(day[0]).child(day[1]).child(day[2]).update(
        //     [
        //         {id_student:181001,active:0},
        //         {id_student:181003,active:1,cause:'電車遅れ'},
        //         {id_student:181002,active:3},
        //     ]
        // );
        this.itemRef.ref(day[0]).child(day[1]).child(day[2]).once('value',(data)=>{
            this.setState({listStudents:data.val()})
        })

    }
    
    render(){
        const {listStudents}=this.state;
        return(
            <div className='container-fluid'>
                <h1>出席確認</h1>
                <hr />
                
                <div className='card mb-3'>
                    <div className='card-header date-field'>
                        <input type='date' onChange={this.onHandleChange} value={this.state.dates} max={this.getNow()} />
                    </div>
                    
                    <StudentList listStudents = {listStudents}/>
                            
                </div>

            </div>
        );
    }
    componentDidMount(){
        let omar = new Date();
        let y  = omar.getFullYear().toString();
        let m = (omar.getMonth()+1).toString();
        let d = omar.getDate().toString();
        this.itemRef.ref(y).child(m).child(d).once('value',(data)=>{
            this.setState({listStudents:data.val()})
        })
    }
}
