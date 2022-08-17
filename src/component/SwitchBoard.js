
import React, { useEffect, useState } from "react";
import "./SwitchBoard.css";

export default function SwitchBoard(props) {
  const { SwitchBoard, selectTab, data, setData } = props;

  let [light, setLight] = useState(0);
  let [fan, setFan] = useState(0);
  let [ac, setAc] = useState(0);

  const handleClick = () => {
    let appliances = {
      fans: fan,
      lightLoad: light,
      heavyLoad: ac,
    };
    console.log("swtgf  ", data);
    let newData = data;
    newData = newData.filter((e) => {
      console.log("e==   ", e);
      return e.roomname === selectTab;
    });
    let newData1=data;
    newData1 = newData1.filter((e) => {
      console.log("e!==   ", e);
      return e.roomname !== selectTab;
    });
    console.log(newData);
    if (newData) newData[0].switchBoards[SwitchBoard].appliances = appliances;
    setData([...newData1,...newData]);
    console.log("handclick end    ",data);
  };

  useEffect(() => {
    handleClick();
  }, [light, fan, ac]);

  return (
    <div >
      <div>SwitchBoard {SwitchBoard + 1}</div>
      <div className="room-appliance-count">
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "6%" }}
        >
        
          <img className="IMG" src={process.env.PUBLIC_URL+"/assets/icon/Group.png"} alt="lamp"></img>
          <div style={{ marginLeft: "2rem" }}>Lights</div>
        </div>
        <div className="room-appliance-counter">
          <div
            onClick={() => {
              if (light > 0) setLight(light - 1);
            }}
          >
            -
          </div>
          <div style={{ margin: "0 15px" }}>{light}</div>
          <div onClick={() => setLight(light + 1)}>+</div>
        </div>
      </div>
      <div className="room-appliance-count">
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "6%" }}
        >
        <img className="IMG" src={process.env.PUBLIC_URL+"/assets/icon/Group-1.png"} alt="fan"></img>

        
          <div style={{ marginLeft: "2rem" }}>Fan</div>
        </div>
        <div className="room-appliance-counter">
          <div
            onClick={() => {
              if (fan > 0) setFan(fan - 1);
            }}
          >
            -
          </div>
          <div style={{ margin: "0 15px" }}>{fan}</div>
          <div onClick={() => setFan(fan + 1)}> +</div>
        </div>
      </div>
      <div className="room-appliance-count">
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "6%" }}
        >
          <img className="IMG" src={process.env.PUBLIC_URL+"/assets/icon/Group w.png"} alt="ac"></img>
          <div style={{ marginLeft: "2rem" }}>AC</div>
        </div>
        <div className="room-appliance-counter">
          <div
            onClick={() => {
              if (ac > 0) setAc(ac - 1);
            }}
          >
            -
          </div>
          <div style={{ margin: "0 15px" }}>{ac}</div>
          <div onClick={() => setAc(ac + 1)}> +</div>
        </div>
      </div>
    </div>
  );
}
