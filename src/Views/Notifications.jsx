import React from 'react';
import './views.css';
import { Avatar } from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';
import SideBar from '../Components/SideBar/SideBar';

const data = [
  {
    name: 'Hussain',
    email: 'hussain@gmail.com',
    pictureUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    country: 'Pakistan',
    state: 'Sindh',
  },
  {
    name: 'Hussain',
    email: 'hussain12@gmail.com',
    pictureUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    country: 'Pakistan',
    state: 'Sindh',
  },
  {
    name: 'Hussain',
    email: 'hussain53@gmail.com',
    pictureUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    country: 'Pakistan',
    state: 'Sindh',
  },
  {
    name: 'Hussain',
    email: 'hussain52@gmail.com',
    pictureUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    country: 'Pakistan',
    state: 'Sindh',
  },
];

function Notifications() {
  return (
    <SideBar>
      <div className="headingDashboard">
        <h1>Notifications</h1>
      </div>
      <div>
        {data.map((value) => (
          <Link to="/merchant-approval" state={{ merchantInfo: value }} className="nameContainer notificationContainer">
            <div className="messageContainer">
              <Avatar
                sx={{
                  marginRight: '20px',
                }}
                src={value.pictureUrl}
              />
              <p>
                {value.name}
                {' '}
                just signed up for a merchant’s account. Approve or reject their account.
              </p>
            </div>
            <div className="dateContainer">
              <p>{moment().format('d/mm/yyyy')}</p>
              <p>{moment().format('hh:mm A')}</p>
            </div>
          </Link>
        ))}
      </div>
    </SideBar>
  );
}

export default Notifications;
