import React from 'react'
import logos from '../images/logo free.png'
import { Link } from 'react-router-dom'

const Signup =()=> (
  <>
    <div className='sign-back'>

      <div className='sign-cover'>

        <div className='sign-content'>

          <div className='sign-logo'>
            <img src={logos} alt="" />
          </div>

          <div className='sign-all'>
            <div className='sign-text'>
              <h1>Sign up</h1>
            </div>

            <div className='sign-facebook'>
              <h1>Continue with Facebook</h1>
            </div>

            <div className='sign-or'>
              <div className='sign-orback'>
                OR
              </div>
            </div>

          </div>

          <div className='sign-inputs'>

            <div className='inputs'>

              <div className='input1'>
                <input type="text" placeholder='First Name' />
              </div>

              <div className='input2'>
                <input type="text" placeholder='Last Name' />
              </div>

            </div>

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
            <div className='term'>
              <small>I agree to the Freelancer <a href="">User Agreement</a> and <a href="">Privacy Policy</a> .</small>
            </div>

          </div>

          <div className='subsmit'>
            <button>Join Freelancers</button>
          </div>

          <div className='line'>
            <div className='sign-or'></div>
          </div>

          <div className='account'>
            <small>Already have an account?</small>
            <Link>Login</Link>
          </div>
        </div>



      </div>

    </div>
  </>
)

export default Signup