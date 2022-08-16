import { DriveFileMoveRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useWindowDimensions } from "./window/Resize";
import RoomDetails from "./RoomDetails";
import './RoomHome.css'
export default function RoomHome() {
//   let dataState = useSelector((state) => {
//     return state.sar;
// })
let [rooms,setRoom] = useState([]);
let [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const {height, width } = useWindowDimensions();

// useEffect((()=>{setRoom(dataState.data.data);}),[rooms]);

  // console.log("Final Data",dataState );
  return (
    <div className="addRoom-d-c">
     
       <div className="addRoom-title-cont">
        <div className="addRoom-title-inner">
          <span style={{
            fontWeight:"700",
            fontSize:"36px",
            LineHeight:"49.18px",
          }}>Add the rooms</span>
          <br />
          <span style={{
             fontWeight:"400",
             fontSize:"36px",
             LineHeight:"49.18px",
          }}>in your home</span>
        </div>
      </div>
      
      {/* {
          rooms.length!==0 ?
          rooms.map((e,i)=>{
          return(  <div className='addRoom-room-detail'>
            <img className='addroom-lamp-icon' src={process.env.PUBLIC_URL+"/assets/icon/Group.png"} alt="lamp"></img>
            <span className='addroom-room-name'>{e.roomname}</span>
            <span className='addroom-room-details1'>1 x Light 1 x Fan 1 x AC</span>
            <span className='addroom-room-currenyM'>&#8377; 150</span>
         </div>
          )
          }):null
      } */}
      <div className='addRoom-room-detail'>
         <img className='addroom-lamp-icon' src={process.env.PUBLIC_URL+"/assets/icon/Group.png"} alt="lamp"></img>
         <span className='addroom-room-name'>Living Room</span>
         <span className='addroom-room-details1'>1 x Light 1 x Fan 1 x AC</span>
         <span className='addroom-room-currenyM'>&#8377; 150</span>
      </div>
      <div className='addRoom-room-detail' onClick={handleOpen}>
         <img className='addroom-plus-icon' src={process.env.PUBLIC_URL+"/assets/icon/Frame.png"} alt="lamp"></img>
         <span className='addroom-add-room-name'>Add Room</span>
            </div>

      
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
            
            marginTop:"50%",
            scrollbar:"auto",
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                height:"100%",
                overflowY:"auto",
                transform: "translate(-50%, -50%)",
                width: width,
                bgcolor: "background.paper",
                
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
      
      <div className='addroom-bottom-container'>
      <Link to="summary">
        <div className='addroom-bottom-upper1-cont'><span className='addroom-bottom-upper-cont'>₹ 4000 will be charged as One Time Security at checkout</span></div>
        <div className='addroom-bottom-upper2-cont'>
          <span className='cuurr'>₹ 300</span>
          <span className='sub'>Monthly Subscription Fee</span>
          <span className='next'>Next</span>
        </div>
        </Link>
      </div>
      
    </div>
  )
}
