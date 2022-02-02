import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cpu8 from "../images/cpu8.png";

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

export default function ListItem8(props) {
  const classes = useStyles();

  if (props.countCpu8 > 0) {
    return (
      <ListItem className={classes.cartColor}>
        <ListItemAvatar>
          <img src={Cpu8} className={classes.icon} alt="" />
        </ListItemAvatar>
        <ListItemText
          primary={`Cpu8 x${props.countCpu8}`}
          secondary={`$${(375 * props.countCpu8).toLocaleString()}`}
          className={classes.text}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setCountCpu8(props.countCpu8 - 1)}
        >
          Remove From Cart
        </Button>
      </ListItem>
    );
  } else return null;
}
