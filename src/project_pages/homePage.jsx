import React from 'react'
import { Home,Project,About,Contact } from '../sections'
const homePage = () => {
  return (
    <div className='appDiv'>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        </div>
  )
}

export default homePage