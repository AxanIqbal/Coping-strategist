import React from 'react';
import { Avatar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function Rejected(props) {
  const { rows } = props;
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
    { field: 'merchantName', headerName: 'Merchant name', width: 500 },
    { field: 'requestedOn', headerName: 'Requested On', width: 350 },
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

export default Rejected;
