import React from 'react';
import StudentItem from './StudentItem';

export default class StudentList extends React.Component{
    render(){
        const {listStudents}=this.props;
        var elmStudents = listStudents.map((data,index)=>{
            return <StudentItem key={index} student={data}/>
        })
        console.log(listStudents);
        return(
            <div className='card-body'>
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
                    {/* <tr>
                    <th>181001</th>
                    <td>ABCD DDDD</td>
                    <td>2年</td>
                    <td>遅刻・電車遅れ</td>
                    </tr> */}
                        {elmStudents}
                    </tbody>
                </table>
            </div>
        );
    }
}