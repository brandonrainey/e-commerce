import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cpu4 from "./cpu4.png";

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

export default function ListItem4(props) {
  const classes = useStyles();

  if (props.countCpu4 > 0) {
    return (
      <ListItem className={classes.cartColor}>
        <ListItemAvatar>
          <img src={Cpu4} className={classes.icon} alt="" />
        </ListItemAvatar>
        <ListItemText
          primary={`Cpu4 x${props.countCpu4}`}
          secondary={`$${(150 * props.countCpu4).toLocaleString()}`}
          className={classes.text}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setCountCpu4(props.countCpu4 - 1)}
        >
          Remove From Cart
        </Button>
      </ListItem>
    );
  } else return null;
}
