import React from 'react';
import AttendanceItem from './AttendanceItem';
import NullItem from './NullItem';

export default class AttendanceList extends React.Component{
    render(){
        const {listStudents}=this.props;
        try{
            var elmStudents = listStudents.map((data,index)=>{
            return <AttendanceItem key={index} student={data}/>
        })
        }catch(e){
            var elmStudents = <NullItem />

        }
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