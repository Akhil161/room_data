import React from 'react'

export default function TopHeader(props) {
    const {title,subtitle}=props
  return (
    <div className="addRoom-title-cont">
        <div className="addRoom-title-inner">
          <span
            style={{

              fontWeight: "400",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >
            {title}
          </span>
          <br />
          <span
            style={{
              fontWeight: "700",
              fontSize: "36px",
              LineHeight: "49.18px",
            }}
          >{subtitle}
          </span>
        </div>
      </div>
  )
}
