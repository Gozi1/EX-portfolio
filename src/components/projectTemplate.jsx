import React from 'react'
import { Link } from "react-router-dom";
function projectTemplate(props) {
  return (
    
  // <Link to={props.url}>
      <div className="bg-items">
    <div className="items" style={{backgroundImage : 'url('+props.img+')'}}>
      <div className="eleven i"></div>
      <div className="eleven ii"></div>
      <div className="eleven iii"></div>
      <div className="eleven iv"></div>
      <div className="details">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      
      </div>
    </div>
  </div>
  // </Link>
  )
}

export default projectTemplate

