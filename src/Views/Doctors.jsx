import React, { useState } from 'react';
import {
  Avatar, Menu, MenuItem, TextField,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { toast } from 'react-toastify';
import SideBar from '../Components/SideBar/SideBar';
import {
  useGetAllDoctorQuery,
  useGetAllUnverifiedDoctorQuery,
  useVerifyDoctorMutation,
} from '../redux/apis';

function Doctors() {
  const { data: verified } = useGetAllDoctorQuery();
  const { data: unverified } = useGetAllUnverifiedDoctorQuery();
  const [Verify] = useVerifyDoctorMutation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [optionBtn, setOptionBtn] = useState(1);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    Verify({ id }).unwrap().then(() => {
      toast.success('Doctor Approved', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, () => {
      toast.error('Error', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });

    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const columns = [
    {
      field: 'user.profileUrl',
      headerName: 'Profile',
      renderCell: (params) => (
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <div className="invoiceIcon">
            <Avatar src={params.row.user.profileUrl} />
          </div>
        </div>
      ),
    },
    {
      field: 'user.username',
      headerName: 'Username',
      renderCell: (params) => (
        <p>{params.row.user.username}</p>
      ),
    },
    {
      field: 'user.email',
      headerName: 'Email',
      renderCell: (params) => (
        <p>{params.row.user.email}</p>
      ),
    },
    {
      field: 'profession',
      headerName: 'Profession',
    },
    {
      field: 'licence.number',
      headerName: 'Licence Number',
      renderCell: (params) => (
        <p>{params.row.licence.number}</p>
      ),
    },
    {
      field: 'licence.state',
      headerName: 'Licence State',
      renderCell: (params) => (
        <p>{params.row.licence.state}</p>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <>
          <button
            onClick={handleClick}
            className="actions"
          >
            <i className="fa-solid fa-ellipsis-vertical" />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            elevation={1}
            className="menuInventory"
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {!params.row.is_verified && <MenuItem onClick={() => handleClose(params.row.id)}>Approve Licence</MenuItem>}
            <MenuItem onClick={() => {}}>Block Doctor</MenuItem>
          </Menu>
        </>
      ),
    },
  ];

  return (
    <SideBar>
      <div className="headingDashboard">
        <h1>Doctors</h1>
        <TextField
          size="small"
          placeholder="Search Doctors"
          id="outlined-start-adornment"
          sx={{
            m: 1,
            width: '25ch',
            borderRadius: '6px',
          }}
          InputProps={{
            startAdornment: <i
              style={{ marginRight: '10px' }}
              className="fas fa-magnifying-glass"
            />,
          }}
        />
      </div>
      <div className="merchantsOptions">
        <button
          onClick={() => setOptionBtn(1)}
          className={optionBtn === 1 ? 'optionsBtn optionsLeftSelected' : 'optionsBtn'}
        >
          Verified
        </button>
        <button
          onClick={() => setOptionBtn(2)}
          className={optionBtn === 2 ? 'optionsBtn optionsCenterSelected' : 'optionsBtn'}
        >
          Unverified
        </button>
      </div>
      <div style={{
        height: '78vh',
        width: '100%',
      }}
      >

        <DataGrid
          getRowId={(row) => row.id}
          rows={optionBtn === 1 ? verified ?? [] : unverified ?? []}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5]}
        />

      </div>
    </SideBar>
  );
}

export default Doctors;
