import { Popover } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./RoomDetails.css";
import SwitchBoard from "./SwitchBoard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveData } from "../redux/Action";

export default function RoomDetails(props) {
  let [count, setCount] = useState(1);
  let [arr, setArr] = useState([]);
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
  let [selectTab, setSelectTab] = useState("Living Room");
  let [filterRoom, setFilterRoom] = useState([]);
  const [addSwitch, setAddSwitch] = useState(false);

  // Redux
  let dispatch = useDispatch();
  const reduxData = useSelector((state) => {
    return state.sar;
  });

  console.log("reduxData", reduxData);

  console.log("At  ", data);
  console.log(selectTab);
  function handleSwitch() {
    let roomNamme = [...data].filter((e) => {
      return e.roomname == "Living Room";
    });
    let roomNamme1 = [...data].filter((e) => {
      return e.roomname != "Living Room";
    });

    console.log("roomNamme", roomNamme);
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
      setdata([...roomNamme1, ...roomNamme]);
      console.log("roomName1    ", data);
    } else {
      console.log("before", data);
      let newData = [
        ...data,
        {
          roomname: "Living Room",
          roomId: data.length,
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
      ];
      console.log("after", newData);
      setdata(newData);
    }

    setAddSwitch(!addSwitch);
    console.log("setaddswitch    ", data);
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
                  <button
                    onClick={() => {
                      let btn = document.querySelectorAll(".room-name-btn");
                      console.log(btn);
                      btn.forEach((ele) => {
                        ele.classList.remove("background-blue");
                      });
                      btn[i].classList.add("background-blue");

                      // let newData = data;
                      // newData = newData.filter((e) => {
                      //   return e.roomId === i;
                      // });

                      // setdata(
                      //   newData.length > 0
                      //     ? data
                      //     : [
                      //         ...data,
                      //         { roomname: e.name, roomId: i, switchBoards: [] },
                      //       ]
                      // );
                      setSelectTab(e.name);
                      // setAddSwitch(!addSwitch);
                    }}
                    className={`room-name-btn ${
                      e.name == "Living Room" ? "background-blue" : ""
                    }`}
                    key={i}
                  >
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
      <div className="SwitchBoard-container">
        {data?.find((d) => {
          console.log(d.roomname);
          return d.roomname === "Living Room";
        })?.switchBoards.length !== 0
          ? data
              ?.find((d) => {
                return d.roomname === "Living Room";
              })
              ?.switchBoards.map((e, i) => {
                return (
                  <SwitchBoard
                    SwitchBoard={i}
                    data={data}
                    setData={setdata}
                    selectTab={"Living Room"}
                  />
                );
              })
          : null}
      </div>
      <div onClick={handleSwitch} className="room-add-switchBoard">
        <div className="room-add-switchBoard-icon">
          <span class="material-icons">add</span>
        </div>
        <div className="room-add-switchBoard-title">Add SwitchBoard</div>
      </div>

      <div
        className="room-details-bottom-cont"
        onClick={(e) => {
          e.preventDefault();
          let newData = data;
          newData[0].roomname = selectTab;
          console.log("sandeep", newData);
          props.onClosee();
          dispatch(saveData(newData));
        }}

        // console.log("hijhg");
        // dispatch(saveData({data}));
        // console.log("Final Data",dataState );

        //  }
      >
        {/* <div className="room-details-bottom-top">
        ₹ 2000 will be charged as One Time Security at checkout
        </div>
         <Link to="room" style={{textDecoration: "none",color:"white"}}>
        <div className="room-details-bottom-botCon">
          
            <div className="room-details-bottom-currncy">
            <div
              style={{
                display: "flex",
                
              }}
            >
              <span className="material-icons" >
                currency_rupee
              </span>
              <span
                style={{
                  fontStretch: "condensed",
                  fontSize: "22px",
                  marginTop: "-0.4rem",
                  textDecoration: "none",
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
        </Link> */}
        <div className="addroom-bottom-upper1-cont">
          <span className="addroom-bottom-upper-cont fontSize">
            ₹ 2000 will be charged as One Time Security at checkout
          </span>
        </div>
        <div className="addroom-bottom-upper2-cont">
          <span className="cuurr">₹ 150</span>
          <span className="sub sizefont">Monthly Subscription Fee</span>
          <span className="next">Next</span>
        </div>
      </div>
    </div>
  );
}
