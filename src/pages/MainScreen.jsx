import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import './dashboard.css'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon from '@mui/icons-material/Info';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
const MainScreen = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <div>
        <Grid container spacing={2}>
          {/* item start */}
          <Grid item xs={3}>
            <div className='cardName'>
              <div className='cardDetail'>
                <div>
                  <p className='text-title'> Sales Order</p>
                  <p className='sub-text-title'>1,233</p>
                </div>
                <div className='open-booking'>
                  <InfoIcon />
                </div>
              </div>

            </div>
            {/* <Card>
              <CardContent>
                <h2 className='m0'>Open Bookings (9)</h2>
              </CardContent>
            </Card> */}
          </Grid>
          {/* item end */}
          <Grid item xs={3}>
            <div className='cardName'>
              <div className='cardDetail'>
                <div>
                  <p className='text-title'> Secondary Sales</p>
                  <p className='sub-text-title'>1,233</p>
                </div>
                <div className='manageHistory'>
                  <ManageHistoryIcon />
                </div>
              </div>

            </div>
          </Grid>
       
          <Grid item xs={3}>
            <div className='cardName'>
              <div className='cardDetail'>
                <div>
                  <p className='text-title'> Sale Return</p>
                  <p className='sub-text-title'>1,233</p>
                </div>
                <div className='partner-icon'>
                  <GroupsIcon />
                </div>
              </div>

            </div>
          </Grid>
          {/* item end */}

        
        </Grid>
      </div>
      {/************ body area end here ************/}
    </>
  )
}

export default MainScreen