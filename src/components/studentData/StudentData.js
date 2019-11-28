import React from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import AddStudent from './AddStudent';
import StudentList from './StudentList';

const routes = [
    {
      path:'/studentdata',
      exact:true,
      main: ()=><StudentList />
    },
    {
      path:'/studentdata-addstudent',
      main: ()=><AddStudent />
    },
  ]

export default class StudentData extends React.Component{
    render(){
        return(
            <Router>
                <div className='container-fluid'>
                    <h1>学生のデータ</h1>
                    <NavLink to='/studentdata' className='btn btn-light' activeClassName='active'>学生をデータ</NavLink>
                    <NavLink to='/studentdata-addstudent' className='btn btn-info ml-3' activeClassName='active'>学生を追加</NavLink>
                    
                    <hr />
                    <Switch>
                        {routes.map((route,index)=>(
                            <Route 
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>

                </div>
            </Router>
        );
    }
}