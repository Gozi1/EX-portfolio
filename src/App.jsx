
import './App.css'
import { Home,Project,About,Contact } from './sections'
import { Outlet, Link } from "react-router-dom";


function App() {
  
 

  return (
    <div className='appDiv'>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    </div>
  )
}

export default App
