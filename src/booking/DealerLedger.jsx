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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
const DealerLedger = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          {/* header part work start */}
          <h2 className="mt0 mb10" style={{ color: "#00c2c1" }}>Dealer Ledger</h2>
          <hr />
          {/* header part work end */}

          {/* Filter part start */}
          <h4 className="mt15 mb15">Report Selection Criteria</h4>
          <Grid className="mb20" container spacing={3}>
            <Grid item xs={4}>
              <TextField className='width100' size="small" label="From Date" />
            </Grid>
            <Grid item xs={4}>
              <TextField className='width100' size="small" label="To Date" />
            </Grid>
            <Grid item xs={4}>
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
                    <TableCell>Opening Balance</TableCell>
                    <TableCell>Debit</TableCell>
                    <TableCell>Credit</TableCell>
                    <TableCell>Closing Balance</TableCell>
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

export default DealerLedger;