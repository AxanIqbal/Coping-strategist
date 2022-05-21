import React from 'react';
import './SideBar.css';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase/firebase';
import NameSvg from '../../Assets/name.svg';

function SideBar(props) {
  const dashboard = useMatch('/');
  const Merchants = useMatch('/merchants');
  const Notification = useMatch('/notification');
  const Settings = useMatch('/settings');
  const { children } = props;
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
      <div className="container1">
        <div className="barContainer1">
          <img src={NameSvg} alt="logo" />
        </div>
        <div className="barContainer2">
          <div className="innerContainer">
            <Link className={dashboard ? 'optionSelected' : 'optionUnselected'} to="/">
              <p>Dashboard</p>
            </Link>
            <Link className={Merchants ? 'optionSelected' : 'optionUnselected'} to="/merchants">
              <p>Merchants</p>
            </Link>
            <Link className={Notification ? 'optionSelected' : 'optionUnselected'} to="/notification">
              <p>Notification</p>
            </Link>
            <Link className={Settings ? 'optionSelected' : 'optionUnselected'} to="/settings">
              <p>Settings</p>
            </Link>
          </div>
        </div>
        <div className="barContainer3">
          <button
            onClick={async () => {
              await signOut(auth);
              navigate('/login');
            }}
            className="SignOutBtn"
          >
            <i style={{ fontSize: '15px' }} className="fa-solid fa-arrow-right-from-bracket" />
            Sign out
          </button>
        </div>
      </div>
      <div className="container2">
        {children}
      </div>
    </div>
  );
}

export default SideBar;
