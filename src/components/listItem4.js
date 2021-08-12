import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import { Button } from '@material-ui/core';
import Gcard4 from './gcard4.png'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem4(props) {

  const classes = useStyles();
    
        if (props.count4 > 0) {
                return (
                    <ListItem>
        <ListItemAvatar>
        <img src={Gcard4} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Card4 x${props.count4}`} secondary={`$${98 * props.count4}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCount4(props.count4 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}