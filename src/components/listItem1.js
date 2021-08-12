import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Gcard1 from './gcard1.png'


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem1(props) {

  const classes = useStyles();
    
        if (props.count1 > 0) {
                return (
                    <ListItem >
        <ListItemAvatar >
          
            <img src={Gcard1} className={classes.icon}/>
          
        </ListItemAvatar>
        <ListItemText primary={`Card1 x${props.count1}`} secondary={`$${100 * props.count1}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCount1(props.count1 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}
