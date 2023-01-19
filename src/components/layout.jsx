import React from 'react';
import Canvas from './canvas';
import NavBars from './navbars';
import {Link} from 'react-scroll'
import { SocialLinks } from '../sections';
import { Outlet } from 'react-router';

const Layout = ({ children }) => {
 
  return (
    <div className="layout">
      <div className='page-wrap'>
        <NavBars />
       
      <main className="main-container">
        {children}
        
      </main>
      <Canvas/>
      
      </div>
      
  </div>
     
  )
}

export default Layout