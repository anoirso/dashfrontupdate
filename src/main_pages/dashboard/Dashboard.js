import React, { useState } from "react";
import MainContentContainer from "../../components/main_content_container/MainContentContainer";
import Modal from "../../components/modal/Modal";
import SideBar from "../../components/sidebar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import Cookies from 'js-cookie';
import "./Dashboard.css";
import { URL_BACK, URL_FRONT } from "../../GlobalValues";

const Dashboard = ({ user, setUser, setIsLoggedIn }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const logout = async () => {
    console.log('Clicked');
    try {
      const body = {token : user.refreshToken}
      const requested = await fetch(`${URL_BACK}sign/api/logout`,{
       method : 'POST',
       headers: { 'Content-Type': 'application/json',
       'Authorization' : 'Bearer '+ user.accessToken },
       body : JSON.stringify(body)
     })
     const responseStatus = await requested.status;
     if (responseStatus == 200) {
       setUser(null)
       setIsLoggedIn(false)
       Cookies.remove('AccessT')
       Cookies.remove('AccessRefreshT');
       setShowModal(false)
       const currentHead = window.location.href;
       const parts = currentHead.split('/');
       window.location.href = parts[0] + '//' + parts[2];
     }
      
    } catch (error) {
      
    }
  }

 
  return (
    <div className="dash--container">
      <Modal  
        showModal={showModal}
        setShowModal={setShowModal}
        logout = {logout}
      />  
      <Topbar user={user} 
              setShowModal ={setShowModal} 
              setUser={setUser}  
      />

      <div className="main--container">
        <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
        <MainContentContainer showMenu={showMenu} />
      </div>
    </div>
  );
};

export default Dashboard;
