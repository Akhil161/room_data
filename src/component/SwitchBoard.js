
import React, { useEffect, useState } from "react";
import "./SwitchBoard.css";

export default function SwitchBoard(props) {
  const { SwitchBoard, selectTab, data, setData } = props;

  let [light, setLight] = useState(0);
  let [fan, setFan] = useState(0);
  let [ac, setAc] = useState(0);
  
  useEffect(()=>{
        let newData=data[0].switchBoards[SwitchBoard].appliances
        console.log("useeffect hg",newData);
        setAc(newData.heavyLoad)
        setFan(newData.fans)
        setLight(newData.lightLoad)
  },[data,SwitchBoard])
    

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
    let newData1 = data;
    newData1 = newData1.filter((e) => {
      console.log("e!==   ", e);
      return e.roomname !== selectTab;
    });
    console.log(newData);
    if (newData) newData[0].switchBoards[SwitchBoard].appliances = appliances;
    setData([...newData1, ...newData]);
    console.log("handclick end    ", data);

    
  };

  useEffect(() => {
    handleClick();
    
  }, [light, fan, ac]);
console.log("switch baotdghgfff",data);
  return (
    <div style={{marginBottom: "4vh"}}>
      <div className="SwitchBoard-title-container">SwitchBoard {SwitchBoard + 1}</div>
      <div className="room-appliance-count">
      <div className="IMG">
          <img style={{height:"17.54px",width:"11.24px",display: "flex",
alignItems: "center",justifyItems:"centre"}} src={process.env.PUBLIC_URL + "/assets/icon/Group.png"} alt="light"></img>
          </div>
          <div className="SwitchBoard-appliance-name-text">Lights</div>
        <div className="room-appliance-counter">
          <div className="SwitchBoard-count-numbrt-minus" onClick={() => {
              if (light > 0) setLight(light - 1);
            }}>-</div>
          <div className="SwitchBoard-count-numbrt-text">{light}</div>
          <div className="SwitchBoard-count-numbrt-plus" onClick={() => setLight(light + 1)}>+</div>
        </div>
      </div>
      <div className="room-appliance-count">
        <div className="IMG">
          <img style={{height:"17.41px",width:"19.97px"}} src={process.env.PUBLIC_URL + "/assets/icon/Group-1.png"} alt="fan"></img>
          </div>
          <div className="SwitchBoard-appliance-name-text">Fan</div>
        
        <div className="room-appliance-counter">
          <div className="SwitchBoard-count-numbrt-minus" onClick={() => {
              if (fan > 0) setFan(fan - 1);
            }}>-</div>
          <div className="SwitchBoard-count-numbrt-text">{fan}</div>
          <div className="SwitchBoard-count-numbrt-plus" onClick={() => setFan(fan + 1)}> +</div>
        </div>
      </div>
      <div className="room-appliance-count">
      <div className="IMG">
          <img style={{height:"12.98px",width:"18.72px"}} src={process.env.PUBLIC_URL + "/assets/icon/Group w.png"} alt="ac"></img>
          </div>
          <div className="SwitchBoard-appliance-name-text">AC</div>
        <div className="room-appliance-counter">
          <div className="SwitchBoard-count-numbrt-minus" onClick={() => {
              if (ac > 0) setAc(ac - 1);
            }}>-</div>
          <div className="SwitchBoard-count-numbrt-text">{ac}</div>
          <div className="SwitchBoard-count-numbrt-plus" onClick={() => setAc(ac + 1)}> +</div>
        </div>
      </div>
    </div>
  );
}
