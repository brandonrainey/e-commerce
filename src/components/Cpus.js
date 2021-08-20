import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Button } from '@material-ui/core';
import TestItem from './testItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import SimpleSnackbar from './mysnackbar';

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#1e395f',
    
    
    
  },
  imageList: {
    width: 1000,
    height: 800,
    backgroundColor: '#d0dae8',
    borderRadius: 12,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  imgStuff: {
      width: 300,
  },
  roott: {
    maxWidth: 380,
    backgroundColor: '#f8feff',
    margin: 50,
    
  },
  media: {
    height: 140,
  },
  
}));


 


export default function Cpus(props) {
  const classes = useStyles();

  

  
  useEffect(() => {
    props.setCountCpuArray([props.countCpu1, props.countCpu2, props.countCpu3, props.countCpu4, props.countCpu5, props.countCpu6, props.countCpu7, props.countCpu8]);
    
  },[props.countCpu1, props.countCpu2, props.countCpu3, props.countCpu4, props.countCpu5, props.countCpu6, props.countCpu7, props.countCpu8])
  
 

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList} style={{ justifyContent: 'center'}}>
         <ImageListItem key="Subheader" cols={2} style={{ height: 'auto', boxShadow: 'none',  }}>
          <Typography style={{ fontSize: 50, textAlign: 'center',  width: 500, marginLeft: 195, marginRight: 0}} cols={2}>
            Cpus
            </Typography>
        </ImageListItem> 
        
        {props.myCpuItems.map((item) => (
          <Card className={classes.roott} style={{boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}>
          <CardActionArea>
            
            <CardMedia
              className={classes.media}
              image={item.img}
              title="Contemplative Reptile"
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" onClick={() => console.log('clicked')} >
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" onClick={() => console.log('clicked')} style={{borderBottom: '1px solid black'}}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Typography variant='h6'>
          ${item.price}
          </Typography>
          
          <fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr><fr></fr>
            <SimpleSnackbar 
            item={item}
            myCpuItems={props.myCpuItems}
            countTotal={props.countTotal}
                countCpu1={props.countCpu1}
                setCountCpu1={props.setCountCpu1}
                countCpu2={props.countCpu2}
                setCountCpu2={props.setCountCpu2}
                countCpu3={props.countCpu3}
                setCountCpu3={props.setCountCpu3}
                countCpu4={props.countCpu4}
                setCountCpu4={props.setCountCpu4}
                countCpu5={props.countCpu5}
                setCountCpu5={props.setCountCpu5}
                countCpu6={props.countCpu6}
                setCountCpu6={props.setCountCpu6}
                countCpu7={props.countCpu7}
                setCountCpu7={props.setCountCpu7}
                countCpu8={props.countCpu8}
                setCountCpu8={props.setCountCpu8}
            />
            <fr></fr><fr></fr><fr></fr><fr></fr>{item.info}
          </CardActions>
        </Card>
          
        ))}

      </ImageList>
    </div>
  );
}
