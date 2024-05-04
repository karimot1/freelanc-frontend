import React from 'react'
import {Link} from "react-router-dom"
import logo from './images/logo free.png'
import Navbar2 from './Navbar2'

const Navbar1  = ()=> {
  return (
    <>
    <div className='navbar'>

        <div className='image'>
        <img src={logo} alt="" />
          <Link className='link'>How it Works</Link>   
            <Link className='link'>Browser jobs</Link>
        </div>

        <div className='auth'>
            <button className='butt'>Login</button>
            <button className='butt'>Sign up</button>
            <button className='post'>Post a project</button>
        </div>
       
    </div>

  <div> <Navbar2 /></div>  
  
    </>
  )
}

export default Navbar1