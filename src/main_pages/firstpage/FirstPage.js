import {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import fetch from 'unfetch';

import { Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Login from '../loginpage/Login';
import { URL_BACK } from '../../GlobalValues';

function FirstPage({setIsLoggedIn}) {

    const [user, setUser] = useState(null)

    const checkLogin = async (token, refresh) => {
      if (token) {
      try {
        const res = await fetch(`${URL_BACK}authentication/api/checklogin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
                    'Authorization' : 'Bearer '+ token }, 
          credentials: 'include'  
        });
        const statusResponse = await res.status;
        const jsonResponse = await res.json()
        console.log( 'status respnose is '+ statusResponse);
        if (statusResponse == 200 &&  refresh ) {
          const userTobeSet = jsonResponse;
          userTobeSet.accessToken = token
          userTobeSet.refreshToken = refresh;
          setUser(userTobeSet)
          setIsLoggedIn(true)
        }
        
      } catch (error) {
        console.log(error)
        
      }
    }
    }
    useEffect(() => {
      const token = Cookies.get('AccessT');
      const refreshToken = Cookies.get('AccessRefreshT');
      checkLogin(token,refreshToken);
  
    }, [])
  
  return (
    <div className="App">
     {
      user ? <Dashboard 
          user={user}
          setUser = {setUser}
          setIsLoggedIn={setIsLoggedIn}
      /> : <Login 
            setUser = {setUser}
            setIsLoggedIn={setIsLoggedIn}
      />
    } 
  </div> 
   
  );
}

export default FirstPage;

