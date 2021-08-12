import { React, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Cpu1 from './cpu1.png';
import Cpu2 from './cpu2.png';
import Cpu3 from './cpu3.png';
import Cpu4 from './cpu4.png';
import Cpu5 from './cpu5.png';
import Cpu6 from './cpu6.png';
import Cpu7 from './cpu7.png';
import Cpu8 from './cpu8.png';


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
  }
}));


 


export default function Cpus(props) {
  const classes = useStyles();

  const itemData = [
    {
      img: Cpu1,
      title: 'card',
      price: 33,
      num: () => {props.setCountCpu1(props.countCpu1 + 1)
                    },
    },
    {
     img: Cpu2,
     title: 'card2',
     price: 600,
     num: () => props.setCountCpu2(props.countCpu2 + 1),
    },
    {
        img: Cpu3,
        title: 'card3',
        price: 42,
        num: () => props.setCountCpu3(props.countCpu3 + 1),
       },
       {
        img: Cpu4,
        title: 'card4',
        price: 150,
        num: () => props.setCountCpu4(props.countCpu4 + 1),
       },

       {
        img: Cpu5,
        title: 'card5',
        price: 188,
        num: () => props.setCountCpu5(props.countCpu5 + 1),
       },
       {
        img: Cpu6,
        title: 'card6',
        price: 239,
        num: () => props.setCountCpu6(props.countCpu6 + 1),
       },

       {
        img: Cpu7,
        title: 'card7',
        price: 511,
        num: () => props.setCountCpu7(props.countCpu7 + 1),
       },
       {
        img: Cpu8,
        title: 'card8',
        price: 375,
        num: () => props.setCountCpu8(props.countCpu8 + 1),
       },

     
  ];

  
  useEffect(() => {
    props.setCountCpuArray([props.countCpu1, props.countCpu2, props.countCpu3, props.countCpu4, props.countCpu5, props.countCpu6, props.countCpu7, props.countCpu8])
  },[props.countCpu1, props.countCpu2, props.countCpu3, props.countCpu4, props.countCpu5, props.countCpu6, props.countCpu7, props.countCpu8])
  
 

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Items</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} >
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>${item.price}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon} onClick={() => item.num()}>
                    <Tooltip title="Add to cart" aria-label={`${toString(item.num)}`}>
                        <AddRoundedIcon />
                     </Tooltip>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
