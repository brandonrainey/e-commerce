import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cpu5 from "../images/cpu5.png";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: 100,
    width: 150,
  },
  cartColor: {
    backgroundColor: "#d0dae8",
    borderBottom: "1px solid black",
  },
  text: {
    textAlign: "center",
  },
}));

export default function ListItem5(props) {
  const classes = useStyles();

  if (props.countCpu5 > 0) {
    return (
      <ListItem className={`${classes.cartColor} cartItem`}>
        <ListItemAvatar>
          <img src={Cpu5} className={`${classes.icon} cartImg`} alt="" />
        </ListItemAvatar>
        <ListItemText
          primary={`Cpu5 x${props.countCpu5}`}
          secondary={`$${(33 * props.countCpu5).toLocaleString()}`}
          className={classes.text}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setCountCpu5(props.countCpu5 - 1)}
          className="cartButton"
        >
          Remove From Cart
        </Button>
      </ListItem>
    );
  } else return null;
}
