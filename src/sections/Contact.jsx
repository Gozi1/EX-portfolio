import { useRef} from 'react'
import React from 'react'

const Contact = () => {
  
  return (
    <div className="contact" id="contact">
       <div className='name'><h1 className='hoverHeader' >C</h1><h1 className='hoverHeader'>o</h1><h1 className='hoverHeader'>n</h1>
      <h1 className='hoverHeader'>t</h1><h1 className='hoverHeader'>a</h1>
        <h1  className='hoverHeader '>c</h1><h1 className='hoverHeader'>t</h1>
      </div>
      <p>I’m interested in freelance opportunities . 
        However, if you have any other requests or questions, please don’t hesitate to use the form.</p>
    <form id="form" action="https://api.slapform.com/splVOl1Zv" method="post">
		
    <input name="name" type="text" placeholder="NAME"/><br/>
    <input type="email" name="slap_replyto" placeholder="E-MAIL"/><br/>
    <input type="text" name="slap_subject" placeholder="SUBJECT"/><br/>
    <textarea type="text" name="message"placeholder="MESSAGE"></textarea><br/>
    <button  >GO!</button>

</form>  
    </div>
  );
}
export default Contact