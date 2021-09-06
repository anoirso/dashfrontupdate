import React ,{useState}from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { List, Work, CropLandscape } from "@material-ui/icons";
import { Dashboard as Dash } from "@material-ui/icons";

import "./DashMenu.css";

const AvatarIcon = styled(Link)`
  flex: 1;
  width: 100%;
  -webkit-box-shadow: 9px 6px 17px 4px rgba(74, 74, 74, 0.33);
  box-shadow: 9px 6px 17px 4px rgba(74, 74, 74, 0.33);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #edbc00;
  border-radius: 2px;
  h4 {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }
  &:hover {
    transform: scale(1.08);
    transition: all 300ms ease-out;
  }
`;

const setBackground = (path) => {
  const location = window.location.href;
  const lastLocationSection = location.split("/");
  if (lastLocationSection[lastLocationSection.length - 1] == path)
    return true;
  else return false;
};

const DashMenu = ({ cName }) => {
  const profileName = "Anouar";
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className={cName}>
      <div className="user--profile--box">
        <AvatarIcon>
          <h4>{profileName.substring(0, 2).toUpperCase()}</h4>
        </AvatarIcon>
        <div className="status--container">
          <p>Anouar Belila contract</p>
          <p>
            Status :<span className="status--word"> Active</span>
          </p>
        </div>
      </div>

      <div className="menu--container">
        <div className="menu--container--wrapper">
          <div className="menu--section">
            <div className="item--header">
              <Dash className="icon" />
              <h4>Quick Menu</h4>
            </div>
            <Link  className={setBackground('collect') || (currentPage == 1)? 'link--item active' : 'link--item'} onClick={() => setCurrentPage(1)}  to="/collect" >
              Collect
            </Link>
            <Link className={setBackground('measure') || (currentPage == 2) ? 'link--item active' : 'link--item'} onClick={() => setCurrentPage(2)} to="/dash/measure"  >
              Measure
            </Link>
            <Link  className={setBackground('manage_reduction') || (currentPage == 3) ? 'link--item active' : 'link--item'} onClick={() => setCurrentPage(3)} to="/manage_reduction">
              Manage reduction plan
            </Link>
            <Link  className={setBackground('trading') || (currentPage == 4) ? 'link--item active' : 'link--item'} onClick={() => setCurrentPage(4)}  to="/trading">
              Trading
            </Link>
            <Link  className={setBackground('offset') || (currentPage == 5) ? 'link--item active' : 'link--item'} onClick={() => setCurrentPage(5)}  to="/offset">
              Offset
            </Link>
          </div>

          <div className="menu--section">
            <div className="item--header">
              <List className="icon"/>
              <h4>Organize</h4>
            </div>
            <Link className={setBackground('user_admin') || (currentPage == 6) ? 'link--item active' : 'link--item'} onClick={() => setCurrentPage(6)} to="/user_admin">
              User admin
            </Link>
            <Link className={setBackground('flows') || (currentPage == 7) ? 'link--item active' : 'link--item'} onClick={() => setCurrentPage(7)} to="/flows">
              Flows
            </Link>
            <Link className={setBackground('workspaces') || (currentPage == 8) ? 'link--item active' : 'link--item'} onClick={() => setCurrentPage(8)} to="/workspaces">
              Worksapces
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMenu;
