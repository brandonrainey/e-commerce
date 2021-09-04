import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Cpu3 from "./cpu3.png";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: 100,
    width: 150,
  },
  cartColor: {
    backgroundColor: "#d0dae8",
    borderBottom: "1px solid black",
  },
}));

export default function ListItem3(props) {
  const classes = useStyles();

  if (props.countCpu3 > 0) {
    return (
      <ListItem className={classes.cartColor}>
        <ListItemAvatar>
          <img src={Cpu3} className={classes.icon} />
        </ListItemAvatar>
        <ListItemText
          primary={`Cpu3 x${props.countCpu3}`}
          secondary={`$${42 * props.countCpu3}`}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setCountCpu3(props.countCpu3 - 1)}
        >
          Remove From Cart
        </Button>
      </ListItem>
    );
  } else return null;
}
