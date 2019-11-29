import React,{useState} from 'react';
import './App.css';
import {Button,Collapse} from 'reactstrap';
import {BrowserRouter as Router, Route,Switch,NavLink} from 'react-router-dom';

import AttendancePage from './components/attendanceInformation/AttendancePage';
import StudentDataPage from './components/studentData/StudentDataPage';

const routes = [
  {
    path:'/attendanceInfomation',
    exact:true,
    main: ()=><AttendancePage />
  },
  {
    path:'/studentdata',
    exact:false,
    main: ()=><StudentDataPage />
  },
]

function App() {
  const [itOpen, setItOpen]=useState(false);
  const toggle = ()=>setItOpen(!itOpen);
  return (
    <Router>
      <div id='wrapper'>
          <ul className='navbar-nav'>
            <NavLink className='logo' to='/attendanceInfomation'>Hello Ad</NavLink>
            <li>
              <NavLink className='nav-link' activeClassName='active' to='/attendanceInfomation'>出席確認</NavLink>
            </li>
            <li><NavLink className='nav-link' activeClassName='active' to='/studentdata' >学生のデータ</NavLink></li>
          </ul>
        <div id='content-wrapper'>
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
      </div>
    </Router>
  );
}

export default App;
