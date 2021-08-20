import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import { Button } from '@material-ui/core';
import Gcard2 from './gcard2.png'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  nopad: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  icon: {
    height: 100,
    width: 150,
  },
  cartColor: {
    backgroundColor: '#d0dae8',
    borderBottom: '1px solid black',
  }
}));


export default function ListItem2(props) {

  const classes = useStyles();
    
        if (props.count2 > 0) {
                return (
                    <ListItem className={classes.cartColor}>
        <ListItemAvatar>
        <img src={Gcard2} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Card2 x${props.count2}`} secondary={`$${45 * props.count2}`} />
        <Button variant="contained" color="secondary" onClick={() => props.setCount2(props.count2 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)
            
           
               
        
        
        
        
   
}