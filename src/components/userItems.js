import { React, useEffect, useState, useRef, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import SimpleSnackbarCards from "./mysnackbarCards";

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

export default function UserItems(props) {
  const classes = useStyles();
  const isInitialMount = useRef(true);

  function getItems() {
    db.collection("userItems").onSnapshot((snapshot) => {
      const myItems = [];
      snapshot.forEach((doc) => {
        myItems.push(doc.data());
      });
      props.setItems(myItems);
    });
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem
          key="Subheader"
          cols={2}
          style={{ height: "auto", boxShadow: "none" }}
        >
          <Typography
            style={{
              fontSize: 50,
              textAlign: "center",
              width: 500,
              marginLeft: 195,
              marginRight: 0,
            }}
            cols={2}
          >
            User Items
          </Typography>
        </ImageListItem>

        {props.items.map((item) => (
          <Card className={classes.roott} style={{ height: 320 }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  onClick={() => console.log("clicked")}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  onClick={() => console.log("clicked")}
                  style={{ borderBottom: "1px solid black" }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h6">${item.price}</Typography>

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
              <SimpleSnackbarCards
                item={item}
                myItems={props.myItems}
                countTotal={props.countTotal}
                count1={props.count1}
                setCount1={props.setCount1}
                count2={props.count2}
                setCount2={props.setCount2}
                count3={props.count3}
                setCount3={props.setCount3}
                count4={props.count4}
                setCount4={props.setCount4}
                count5={props.count5}
                setCount5={props.setCount5}
                count6={props.count6}
                setCount6={props.setCount6}
                count7={props.count7}
                setCount7={props.setCount7}
                count8={props.count8}
                setCount8={props.setCount8}
              />
              <Button
                variant="contained"
                onClick={() => console.log(props.items)}
              >
                test
              </Button>
              <fr></fr>
              <fr></fr>
              <fr></fr>
              <fr></fr>
            </CardActions>
          </Card>
        ))}
      </ImageList>
    </div>
  );
}
