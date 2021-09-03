import React, { useState, useRef, useEffect, createRef } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { db } from "../../firebase";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const classes = useStyles();

  const refs = useRef([]);

 

  refs.current = props.items.map((_, i) => refs.current[i] ?? createRef());

 

  return (
    <React.Fragment>
      <Title>My Items</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Img</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((row, i) => (
            <TableRow key={row.id}>
              <TableCell>
                <TextField
                  defaultValue={row.title}
                  inputRef={refs.current[i]}
                ></TextField>
              </TableCell>
              <TableCell>
                <TextField
                  defaultValue={row.description}
                  inputRef={refs.current[i]}
                ></TextField>
              </TableCell>
              <TableCell>
                <TextField
                  defaultValue={row.price}
                  inputRef={refs.current[i]}
                ></TextField>
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  id={row.id}
                  onClick={() => {
                     db.collection("userItems").doc(`${row.id}`).update({
                      title: refs.current[i].current.value,
                      description: refs.current[i].current.value,
                      price: refs.current[i].current.value,
                      id: row.id,
                    });
                  }}
                >
                  Save Changes
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    db.collection("userItems").doc(`${row.id}`).delete();
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}
