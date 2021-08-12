import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Cpu1 from './cpu1.png'


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem1(props) {

  const classes = useStyles();
    
        if (props.countCpu1 > 0) {
                return (
                    <ListItem >
        <ListItemAvatar>
        <img src={Cpu1} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Cpu1 x${props.countCpu1}`} secondary={`$${33 * props.countCpu1}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCountCpu1(props.countCpu1 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}