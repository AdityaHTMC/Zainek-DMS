import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useFieldArray, useForm } from "react-hook-form";

const AddSales = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "salesOrder",
  });

  useEffect(() => {
    if (fields.length === 0) {
      append({});
    }
  }, [fields, append]);

  const handleAddRow = () => {
    append({});
  };

  const handleRemoveRow = (index) => {
    remove(index);
  };

  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          <h3 className="mt0 mb10" style={{ color: "#00c2c1" }}>
            Add Sales Order
          </h3>
          {/*form box 1 start*/}
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField
                className="width100"
                size="small"
                label="Sales Employee Code"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className="width100"
                size="small"
                label="Dealer Code"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className="width100"
                size="small"
                label="Dealer Name"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className="width100"
                size="small"
                label="Customer Ref No"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className="width100"
                size="small"
                label="Series Chose"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className="width100"
                size="small"
                label="Posting Date"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField className="width100" size="small" label="Due Date" />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className="width100"
                size="small"
                label="Document Date"
              />
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
                      <TableCell width={110}>Unit Price</TableCell>
                      <TableCell width={90}>Tax Code</TableCell>
                      <TableCell width={150}>Warehouse</TableCell>
                      <TableCell width={170}>Total (Exclusive Tax)</TableCell>
                      <TableCell width={50}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fields.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <TextField
                            {...register(`salesOrder[${index}].itemCode`)}
                            className="width100"
                            size="small"
                            label="Item Code"
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            {...register(
                              `salesOrder[${index}].itemDescription`
                            )}
                            className="width100"
                            size="small"
                            label="Item Description"
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            {...register(`salesOrder[${index}].quantity`)}
                            className="width100"
                            size="small"
                            label="Quantity"
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            {...register(`salesOrder[${index}].unitPrice`)}
                            className="width100"
                            size="small"
                            label="Unit Price"
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            {...register(`salesOrder[${index}].taxCode`)}
                            className="width100"
                            size="small"
                            label="Tax Code"
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            {...register(`salesOrder[${index}].warehouse`)}
                            className="width100"
                            size="small"
                            label="Warehouse"
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            {...register(`salesOrder[${index}].totalTax`)}
                            className="width100"
                            size="small"
                            label="Total Tax"
                          />
                        </TableCell>
                        <TableCell>
                          {index === 0 ? (
                            <Button
                              color="success"
                              variant="contained"
                              size="small"
                              onClick={handleAddRow}
                            >
                              <AddCircleOutlineIcon /> Add
                            </Button>
                          ) : (
                            <Button
                              color="error"
                              variant="contained"
                              size="small"
                              onClick={() => handleRemoveRow(index)}
                            >
                              <HighlightOffIcon /> Remove
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
           

            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <h2>Summary:</h2>
                  <TableContainer>
                    <Table>
                      <TableBody>
                        <TableRow sx={{ "td,th": { border: 1 } }}>
                          <TableCell>
                            <b>Basic Total</b>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow sx={{ "td,th": { border: 1 } }}>
                          <TableCell>
                            <b style={{ color: "#43a047" }}>Tax Total</b>
                          </TableCell>
                          <TableCell style={{ color: "#43a047" }}></TableCell>
                        </TableRow>
                        <TableRow sx={{ "td,th": { border: 1 } }}>
                          <TableCell>
                            <b style={{ color: "red" }}>All Total</b>
                          </TableCell>
                          <TableCell style={{ color: "red" }}></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </div>
          {/* form box 2 end here */}
        </CardContent>
      </Card>
      {/************ body area end here ************/}
    </>
  );
};

export default AddSales;
