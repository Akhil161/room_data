import { Popover } from "@mui/material";
import React, { useState } from "react";
import "./RoomDetails.css";
import SwitchBoard from "./SwitchBoard";
import { useDispatch, useSelector } from "react-redux";
import { saveData,updateData } from "../redux/Action";

export default function RoomDetails(props) {
  let { handleBoxSize, roomids ,data,setdata} = props;
  let [selectTab, setSelectTab] = useState("Living Room");
  let [selectTab1, setSelectTab1] = useState(data[0].roomname);
  const [addSwitch, setAddSwitch] = useState(false);
  
  let reduxData = useSelector((state) => {
    return state.sar;
  });
 
  let i;
  if (roomids === 100) {
    i = reduxData.length;
  } else {
    i = roomids;
  }


  let dispatch = useDispatch();
  function handleSwitch() {
    
let roomNamme=[...data]
    if (roomNamme[0]) {
      console.log(roomNamme);
      roomNamme[0].switchBoards = [
        ...roomNamme[0].switchBoards,
        {
          switchboardNumber: roomNamme[0].switchBoards.length + 1,
          appliances: {
            fans: 0,
            lightLoad: 0,
            heavyLoad: 0,
          },
        },
      ];
      setdata(roomNamme);
      
     }

    setAddSwitch(!addSwitch);
  
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

  const handleClose = async () => {
    setAnchorEl(null);
  };
  const handleDelete = async (i) => {
    if (i === 0) {
      return;
    }
    const newData = [...data];
    newData[0].switchBoards = newData[0].switchBoards
      .filter((e, index) => index !== i)
      .map((e, index) => {
        return { ...e, switchboardNumber: index + 1 };
      });
    setdata(newData);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div
        className="SwitchBoard-container"
        style={{
          maxHeight: `${
            data[0].switchBoards[0].appliances.fans !== 0 ||
            data[0].switchBoards[0].appliances.lightLoad !== 0 ||
            data[0].switchBoards[0].appliances.heavyLoad !== 0
              ? "52vh"
              : "61vh"
          }`,
        }}
      >
        <div className="room-name-cont">
          {roomName.length !== 0
            ? roomName.map((e, i) => {
                return (
                  <div>
                    <button
                      onClick={() => {
                        let btn = document.querySelectorAll(".room-name-btn");
                        console.log(btn);
                        btn.forEach((ele) => {
                          ele.classList.remove("background-blue");
                        });
                        btn[i].classList.add("background-blue");
                        roomids!==100?setSelectTab1(e.name):setSelectTab(e.name)
                        
                        
                      }}
                      className={`room-name-btn ${
                        e.name === "Living Room"
                          ? "background-blue"
                          : ".border-colors"
                      }`}
                      key={i}
                    >
                      <span className="room-name-btn-txt">{e.name}</span>
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
        <div className="swichBoard-data">
      
        
          {data.length !== 0
            ? data[0].switchBoards.map((e, i) => {
                return (
                  <>
                    <div className="SwitchBoard-title-container">
                      SwitchBoard {i + 1}{" "}
                      <span
                        className="roomDetails-SwitchBoard-delete-btn"
                        ids={i + 1}
                        onClick={(e) => {
                          handleDelete(i);
                        }}
                      >
                        x
                      </span>
                    </div>

                    <SwitchBoard
                      SwitchBoard={i}
                      data={data}
                      setData={setdata}
                      // selectTab={selectTab}
                    />
                  </>
                );
              })
            : null}
        </div>

        <div style={{ width: "100%" }}>
          <div
            onClick={() => {
              handleSwitch();
              handleBoxSize();
            }}
            className="room-appliance-count"
            style={{ width: "90%", left: "5%", top: 0 }}
          >
            <div className="IMG">
              <img
                style={{
                  height: "14.98px",
                  width: "14.06px",
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "centre",
                }}
                src={process.env.PUBLIC_URL + "/assets/icon/Frame.png"}
                alt="plus"
              ></img>
            </div>
            <div className="SwitchBoard-appliance-name-text">
              Add SwitchBoard
            </div>
          </div>
        </div>
      </div>
      

      {data[0].switchBoards[0].appliances.fans !== 0 ||
      data[0].switchBoards[0].appliances.lightLoad !== 0 ||
      data[0].switchBoards[0].appliances.heavyLoad !== 0 ? (
      

        <div
          className="addroom-bottom-container"
          onClick={(e) => {
            e.preventDefault();
            console.log(data,"245");
            let newData = data;
            console.log(selectTab, "359");
          
            newData[0].roomId = i;
            console.log("sandeep", newData);
            console.log(selectTab1);
            // newData[0].roomname=selectTab1;
            props.onClosee();
            if(roomids===100){
              newData[0].roomname=selectTab;
            dispatch(saveData(newData));
            }
            else{
              newData[0].roomname=selectTab1;
              dispatch(updateData(newData));
            }
          }}
        >
          <div className="addroom-bottom-upper1-cont">
            ₹ 2000{" "}
            <span style={{ fontWeight: "400" }}>
              will be charged as One Time Security at checkout
            </span>
          </div>
          <div className="addroom-bottom-upper2-cont">
            <span className="cuurr">₹ 150</span>
            <span className="sub ">Monthly Subscription Fee</span>
            <span className="next">Next</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
