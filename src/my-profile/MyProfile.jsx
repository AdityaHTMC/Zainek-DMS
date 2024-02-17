import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Grid from '@mui/material/Grid';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import Button from '@mui/material/Button';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import UserPic from '../images/user.jpg';


const MyProfile = () => {
  return (
    // page body part start //
    <div>
      <Grid className='mb10' container>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <h2 className='m0 mb10 iconTitel'><RecentActorsOutlinedIcon /> My Profile</h2>
              <Paper className='customTable' sx={{ width: '100%' }}>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow hover sx={{ 'td,th': { border: 1 } }}>
                        <TableCell><b>Email Id.</b></TableCell>
                        <TableCell>hello@gmail.com</TableCell>
                      </TableRow>
                      <TableRow hover sx={{ 'td,th': { border: 1 } }}>
                        <TableCell sx={{ width: 150 }}><b>Employee Name</b></TableCell>
                        <TableCell>Raju Sharma</TableCell>
                      </TableRow>
                      <TableRow hover sx={{ 'td,th': { border: 1 } }}>
                        <TableCell><b>Sales Employee Code</b></TableCell>
                        <TableCell>#AECLW1234589TX</TableCell>
                      </TableRow>
                      <TableRow hover sx={{ 'td,th': { border: 1 } }}>
                        <TableCell><b>Contact No.</b></TableCell>
                        <TableCell>+91 1234567890</TableCell>
                      </TableRow>
                      <TableRow hover sx={{ 'td,th': { border: 1 } }}>
                        <TableCell><b>Address</b></TableCell>
                        <TableCell>HCJP+499 Adventz Infinity, BN Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091, India</TableCell>
                      </TableRow>
                      <TableRow hover sx={{ 'td,th': { border: 1 } }}>
                        <TableCell><b>City</b></TableCell>
                        <TableCell>Kolkata</TableCell>
                      </TableRow>
                      <TableRow hover sx={{ 'td,th': { border: 1 } }}>
                        <TableCell><b>Photo</b></TableCell>
                        <TableCell><img src={UserPic} width="64" alt="" /></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className='mt20'>
                  <Button color="success" variant="outlined" size="small" startIcon={<DriveFileRenameOutlineOutlinedIcon />}>Edit Profile</Button>
                </div>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    // page body part end //
  )
}
export default MyProfile