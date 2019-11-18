import React,{useState} from 'react';
import './App.css';
import {Button,Collapse} from 'reactstrap';
import {BrowserRouter as Router, Route,Switch,NavLink} from 'react-router-dom';

import ClassPage from './components/attendanceInformation/ClassPage';

const routes = [
  {
    path:'/home',
    exact:true,
    main: ()=><ClassPage />
  },
  {
    path:'/about',
    main: ()=><h2>main Abput</h2>
  },
]

function App() {
  const [itOpen, setItOpen]=useState(false);
  const toggle = ()=>setItOpen(!itOpen);
  return (
    <Router>
      <div id='wrapper'>
          <ul className='navbar-nav'>
            <NavLink className='logo' to='/home'>Hello Ad</NavLink>
            <li>
              <NavLink className='nav-link' activeClassName='active' to='/home'>Home</NavLink>
            </li>
            <li><NavLink className='nav-link' activeClassName='active' to='/about' >About</NavLink></li>
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
