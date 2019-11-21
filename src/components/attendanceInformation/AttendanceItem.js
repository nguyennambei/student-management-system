import React from 'react';

export default class AttendanceItem extends React.Component{
    checkAttendance=(active,cause)=>{
        if(active){
            return <td>{active}</td>
        }
    }
    render(){
        const {student}=this.props
        return(
            <tr>
                <th>{student.id_student}</th>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.active?'出席':'遅刻'}・{student.cause}</td>
                
            </tr>
        );
    }
}