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
import Grid from "@mui/material/Grid";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link, useNavigate } from "react-router-dom";

const SalesOrder = () => {

  const navigate = useNavigate()

  const handleAdd = () => {
    navigate('/addSales')
  }

  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          {/* header part work start */}
          <Grid className="mb10" container spacing={2}>
            <Grid item xs={8}>
              <h2 className="m0" style={{ color: "#00c2c1" }}>
                Sales Order(10)
              </h2>
            </Grid>
            <Grid item xs={4} textAlign='right'>
              <Button onClick={handleAdd} variant="contained" size="small" style={{background:"#00c2c1"}}>Add Sales Order</Button>
            </Grid>
          </Grid>
          {/* header part work end */}

          {/* table work start here */}
          <Paper className="customTable" sx={{ width: "100%" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky">
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Delear Name</TableCell>
                    <TableCell>Order Value</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell>#AELCT12345790TTE</TableCell>
                    <TableCell>Ravi Roy</TableCell>
                    <TableCell>32,253.00</TableCell>
                    <TableCell>15 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSalesOrder"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;&nbsp;
                      <Link to="/addSales"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;&nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>#AELCT12345790TTE</TableCell>
                    <TableCell>Ravi Roy</TableCell>
                    <TableCell>32,253.00</TableCell>
                    <TableCell>15 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSalesOrder"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;&nbsp;
                      <Link to="/addSales"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;&nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>#AELCT12345790TTE</TableCell>
                    <TableCell>Ravi Roy</TableCell>
                    <TableCell>32,253.00</TableCell>
                    <TableCell>15 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSalesOrder"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;&nbsp;
                      <Link to="/addSales"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;&nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>#AELCT12345790TTE</TableCell>
                    <TableCell>Ravi Roy</TableCell>
                    <TableCell>32,253.00</TableCell>
                    <TableCell>15 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSalesOrder"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;&nbsp;
                      <Link to="/addSales"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;&nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>#AELCT12345790TTE</TableCell>
                    <TableCell>Ravi Roy</TableCell>
                    <TableCell>32,253.00</TableCell>
                    <TableCell>15 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSalesOrder"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;&nbsp;
                      <Link to="/addSales"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;&nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>#AELCT12345790TTE</TableCell>
                    <TableCell>Ravi Roy</TableCell>
                    <TableCell>32,253.00</TableCell>
                    <TableCell>15 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSalesOrder"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;&nbsp;
                      <Link to="/addSales"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;&nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>#AELCT12345790TTE</TableCell>
                    <TableCell>Ravi Roy</TableCell>
                    <TableCell>32,253.00</TableCell>
                    <TableCell>15 Feb 2024</TableCell>
                    <TableCell>
                      <Link to="/ViewSalesOrder"><RemoveRedEyeOutlinedIcon color="primary" /></Link>
                      &nbsp;&nbsp;
                      <Link to="/addSales"><BorderColorOutlinedIcon color="success" /></Link>
                      &nbsp;&nbsp;
                      <Link to=""><DeleteOutlineOutlinedIcon color="error" /></Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          {/* table work end here */}          
          <Stack className="rightPagination mt10" spacing={2}>
              <Pagination color="primary" count={10} shape="rounded" />
            </Stack>
        </CardContent>
      </Card>
      {/************ body area end here ************/}
    </>
  );
};

export default SalesOrder;
