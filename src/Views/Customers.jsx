import React, { useState } from 'react';
import { TextField } from '@mui/material';
import moment from 'moment';
import SideBar from '../Components/SideBar/SideBar';
import AllCustomer from '../Components/AllCustomers/AllCustomer';
import BlockedCustomer from '../Components/BlockedCustomer/BlockedCustomer';

const approvedMerchants = [
  {
    id: 1,
    merchantName: 'Snow Jon',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
  {
    id: 2,
    merchantName: 'Lannister Cersei',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
  {
    id: 3,
    merchantName: 'Lannister Jaime',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
  {
    id: 4,
    merchantName: 'Stark Arya',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
  {
    id: 5,
    merchantName: 'Targaryen Daenerys',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
  {
    id: 6,
    merchantName: 'Melisandre',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
  {
    id: 7,
    merchantName: 'Clifford Ferrara',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
  {
    id: 8,
    merchantName: 'Frances Rossini',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
  {
    id: 9,
    merchantName: 'Roxie Harvey',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
];
const rejectedMerchants = [
  { id: 1, merchantName: 'Snow Jon', requestedOn: moment().format('d/mm/yyyy') },
  { id: 2, merchantName: 'Lannister Cersei', requestedOn: moment().format('d/mm/yyyy') },
  { id: 3, merchantName: 'Lannister Jaime', requestedOn: moment().format('d/mm/yyyy') },
  { id: 4, merchantName: 'Stark Arya', requestedOn: moment().format('d/mm/yyyy') },
  { id: 5, merchantName: 'Targaryen Daenerys', requestedOn: moment().format('d/mm/yyyy') },
];
const blockedMerchants = [
  {
    id: 1,
    merchantName: 'Snow Jon',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
  {
    id: 2,
    merchantName: 'Lannister Cersei',
    joinedOn: moment().format('d/mm/yyyy'),
    totalSold: 255,
    profit: 500,
    totalItems: 700,
  },
];

function Customers() {
  const [optionBtn, setOptionBtn] = useState(1);
  return (
    <div>
      <SideBar>
        <div className="headingDashboard">
          <h1>Merchants</h1>
          <TextField
            size="small"
            placeholder="Search Merchants"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch', borderRadius: '6px' }}
            InputProps={{
              startAdornment: <i style={{ marginRight: '10px' }} className="fas fa-magnifying-glass" />,
            }}
          />
        </div>
        <div className="merchantsOptions">
          <button
            onClick={() => setOptionBtn(1)}
            className={optionBtn === 1 ? 'optionsBtn optionsLeftSelected' : 'optionsBtn'}
          >
            All Customers
            (
            {approvedMerchants.length}
            )
          </button>
          <button
            onClick={() => setOptionBtn(2)}
            className={optionBtn === 2 ? 'optionsBtn optionsRightSelected' : 'optionsBtn'}
          >
            Blocked
            (
            {rejectedMerchants.length}
            )
          </button>
        </div>
        <div style={{ height: '78vh', width: '100%' }}>
          {optionBtn === 1 ? (
            <AllCustomer rows={approvedMerchants} />
          ) : (<BlockedCustomer rows={blockedMerchants} />)}
        </div>
      </SideBar>
    </div>
  );
}

export default Customers;
