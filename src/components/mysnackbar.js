import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={() => {
                      if (props.item.add === 0) {
                        props.setCountCpu1(props.countCpu1 + 1)
                        handleClick();
                      } else if (props.item.add === 1) {
                        props.setCountCpu2(props.countCpu2 + 1)
                        handleClick();
                      } else if (props.item.add === 2) {
                        props.setCountCpu3(props.countCpu3 + 1)
                        handleClick();
                      } else if (props.item.add === 3) {
                        props.setCountCpu4(props.countCpu4 + 1)
                        handleClick();
                      } else if (props.item.add === 4) {
                        props.setCountCpu5(props.countCpu5 + 1)
                        handleClick();
                      } else if (props.item.add === 5) {
                        props.setCountCpu6(props.countCpu6 + 1)
                        handleClick();
                      } else if (props.item.add === 6) {
                        props.setCountCpu7(props.countCpu7 + 1)
                        handleClick();
                      } else if (props.item.add === 7) {
                        props.setCountCpu8(props.countCpu8 + 1)
                        handleClick();
                      }
                    }}>
              Add to cart
            </Button>
      
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`${props.item.title} added to cart`}
        action={
          <React.Fragment>
            <Button style={{ color: 'green'}} size="small" onClick={() => {
                                                                    handleClose();}}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}