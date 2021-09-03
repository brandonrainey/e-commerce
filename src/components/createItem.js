import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";


import { useHistory } from "react-router-dom";
import { db } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#1e395f",
  },
  imageList: {
    width: 1000,
    height: 800,
    backgroundColor: "#d0dae8",
    borderRadius: 12,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  imgStuff: {
    width: 300,
  },
  roott: {
    maxWidth: 380,
    backgroundColor: "#f8feff",
    margin: 50,
  },
  media: {
    height: 140,
  },
}));

export default function CreateItem(props) {
  const classes = useStyles();
  const userTitle = useRef();
  const userDescription = useRef();
  const userPrice = useRef();

  const history = useHistory();

  function addItem() {
    const randId = uuidv4();

    db.collection("userItems")
      .doc(`${randId}`)
      .set({
        title: userTitle.current.value,
        description: userDescription.current.value,
        price: userPrice.current.value,
        id: randId,
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    addItem();

    history.push("/useritems");
  }

  return (
    <div>
      <Card className={classes.roott} style={{ height: 500 }}>
        <form onSubmit={handleSubmit}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <TextField label="Item Name" inputRef={userTitle}></TextField>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ borderBottom: "1px solid black" }}
              >
                <TextField
                  label="Item Description"
                  multiline
                  maxRows={4}
                  inputRef={userDescription}
                ></TextField>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography variant="h6">
              $<TextField label="Price" inputRef={userPrice}></TextField>
            </Typography>

            <fr></fr>
            <fr></fr>
            <fr></fr>
            <fr></fr>
            <fr></fr>
            <fr></fr>
            <fr></fr>
            <fr></fr>
            <fr></fr>
            <fr></fr>

            <fr></fr>
            <fr></fr>
            <fr></fr>
            <fr></fr>
            <Button variant="contained" type="submit">
              Create
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
}
