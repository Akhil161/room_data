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
    


<div class="container">
  <h2>Carousel Example</h2>  
  <div id="myCarousel" class="carousel slide" data-ride="carousel" style="background-color:red">
    
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner">
      <div class="item active" >
        <div>Hello</div>
        <div>wlecome this page2</div>
      </div>

      <div class="item">
       <div>Hello</div>
        <div>wlecome this page 1</div>
      </div>
    
      <div class="item">
        <div>Hello</div>
        <div>wlecome this page</div>
      </div>
    </div>

    
     
</div>
</div>

    </div>
  )
}
