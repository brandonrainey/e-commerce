import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Button } from "@material-ui/core";
import Gcard2 from "../images/gcard2.png";
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

export default function ListItem2(props) {
  const classes = useStyles();

  if (props.count2 > 0) {
    return (
      <ListItem className={`${classes.cartColor} cartItem`}>
        <ListItemAvatar>
          <img src={Gcard2} className={`${classes.icon} cartImg`} alt="" />
        </ListItemAvatar>
        <ListItemText
          primary={`Card2 x${props.count2}`}
          secondary={`$${(45 * props.count2).toLocaleString()}`}
          className={classes.text}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setCount2(props.count2 - 1)}
          className="cartButton"
        >
          Remove From Cart
        </Button>
      </ListItem>
    );
  } else return null;
}
