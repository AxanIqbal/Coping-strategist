import React from 'react';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { toast } from 'react-toastify';

function BlockedCustomer(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { rows } = props;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    toast.success('Customer Unblocked', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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
    { field: 'merchantName', headerName: 'Customer name', width: 280 },
    { field: 'joinedOn', headerName: 'Joined On', width: 220 },
    {
      field: 'totalSold',
      headerName: 'Total Receipts',
      width: 220,
    },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 120,
      renderCell: () => (
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
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Unblock Customer</MenuItem>
          </Menu>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: '70vh', width: '100%', marginTop: '30px' }}>
      <DataGrid
        getRowId={(row) => row.id}
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default BlockedCustomer;
