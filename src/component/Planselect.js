import React from "react";
import { Link } from 'react-router-dom'
import "./Planselect.css";
import {data} from "./Object"

export default function Planselect() {
  return (
    
    <div>
      <div className="addRoom-title-cont">
        <div className="addRoom-title-inner">
          <span
            style={{

              fontWeight: "400",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >
            Select your

          </span>
          <br />
          <span
            style={{
              fontWeight: "700",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >basic details
          </span>
        </div>
      </div>

    {
        data.length!==0?
        data.map((e,i)=>{
            return(
                 <div className="pack-caontainer">
      <div  key={i} className="pack-caontaine1">
        <div className="pack-room-package">{e.top_title}</div>
        <div key={i+"8"} className="pack-room-money-container">
          <span className="pack-room-money-sign">₹</span>
          <span className="pack-r00m-money-rate">{e.rs}<span style={{
                  fontWeight:"400",
                  fontSize:"30px",
                  lineHeight:"40.98px",
          }}>/day</span></span>
        </div>
        <div className="pack-container-description">
        {e.bottom}
        </div>
        <div className="pcak-container-btn">
          <span style={{
            position: "absolute",
            width: "fit-content",
            height: "27px",
            left: "36%",
            top: "25%",
            
            fontFamily: 'Manrope',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "19px",
            lineHeight: "26px",
            
            color: "#3052AC",
          }}>Let's go</span>
        </div>
      </div>
    </div>
                
            )
        }):null
    } 
    <div className="pack-caontainer" style={{marginBottom:"12%",}}>
      <div key="last" className="pack-caontaine1" style={{
        backgroundColor: "#3052AC",
        
      }}>
        <div className="pack-room-package" style={{color:"#FFFFFF",}}>Make your own Package</div>
        <div className="pack-room-money-container">
        <span className="pack-r00m-money-rate" style={{left:0,color:"#FFFFFF",}}>Custom</span>
          
        </div>
        <div className="pack-container-description" style={{color:"#FFFFFF",}}>
        Automate 5 lights, 1 fan, 1 tv and 1 air conditioner
        </div>
        <Link className="link postion-custom"to="room" >
        <div className="pcak-container-btn-custom" style={{background: "#FFFFFFB2",}}>
          <span style={{
            position: "relative",
            width: "70px",
            height: "27px",
            left: "36%",
            top: "25%",
            
            fontFamily: 'Manrope',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "19px",
            lineHeight: "26px",
            

            color: "#3052AC",
          }}>Let's go</span>
        </div>
        </Link>
      </div>
    </div>
  
     </div>
  );
}
