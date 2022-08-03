
import './App.css'
import { Home,Project,About,Contact } from './sections'
import { Outlet, Link } from "react-router-dom";


function App() {
  
 

  return (
    <div >
        <Outlet/>
    </div>
  )
}

export default App
