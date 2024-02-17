import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";

const SalesReport = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          {/* header part work start */}
          <h2 className="m0" style={{color:"#00c2c1"}}>Sales Report</h2>
          <hr />
          {/* header part work end */}

          {/* Filter part start */}
          <h4 className="mt15 mb15">Report Selection Criteria</h4>
          <Grid className="mb20" container spacing={4}>
            <Grid item xs={3}>
              <TextField className='width100' size="small" label="From Date" />
            </Grid>
            <Grid item xs={3}>
              <TextField className='width100' size="small" label="To Date" />
            </Grid>
            <Grid item xs={3}>
              <TextField className='width100' size="small" label="Dealer Name" />
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained"><SearchIcon /></Button>
            </Grid>
          </Grid>
          {/* Filter part end */}

          {/* table work start here */}
          <Paper className="customTable">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow >
                    <TableCell>Dealer Name</TableCell>
                    <TableCell>Opening Qty</TableCell>
                    <TableCell>Receive Qty</TableCell>
                    <TableCell>Issue Qty</TableCell>
                    <TableCell>Closing Qty</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                    <TableCell>text</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Stack className="rightPagination mt10" spacing={2}>
            <Pagination color="primary" count={10} shape="rounded" />
          </Stack>
          {/* table work end here */}

        </CardContent>
      </Card>
      {/************ body area end here ************/}
    </>
  );
};

export default SalesReport;
