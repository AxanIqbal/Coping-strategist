import React, { useState } from 'react';
import { TextField } from '@mui/material';

import moment from 'moment';
import SideBar from '../Components/SideBar/SideBar';
import Approved from '../Components/Approved/Approved';

import { useGetAllMerchantsQuery } from '../redux/apis';

function Merchants() {
  const { data } = useGetAllMerchantsQuery();
  const merchants = data?.map((merchant) => ({
    ...merchant,
    createdAt: moment(merchant.createdAt),
  }));

  return (
    <div>
      <SideBar>
        <div className="headingDashboard">
          <h1>Merchants</h1>
          <TextField
            size="small"
            placeholder="Search Merchants"
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
        {/* <div className="merchantsOptions"> */}
        {/*   <button */}
        {/*     onClick={() => setOptionBtn(1)} */}
        {/*     className={optionBtn === 1 ? 'optionsBtn optionsLeftSelected' : 'optionsBtn'} */}
        {/*   > */}
        {/*     Approved ( */}
        {/*     {approvedMerchants.length} */}
        {/*     ) */}
        {/*   </button> */}
        {/*   <button */}
        {/*     onClick={() => setOptionBtn(2)} */}
        {/*     className={optionBtn === 2 ? 'optionsBtn optionsCenterSelected' : 'optionsBtn'} */}
        {/*   > */}
        {/*     Rejected ( */}
        {/*     {rejectedMerchants.length} */}
        {/*     ) */}
        {/*   </button> */}
        {/*   <button */}
        {/*     onClick={() => setOptionBtn(3)} */}
        {/*     className={optionBtn === 3 ? 'optionsBtn optionsRightSelected' : 'optionsBtn'} */}
        {/*   > */}
        {/*     Blocked ( */}
        {/*     {blockedMerchants.length} */}
        {/*     ) */}
        {/*   </button> */}
        {/* </div> */}
        <div style={{
          height: '78vh',
          width: '100%',
        }}
        >
          <Approved rows={merchants ?? []} />
        </div>
      </SideBar>
    </div>
  );
}

export default Merchants;
