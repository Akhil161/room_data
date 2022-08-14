import { Popover } from "@mui/material";
import React, { useState } from "react";
import "./RoomDetails.css";
import SwitchBoard from "./SwitchBoard";
export default function RoomDetails() {
    let [count,setCount] = useState(1)
    let [arr,setArr]=useState([])

    function handleSwitch(){
        console.log("hi");
        setCount(count+1);
         let  newArray = [];
            newArray[count - 1] = 2;
            newArray.fill(2);
            setArr(newArray)
            console.log(newArray.length);
       
    }
    
  let [roomName, setRoomName] = useState([
    {
      name: "Living Room",
    },
    {
      name: "Dining Room",
    },
    {
      name: "Master Bed Room",
    },
    {
      name: "Guest Room",
    },
  ]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div className="room-name-cont">
        {roomName.length !== 0
          ? roomName.map((e, i) => {
              return (
                <div>
                  <button className="room-name-btn" key={i}>
                    {e.name}
                  </button>
                </div>
              );
            })
          : null}
        <div>
          <button
            className="room-name-btn"
            aria-describedby={id}
            onClick={handleClick}
          >
            Custom
          </button>
        </div>
        <Popover
          sx={{
            borderRadius: 25,
            width: "35vw",
          }}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <input
            className="input-roomName"
            type="text"
            placeholder="Room name"
            onBlur={(e) => {
              const Rname = e.target.value;
              setRoomName([...roomName, { name: Rname }]);
            }}
          />
        </Popover>
      </div>
      {
         arr.length!==0?
         arr.map((e,i)=>{
         return   <SwitchBoard SwitchBoard={i}/>
         }):null
      }

      <div  onClick={handleSwitch} className="room-add-switchBoard">
        <div className="room-add-switchBoard-icon">
          <span class="material-icons">add</span>
        </div>
        <div className="room-add-switchBoard-title">Add SwitchBoard</div>
      </div>
      <div className="room-details-bottom-cont">
        <div className="room-details-bottom-top">
          2000 will be charged as One Time Security at checkout
        </div>
        <div className="room-details-bottom-botCon">
          <div className="room-details-bottom-currncy">
            <div
              style={{
                display: "flex",
              }}
            >
              <span className="material-icons" style={{}}>
                currency_rupee
              </span>
              <span
                style={{
                  fontStretch: "condensed",
                  fontSize: "22px",
                  marginTop: "-0.4rem",
                }}
              >
                150
              </span>
            </div>
            <div
              style={{
                fontSize: "8px",
              }}
            >
              Monthly Subscription Fee
            </div>
          </div>
          <div
            style={{
              fontSize: "1.6rem",
            }}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
