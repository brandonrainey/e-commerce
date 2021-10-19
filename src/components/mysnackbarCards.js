import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function SimpleSnackbarCards(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button
        size="small"
        color="primary"
        onClick={() => {
          if (props.item.add === 0) {
            props.setCount1(props.count1 + 1);
            handleClick();
          } else if (props.item.add === 1) {
            props.setCount2(props.count2 + 1);
            handleClick();
          } else if (props.item.add === 2) {
            props.setCount3(props.count3 + 1);
            handleClick();
          } else if (props.item.add === 3) {
            props.setCount4(props.count4 + 1);
            handleClick();
          } else if (props.item.add === 4) {
            props.setCount5(props.count5 + 1);
            handleClick();
          } else if (props.item.add === 5) {
            props.setCount6(props.count6 + 1);
            handleClick();
          } else if (props.item.add === 6) {
            props.setCount7(props.count7 + 1);
            handleClick();
          } else if (props.item.add === 7) {
            props.setCount8(props.count8 + 1);
            handleClick();
          }
        }}
      >
        Add to cart
      </Button>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`${props.item.title} added to cart`}
        action={
          <React.Fragment>
            <Button
              color="secondary"
              size="small"
              onClick={() => {
                handleClose();
              }}
            >
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
