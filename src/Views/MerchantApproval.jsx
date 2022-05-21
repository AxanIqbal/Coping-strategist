import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { toast } from 'react-toastify';
import CenterBox from '../Components/Box';

function MerchantApproval() {
  const navigate = useNavigate();
  const location = useLocation();
  const merchantInfo = location.state?.merchantInfo;
  return (
    <div>
      <CenterBox showBack={false} showHeading={false}>
        <h1>{merchantInfo.name}</h1>
        <div className="avatar">
          <Avatar
            sx={{
              width: '6em',
              height: '6em',
            }}
            src={merchantInfo.pictureUrl}
          />
        </div>
        <div className="container">
          <p className="heading">Email</p>
          <input disabled value={merchantInfo.email} className="inputContainer" />
        </div>
        <div className="container">
          <p className="heading">Country</p>
          <input disabled value={merchantInfo.country} className="inputContainer" />
        </div>
        <div className="container">
          <p className="heading">State</p>
          <input disabled value={merchantInfo.state} className="inputContainer" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button
            onClick={() => {
              toast.error('Merchant rejected', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              navigate('/notification');
            }}
            className="rejectBtn"
          >
            Reject
          </button>
          <button
            onClick={() => {
              toast.success('Merchant approved', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              navigate('/merchants');
            }}
            className="rejectBtn approvedBtn"
          >
            Approve
          </button>
        </div>
      </CenterBox>
    </div>
  );
}

export default MerchantApproval;
