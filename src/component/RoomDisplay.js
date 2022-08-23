import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";


export default function RoomDisplay(props) {
    let {handleOpen,handleBoxSize,setroomids, open} =props;
    
    let dataState = useSelector((state) => {
        return state.sar;
      });    
  return (
    <>
     {dataState.length !== 0
          ? dataState.map((e, i) => {
              return (
                <div
                  className="addRoom-room-detail"
                  rid={e.roomId}
                  onClick={(ele) => {
                    setroomids(e.roomId);
                    handleOpen();
                    handleBoxSize();
                  }}
                >
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
    </>
  )
}
