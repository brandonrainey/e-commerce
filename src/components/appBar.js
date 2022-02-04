import React, { useState, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useAuth } from "../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  drop: {
    marginTop: "8.5px",

    zIndex: 99,
    backgroundColor: "#1a303e",
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const { currentUser } = useAuth();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const getSearchTerm = (e) => {
    props.searchKeyword(e.target.value);
    props.searchKeywordCpu(e.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <IconButton
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
          <Popper
            open={open}
            role={undefined}
            transition
            disablePortal
            anchorEl={anchorRef}
            anchorPosition={{ left: 600, top: 200 }}
            style={{ width: 200, marginTop: 56 }}
            className="tester"
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                      className={`${classes.drop} dropdown`}
                      style={{ zIndex: 100, position: "relative" }}
                    >
                      <Link to="/home">
                        <MenuItem onClick={handleClose} className="links">
                          Home
                        </MenuItem>
                      </Link>
                      <Link to="/shop">
                        <MenuItem onClick={handleClose} className="links">
                          Graphics Cards
                        </MenuItem>
                      </Link>
                      <Link to="/cpu">
                        <MenuItem onClick={handleClose} className="links">
                          Cpus
                        </MenuItem>
                      </Link>
                      <Link to="/useritems">
                        <MenuItem onClick={handleClose} className="links">
                          User Items
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/home" className="homeLink">
              <HomeIcon className="hIcon" />
            </Link>
          </Typography>

          <IconButton>
            <Badge badgeContent={props.countTotal} color="secondary">
              <Link to="/cart">
                <ShoppingCartSharpIcon
                  style={{ color: "white", marginTop: 5 }}
                />
              </Link>
            </Badge>
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={props.searchTerm}
              onChange={getSearchTerm}
            />
          </div>

          <Link to={currentUser ? "/dashboard" : "/login"}>
            <Button>
              <Avatar>
                <PersonIcon></PersonIcon>
              </Avatar>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
