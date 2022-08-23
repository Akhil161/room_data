import React, { useEffect, useState } from "react";
import "./SwitchBoard.css";

export default function SwitchBoard(props) {
  const { SwitchBoard, data, setData } = props;
  const {lightLoad, fans, heavyLoad} = data[0].switchBoards[SwitchBoard].appliances;
  return (
    <div style={{ marginBottom: "4vh" }}>
      <div className="room-appliance-count">
        <div className="IMG">
          <img
            style={{
              height: "17.54px",
              width: "11.24px",
              display: "flex",
              alignItems: "center",
              justifyItems: "centre",
            }}
            src={process.env.PUBLIC_URL + "/assets/icon/Group.png"}
            alt="light"
          ></img>
        </div>
        <div className="SwitchBoard-appliance-name-text">Lights</div>
        <div className="room-appliance-counter">
          <div
            className="SwitchBoard-count-numbrt-minus"
            onClick={() => {
              if( lightLoad > 0) {
                const newData = [...data];
                newData[0].switchBoards[SwitchBoard].appliances.lightLoad -= 1;
                setData(newData);
              }
            }}
          >
            -
          </div>
          <div className="SwitchBoard-count-numbrt-text">{lightLoad}</div>
          <div
            className="SwitchBoard-count-numbrt-plus"
            onClick={() => {
                const newData = new Array(...data);
                newData[0].switchBoards[SwitchBoard].appliances.lightLoad += 1;
                setData(newData);
            }}
          >
            +
          </div>
        </div>
      </div>
      <div className="room-appliance-count">
        <div className="IMG">
          <img
            style={{ height: "17.41px", width: "19.97px" }}
            src={process.env.PUBLIC_URL + "/assets/icon/Group-1.png"}
            alt="fan"
          ></img>
        </div>
        <div className="SwitchBoard-appliance-name-text">Fan</div>

        <div className="room-appliance-counter">
          <div
            className="SwitchBoard-count-numbrt-minus"
            onClick={() => {
              if( fans > 0) {
                const newData = [...data];
                newData[0].switchBoards[SwitchBoard].appliances.fans -= 1;
                setData(newData);
              }
            }}
          >
            -
          </div>
          <div className="SwitchBoard-count-numbrt-text">{fans}</div>
          <div
            className="SwitchBoard-count-numbrt-plus"
            onClick={() => {
              
                const newData = [...data];
                newData[0].switchBoards[SwitchBoard].appliances.fans += 1;
                setData(newData);
            }}
          > +
          </div>
        </div>
      </div>
      <div className="room-appliance-count">
        <div className="IMG">
          <img
            style={{ height: "12.98px", width: "18.72px" }}
            src={process.env.PUBLIC_URL + "/assets/icon/Group w.png"}
            alt="ac"
          ></img>
        </div>
        <div className="SwitchBoard-appliance-name-text">AC</div>
        <div className="room-appliance-counter">
          <div
            className="SwitchBoard-count-numbrt-minus"
            onClick={() => {
              if( heavyLoad > 0) {

                const newData = [...data];
                newData[0].switchBoards[SwitchBoard].appliances.heavyLoad -= 1;
                setData(newData);
            }}}
          >
            -
          </div>
          <div className="SwitchBoard-count-numbrt-text">{heavyLoad}</div>
          <div
            className="SwitchBoard-count-numbrt-plus"
            onClick={() => {
              
                const newData = [...data];
                newData[0].switchBoards[SwitchBoard].appliances.heavyLoad += 1;
                setData(newData);
              
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}
