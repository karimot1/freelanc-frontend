import React,{useState} from 'react'
import { Icon } from '@iconify/react';
import logopro from "../image2/logo_pro-removebg-preview.png";
import apple from '../images/apple-app-store-badge.png'
import google from '../images/google-play-store-badge.png'
import { Link } from 'react-router-dom'

const Login=()=> {
  const [Showpassword, setShowpassword] = useState(false)

  const toggleShowPassword = () => {
    setShowpassword(!Showpassword);
  };


  return (
    <>
    
    <div className='sign-back'>

        <div className='sign-cover'>
          <form className='form-content' action="">

          <div className='sign-content'>

      <div className='sign-logo'>
       <img src={logopro} alt="" />
</div>

<div className='sign-all' >       
<div className='sign-text'>
    <h1>Log in</h1>
</div>

<div className='sign-facebook'>
  <div className='sign-facebookicon'>
  <Icon icon="akar-icons:facebook-fill" width="30" height="30"  style={{color: 'white'}} />
  </div>
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
    <input  type="email" placeholder='Email' />
  </div>

  <div className='input4'>

    <div className='input4-cover'>
    <input type={Showpassword ? "text" : "password"} placeholder='Password' />
    <button onClick={toggleShowPassword} type="button">
     {Showpassword ? <Icon icon="simple-line-icons:eye" width="20" height="20"  style={{color: 'black'}} /> : <Icon icon="iconamoon:eye-off-light" width="20" height="20"  style={{color: 'black'}} />}
     </button>
  </div>

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
    <Link className='account-Link1'>Sign up</Link>
   </div>

    {/* <div className='images'>               
   <div className='imagess'>
    <img src={apple} alt="" />
   </div>
   <div className='imagess'>
    <img src={google} alt="" />
   </div>
   </div> */}

          </div>

          </form>

       

          

        </div>

    </div>
    
    </>
  )
}

export default Login