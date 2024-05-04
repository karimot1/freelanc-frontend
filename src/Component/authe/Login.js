import React from 'react'

import logos from '../images/logo free.png'
import apple from '../images/apple-app-store-badge.png'
import google from '../images/google-play-store-badge.png'
import { Link } from 'react-router-dom'

const Login=()=> {
  return (
    <>
    
    <div className='sign-back'>

        <div className='sign-cover'>

          <div className='sign-content'>

            <div className='sign-logo'>
              <img src={logos} alt="" />
            </div>

            <div className='sign-all' >       
            <div className='sign-text'>
                <h1>Log in</h1>
            </div>
          
            <div className='sign-facebook'>
                    <h1>Log with Facebook</h1>
                </div>

                <div className='sign-or'>
                <div className='sign-orback'>
                    OR
                </div>
            </div>

                </div>

          <div className='sign-inputs'>

              <div className='input3'>
                <input type="email" placeholder='Email' />
              </div>

              <div className='input4'>
                <input type="password" placeholder='Password' />
              </div>

          </div>

          <div className='checkbox'>
            <div className='check'>
            <input type="checkbox" />
            </div>
           <div className='remember'>
           <small>Remember me</small>
           </div>
            
          </div>

            <div className='subsmit'>
              <button>Log in</button>
            </div>

            <div className='line'>      
            <div className='sign-or'></div>
               </div> 

               <div className='account'> 
                <small>Don't have an account?</small>
                <Link>Sign up</Link>
               </div>

                <div className='images'>               
               <div className='imagess'>
                <img src={apple} alt="" />
               </div>
               <div className='imagess'>
                <img src={google} alt="" />
               </div>
               </div>

          </div>

          

        </div>

    </div>
    
    </>
  )
}

export default Login