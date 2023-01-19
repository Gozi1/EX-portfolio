
import './App.css'
import { Home,Project,About,Contact,Footer} from './sections'
import { Outlet, Link } from "react-router-dom";


function App() {
  
 

  return (
    <div className='appDiv'>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
