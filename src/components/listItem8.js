import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import { Button } from '@material-ui/core';

import Gcard8 from './gcard8.png'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem8(props) {

  const classes = useStyles();
    
        if (props.count8 > 0) {
                return (
                    <ListItem>
        <ListItemAvatar>
        <img src={Gcard8} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Card8 x${props.count8}`} secondary={`$${420 * props.count8}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCount8(props.count8 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}