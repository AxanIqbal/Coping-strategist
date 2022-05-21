import React, { useState } from 'react';
import { Avatar, Badge } from '@mui/material';
import CenterBox from '../Components/Box';

function EditProfile() {
  const [name, setName] = useState('Ahsan Iqbal');
  return (
    <div>
      <CenterBox showBack={false} showHeading heading="Edit Profile">
        <div className="avatar">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={(
              <button className="profilePicIcon">
                <i className="fa-solid fa-camera" />
                .
              </button>
            )}
          >
            <Avatar
              sx={{
                width: '6em',
                height: '6em',
              }}
              src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
          </Badge>
        </div>
        <div className="container">
          <p className="heading">Name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} className="inputContainer" />
        </div>
        <button className="signinButton" style={{ marginTop: '25px' }}>
          Save Changes
        </button>
      </CenterBox>
    </div>
  );
}

export default EditProfile;
