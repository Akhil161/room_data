import { Popover } from "@mui/material";
import React, { useState } from "react";
import "./RoomDetails.css";
import SwitchBoard from "./SwitchBoard";
export default function RoomDetails() {
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
      <SwitchBoard/>
    </div>
  );
}
