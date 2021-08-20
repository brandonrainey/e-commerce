import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import { Button } from '@material-ui/core';

import Gcard6 from './gcard6.png'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 150,
  },
  cartColor: {
    backgroundColor: '#d0dae8',
    borderBottom: '1px solid black',
  }
}));


export default function ListItem6(props) {

  const classes = useStyles();
    
        if (props.count6 > 0) {
                return (
                    <ListItem className={classes.cartColor}>
        <ListItemAvatar>
        <img src={Gcard6} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Card6 x${props.count6}`} secondary={`$${222 * props.count6}`} />
        <Button variant="contained" color="secondary" onClick={() => props.setCount6(props.count6 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}