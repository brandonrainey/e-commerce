import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Cpu7 from './cpu7.png'


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem7(props) {

  const classes = useStyles();
    
        if (props.countCpu7 > 0) {
                return (
                    <ListItem >
        <ListItemAvatar>
        <img src={Cpu7} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Cpu7 x${props.countCpu7}`} secondary={`$${33 * props.countCpu7}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCountCpu1(props.countCpu7 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}