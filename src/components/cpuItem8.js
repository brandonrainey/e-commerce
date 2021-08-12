import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Cpu8 from './cpu8.png'


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem8(props) {

  const classes = useStyles();
    
        if (props.countCpu8 > 0) {
                return (
                    <ListItem >
        <ListItemAvatar>
        <img src={Cpu8} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Cpu8 x${props.countCpu8}`} secondary={`$${33 * props.countCpu8}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCountCpu1(props.countCpu8 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}