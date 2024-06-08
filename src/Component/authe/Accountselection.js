import React from 'react'
import  logo from '../images/logo free.png'
import { Icon } from '@iconify/react';

const Accountselection =()=> {
  return (
    <>
    <div className='w-100 d-flex justify-content-center d-flex align-items-center'>

    <div className='back-selector shadow-sm p-3 mb-5  rounded'>

        <div className='backselector-text'>
            <div className='backselector-image'>
            <Icon icon="ep:arrow-left-bold" width="16px" height="26px"  style={{color: 'black'}} />
                <img src={logo} alt=""/>
            </div>

            <div className='selector-text'>
                <h1>Get your profile started</h1>
            </div>

            <div className='selector-texts'>
                <p>Add a username that's unique to you, this is how you'll appear to others.</p>
            </div>
            <div className='selector-text3'>
                <h5>You can't change your username, so choose wisely</h5>
            </div>

            <div className='selector-input'>
                <h1>Choose a username</h1>
                <input type="text" placeholder='eg:keney34,john-smith,karimot....'/>
                <p>Build trust by using your full name or business name</p>
            </div>

            <div className='selector-button'>
              <button> Create my account</button> 
            </div>

        </div>

    </div>

    </div>
    
    </>
  )
}

export default Accountselection