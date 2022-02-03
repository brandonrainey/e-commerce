import React, { useRef, createRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { db } from "../firebase";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    width: 444,
    height: 434,
    marginLeft: 738,
    marginTop: 236,
    
  },
}));

export default function Orders(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false)
  const refs = useRef([]);

  refs.current = props.items.map((_, i) => refs.current[i] ?? createRef());

  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={loading} >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Title>My Items</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tableRow'>
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
              <div className='tableCont'>
<TableCell align="right">
                <Button
                  variant="contained"
                  id={row.id}
                  onClick={() => {
                    setLoading(true)
                     db.collection("userItems").doc(`${row.id}`).update({
                      title: refs.current[i].current.value,
                      description: refs.current[i].current.value,
                      price: refs.current[i].current.value,
                      id: row.id,
                    })
                    setLoading(false)
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
              </div>
              
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
