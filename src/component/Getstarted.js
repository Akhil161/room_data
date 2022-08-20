import { Link } from 'react-router-dom'
import React from 'react'
import './Getstarted.css'


export default function Getstarted() {
  return (
    <div>
    <div className='getstarted-main-img-container'>
        <div className='getstarted-main-img-img'>
            <img src={process.env.PUBLIC_URL+'assets/img/frontImg.png'}></img>
        </div>
    </div>
    
    
    <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="true">
  <div class="carousel-indicators getting-slider-btn-container">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{backgroundColor: "#406388",borderRadius:"50%",height:"5.65px",width:"5.73px"}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{backgroundColor: "#406388",borderRadius:"50%",height:"5.65px",width:"5.73px"}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{backgroundColor: "#406388",borderRadius:"50%",height:"5.65px",width:"5.73px"}}></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active main-slider-cont">
    <div class="d-block w-100 slider-text" >Welcome to <span className='inner-text-slider'>Aliste</span></div>      
    <div class="d-block w-100">
        
        <p className='getting-started-inner-text'>Aliste Helps you make your home smart without making you burn a hole through your pocket.  Our aim is to redefine the way people live by imparting luxury 
</p>
      </div>
    </div>
    <div class="carousel-item main-slider-cont">
     <div class="d-block w-100 slider-text" >Welcome to <span className='inner-text-slider'>Aliste</span></div>      
    <div class="d-block w-100">
        
        <p className='getting-started-inner-text'>Aliste Helps you make your home smart without making you burn a hole through your pocket.  Our aim is to redefine the way people live by imparting luxury 
</p>
      </div>
    </div>
    <div class="carousel-item main-slider-cont">
    <div class="d-block w-100 slider-text" >Welcome to <span className='inner-text-slider'>Aliste</span></div>      
    <div class="d-block w-100">
    <p className='getting-started-inner-text'>Aliste Helps you make your home smart without making you burn a hole through your pocket.  Our aim is to redefine the way people live by imparting luxury 
</p>
      </div>
    </div>
  </div>
 
</div>
<Link className="link" to="login">
<div className="getting-started-btn-container">
        
        <div className="getting-stared-btn"><span className="getting-stared-btn-text">Get Started</span></div>
     
      </div>
      </Link>
    </div>
  )
}
