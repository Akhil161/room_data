import React from 'react'
import './Summary.css'

export default function Summary() {
  return (
    < >
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
                <div>
                <img  src={process.env.PUBLIC_URL+"/assets/img/remote.png"} alt="remote"></img>
                </div>
              </div>
              <div className='summary-room-frequentBuy-inner-cont'>
                <div className='summary-room-frequentBuy-inner-title'>Universal Remote</div>
                <div className="summary-room-frequentBuy-inner-subtitle">Control a room’s remotes smartly & via your voice</div>
                <div className='summary-room-frequentBuy-inner-bottom'>
                  <div className='summary-room-frequentBuy-inner-bottom-perMonth'>₹ 60/m</div>
                  <div className='summary-room-frequentBuy-inner-bottom-btn'>Add</div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
