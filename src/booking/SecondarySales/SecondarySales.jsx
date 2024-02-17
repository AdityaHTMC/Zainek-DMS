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
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link, useNavigate } from "react-router-dom";

const SecondarySales = () => {

  const navigate = useNavigate()

  const Addhandle = () => {
    navigate('/addSec')
  }

  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          {/* header part work start */}
          <Grid className="mb10" container spacing={2}>
            <Grid item xs={8}>
              <h2 className="m0" style={{ color: "#00c2c1" }}>Secondary  Sales (51)</h2>
            </Grid>
            <Grid item xs={4} textAlign='right'>
              <Button onClick={Addhandle} variant="contained" size="small" style={{ background: "#00c2c1" }}>Add Secondary Sales</Button>
            </Grid>
          </Grid>
          {/* header part work end */}

          {/* table work start here */}
          <Paper className="customTable" sx={{ width: "100%" }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Dealer Code</TableCell>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Order Value</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell>CELPX1215C</TableCell>
                    <TableCell>#9245</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>3257</TableCell>
                    <TableCell>16 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSecondarySales"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;
                      <Link to="/addSec"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>CELPX1215C</TableCell>
                    <TableCell>#9245</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>3257</TableCell>
                    <TableCell>16 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSecondarySales"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;
                      <Link to="/addSec"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>CELPX1215C</TableCell>
                    <TableCell>#9245</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>3257</TableCell>
                    <TableCell>16 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSecondarySales"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;
                      <Link to="/addSec"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>CELPX1215C</TableCell>
                    <TableCell>#9245</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>3257</TableCell>
                    <TableCell>16 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSecondarySales"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;
                      <Link to="/addSec"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>CELPX1215C</TableCell>
                    <TableCell>#9245</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>3257</TableCell>
                    <TableCell>16 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSecondarySales"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;
                      <Link to="/addSec"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>CELPX1215C</TableCell>
                    <TableCell>#9245</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>3257</TableCell>
                    <TableCell>16 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSecondarySales"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;
                      <Link to="/addSec"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>CELPX1215C</TableCell>
                    <TableCell>#9245</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>3257</TableCell>
                    <TableCell>16 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSecondarySales"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;
                      <Link to="/addSec"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
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

export default SecondarySales;
