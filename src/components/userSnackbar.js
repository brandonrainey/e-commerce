import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function UserSnackbar(props) {
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

  const handleUpdate = (index, item) => {
      const newItems = [...props.countUser];
      newItems[index] = item;
      props.setCountUser(newItems)
  }

  return (
    <div style={{ marginLeft: 'auto'}}>
      <Button
        size="small"
        color="primary"
        onClick={() => {
            
            console.log(props.countUser)
            handleUpdate(props.index, props.countUser[props.index] + 1);
            handleClick();
            
          
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
            style={{ color: "green" }}
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
