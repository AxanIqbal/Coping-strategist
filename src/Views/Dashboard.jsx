import React from 'react';
import './views.css';
import moment from 'moment';
import { DataGrid } from '@mui/x-data-grid';
import {
  Avatar, FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import SideBar from '../Components/SideBar/SideBar';

const Yearly = [
  {
    id: 1, merchantName: 'Snow Jon', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 2, merchantName: 'Lannister Cersei', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 3, merchantName: 'Lannister Jaime', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 4, merchantName: 'Stark Arya', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 5, merchantName: 'Targaryen Daenerys', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 6, merchantName: 'Melisandre', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 7, merchantName: 'Clifford Ferrara', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 8, merchantName: 'Frances Rossini', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 9, merchantName: 'Roxie Harvey', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
];
const Monthly = [
  {
    id: 1, merchantName: 'Snow Jon', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 2, merchantName: 'Lannister Cersei', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 3, merchantName: 'Lannister Jaime', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 4, merchantName: 'Stark Arya', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 5, merchantName: 'Targaryen Daenerys', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
];
const Weekly = [
  {
    id: 1, merchantName: 'Snow Jon', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 2, merchantName: 'Lannister Cersei', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
  {
    id: 3, merchantName: 'Lannister Jaime', joinedOn: moment().format('d/mm/yyyy'), receipts: 255, profit: 500,
  },
];

function Dashboard() {
  const [time, setTime] = React.useState('Week');

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const columns = [
    {
      field: 'id',
      headerName: '',
      renderCell: (params) => (
        <div style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <div className="invoiceIcon">
            <Avatar>{params.row.merchantName.charAt(0)}</Avatar>
          </div>
        </div>
      ),
    },
    { field: 'merchantName', headerName: 'Merchant name', width: 270 },
    { field: 'joinedOn', headerName: 'Joined On', width: 180 },
    {
      field: 'receipts',
      headerName: 'Receipts Generated',
      width: 180,
    },
    {
      field: 'profit',
      headerName: 'Profits',
      width: 180,
      valueGetter: (params) => (
        `${params.row.profit}$`
      ),
    },
  ];
  return (
    <div>
      <SideBar>
        <div className="headingDashboard">
          <h1>Dashboard</h1>
        </div>
        <h3>Customers</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="customer">
            <i className="fa-solid fa-user-group group" />
            <p className="week">THIS WEEK</p>
            <h2 className="quantity">23</h2>
            <div className="profit">
              <i className="fa-solid fa-arrow-up" />
              <span>3.48%</span>
            </div>
          </div>
          <div className="customer">
            <i className="fa-solid fa-user-group group" />
            <p className="week">THIS WEEK</p>
            <h2 className="quantity">23</h2>
            <div className="loss">
              <i className="fa-solid fa-arrow-down" />
              <span>3.48%</span>
            </div>
          </div>
          <div className="customer">
            <i className="fa-solid fa-user-group group" />
            <p className="week">THIS WEEK</p>
            <h2 className="quantity">23</h2>
            <div className="profit">
              <i className="fa-solid fa-arrow-up" />
              <span>3.48%</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <h3>Merchant&apos;s Overview</h3>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Graph</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={time}
              label="Graph"
              className="select"
              onChange={handleChange}
            >
              <MenuItem value="Week">Weekly</MenuItem>
              <MenuItem value="Month">Monthly</MenuItem>
              <MenuItem value="Year">Yearly</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ height: '70vh', width: '100%', marginTop: '30px' }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={time === 'Week' ? Weekly : time === 'Month' ? Monthly : Yearly}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
          />
        </div>
      </SideBar>
    </div>
  );
}

export default Dashboard;
