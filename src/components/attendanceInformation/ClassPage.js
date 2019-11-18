import React from 'react';
import './ClassPage.css';
import StudentList from './StudentList';


export default class ClassPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dates: this.getNow(),
            listStudents:  [
                {
                    id_student : '181001',
                    name : 'ABCD DDDD',
                    class: '2',
                    active : true,
                    cause : 0
                },
                {
                    id_student : '181002',
                    name : 'ABCD SSSS',
                    class: '2',
                    active : false,
                    cause : 3
                },
                {
                    id_student : '181003',
                    name : 'VVD AAAA',
                    class: '2',
                    active : true,
                    cause : 0
                },
            ]
        };
        
    }
    getNow(){
        let omar = new Date();
        let y  = omar.getFullYear().toString();
        let m = omar.getMonth().toString();
        let d = omar.getDate().toString();
        return y+'-'+m+'-'+d;
      }
    onHandleChange=(e)=>{
        let day=e.target.value.split('-');
        this.setState({dates : e.target.value});
    }
    
    render(){
        const {listStudents}=this.state;
        return(
            <div className='container-fluid'>
                <h1>出席確認</h1>
                <hr />
                
                <div className='card mb-3'>
                    <div className='card-header date-field'>
                        <input type='date' onChange={this.onHandleChange} value={this.state.dates}/>
                    </div>
                    
                    <StudentList listStudents = {listStudents}/>
                            
                </div>

            </div>
        );
    }
}
