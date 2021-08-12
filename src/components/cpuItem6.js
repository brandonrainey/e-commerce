import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Cpu6 from './cpu6.png'


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem6(props) {

  const classes = useStyles();
    
        if (props.countCpu6 > 0) {
                return (
                    <ListItem >
        <ListItemAvatar>
        <img src={Cpu6} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Cpu6 x${props.countCpu6}`} secondary={`$${33 * props.countCpu6}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCountCpu1(props.countCpu6 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}