import { Popover } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./RoomDetails.css";
import SwitchBoard from "./SwitchBoard";
export default function RoomDetails() {
  let [count, setCount] = useState(1);
  let [arr, setArr] = useState([]);
  let [data, setdata] = useState([
    { roomname: "Living Room", roomId: 0, switchBoards: [] },
  ]);
  let [selectTab, setSelectTab] = useState("Living Room");
  let [filterRoom, setFilterRoom] = useState([]);
  const [addSwitch, setAddSwitch] = useState(false);

  console.log("At  ",data);
  console.log(selectTab);
  function handleSwitch() {
    let roomNamme = [...data].filter((e) => {
      return e.roomname == selectTab;
    });
    let roomNamme1 = [...data].filter((e) => {
      return e.roomname != selectTab;
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
      console.log("roomName1    ",data);
    } else {
      console.log("before", data);
      let newData = [
        ...data,
        {
          roomname: selectTab,
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
    console.log("setaddswitch    ",data);
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
                      setAddSwitch(!addSwitch);
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
      {data?.find((d) => {
        console.log(d.roomname);
        return d.roomname === selectTab;
      })?.switchBoards.length !== 0
        ? data
            ?.find((d) => {
              return d.roomname === selectTab;
            })
            ?.switchBoards.map((e, i) => {
              return (
                <SwitchBoard
                  SwitchBoard={i}
                  data={data}
                  setData={setdata}
                  selectTab={selectTab}
                />
              );
            })
        : null}

      <div onClick={handleSwitch} className="room-add-switchBoard">
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
