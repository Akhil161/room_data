import React from 'react'
import './Summary.css'

export default function Summary() {
  return (
    <div className='summary-d-c'>
        <div className="summary-title-cont">
        <div className="summary-title-inner">
          <span style={{
            fontWeight:"400",
            fontSize:"36px",
            LineHeight:"49.18px",
          }}>Your Smart home is</span>
          <br />
          <span style={{
             fontWeight:"700",
             fontSize:"36px",
             LineHeight:"49.18px",
          }}>one click away!</span>
        </div>
      </div>

      <div className='summary-rooms-cont'>
          <div className='summary-rooms-inner-cont'>
             <div className='summary-room-details'>
                <span className='summary-room-name'>Living Room</span>
                <span className='summary-room-cutomize'>Customize</span>
                <span className='summary-room-money'>₹ 150</span>
             </div>
             <div className='summary-room-details'>
                <span className='summary-room-name'>Dinving Room</span>
                <span className='summary-room-cutomize'>Customize</span>
                <span className='summary-room-money'>₹ 150</span>
             </div>
             <div className='summary-room-details'>
                <span className='summary-room-name'>Living Room</span>
                <span className='summary-room-cutomize'>Customize</span>
                <span className='summary-room-money'>₹ 150</span>
             </div>
             <div className='summary-room-details'>
                <span className='summary-room-name'>Dinving Room</span>
                <span className='summary-room-cutomize'>Customize</span>
                <span className='summary-room-money'>₹ 150</span>
             </div>
          </div>
       </div>
       
       <div className='summary-room-frequantBuy-conyainer'>
            <div className='summary-room-frequantBuy-tit'>
              <span className='summary-room-frequantBuy-title'>Frequently Brought Together</span>
            </div>
            <div className='summary-room-frequantBuy-product'>
              <div className='summary-room-frequantBuy-product-img'>
                <img style={{width:"145px"}} src={process.env.PUBLIC_URL+"/assets/img/remote.png"} alt="remote"></img>
              </div>
              <div>
                <span>Universal Remote</span>
                <span>Control a room’s remotes smartly & via your voice</span>
                <div>
                  <span>₹ 60/m</span>
                  <span>Add</span>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
