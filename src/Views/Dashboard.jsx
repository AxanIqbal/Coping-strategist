import React, { useMemo } from 'react';
import './views.css';
import moment from 'moment';
import { DataGrid } from '@mui/x-data-grid';
import {
  Avatar, FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import SideBar from '../Components/SideBar/SideBar';
import { firestore } from '../utils/firebase/firebase';

function Dashboard() {
  const [time, setTime] = React.useState('Week');
  const [snapshot, loading] = useCollection(collection(firestore, 'users'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const userData = useMemo(
    () => snapshot?.docs.reduce((previousValue, currentValue) => {
      const data = currentValue.data();
      const timeInDays = moment(Date.now()).diff(data.createdAt.seconds * 1000, 'days');
      if (timeInDays <= 7) {
        previousValue.week.push({ ...data, id: currentValue.id });
      }
      if (timeInDays <= 30) {
        previousValue.month.push({ ...data, id: currentValue.id });
      }
      if (timeInDays <= 365) {
        previousValue.year.push({ ...data, id: currentValue.id });
      }
      return previousValue;
    }, {
      week: [],
      month: [],
      year: [],
    }),
    [snapshot],
  );

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
            <Avatar>{params.row.name.charAt(0)}</Avatar>
          </div>
        </div>
      ),
    },
    { field: 'name', headerName: 'Merchant name', width: 270 },
    { field: 'createdAt', headerName: 'Joined On', width: 180 },
    // {
    //   field: 'receipts',
    //   headerName: 'Receipts Generated',
    //   width: 180,
    // },
    // {
    //   field: 'profit',
    //   headerName: 'Profits',
    //   width: 180,
    //   valueGetter: (params) => (
    //     `${params.row.profit}$`
    //   ),
    // },
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
            <h2 className="quantity">{userData?.week?.length || 0}</h2>
            <div className="profit">
              <i className="fa-solid fa-arrow-up" />
              <span>3.48%</span>
            </div>
          </div>
          <div className="customer">
            <i className="fa-solid fa-user-group group" />
            <p className="week">THIS MONTH</p>
            <h2 className="quantity">{userData?.month?.length || 0}</h2>
            <div className="loss">
              <i className="fa-solid fa-arrow-down" />
              <span>3.48%</span>
            </div>
          </div>
          <div className="customer">
            <i className="fa-solid fa-user-group group" />
            <p className="week">THIS YEAR</p>
            <h2 className="quantity">{userData?.year?.length || 0}</h2>
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
          {
          loading ? <div>loading</div>
            : (
              <DataGrid
                getRowId={(row) => row.id}
                rows={userData ? time === 'Week' ? userData.week : time === 'Month' ? userData.month : userData.year : []}
                columns={columns}
                pageSize={6}
                // rowsPerPageOptions={5}
              />

            )
        }
        </div>
      </SideBar>
    </div>
  );
}

export default Dashboard;
