import React from "react";
import "./Planselect.css";
import {data} from "./Object"

export default function Planselect() {
  return (
    
    <div>
                <div className="sub-top">
                  <p className="sub-text">
                    Select your <br />
                    <strong>subscription plan</strong>
                  </p>
                </div>
    {
        data.length!==0?
        data.map((e)=>{
            return(
                
                <div className="pack-caontainer">
                  <div className="pack-inner">
                  <p>{e.top_title}</p>
                  <p
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        paddingTop: "10px",
                      }}
                    >
                      <span
                        className="material-icons"
                        style={{
                          color: "#3052AC",
                          fontSize: "34px",
                          fontWeight: "600",
                        }}
                      >
                        currency_rupee
                      </span>
                    </div>
                    <div
                      style={{
                        color: "#3052AC",
                        fontSize: "55px",
                        fontWeight: "700",
                        lineHeight: "75px",
                      }}
                    >
                      {e.rs}
                    </div>
                  </p>
                  <p>{e.bottom}</p>
                  </div>
                  <button>Let's go</button>
                </div>
             
              
            )
        }):null
    }
    <div className="pack-caontainer" style={{backgroundColor:"#3052ac",color: "white"}}>
                  <div className="pack-inner">
                  <p>Make your own Package</p>
                  <p
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        paddingTop: "10px",
                      }}
                    >
                      <span
                        className="material-icons"
                        style={{
                          color: "#3052ac",
                          fontSize: "34px",
                          fontWeight: "600",
                          display:"none"
                        }}
                      >
                        currency_rupee
                      </span>
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "34px",
                        fontWeight: "600",
                      }}
                    >
                      Custom
                    </div>
                  </p>
                  <p>Automate 5 lights, 1 fan, 1 tv and 1 air conditioner</p>
                  </div>
                  <button>Let's go</button>
                </div>
     </div>
  );
}
