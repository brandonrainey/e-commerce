import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Cpu2 from './cpu2.png'


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem2(props) {

  const classes = useStyles();
    
        if (props.countCpu2 > 0) {
                return (
                    <ListItem >
        <ListItemAvatar>
        <img src={Cpu2} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Cpu2 x${props.countCpu2}`} secondary={`$${33 * props.countCpu2}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCountCpu1(props.countCpu2 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}