import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import RoomHome from './RoomHome';
import { Link } from 'react-router-dom';


export default function RoomDisplay(props) {
  let [open, setOpen] = useState(false);
  let [boxSize, setBoxSize] = useState(false);
  let [roomids, setroomids] = useState(100);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleBoxSize = () => setBoxSize(true);
  const handleBoxSizeReduce = () => setBoxSize(false);

    
    let dataState = useSelector((state) => {
        return state.sar; 
      });    
  return (
    <>
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
          <div className="addRoom-room-cont2">
          <div
            className="addRoom-room-cont1"
            onClick={() => {
              setroomids(100);
              handleOpen();
              handleBoxSizeReduce();
              
            }}
          >
            <img
              className="addroom-plus-icon"
              src={process.env.PUBLIC_URL + "/assets/icon/Frame.png"}
              alt="lamp"
            ></img>
            <span className="addroom-add-room-name">Add Room</span>
          </div>
        </div>
          </div>
          {/* model */}
          <RoomHome open={open} handleBoxSize={handleBoxSize} boxSize={boxSize} handleClose={handleClose} roomids={roomids}/>
          {dataState.length > 0 ? (
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
        </div>
      ) : null}

    </>
  )
}
