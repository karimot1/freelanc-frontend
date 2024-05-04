import React from 'react'
import amazon from "./images/amazon_logo2-darkmode.svg"
import facebook from "./images/facebook-corporate-logo2-darkmode.svg"
import deloitte from './images/deloitte-logo2-darkmode.svg'
import nasa from './images/nasa-logo3.svg'
import ibm from './images/ibm-logo2-darkmode.svg'
import airbus from './images/airbus-logo2-darkmode.svg'
import telster from './images/telstra-logo-darkmode.svg'
import fujitsu from './images/fujitsu-logo-darkmode.svg'
import google from './images/google-logo.svg'
import logo from './images/logo free.png'
import { Link } from 'react-router-dom'



const Navbar2 = ()=> {
  return (
    <>

<div className='navbar'>

<div className='navbarall'>

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

</div>
    
    <div className='navbar2'>

    

      <div className='dropdown'>

        <div className='ddbutton'>
          <button className='find'>Find jobs</button>

          {/* <div className='ddfindjob'>

            <div className='ddbutt'>
               <button>By Skill</button>
               <div className='ddbyskill'>
               <p>Find Graphic Design Jobs</p>
               <p>Find Website Jobs</p>
               <p>Find Mobile App Development Jobs</p>
               <p>Find Software Development Jobs</p>
               <p>Find Internet Marketing Jobs</p>
               <p>Find Data Entry Jobs</p>
               <p>Find SEO Jobs</p>
               <p> Writing Jobs</p>
               <p>Find Legal Jobs</p>
               <p>Find Finance Jobs</p>
               <p>Find Manufacturing Jobs</p>
               <p>Find Logistics Jobs</p>
               </div>
               </div>
               
               <div>
                <button>By Language</button>
               </div>
               
               <div>
                <button>Featured Jobs</button>
               </div>

               <div>
                <button>Find Contests</button>
               </div>

          </div> */}

          </div>

          <button className='hire'>Hire freelancers</button>
          
          <button className='find'>Get ideas</button>


          <button className='find'>About</button>
       

          <button className='find'>Resources</button>
      


    </div>

    </div>



    <div className='background1'>

          <div className="alltext">
        <div className='backhire'>
        <h1>Hire the best freelancers for any job, online.</h1>
          </div>  
     
          <div className='list'>
         
          <div className='icon'>
             {/* <Icon icon="tabler:home-dot"  style={{color: "white"}} /> */}
            <p>World's largest freelance marketplace</p>
          </div>

          <div className='icon'>
            <p>Any job you can possibly think of</p>
          </div>
          
          <div className='icon'>
            <p>Save up to 90% & get quotes for free</p>
          </div>

          <div className='icon'>
            <p>Pay only when you're 100% happy</p>
          </div>

          </div>

          
            <button className='hirebutton'>Hire a Freelancer</button>
            <button className='hirebuttons'>Earn Money Freelancing</button>
      
          </div>
    </div>

    <div className="background2">
          
          <div className='back-logos'>
           <div className='back-asusedby'>
            <h1>As used by</h1>
           </div>
           <div className='back-imagelogo'>

            <div className='amazon'>
            <img src={amazon} alt=""   />
            </div>

              <div className='amazon'>
            <img src={facebook} alt="" />
            </div>

              <div className='amazon'>
            <img src={deloitte} alt="" />
            </div>

            <div className='amazon'>
            <img src={nasa} alt="" />
            </div>

            <div className='ibm'>
            <img src={ibm} alt=""  />
            </div>

              <div className='amazon'>
            <img src={airbus} alt="" />
            </div>

            <div className='amazon'>
            <img src={telster} alt="" />
            </div>

            <div className='amazon'>
            <img src={fujitsu} alt="" /> 
            </div>

            <div className='amazon'>
            <img src={google} alt="" />
                </div>

              </div>

          </div>

          <div className='back-make-real'>

            <div className='back-withfree'>

              <div className='back-coverall'>
                
                <div className='back-h1span'>
                  <h1><span>Make it real</span> with Freelancer</h1>
                </div>

                <div className='back-covertext'>
                  
                  <div className='back-portfolios'>
                    <h2>The best talent</h2>
                    <p>Discover reliable professionals by exploring their portfolios and immersing yourself in the feedback shared on their profiles.</p>
                  </div>

                  <div className='back-portfolios'>
                    <h2>Fast bids</h2>
                    <p>Get quick, no-obligation quotes from skilled freelancers. 80% of jobs receive bids within 60 seconds. Your idea is just moments from reality.</p>
                  </div>

                  <div className='back-portfolios'>
                    <h2>Quality work</h2>
                    <p>With Freelancer's talent pool of over 60 million professionals at your fingertips, you'll find quality talent to get what you need done</p>
                  </div>

                  <div className='back-portfolios'>
                    <h2>Be in control</h2>
                    <p>Stay in the loop while on the move. Chat with your freelancers and get real time updates with our mobile app. Anytime, anywhere.</p>
                  </div>

                </div>

                <div className='makeyourdreamsareality'>
                  <h1>Make your dreams a reality.</h1>
                  <button>Get started now</button>
                </div>

</div>

              <div className='back-chatimage'>
                  <img src="" alt="" />
              </div>

            </div>

          </div>
    </div>
    </>
  )
}

export default Navbar2