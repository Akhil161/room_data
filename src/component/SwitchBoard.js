import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLightbulb} from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import './SwitchBoard.css'

export default function SwitchBoard() {
    
  return (
    <div>
        
        <div>SwitchBoard 1</div>
        <div className='room-appliance-count'>
        <div style={{display:"flex",
                     alignItems:"center" ,
                     marginLeft:"6%" 
                }}
                ><FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
        <div style={{marginLeft:"2rem" }}>Lights</div></div>
        <div className='room-appliance-counter'>
           <div> -</div>
               <div style={{margin:"0 15px"}}>1</div>
           <div> +</div>
        </div>
        </div>
        <div className='room-appliance-count'>
        <div style={{display:"flex",
                     alignItems:"center" ,
                     marginLeft:"6%" 
                }}
                ><FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
        <div style={{marginLeft:"2rem" }}>Fan</div></div>
        <div className='room-appliance-counter'>
           <div> -</div>
               <div style={{margin:"0 15px"}}>1</div>
           <div> +</div>
        </div>
        </div>
        <div className='room-appliance-count'>
        <div style={{display:"flex",
                     alignItems:"center" ,
                     marginLeft:"6%" 
                }}
                ><FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
        <div style={{marginLeft:"2rem" }}>AC</div></div>
        <div className='room-appliance-counter'>
           <div> -</div>
               <div style={{margin:"0 15px"}}>1</div>
           <div> +</div>
        </div>
        </div>

    </div>
  )
}
