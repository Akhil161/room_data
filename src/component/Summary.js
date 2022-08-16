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
             </div>
          </div>
      </div>
    </div>
  )
}
