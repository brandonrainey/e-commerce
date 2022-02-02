import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cpu7 from "../images/cpu7.png";

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

export default function ListItem7(props) {
  const classes = useStyles();

  if (props.countCpu7 > 0) {
    return (
      <ListItem className={classes.cartColor}>
        <ListItemAvatar>
          <img src={Cpu7} className={classes.icon} alt="" />
        </ListItemAvatar>
        <ListItemText
          primary={`Cpu7 x${props.countCpu7}`}
          secondary={`$${(511 * props.countCpu7).toLocaleString()}`}
          className={classes.text}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setCountCpu7(props.countCpu7 - 1)}
        >
          Remove From Cart
        </Button>
      </ListItem>
    );
  } else return null;
}
