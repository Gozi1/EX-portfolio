import { useRef} from 'react'
import React from 'react'

const About= () => {
  
    
    
  
  return (
    <div className="about" id="about">
      <div className='name'><h1 className='hoverHeader' >A</h1><h1 className='hoverHeader'>b</h1><h1 className='hoverHeader'>o</h1>
      <h1 className='hoverHeader'>u</h1><h1 className='hoverHeader'>t</h1>
     <h1 style={{marginLeft: "30PX"}} className='hoverHeader '>m</h1><h1 className='hoverHeader'>e</h1>
      </div>
      
      <p>Hello! the name's Ngozi and I love creating and re-imagining things that live on the internet.
              I have finished my degree in computer engineering and lately I have taken a serious passion for web design/development into a career.
               My main focus when working on projects is how can I make this user-friendly but also unique.    </p>
               
      <p>I'm well-organised ,a problem solver with high attention to detail. I absolutely love learning new things,I read manga mainly the psychological and Isekai kinds.
        I am very Interested in the entire frontend spectrum because I will get to working on ambitious projects with like minded individuals </p>
              {/* <div className="imageBorder"><img  src = "starabout.jpg" alt="star"/></div>  */}
    </div>
  );
}
export default About