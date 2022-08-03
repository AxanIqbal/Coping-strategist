import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { isNull } from 'lodash';
import { Container } from '@mui/material';
import Login from './Views/Login';

import Dashboard from './Views/Dashboard';
import ChangePassword from './Views/ChangePassword';
import ChangePasswordRequest from './Views/ChangePasswordRequest';
import Settings from './Views/Settings';
import EditProfile from './Views/EditProfile';
import Merchants from './Views/Merchants';
import MerchantApproval from './Views/MerchantApproval';
import Notifications from './Views/Notifications';
import { logout, Roles, selectUser } from './redux/slicers/userSlicer';
import Doctors from './Views/Doctors';

function PrivateRoute({ children }) {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  if (isNull(user)) {
    return <Navigate to="/login" />;
  }

  if (user.role !== Roles.Admin) {
    dispatch(logout());
    return <Container>Not Allowed...</Container>;
  }

  return children;
}

function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="forget-password" element={<ChangePasswordRequest />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
          <Route path="edit-profile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
          <Route path="merchants" element={<PrivateRoute><Merchants /></PrivateRoute>} />
          <Route path="doctors" element={<PrivateRoute><Doctors /></PrivateRoute>} />
          <Route
            path="merchant-approval"
            element={<PrivateRoute><MerchantApproval /></PrivateRoute>}
          />
          <Route path="notification" element={<PrivateRoute><Notifications /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          {/* <Route path="customers" element={<PrivateRoute><Customers/></PrivateRoute>}/> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
