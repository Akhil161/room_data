import { Link } from 'react-router-dom'
import React from 'react'
import Slider from './Slider'
import './Getstarted.css'


export default function Getstarted() {
  return (
    <div>
    <div className='getstarted-main-img-container'>
        <div className='getstarted-main-img-img'>
            <img src={process.env.PUBLIC_URL+'assets/img/frontImg.png'} alt="main img"></img>
        </div>
    </div>
    

<Slider/>
<Link className="link" to="login">
<div className="getting-started-btn-container">
        
        <div className="getting-stared-btn"><span className="getting-stared-btn-text">Get Started</span></div>
     
      </div>
      </Link>
    </div>
  )
}
