import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Button } from "@material-ui/core";
import Gcard3 from "../images/gcard3.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  nopad: {
    paddingTop: 0,
    paddingBottom: 0,
  },
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

export default function ListItem3(props) {
  const classes = useStyles();

  if (props.count3 > 0) {
    return (
      <ListItem className={`${classes.cartColor} cartItem`}>
        <ListItemAvatar>
          <img src={Gcard3} className={`${classes.icon} cartImg`} alt="" />
        </ListItemAvatar>
        <ListItemText
          primary={`Card3 x${props.count3}`}
          secondary={`$${(45 * props.count3).toLocaleString()}`}
          className={classes.text}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setCount3(props.count3 - 1)}
          className="cartButton"
        >
          Remove From Cart
        </Button>
      </ListItem>
    );
  } else return null;
}

