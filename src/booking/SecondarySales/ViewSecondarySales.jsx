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

const ViewSecondarySales = () => {
    return (
        <>
            {/*********** body area start here ************/}
            <Card>
                <CardContent>
                <h3 className="mt0 mb10" style={{color:"#00c2c1"}}>View Secondary Sales</h3>
                    <TableContainer className="customTable mb20">
                        <Table>
                            <TableRow>
                                <TableCell><b>Sales Employee Code : </b>EALCP32954ETW</TableCell>
                                <TableCell><b>Dealer Code : </b> #EXZ124592C</TableCell>
                                <TableCell><b>Document Date : </b> 03 Feb 2024</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b>Customer Name : </b>Ravi Jha</TableCell>
                                <TableCell><b>Document Number : </b> #EXZ124592C</TableCell>
                                <TableCell>&nbsp;</TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                    <Paper className="customTable" sx={{ width: "100%" }}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell width={90}>Item Code</TableCell>
                                        <TableCell>Item Description</TableCell>
                                        <TableCell width={90}>Quantity</TableCell>
                                        <TableCell width={90}>Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>32</TableCell>
                                        <TableCell>999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>32</TableCell>
                                        <TableCell>999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>32</TableCell>
                                        <TableCell>999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>32</TableCell>
                                        <TableCell>999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>32</TableCell>
                                        <TableCell>999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>32</TableCell>
                                        <TableCell>999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>32</TableCell>
                                        <TableCell>999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>32</TableCell>
                                        <TableCell>999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>12345</TableCell>
                                        <TableCell>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TableCell>
                                        <TableCell>32</TableCell>
                                        <TableCell>999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                        <TableCell><b>Total</b></TableCell>
                                        <TableCell><b>999</b></TableCell>
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

export default ViewSecondarySales;