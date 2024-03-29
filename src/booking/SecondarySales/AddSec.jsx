import React from 'react'
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const AddSec = () => {
  return (
    <>
    {/*********** body area start here ************/ }
    <Card>
    <CardContent>
      <h3 className="mt0 mb20" style={{ color: "#00c2c1" }}>Add Secoundary Sales</h3>
      {/*form box 1 start*/}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField className='width100 mb15' size="small" label="Sales Employee Code" />
        </Grid>
        <Grid item xs={4}>
          <TextField className='width100 mb15' size="small" label="Dealer Code" />
        </Grid>
        <Grid item xs={4}>
        <TextField className='width100 mb15' size="small" label="Document Date" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField className='width100 mb15' size="small" label="Customer Name" />
        </Grid>
        <Grid item xs={4}>
          <TextField className='width100 mb15' size="small" label="Document Number" />
        </Grid>
      </Grid>
      {/*form box 1 end*/}

      {/* form box 2 start here */}
      <div>
        <Paper className="customTable mt20" sx={{ width: "100%" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky">
              <TableHead>
                <TableRow>
                  <TableCell width={90}>Item Code</TableCell>
                  <TableCell>Item Description</TableCell>
                  <TableCell width={90}>Quantity</TableCell>
                  <TableCell width={150}>Amount</TableCell>
                  <TableCell width={50}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><Button color="success" variant="contained"><AddCircleOutlineIcon /></Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><Button color="error" variant="contained"><HighlightOffIcon /></Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><Button color="error" variant="contained"><HighlightOffIcon /></Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><Button color="error" variant="contained"><HighlightOffIcon /></Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell><Button color="error" variant="contained"><HighlightOffIcon /></Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell><b>Total Amount</b></TableCell>
                  <TableCell><TextField className='width100' size="small" label="" /></TableCell>
                  <TableCell>&nbsp;</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      {/* form box 2 end here */}
    </CardContent>
  </Card>
  {/************ body area end here ************/ }
  </>
  )
}

export default AddSec