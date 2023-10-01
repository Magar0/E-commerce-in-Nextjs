'use client'

import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

export default function BasicPopover() {

  const [order, setOrder] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOrder(true)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const myStyle = {
    backgroundColor: '#c9c9c9',
    fontSize: '1.5rem',
    padding: '1rem'
  }

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="success" disabled={order} onClick={handleClick}>
        Order Now
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}

        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <p style={myStyle}>Order Successful</p>
      </Popover>
    </div>
  );
}