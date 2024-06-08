import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


const Profilenavbar =() =>{
  return (
    <>
     <div className='Profilenavbar'>

      <div className='profilenavbar-text'>
        <div className='Link-mya'>
            <Link className='Link-text'>My Account</Link>
          </div>
          <div className='Link'>
          <Link  className='Link-texts'>My Profile</Link>
          </div>
          <div className='Link'>
          <Link to={"/profile/EditProfile"}  className='Link-texts'>Edit Profile</Link>
          </div>
          <div className='Link'>
          <Link to={"/profile/DelectAccount"} className='Link-texts'>Delect Account</Link>
          </div>
      </div>

      <div className='profilenavbar-text2'>
        <div className='linkalls'>
        <div className='Link-mya'>
            <Link className='Link-text'><Icon icon="fluent-mdl2:storage-acount" width="20" height="20"  style={{color: 'white'}} /></Link>
          </div>
          <div className='Link'>
          <Link  className='Link-texts'><Icon icon="iconamoon:profile-circle-duotone" width="25" height="25"  style={{color: 'white'}} /></Link>
          </div>
          <div className='Link'>
          <Link className='Link-texts'><Icon icon="lucide:edit" width="25" height="25"  style={{color: 'white'}} /></Link>
          </div>
          <div className='Link'>
          <Link className='Link-texts'><Icon icon="icon-park-outline:email-delect" width="25" height="25"  style={{color: 'white'}} /></Link>
          </div>
          </div>
      </div>

     </div>
    </>
   
  )
}

export default Profilenavbar