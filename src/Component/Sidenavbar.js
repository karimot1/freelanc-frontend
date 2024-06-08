import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Sidenavbar =() => {
  return (
    <>

        <div  className='sidenav'>
          <div className='side-link'>
          <div className='Links'>
            <Link className='Link-text'>Dashboard</Link>
          </div>
          <div className='Link'>
          <Link  className='Link-texts'>Applied Jobs</Link>
          </div>
          <div className='Link'>
          <Link className='Link-texts'>Created Jobs</Link>
          </div>
          <div className='Link'>
          <Link className='Link-texts'>Job Applicants</Link>
          </div>
          <div className='Link'>
          <Link className='Link-texts'>Analytics</Link>
          </div>
          </div>

          <div className='sidenav2' >
          <div className='linkalls'>
        <div className='Link-home'>
            <Link className='Link-text'><Icon icon="ri:home-2-fill" width="25" height="25"  style={{color: "white"}} /></Link>
          </div>
          <div className='Link-text1'>
          <Link  className='Link-texts'><Icon icon="iconamoon:profile-circle-duotone" width="25" height="25"  style={{color: 'white'}} /></Link>
          </div>
          <div className='Link-text1'>
          <Link className='Link-texts'><Icon icon="lucide:edit" width="25" height="25"  style={{color: 'white'}} /></Link>
          </div>
          <div className='Link-text1'>
          <Link className='Link-texts'><Icon icon="clarity:form-line" width="25" height="25"  style={{color: 'white'}} /></Link>
          </div>
           <div className='Link-text1'>
          <Link className='Link-texts'><Icon icon="icon-park-solid:market-analysis" width="25" height="25"  style={{color: 'white'}} /></Link>
          </div>
          </div>
      </div>

      

        </div>
        
    </>
  )
}

export default Sidenavbar