import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItem1 from "./GpuCartItem1";
import ListItem2 from "./GpuCartItem2";
import ListItem3 from "./GpuCartItem3";
import ListItem4 from "./GpuCartItem4";
import ListItem5 from "./GpuCartItem5";
import ListItem6 from "./GpuCartItem6";
import ListItem7 from "./GpuCartItem7";
import ListItem8 from "./GpuCartItem8";
import CpuItem1 from "./CpuCartItem1";
import CpuItem2 from "./CpuCartItem2";
import CpuItem3 from "./CpuCartItem3";
import CpuItem4 from "./CpuCartItem4";
import CpuItem5 from "./CpuCartItem5";
import CpuItem6 from "./CpuCartItem6";
import CpuItem7 from "./CpuCartItem7";
import CpuItem8 from "./CpuCartItem8";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Button } from "@material-ui/core";
import Placeholder from "../images/placeholder.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "grey",
    padding: 0,
  },
  nopad: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  user: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#d0dae8",
    paddingTop: 0,
  },
  icon: {
    height: 100,
    width: 150,
  },
  myUser: {
    borderBottom: "1px solid black",
  },
  text: {
    textAlign: "center",
  },
}));

export default function CartItems(props) {
  const classes = useStyles();

  const handleUpdate = (index, item) => {
    const newItems = [...props.countUser];
    newItems[index] = item;
    props.setCountUser(newItems);
  };

  return (
    <div className="kart">
      <List className={classes.root}>
        <ListItem className={classes.nopad}>
          <ListItem1
            countTotal={props.countTotal}
            count1={props.count1}
            setCount1={props.setCount1}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <ListItem2
            countTotal={props.countTotal}
            count2={props.count2}
            setCount2={props.setCount2}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <ListItem3
            countTotal={props.countTotal}
            count3={props.count3}
            setCount3={props.setCount3}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <ListItem4
            countTotal={props.countTotal}
            count4={props.count4}
            setCount4={props.setCount4}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <ListItem5
            countTotal={props.countTotal}
            count5={props.count5}
            setCount5={props.setCount5}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <ListItem6
            countTotal={props.countTotal}
            count6={props.count6}
            setCount6={props.setCount6}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <ListItem7
            countTotal={props.countTotal}
            count7={props.count7}
            setCount7={props.setCount7}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <ListItem8
            countTotal={props.countTotal}
            count8={props.count8}
            setCount8={props.setCount8}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <CpuItem1
            countTotal={props.countTotal}
            countCpu1={props.countCpu1}
            setCountCpu1={props.setCountCpu1}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <CpuItem2
            countTotal={props.countTotal}
            countCpu2={props.countCpu2}
            setCountCpu2={props.setCountCpu2}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <CpuItem3
            countTotal={props.countTotal}
            countCpu3={props.countCpu3}
            setCountCpu3={props.setCountCpu3}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <CpuItem4
            countTotal={props.countTotal}
            countCpu4={props.countCpu4}
            setCountCpu4={props.setCountCpu4}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <CpuItem5
            countTotal={props.countTotal}
            countCpu5={props.countCpu5}
            setCountCpu5={props.setCountCpu5}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <CpuItem6
            countTotal={props.countTotal}
            countCpu6={props.countCpu6}
            setCountCpu6={props.setCountCpu6}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <CpuItem7
            countTotal={props.countTotal}
            countCpu7={props.countCpu7}
            setCountCpu7={props.setCountCpu7}
          />
        </ListItem>
        <ListItem className={classes.nopad}>
          <CpuItem8
            countTotal={props.countTotal}
            countCpu8={props.countCpu8}
            setCountCpu8={props.setCountCpu8}
          />
        </ListItem>
        <ListItem className={classes.user}>
          {props.countUser.map((item, index) => {
            if (item > 0) {
              return (
                <ListItem className={classes.myUser}>
                  <ListItemAvatar>
                    <img src={Placeholder} className={classes.icon} alt="" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${props.items[index].title} x${props.countUser[index]}`}
                    secondary={`$${(
                      props.items[index].price * props.countUser[index]
                    ).toLocaleString()}`}
                    className={classes.text}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      handleUpdate(index, props.countUser[index] - 1)
                    }
                  >
                    Remove From Cart
                  </Button>
                </ListItem>
              );
            } else return null;
          })}
        </ListItem>
      </List>
    </div>
  );
}
