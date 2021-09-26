import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


import UserSnackbar from "./userSnackbar";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { db } from "../firebase";
import Placeholder from './placeholder.png'
import UserPopup from "./userPopup";

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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    width: 1000,
    height: 796,
    marginLeft: 460,
    marginTop: 172,
    borderRadius: 6,
  },
  desc: {
    maxHeight: '61px',
    overflowY: 'auto'
  },
  userPop: {
    marginLeft: 'auto'
  }
}));

export default function UserItems(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false)


  

  





  async function getItems() {
    setLoading(true)
    await db.collection("userItems").onSnapshot((snapshot) => {
      const myItems = [];
      snapshot.forEach((doc) => {
        myItems.push(doc.data());
        props.countUser.push(0)
      });
      props.setItems(myItems);
      setLoading(false)
    });
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loading} >
        <CircularProgress color="inherit" />
      </Backdrop>
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
            className='pageTitle'
          >
            User Items
          </Typography>
        </ImageListItem>

        {props.items.map((item, index) => (
          <Card className={`${classes.roott} itemBody`} style={{ height: 320, boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", }}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title="Contemplative Reptile"
                image={Placeholder}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  onClick={() => console.log(index)}
                  className='itemTitle'
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  onClick={() => console.log("clicked")}
                  style={{ borderBottom: "1px solid black" }}
                  className={'itemText'}
                >
                  {item.description}
                 
                

                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ marginTop: 'auto'}}>
              <Typography variant="h6">${item.price}</Typography>

              <div className='actionsContainer'>
                <div className='actions'>
              <UserSnackbar
                item={item}
                myItems={props.myItems}
                countTotal={props.countTotal}
                countUser={props.countUser}
                setCountUser={props.setCountUser}
                index={index}
              />
              
              <div className='learnMore'>
                <UserPopup
                index={index} 
                item={item}
                myItems={props.myItems}
                countTotal={props.countTotal}
                countUser={props.countUser}
                setCountUser={props.setCountUser}
                className={classes.userPop}
              />
                </div>
              
                </div>
                
              </div>
            </CardActions>
          </Card>
        ))}
      </ImageList>
    </div>
  );
}
