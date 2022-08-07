import React from 'react'
import { Link } from "react-router-dom";
function projectTemplate(props) {
  return (
    
  
  <div className="Project-container">

    <div className='Img-side-1st' style={{backgroundImage: `url(${props.img})`}}>      </div>
  
  <div className='Text-side-1st'>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    {props.techList?
    <ul className='Tech-list'>
      {props.techList}
    </ul>
   :null }
  </div>
  </div>

  )
}

export default projectTemplate

