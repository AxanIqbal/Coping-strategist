import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';

function Approved(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { rows } = props;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    toast.success('Merchant Blocked', {
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
    { field: 'merchantName', headerName: 'Merchant name', width: 180 },
    { field: 'joinedOn', headerName: 'Joined On', width: 120 },
    {
      field: 'totalSold',
      headerName: 'Total Sold',
      width: 120,
    },
    {
      field: 'profit',
      headerName: 'Profit made (all-time)',
      width: 180,
      valueGetter: (params) => (
        `${params.row.profit}$`
      ),
    },
    {
      field: 'totalItems',
      headerName: 'Total Items',
      width: 120,
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
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Block Merchant</MenuItem>
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

export default Approved;
