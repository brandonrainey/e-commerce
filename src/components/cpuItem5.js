import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Cpu5 from './cpu5.png'


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem5(props) {

  const classes = useStyles();
    
        if (props.countCpu5 > 0) {
                return (
                    <ListItem >
        <ListItemAvatar>
        <img src={Cpu5} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Cpu5 x${props.countCpu5}`} secondary={`$${33 * props.countCpu5}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCountCpu1(props.countCpu5 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}