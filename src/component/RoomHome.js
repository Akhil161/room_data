import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useWindowDimensions } from "./window/Resize";
import RoomDetails from "./RoomDetails";
import "./RoomHome.css";
export default function RoomHome() {
  let dataState = useSelector((state) => {
    return state.sar;
  });
  let [rooms, setRoom] = useState([]);
  let [open, setOpen] = useState(false);
  let [boxSize,setBoxSize] =useState(false);
  let [roomids,setroomids]=useState(100);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleBoxSize = () => setBoxSize(true);
  const handleBoxSizeReduce= () => setBoxSize(false);
  const { width } = useWindowDimensions();
  console.log(dataState);

  useEffect(() => {
    setRoom(dataState);
  }, [open]);

  // console.log("Final Data",dataState );
  return (
    <div className="addRoom-d-c">
      <div className="addRoom-title-cont">
        <div className="addRoom-title-inner">
          <span
            style={{
              fontWeight: "700",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >
            Add the rooms
          </span>
          <br />
          <span
            style={{
              fontWeight: "400",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >
            in your home
          </span>
        </div>
      </div>
      <div className="add-room-details-container">
        {rooms.length !== 0
          ? rooms.map((e, i) => {
              return (
                <div className="addRoom-room-detail" rid={e.roomId} onClick={
                  (e)=>{
                    setroomids(Number(e.target.getAttribute("rid")));
                    handleOpen()
                    handleBoxSize()
                  }
                }>
                  <img
                    className="addroom-lamp-icon"
                    src={process.env.PUBLIC_URL + "/assets/icon/Group.png"}
                    alt="lamp"
                  ></img>
                  <span className="addroom-room-name">{e.roomname}</span>
                  <span className="addroom-room-details1">
                    1 x Light 1 x Fan 1 x AC
                  </span>
                  <span className="addroom-room-currenyM">&#8377; 150</span>
                </div>
              );
            })
          : null}
        {/* <div className='addRoom-room-detail'>
         <img className='addroom-lamp-icon' src={process.env.PUBLIC_URL+"/assets/icon/Group.png"} alt="lamp"></img>
         <span className='addroom-room-name'>Living Room</span>
         <span className='addroom-room-details1'>1 x Light 1 x Fan 1 x AC</span>
         <span className='addroom-room-currenyM'>&#8377; 150</span>
      </div> */}
      <div className="addRoom-room-cont2">
        <div className="addRoom-room-cont1" onClick={()=>{
          handleOpen()
          handleBoxSizeReduce()
        }}>
          <img
            className="addroom-plus-icon"
            src={process.env.PUBLIC_URL + "/assets/icon/Frame.png"}
            alt="lamp"
          ></img>
          <span className="addroom-add-room-name">Add Room</span>
        </div>
        </div>
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
        
        sx={{
          scrollbar: "auto",
          scrollbarWidth: "0",
          outline : "none"
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "relative",

              width: "99.99%",
              height: "80vh",
              left: "0px",
              top: `${boxSize===true?"19%":"22%"}`,
              outline : "none",

              background: "#FFFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "29px 29px 0px 0px",


            }}
          >
            <div className="add-room-title-container">Add Room Details</div>
            <div className="add-room-subtitle-conainer">
              Add the rooms, and the switchboards in it & the appliances they
              control
            </div>
            <div className="room-name">
              <RoomDetails onClosee={handleClose} handleBoxSize={handleBoxSize} rooms={rooms} roomids={roomids}/>
            </div>
          </Box>
        </Fade>
      </Modal>
       {
        rooms.length>0?
       
      <div className="addroom-bottom-container">
        <Link to="summary">
          <div className="addroom-bottom-upper1-cont">
            ₹ 4000{" "}
            <span style={{ fontWeight: "400" }}>
              will be charged as One Time Security at checkout
            </span>
          </div>
          <div className="addroom-bottom-upper2-cont">
            <span className="cuurr">₹ 300</span>
            <span className="sub ">Monthly Subscription Fee</span>
            <span className="next">Next</span>
          </div>
        </Link>
      </div>:null
}
    </div>
  );
}
