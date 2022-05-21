import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { isNull } from 'lodash';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container } from '@mui/material';
import Login from './Views/Login';
import { auth } from './utils/firebase/firebase';
import Dashboard from './Views/Dashboard';
import ChangePassword from './Views/ChangePassword';
import ChangePasswordRequest from './Views/ChangePasswordRequest';
import Settings from './Views/Settings';
import EditProfile from './Views/EditProfile';
import Merchants from './Views/Merchants';
import MerchantApproval from './Views/MerchantApproval';
import Notifications from './Views/Notifications';

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (isNull(user)) {
    return <Navigate to="/login" />;
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
          <Route path="merchant-approval" element={<PrivateRoute><MerchantApproval /></PrivateRoute>} />
          <Route path="notification" element={<PrivateRoute><Notifications /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          {/* <Route path="customers" element={<PrivateRoute><Customers/></PrivateRoute>}/> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
