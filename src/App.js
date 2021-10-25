import { React, useState, useEffect } from "react";
import "./App.css";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PrimarySearchAppBar from "./components/appBar";
import { Typography } from "@material-ui/core";
import TitlebarImageList from "./components/titlebarImageList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import Cart from "./components/cart";
import Cpus from "./components/Cpus";
import Gcard1 from "./components/gcard1.png";
import Gcard2 from "./components/gcard2.png";
import Gcard3 from "./components/gcard3.png";
import Gcard4 from "./components/gcard4.png";
import Gcard5 from "./components/gcard5.png";
import Gcard6 from "./components/gcard6.png";
import Gcard7 from "./components/gcard7.png";
import Gcard8 from "./components/gcard8.png";
import Cpu1 from "./components/cpu1.png";
import Cpu2 from "./components/cpu2.png";
import Cpu3 from "./components/cpu3.png";
import Cpu4 from "./components/cpu4.png";
import Cpu5 from "./components/cpu5.png";
import Cpu6 from "./components/cpu6.png";
import Cpu7 from "./components/cpu7.png";
import Cpu8 from "./components/cpu8.png";
import Card1Popup from "./components/card1Popup";
import Card2Popup from "./components/card2Popup";
import Card3Popup from "./components/card3Popup";
import Card4Popup from "./components/card4Popup";
import Card5Popup from "./components/card5Popup";
import Card6Popup from "./components/card6Popup";
import Card7Popup from "./components/card7Popup";
import Card8Popup from "./components/card8Popup";
import Cpu1Popup from "./components/cpu1Popup";
import Cpu2Popup from "./components/cpu2Popup";
import Cpu3Popup from "./components/cpu3Popup";
import Cpu4Popup from "./components/cpu4Popup";
import Cpu5Popup from "./components/cpu5Popup";
import Cpu6Popup from "./components/cpu6Popup";
import Cpu7Popup from "./components/cpu7Popup";
import Cpu8Popup from "./components/cpu8Popup";
import SimpleSnackbar from "./components/mysnackbar";
import SignUp from "./components/signUp";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import CreateItem from "./components/createItem";
import UserItems from "./components/userItems";
import UpdateProfile from "./components/UpdateProfile";
import { db } from "./firebase";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  box: {
    backgroundColor: "#d5f8ff",
    height: "100px",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
});

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

  const [countUser, setCountUser] = useState([]);

  const [myItems, setMyItems] = useState([
    {
      img: Gcard1,
      title: "Cool Card Uno",
      price: 100,
      num: () => setCount1(count1 + 1),
      info: <Card1Popup count1={count1} setCount1={setCount1} />,
      add: 0,
      bar: <SimpleSnackbar />,
    },

    {
      img: Gcard2,
      title: "Monsterous Fans",
      price: 45,
      num: () => setCount2(count2 + 1),
      info: <Card2Popup />,
      add: 1,
    },
    {
      img: Gcard3,
      title: "Overpriced Toaster",
      price: 78,
      num: () => setCount3(count3 + 1),
      info: <Card3Popup />,
      add: 2,
    },
    {
      img: Gcard4,
      title: "Overclocked Powerhouse",
      price: 98,
      num: () => setCount4(count4 + 1),
      info: <Card4Popup />,
      add: 3,
    },

    {
      img: Gcard5,
      title: "Turbo Engine Mini",
      price: 300,
      num: () => setCount5(count5 + 1),
      info: <Card5Popup />,
      add: 4,
    },
    {
      img: Gcard6,
      title: "Hyper Drive Accelerator",
      price: 222,
      num: () => setCount6(count6 + 1),
      info: <Card6Popup />,
      add: 5,
    },

    {
      img: Gcard7,
      title: "Illumination Generator",
      price: 443,
      num: () => setCount7(count7 + 1),
      info: <Card7Popup />,
      add: 6,
    },
    {
      img: Gcard8,
      title: "RGB XD OC",
      price: 420,
      num: () => setCount8(count8 + 1),
      info: <Card8Popup />,
      add: 7,
    },
  ]);

  const [myCpuItems, setMyCpuItems] = useState([
    {
      img: Cpu1,
      title: "Super Ultra 4000",
      price: 33,
      num: () => setCountCpu1(countCpu1 + 1),
      undo: () => setCountCpu1(countCpu1 - 1),
      add: 0,
      info: <Cpu1Popup countCpu1={countCpu1} setCountCpu1={setCountCpu1} />,
      bar: <SimpleSnackbar />,
    },
    {
      img: Cpu2,
      title: "card2",
      price: 600,
      num: () => setCountCpu2(countCpu2 + 1),
      add: 1,
      info: <Cpu2Popup />,
    },
    {
      img: Cpu3,
      title: "card3",
      price: 42,
      num: () => setCountCpu3(countCpu3 + 1),
      add: 2,
      info: <Cpu3Popup />,
    },
    {
      img: Cpu4,
      title: "card4",
      price: 150,
      num: () => setCountCpu4(countCpu4 + 1),
      add: 3,
      info: <Cpu4Popup />,
    },

    {
      img: Cpu5,
      title: "card5",
      price: 188,
      num: () => setCountCpu5(countCpu5 + 1),
      add: 4,
      info: <Cpu5Popup />,
    },
    {
      img: Cpu6,
      title: "card6",
      price: 239,
      num: () => setCountCpu6(countCpu6 + 1),
      add: 5,
      info: <Cpu6Popup />,
    },

    {
      img: Cpu7,
      title: "card7",
      price: 511,
      num: () => setCountCpu7(countCpu7 + 1),
      add: 6,
      info: <Cpu7Popup />,
    },
    {
      img: Cpu8,
      title: "card8",
      price: 375,
      num: () => setCountCpu8(countCpu8 + 1),
      add: 7,
      info: <Cpu8Popup />,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsUser, setSearchResultsUser] = useState([]);

  const [searchResultsCpu, setSearchResultsCpu] = useState([]);

  const [countArray, setCountArray] = useState([
    count1,
    count2,
    count3,
    count4,
    count5,
    count6,
    count7,
    count8,
  ]);

  const [countCpuArray, setCountCpuArray] = useState([
    countCpu1,
    countCpu2,
    countCpu3,
    countCpu4,
    countCpu5,
    countCpu6,
    countCpu7,
    countCpu8,
  ]);

  const userTotal = countUser.reduce((a, v) => (a = a + v), 0);

  const countTotal =
    count1 +
    count2 +
    count3 +
    count4 +
    count5 +
    count6 +
    count7 +
    count8 +
    countCpu1 +
    countCpu2 +
    countCpu3 +
    countCpu4 +
    countCpu5 +
    countCpu6 +
    countCpu7 +
    countCpu8 +
    userTotal;

  const [userTitle, setUserTitle] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userPrice, setUserPrice] = useState(0);

  const [items, setItems] = useState([]);
  const [createdItem, setCreatedItem] = useState();

  const matches = useMediaQuery("(max-width: 480px)");

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newItems = myItems.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newItems);
    } else {
      setSearchResults(myItems);
    }
  };

  const searchHandlerCpu = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newCpuItems = myCpuItems.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResultsCpu(newCpuItems);
    } else {
      setSearchResultsCpu(myCpuItems);
    }
  };

  const searchHandlerUser = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newUserItems = items.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResultsUser(newUserItems);
    } else {
      setSearchResultsUser(items);
    }
  };

  function getItems() {
    db.collection("userItems").onSnapshot((snapshot) => {
      const myItems = [];
      snapshot.forEach((doc) => {
        myItems.push(doc.data());
        countUser.push(0);
      });
      setItems(myItems);
    });
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <AuthProvider>
      <div className="full">
        <Box className={classes.box}>
          <Typography
            variant={matches ? "h4" : "h1"}
            className="siteName"
            style={{ fontWeight: 400 }}
          >
            E-COMMERCE
          </Typography>
        </Box>

        <Router>
          <PrimarySearchAppBar
            countTotal={countTotal}
            searchTerm={searchTerm}
            searchKeyword={searchHandler}
            searchKeywordCpu={searchHandlerCpu}
            searchKeywordUser={searchHandlerUser}
          />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute
              exact
              path="/updateprofile"
              component={UpdateProfile}
            />
            <Route
              exact
              path="/createitem"
              render={(props) => (
                <CreateItem
                  {...props}
                  userTitle={userTitle}
                  setUserTitle={setUserTitle}
                  userDescription={userDescription}
                  setUserDescription={setUserDescription}
                  userPrice={userPrice}
                  setUserPrice={setUserPrice}
                  items={items}
                  setItems={setItems}
                  createdItem={createdItem}
                  setCreatedItem={setCreatedItem}
                />
              )}
            />
            <Route
              exact
              path="/useritems"
              render={(props) => (
                <UserItems
                  {...props}
                  userTitle={userTitle}
                  userDescription={userDescription}
                  userPrice={userPrice}
                  items={searchTerm.length < 1 ? items : searchResultsUser}
                  setItems={setItems}
                  createdItem={createdItem}
                  setCreatedItem={setCreatedItem}
                  countUser={countUser}
                  setCountUser={setCountUser}
                  searchTerm={searchTerm}
                  searchKeyword={searchHandlerUser}
                />
              )}
            />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <PrivateRoute
              exact
              path="/dashboard"
              component={(props) => (
                <Dashboard {...props} items={items} setItems={setItems} />
              )}
            />
            <Route exact path="/home" component={HomePage} />
            <Route
              exact
              path="/shop"
              render={(props) => (
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
                  myItems={searchTerm.length < 1 ? myItems : searchResults}
                />
              )}
            />
            <Route
              exact
              path="/cart"
              render={(props) => (
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
                  countUser={countUser}
                  setCountUser={setCountUser}
                  items={items}
                />
              )}
            />
            <Route
              exact
              path="/cpu"
              render={(props) => (
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
                  myCpuItems={
                    searchTerm.length < 1 ? myCpuItems : searchResultsCpu
                  }
                  searchTerm={searchTerm}
                  searchKeyword={searchHandlerCpu}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
