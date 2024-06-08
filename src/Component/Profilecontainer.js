import React from 'react'
import Navbar1 from './Navbar1'
import Profilenavbar from './Profilenavbar'
import { Outlet } from 'react-router-dom'
import { Icon } from '@iconify/react';


const Profilecontainer =() =>{
  return (
    <>
    <div>
        <Navbar1 />
        <Profilenavbar />
        

        <div className='containers'>
            <Outlet />
        </div>

        <div className='background10'>
          <div className='back10all'>

            <div  className='back10-text'>

      <h1>Categories</h1>
      <p>Graphics & Design</p>
      <p>Digital Marketing</p>
      <p>Writing & Translation</p>
      <p>Video & Animation</p>
      <p>Music & Audio</p>
      <p>Fiverr Logo Maker</p>
      <p>Programming & Tech</p>
      <p>Data</p>
      <p>Business</p>
      <p>Lifestyle</p>
      <p>Photography</p>
      <p>End-to-End Projects</p>
      <p>Sitemap</p>
            </div>

            <div  className='back10-text'>
            <h1>About</h1>
            <p>Careers</p>
            <p>Press & News</p>
            <p>Partnerships</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Intellectual Property Claims</p>
            <p>Investor Relations</p>
            </div>

            <div className='back10-text'>
            <h1>Support and Education</h1>
            <p>Help & Support</p>
            <p>Trust & Safety</p>
            <p>Selling on Fiverr</p>
            <p>Buying on Fiverr</p>
            <p>Fiverr Guides</p>
            <p>Learn</p>
            <p>Online Courses</p>
            </div>

            <div className='back10-text' >
            <h1> Community</h1>
            <p>Customer Success Stories</p>
            <p>Community Hub</p>
            <p>Forum</p>
            <p>Events</p>
            <p>Blog</p>
            <p>Creators</p>
            <p>Affiliates</p>
            <p>Podcast</p>
            <p>Invite a Friend</p>
            <p>Become a Seller</p>
            <p>Community Standards</p>
            </div>

            <div  className='back10-text'>
            <h1> Business Solutions</h1>
            <p>About Business Solutions</p>
            <p>Fiverr Pro</p>
            <p>Fiverr Certified</p>
            <p>Become an Agency</p>
            <p>Fiverr Enterprise</p>
            <p>ClearVoice</p>
            <p>Content Marketing</p>

            <p>Working Not Working</p>
            <p>Contact Sales</p>
            </div>

          </div>

          <div className='back10-icon'>


            <div className='d-flex'>
            <h1>IndiePros<Icon icon="memory:circle" width="5" height="5"  style={{color: "black"}} /></h1>
            <p>© Fiverr International Ltd. 2024</p>

            </div>

            <div className='back10-but'>
              <button><Icon icon="ic:baseline-tiktok" width="25" height="20"  style={{color:"#898b92"}} /></button>
              <button><Icon icon="mdi:instagram" width="25" height="20"  style={{color:"#898b92"}} /></button>
              <button><Icon icon="mdi:linkedin" width="25" height="20"  style={{color: "#898b92"}} /></button>
              <button><Icon icon="mingcute:facebook-fill" width="25" height="20"  style={{color: "#898b92"}} /></button>
              <button><Icon icon="ri:twitter-x-fill" width="25" height="20"  style={{color:"#898b92"}} /></button>
              <div className='back10-button'>
              <button><Icon icon="material-symbols:language" width="25" height="20"  style={{color:"#898b92"}} /> English</button>
              <button><Icon icon="foundation:dollar" width="25" height="20"  style={{color:"#898b92"}} /> USD</button>
              </div>
             
            </div>
          </div>
    </div>

    </div>
    </>
  )
}

export default Profilecontainer