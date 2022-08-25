import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import RoomDetails from "./RoomDetails";
import "./RoomHome.css";
export default function RoomHome(props) {
  let {open,handleBoxSize,boxSize,handleClose,roomids,name} = props;
  let [os,setos]=useState("");
  let dataState = useSelector((state) => {
    return state.sar;
  });

  let [data, setdata] = useState([
    {
      roomname: "Living Room",
      roomId: 0,
      switchBoards: [
        {
          switchboardNumber: 1,
          appliances: {
            fans: 0,
            lightLoad: 0,
            heavyLoad: 0,
          },
        },
      ],
    },
  ]);
  useEffect(()=>{
     
    if(roomids!==100){
      let newData=dataState.filter((e)=>{
        return e.roomId===roomids;
      })
      setdata(newData);
    }else{
      let newData1=[
        {
          roomname: "Living Room",
          roomId: 0,
          switchBoards: [
            {
              switchboardNumber: 1,
              appliances: {
                fans: 0,
                lightLoad: 0,
                heavyLoad: 0,
              },
            },
          ],
        },
      ]
      setdata(newData1);
    }
  },[roomids,open,dataState])
  useEffect(()=>{
    const getMobileOS = () => {
      const ua = navigator.userAgent
      if (/android/i.test(ua)) {
        return "Android"
      }
      else if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
      {
        return "iOS";
      }
      return "Other"
    }
    const os1 = getMobileOS();
    setos(os1);
  },[])
  
  return (
    <div className="addRoom-d-c">
      
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
          outline: "none",
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "relative",
              
              width: "99.99%",
              height: "82vh",
              left: "0px",
              top: `${(os==="iOS")?(boxSize === true ? "12vh" : "17vh"):(boxSize === true ? "16vh" : "22vh")}`,
              outline: "none",

              background: "#FFFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "29px 29px 0px 0px",
            }}
          >
            <div className="add-room-title-container">{name} Room Details</div>
            <div className="add-room-subtitle-conainer">
              {name} the rooms, and the switchboards in it & the appliances they
              control
            </div>
            <div className="room-name">
              <RoomDetails
                onClosee={handleClose}
                handleBoxSize={handleBoxSize}
                roomids={roomids}
                data={data}
                setdata={setdata}
              />
            </div>
          </Box>
        </Fade>
      </Modal>
          </div>
  );
}
