import React from 'react'
import DashMenu from './dashmenu/DashMenu';
import styled ,{css} from 'styled-components/macro'
import './SideBar.css'
import {Link} from 'react-router-dom';
import Chat from './images/icons/ComponentChat.svg';
import Docs from './images/icons/Docs.svg';
import Vector from './images/icons/Vector.svg';

const SideBar = ({showMenu,setShowMenu}) => {
    const menuNoShows = {width :'55px',transition:'all 650ms ease-out'};
    const menuShown = {width :'357px',transition:'all 650ms ease-out'};
    return (
        <div style={showMenu ? menuShown : menuNoShows} className="main--side--container">
            <div className="main--side-wrapper">
                <DashMenu cName = {showMenu ? 'main-container active' :'main-container'} />

                <Link className="icon--link menu-icon" onClick={() => setShowMenu(!showMenu)} to="#">
                    <img src={Vector} />
                </Link>
                <div className="bottom--icons">
                <Link className="icon--link"  to="#">
                    <img src={Docs} />
                </Link>
                
                <Link className="icon--link" to="#" >
                    <img className="icon--chat" src={Chat}/>
                </Link>
                </div>


            </div>
            
        </div>
    )
}

export default SideBar
