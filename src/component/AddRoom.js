import React, { useState } from "react";
import "./AddRoom.css";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:"10%",
  p: 4,
};

export default function AddRoom() {
    let [open,setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="login-top">
        <p className="login-text">
          {" "}
          <strong>Add the rooms</strong>
          <br />
          in your home
        </p>
      </div>
      <div>
        <button className="add-room" onClick={handleOpen}>
          <div className="plus">
            <span class="material-icons">add</span>
          </div>
          <div className="text">Add Room</div>
        </button>
      </div>
      <div className="alert">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            
          </Box>
        </Fade>
      </Modal>
      </div> 
    </div>
  );
}
