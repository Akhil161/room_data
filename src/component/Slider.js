import React from "react";


import Carousel from 'nuka-carousel';


export default function Slider() {
  const contents = [
    {
      heading:"Welcome to",
      subHeading:"Aliste",
      para:"Aliste Helps you make your home smart without making you burn a hole through your pocket.  Our aim is to redefine the way people live by imparting luxury",
    },
    {
        heading:"Welcome to",
        subHeading:"Aliste",
        para:"Aliste Helps you make your home smart without making you burn a hole through your pocket.  Our aim is to redefine the way people live by imparting luxury",
    },
    {
        heading:"Welcome to",
        subHeading:"Aliste",
        para:"Aliste Helps you make your home smart without making you burn a hole through your pocket.  Our aim is to redefine the way people live by imparting luxury",
    }
  ];
  return (
<>

    <Carousel >
      {contents.map((e, i) => {
       return (
            <div  className="main-slider-cont" key={i}>
            <div  className="d-block w-100 slider-text">{e.heading} <span className='inner-text-slider'>{e.subHeading}</span></div>      
            <div className="d-block w-100">
            <p className='getting-started-inner-text'>{e.para} </p>
            </div>
            </div>
        )
       })}
    </Carousel>
    </>
  );
}

