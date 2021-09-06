import {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import fetch from 'unfetch';
import './App.css';
import Dashboard from './main_pages/dashboard/Dashboard';
import Login from './main_pages/loginpage/Login';
import { URL_BACK } from './GlobalValues';
import Register from './main_pages/registerpage/Register';
import { Redirect, Route, Switch } from 'react-router-dom';
import FirstPage from './main_pages/firstpage/FirstPage';
import ProfileSetUp from './main_pages/profile/ProfileSetUp';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="App">
     
    <Switch>

      
    <Route path="/" render={(props) =>  <FirstPage {...props} setIsLoggedIn={setIsLoggedIn} />} exact={isLoggedIn ? false : true} />
    <Route path="/app/register" component={Register}  /> 
    <Route path="/app/profile" render={(props) => <ProfileSetUp {...props} />} />
      
      
    </Switch>
    
  </div> 
   
  );
}

export default App;

/**
 *  {isLoggedIn == false ? <Route path="/app/register" component={Register}  strict/>  : null }
      

 */