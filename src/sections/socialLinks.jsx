import React from 'react'
import { FiGithub,FiInstagram,FiLinkedin,FiMenu,FiX} from "react-icons/fi";

const socialLinks = () => {
  return (
    <div className='socialLinks'>
        <ul >
          <li><a href="https://www.instagram.com/haimgod_/"><FiInstagram/></a></li>
          <li><a href="https://www.linkedin.com/in/ngozi-nwabiani-13652a217/"><FiLinkedin/></a></li>
          <li><a   href="https://github.com/Gozi1"><FiGithub/></a></li>
        </ul>
    </div>
  )
}

export default socialLinks