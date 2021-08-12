import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import { Button } from '@material-ui/core';
import Gcard3 from './gcard3.png'
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
    width: 100,
  }
}));

export default function ListItem3(props) {

  const classes = useStyles();
    
        if (props.count3 > 0) {
                return (
                    <ListItem>
        <ListItemAvatar>
        <img src={Gcard3} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Card3 x${props.count3}`} secondary={`$${78 * props.count3}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCount3(props.count3 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}