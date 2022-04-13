import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Button } from "@material-ui/core";
import Gcard7 from "../images/gcard7.png";
import { makeStyles } from "@material-ui/core/styles";

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

  if (props.count7 > 0) {
    return (
      <ListItem className={`${classes.cartColor} cartItem`}>
        <ListItemAvatar>
          <img src={Gcard7} className={`${classes.icon} cartImg`} alt="" />
        </ListItemAvatar>
        <ListItemText
          primary={`Card7 x${props.count7}`}
          secondary={`$${(45 * props.count7).toLocaleString()}`}
          className={classes.text}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setCount7(props.count7 - 1)}
          className="cartButton"
        >
          Remove From Cart
        </Button>
      </ListItem>
    );
  } else return null;
}

