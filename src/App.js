import React,{useState} from 'react';
import './App.css';
import {Button,Collapse} from 'reactstrap';
import {BrowserRouter as Router, Route,Switch,NavLink} from 'react-router-dom'

const routes = [
  {
    path:'/',
    main: ()=><h2>main Home</h2>
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
      <div>
        <div>
          <ul>
            <li><NavLink to='/' onClick={toggle}>Home</NavLink>
            <Collapse isOpen={itOpen}>
              <NavLink to='/p1' >Add</NavLink>
            </Collapse>
            </li>
            <li><NavLink to='/about' >About</NavLink></li>
          </ul>
        </div>
        <div>
          <Switch>
            {routes.map((route,index)=>(
              <Route 
                key={index}
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
