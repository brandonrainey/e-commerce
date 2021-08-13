import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Card1Popup from './card1Popup';



import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'grey',
    
    
  },
  imageList: {
    width: 1000,
    height: 800,
    backgroundColor: 'grey',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  imgStuff: {
      width: 300,
  },
  
}));


 


export default function TitlebarImageList(props) {
  const classes = useStyles();

  

  
  useEffect(() => {
    props.setCountArray([props.count1, props.count2, props.count3, props.count4, props.count5, props.count6, props.count7, props.count8])
  },[props.count1, props.count2, props.count3, props.count4, props.count5, props.count6, props.count7, props.count8])
  
 

  return (
    <div className={classes.root}>
      
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Items</ListSubheader>
        </ImageListItem>

        {props.myItems.map((item) => 
        
         
          
          
          <ImageListItem key={item.img} >
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>${item.price}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon} onClick={() => item.num()}>
                  
                    {item.info}
                  
                  
                    <Tooltip title="Add to cart" aria-label={`${toString(item.num)}`}>
                        <AddRoundedIcon />
                     </Tooltip>
                </IconButton>
              }
            />
          </ImageListItem>
         )}
      </ImageList>
    </div>
  );
}
