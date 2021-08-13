import { React, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Button } from '@material-ui/core';

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

  

  
  useEffect(() => {
    props.setCountCpuArray([props.countCpu1, props.countCpu2, props.countCpu3, props.countCpu4, props.countCpu5, props.countCpu6, props.countCpu7, props.countCpu8])
  },[props.countCpu1, props.countCpu2, props.countCpu3, props.countCpu4, props.countCpu5, props.countCpu6, props.countCpu7, props.countCpu8])
  
 

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>
        {props.myCpuItems.map((item) => (
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
