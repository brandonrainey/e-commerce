import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItem1 from './listItem1';
import ListItem2 from './listItem2';
import ListItem3 from './listItem3';
import ListItem4 from './listItem4';
import ListItem5 from './listItem5';
import ListItem6 from './listItem6';
import ListItem7 from './listItem7';
import ListItem8 from './listItem8';

import CpuItem1 from './cpuItem1';
import CpuItem2 from './cpuItem2';
import CpuItem3 from './cpuItem3';
import CpuItem4 from './cpuItem4';
import CpuItem5 from './cpuItem5';
import CpuItem6 from './cpuItem6';
import CpuItem7 from './cpuItem7';
import CpuItem8 from './cpuItem8';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: 'grey',
      padding: 0,
    },
    nopad: {
      paddingTop: 0,
      paddingBottom: 0,
    }
  }));
  
 

export default function CartItems(props) {

    const classes = useStyles();

 

  

    return (
        <div className='kart'>
          <List className={classes.root} >
              <ListItem className={classes.nopad}>
            <ListItem1 
            countTotal={props.countTotal}
            count1={props.count1}
            setCount1={props.setCount1}
            
            />
            </ListItem >
            <ListItem className={classes.nopad}>
              <ListItem2 
              countTotal={props.countTotal}
              count2={props.count2}
              setCount2={props.setCount2}
              
              />
            </ListItem>
            <ListItem className={classes.nopad}>
            <ListItem3 
              countTotal={props.countTotal}
              count3={props.count3}
              setCount3={props.setCount3}
              
              />
            </ListItem>
            <ListItem className={classes.nopad}>
            <ListItem4 
              countTotal={props.countTotal}
              count4={props.count4}
              setCount4={props.setCount4}
              
              />
            </ListItem>
            <ListItem className={classes.nopad}>
            <ListItem5 
              countTotal={props.countTotal}
              count5={props.count5}
              setCount5={props.setCount5}
              
              />
            </ListItem>
            <ListItem className={classes.nopad}>
            <ListItem6 
              countTotal={props.countTotal}
              count6={props.count6}
              setCount6={props.setCount6}
              
              />
            </ListItem>
            <ListItem className={classes.nopad}>
            <ListItem7 
              countTotal={props.countTotal}
              count7={props.count7}
              setCount7={props.setCount7}
              />
            </ListItem>
            <ListItem className={classes.nopad}>
            <ListItem8 
              countTotal={props.countTotal}
              count8={props.count8}
              setCount8={props.setCount8}
              />
            </ListItem>

            <ListItem className={classes.nopad}>
            <CpuItem1 
            countTotal={props.countTotal}
            countCpu1={props.countCpu1}
            setCountCpu1={props.setCountCpu1}
            
            />
            </ListItem >
            <ListItem className={classes.nopad}>
            <CpuItem2 
            countTotal={props.countTotal}
            countCpu2={props.countCpu2}
            setCountCpu2={props.setCountCpu2}
            
            />
            </ListItem >
            <ListItem className={classes.nopad}>
            <CpuItem3 
            countTotal={props.countTotal}
            countCpu3={props.countCpu3}
            setCountCpu3={props.setCountCpu3}
            
            />
            </ListItem >
            <ListItem className={classes.nopad}>
            <CpuItem4 
            countTotal={props.countTotal}
            countCpu4={props.countCpu4}
            setCountCpu4={props.setCountCpu4}
            
            />
            </ListItem >
            <ListItem className={classes.nopad}>
            <CpuItem5 
            countTotal={props.countTotal}
            countCpu5={props.countCpu5}
            setCountCpu5={props.setCountCpu5}
            
            />
            </ListItem >
            <ListItem className={classes.nopad}>
            <CpuItem6 
            countTotal={props.countTotal}
            countCpu6={props.countCpu6}
            setCountCpu6={props.setCountCpu6}
            
            />
            </ListItem >
            <ListItem className={classes.nopad}>
            <CpuItem7 
            countTotal={props.countTotal}
            countCpu7={props.countCpu7}
            setCountCpu7={props.setCountCpu7}
            
            />
            </ListItem >
            <ListItem className={classes.nopad}>
            <CpuItem8 
            countTotal={props.countTotal}
            countCpu8={props.countCpu8}
            setCountCpu8={props.setCountCpu8}
            
            />
            </ListItem >
    </List>
        </div>
    )
}
