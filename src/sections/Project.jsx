import { useRef} from 'react'
import { LoadingManager } from 'three';
import { ProjectTemplate} from '../components';

const Project = () => {
  
  const title='Mapping Robot' 
  const img="/Project_assets/cargif.webp"
  const text="This project was an Autonomous RC Car that is controlled by a radio transmitter. It could be controlled by the remote control or self driven ,its distinguishing feature is that it maps out the room its placed in ."
  const techList=[<li>NRF24L01</li>,<li>HC-SR04</li>]
  const title2="E-commerce site"
  const img2="/Project_assets/e-commerce.gif"
  const text2=' The objective of this project was to learn about Sanity and build a scalable E-commerce site , Which I did through Next js framework ,I used Stripe to handle the payments system and sFirebase to load/manage user data'
  const techList2=[<li>Next.js</li>,<li>Firebase</li>,<li>Stripe</li>,<li>Sanity</li>]
  const title3 ='Css Clone Website'
  const img3 ="/Project_assets/clone_css.gif"
  const text3=["This project was a learning experience to see if I could replicate the visuals of this ",<a href='https://dribbble.com/shots/18896349-SkillUp-Online-Training-Platform'>site </a>, " .My objective was to improve my css skills without inspecting the page."]
  const techList3=[<li>Html</li>,<li>Node.js</li>,<li>Css</li>]
  
  return (
  
    <div className='project' id='projects'>
         <div className='name'><h1 className='hoverHeader' >P</h1><h1 className='hoverHeader' >r</h1><h1 className='hoverHeader' >o</h1><h1 className='hoverHeader'>j</h1>
      <h1 className='hoverHeader'>e</h1><h1 className='hoverHeader'>c</h1>
       <h1  className='hoverHeader '>t</h1><h1 className='hoverHeader'>s</h1>
      </div>
        <h3>Here is some things I’ve built :</h3>
        <div className='mobile-column'>
        <ProjectTemplate img ={img} text={text} title={title} techList={techList}/>
        <ProjectTemplate img ={img2} text={text2} title={title2} techList={techList2}/>
        <ProjectTemplate img ={img3} text={text3} title={title3} techList={techList3}/>
        
        <ProjectTemplate img ={'waiting.jpeg'}  title={"more coming soon"}/>
        </div>
    </div>
   
  )
}

export default Project