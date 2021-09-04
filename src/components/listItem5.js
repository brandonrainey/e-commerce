import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";

import { Button } from "@material-ui/core";

import Gcard5 from "./gcard5.png";
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
}));

export default function ListItem5(props) {
  const classes = useStyles();

  if (props.count5 > 0) {
    return (
      <ListItem className={classes.cartColor}>
        <ListItemAvatar>
          <img src={Gcard5} className={classes.icon} />
        </ListItemAvatar>
        <ListItemText
          primary={`Card5 x${props.count5}`}
          secondary={`$${300 * props.count5}`}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setCount5(props.count5 - 1)}
        >
          Remove From Cart
        </Button>
      </ListItem>
    );
  } else return null;
}
