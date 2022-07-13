import { useRef} from 'react'
import { LoadingManager } from 'three';
import { ProjectTemplate} from '../components';

const Project = () => {
  const title='Mapping Robot'
  const title2="Flutter App"
  const img="ARDUINO.PNG"
  const img2="flutterlogo.png"
  const text="an Arduino based Mapping Robot which automatically draws and  avoids the area around it "
  const text2='A flutter based Project that store user variable with the help of firebase'
  return (
    <div className='project' id='projects'>
         <div className='name'><h1 className='hoverHeader' >P</h1><h1 className='hoverHeader' >r</h1><h1 className='hoverHeader' >o</h1><h1 className='hoverHeader'>j</h1>
      <h1 className='hoverHeader'>e</h1><h1 className='hoverHeader'>c</h1>
       <h1  className='hoverHeader '>t</h1><h1 className='hoverHeader'>s</h1>
      </div>
        <h3>Here is some things I’ve built :</h3>
        <div className='mobile-column'>
        <ProjectTemplate img ={img} text={text} title={title}/>
        <ProjectTemplate img ={img2} text={text2} title={title2}/>
        
        <ProjectTemplate img ={'waiting.jpeg'}  title={"more coming soon"}/>
        </div>
    </div>
  )
}

export default Project