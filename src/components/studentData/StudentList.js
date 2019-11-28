import React from 'react';
import {firebaseApp} from '../../FirebaseConfig';
import StudentItem from './StudentItem';

export default class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            datalist:[],
            elmStudents:[]
        }
        this.database = firebaseApp.database().ref('student-data');

    }
    loadData(){
        let datalist=[];
        this.database.on('child_added',snapshot=>{
            datalist.push(snapshot.val());
        });
        this.setState({datalist});
        try{
            var elmStudents = datalist.map((data,index)=>{
                return <StudentItem key={index} student={data}/>
            });
            this.setState({elmStudents});
        }catch(e){
           

        }
    }
    render() {
        
        return (
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th >学生番号</th>
                            <th >名前</th>
                            <th >クラス</th>
                            <th >出席・遅刻・欠席</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.elmStudents}
                    </tbody>
                </table>
            </div>
        )
    }
    componentWillMount(){
        this.loadData();
    }
}