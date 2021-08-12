import { React, useState } from 'react'
import './App.css';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import PrimarySearchAppBar from './components/appBar';
import { Typography } from '@material-ui/core';
import TitlebarImageList from './components/titlebarImageList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import HomePage from './components/homePage';
import Cart from './components/cart';
import Cpus from './components/Cpus';
import Gcard1 from './components/gcard1.png';
import Gcard2 from './components/gcard2.png';
import Gcard3 from './components/gcard3.png';
import Gcard4 from './components/gcard4.png';
import Gcard5 from './components/gcard5.png';
import Gcard6 from './components/gcard6.png';
import Gcard7 from './components/gcard7.png';
import Gcard8 from './components/gcard8.png';
import Cpu1 from './components/cpu1.png';
import Cpu2 from './components/cpu2.png';
import Cpu3 from './components/cpu3.png';
import Cpu4 from './components/cpu4.png';
import Cpu5 from './components/cpu5.png';
import Cpu6 from './components/cpu6.png';
import Cpu7 from './components/cpu7.png';
import Cpu8 from './components/cpu8.png';

const useStyles = makeStyles({
  box: {
    backgroundColor: 'aqua',
    height: '100px'
  }
})

function App() {
const classes = useStyles();

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);

  const [countCpu1, setCountCpu1] = useState(0);
  const [countCpu2, setCountCpu2] = useState(0);
  const [countCpu3, setCountCpu3] = useState(0);
  const [countCpu4, setCountCpu4] = useState(0);
  const [countCpu5, setCountCpu5] = useState(0);
  const [countCpu6, setCountCpu6] = useState(0);
  const [countCpu7, setCountCpu7] = useState(0);
  const [countCpu8, setCountCpu8] = useState(0);

  const [myItems, setMyItems] = useState([ {
    info: 'card',
    img: Gcard1,
    title: 'card',
    price: 100,
    num: () => {setCount1(count1 + 1)
                  },
  },
  {
    info: 'card',
   img: Gcard2,
   title: 'card2',
   price: 45,
   num: () => setCount2(count2 + 1),
  },
  {
    info: 'card',
      img: Gcard3,
      title: 'card3',
      price: 78,
      num: () => setCount3(count3 + 1),
     },
     {
      info: 'card',
      img: Gcard4,
      title: 'card4',
      price: 98,
      num: () => setCount4(count4 + 1),
     },

     {
      info: 'card',
      img: Gcard5,
      title: 'card5',
      price: 300,
      num: () => setCount5(count5 + 1),
     },
     {
      info: 'card',
      img: Gcard6,
      title: 'card6',
      price: 222,
      num: () => setCount6(count6 + 1),
     },

     {
      info: 'card',
      img: Gcard7,
      title: 'card7',
      price: 443,
      num: () => setCount7(count7 + 1),
     },
     {
      info: 'card',
      img: Gcard8,
      title: 'card8',
      price: 420,
      num: () => setCount8(count8 + 1),
     },
     {
      info: 'cpu',
      img: Cpu1,
      title: 'card',
      price: 33,
      num: () => {setCountCpu1(countCpu1 + 1)
                    },
    },
    {
      info: 'cpu',
     img: Cpu2,
     title: 'card2',
     price: 600,
     num: () => setCountCpu2(countCpu2 + 1),
    },
    {
      info: 'cpu',
        img: Cpu3,
        title: 'card3',
        price: 42,
        num: () => setCountCpu3(countCpu3 + 1),
       },
       {
        info: 'cpu',
        img: Cpu4,
        title: 'card4',
        price: 150,
        num: () => setCountCpu4(countCpu4 + 1),
       },

       {
        info: 'cpu',
        img: Cpu5,
        title: 'card5',
        price: 188,
        num: () => setCountCpu5(countCpu5 + 1),
       },
       {
        info: 'cpu',
        img: Cpu6,
        title: 'card6',
        price: 239,
        num: () => setCountCpu6(countCpu6 + 1),
       },

       {
        info: 'cpu',
        img: Cpu7,
        title: 'card7',
        price: 511,
        num: () => setCountCpu7(countCpu7 + 1),
       },
       {
        info: 'cpu',
        img: Cpu8,
        title: 'card8',
        price: 375,
        num: () => setCountCpu8(countCpu8 + 1),
       },])

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [countArray, setCountArray] = useState([count1, count2, count3, count4, count5, count6, count7, count8]);

  const [countCpuArray, setCountCpuArray] = useState([countCpu1, countCpu2, countCpu3, countCpu4, countCpu5, countCpu6, countCpu7, countCpu8]);

  const countTotal =
    count1 + count2 + count3 + count4 + count5 + count6 + count7 + count8
    + countCpu1 + countCpu2 + countCpu3 + countCpu4 + countCpu5 + countCpu6 + countCpu7 + countCpu8;

    
const searchHandler = (searchTerm) => {
  setSearchTerm(searchTerm);
  if ( searchTerm !== '') {
    const newItems = myItems.filter((item) => {
      return Object.values(item).join(' ').toLowerCase().includes(searchTerm.toLowerCase());
    }); 
    setSearchResults(newItems);
  }
  else {
    setSearchResults(myItems)
  }
};
    

  return (
    <div >
      <Box className={classes.box}>
        <Typography variant="h2">
          E-COMMERCE
        </Typography>
      </Box>
      
      <BrowserRouter>
      <PrimarySearchAppBar countTotal={countTotal}
        searchTerm={searchTerm}
        searchKeyword={searchHandler}
      />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/home' component={HomePage}/>
          <Route exact path='/shop'  render={(props) => (
              <TitlebarImageList
                {...props}
                count1={count1}
                setCount1={setCount1}
                count2={count2}
                setCount2={setCount2}
                count3={count3}
                setCount3={setCount3}
                count4={count4}
                setCount4={setCount4}
                count5={count5}
                setCount5={setCount5}
                count6={count6}
                setCount6={setCount6}
                count7={count7}
                setCount7={setCount7}
                count8={count8}
                setCount8={setCount8}
                countArray={countArray}
                setCountArray={setCountArray}
                searchTerm={searchTerm}
                searchKeyword={searchHandler}
                myItems={myItems}
              />
            )}/>
            <Route exact path='/cart' render={(props) => (
              <Cart
                {...props}
                countTotal={countTotal}
                count1={count1}
                setCount1={setCount1}
                count2={count2}
                setCount2={setCount2}
                count3={count3}
                setCount3={setCount3}
                count4={count4}
                setCount4={setCount4}
                count5={count5}
                setCount5={setCount5}
                count6={count6}
                setCount6={setCount6}
                count7={count7}
                setCount7={setCount7}
                count8={count8}
                setCount8={setCount8}
                countArray={countArray}
                setCountArray={setCountArray}
                countTotal={countTotal}
                
                countCpu1={countCpu1}
                setCountCpu1={setCountCpu1}
                countCpu2={countCpu2}
                setCountCpu2={setCountCpu2}
                countCpu3={countCpu3}
                setCountCpu3={setCountCpu3}
                countCpu4={countCpu4}
                setCountCpu4={setCountCpu4}
                countCpu5={countCpu5}
                setCountCpu5={setCountCpu5}
                countCpu6={countCpu6}
                setCountCpu6={setCountCpu6}
                countCpu7={countCpu7}
                setCountCpu7={setCountCpu7}
                countCpu8={countCpu8}
                setCountCpu8={setCountCpu8}
                countCpuArray={countCpuArray}
                setCountCpuArray={setCountCpuArray}

                
              />
              
            )}/>
             <Route exact path='/cpu' render={(props) => (
              <Cpus
                {...props}
                countTotal={countTotal}
                countCpu1={countCpu1}
                setCountCpu1={setCountCpu1}
                countCpu2={countCpu2}
                setCountCpu2={setCountCpu2}
                countCpu3={countCpu3}
                setCountCpu3={setCountCpu3}
                countCpu4={countCpu4}
                setCountCpu4={setCountCpu4}
                countCpu5={countCpu5}
                setCountCpu5={setCountCpu5}
                countCpu6={countCpu6}
                setCountCpu6={setCountCpu6}
                countCpu7={countCpu7}
                setCountCpu7={setCountCpu7}
                countCpu8={countCpu8}
                setCountCpu8={setCountCpu8}
                countCpuArray={countCpuArray}
                setCountCpuArray={setCountCpuArray}
              />
              
            )}/>
        </Switch>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
