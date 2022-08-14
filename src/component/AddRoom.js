import React, { useState } from "react";
import "./AddRoom.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useWindowDimensions } from "./window/Resize";
import RoomDetails from "./RoomDetails";

export default function AddRoom() {
  let [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {height, width } = useWindowDimensions();

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
          className="model"
          sx={{
            
            overflowY:"auto",
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "28vh",
                transform: "translate(-50%, -50%)",
                width: width,
                bgcolor: "background.paper",
                Height:"auto",
                boxShadow: 24,
                
                borderTopLeftRadius: "2rem",
                borderTopRightRadius: "2rem",
                p: 4,
              }}
            >
              <div className="add-room-title">Add Room Details</div>
              <p className="add-room-subtitle">
                Add the rooms, and the switchboards in it & the appliances they
                control
              </p>
              <div className="room-name">
                <RoomDetails />
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
