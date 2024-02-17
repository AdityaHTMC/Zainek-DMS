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
import Grid from "@mui/material/Grid";

const ViewSalesOrder = () => {
    return (
        <>
            {/*********** body area start here ************/}
            <Card>
                <CardContent>
                <h3 className="mt0 mb10" style={{color:"#00c2c1"}}>View Sales Order</h3>
                    <TableContainer className="customTable mb20">
                        <Table>
                            <TableRow>
                                <TableCell><b>Sales Employee Code : </b>EALCP32954ETW</TableCell>
                                <TableCell><b>Dealer Code : </b> #EXZ124592C</TableCell>
                                <TableCell><b>Dealer Name : </b> Raju Ghos</TableCell>
                                <TableCell><b>Customer Ref No : </b> 3215</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Series Chose : </b>1234569</TableCell>
                                <TableCell><b>Posting Date : </b> 16 Feb 2024</TableCell>
                                <TableCell><b>Due Date : </b> 25 Feb 2024</TableCell>
                                <TableCell><b>Document Date : </b> 03 Feb 2024</TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                    <Paper className="customTable" sx={{ width: "100%" }}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item Code</TableCell>
                                        <TableCell>Item Description</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Unit Price</TableCell>
                                        <TableCell>Tax Code</TableCell>
                                        <TableCell>Warehouse</TableCell>
                                        <TableCell>Total (Exclusive Tax)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>4599</TableCell>
                                        <TableCell>3256</TableCell>
                                        <TableCell>#EALCP123</TableCell>
                                        <TableCell>kolkata salt lake</TableCell>
                                        <TableCell>3279</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>4599</TableCell>
                                        <TableCell>3256</TableCell>
                                        <TableCell>#EALCP123</TableCell>
                                        <TableCell>kolkata salt lake</TableCell>
                                        <TableCell>3279</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>4599</TableCell>
                                        <TableCell>3256</TableCell>
                                        <TableCell>#EALCP123</TableCell>
                                        <TableCell>kolkata salt lake</TableCell>
                                        <TableCell>3279</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>4599</TableCell>
                                        <TableCell>3256</TableCell>
                                        <TableCell>#EALCP123</TableCell>
                                        <TableCell>kolkata salt lake</TableCell>
                                        <TableCell>3279</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>4599</TableCell>
                                        <TableCell>3256</TableCell>
                                        <TableCell>#EALCP123</TableCell>
                                        <TableCell>kolkata salt lake</TableCell>
                                        <TableCell>3279</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>4599</TableCell>
                                        <TableCell>3256</TableCell>
                                        <TableCell>#EALCP123</TableCell>
                                        <TableCell>kolkata salt lake</TableCell>
                                        <TableCell>3279</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>4599</TableCell>
                                        <TableCell>3256</TableCell>
                                        <TableCell>#EALCP123</TableCell>
                                        <TableCell>kolkata salt lake</TableCell>
                                        <TableCell>3279</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>4599</TableCell>
                                        <TableCell>3256</TableCell>
                                        <TableCell>#EALCP123</TableCell>
                                        <TableCell>kolkata salt lake</TableCell>
                                        <TableCell>3279</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell><b>Basic Total</b></TableCell>
                                        <TableCell>125</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell><b>Tax Total</b></TableCell>
                                        <TableCell>1560</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell><b>All Total</b></TableCell>
                                        <TableCell>2350000</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </CardContent>
            </Card>
            {/************ body area end here ************/}
        </>
    );
};

export default ViewSalesOrder;