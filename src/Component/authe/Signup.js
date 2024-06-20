import React, { useState } from 'react';
import logopro from "../image2/logo_pro-removebg-preview.png";
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Agreetoterm, setAgreetoterm] = useState(false)

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const userDetails = {
      FirstName,
      LastName,
      Password,
      Email,
      Agreetoterm
    };

    if (!Agreetoterm) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/Api/users/sign-up", userDetails);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='sign-back'>
      <div className='sign-cover'>
        <form onSubmit={handleSubmit}>
          <div className='sign-content'>
            <div className='sign-logo'>
              <img src={logopro} alt="" />
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
                  <input onChange={(ev) => setFirstName(ev.target.value)} type="text" placeholder='First Name'/>
                </div>

                <div className='input2'>
                  <input onChange={(ev) => setLastName(ev.target.value)} type="text" placeholder='Last Name' />
                </div>
              </div>

              <div className='input3'>
                <input onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder='Email' />
              </div>

              <div className='input4'>
                <input onChange={(ev) => setPassword(ev.target.value)} type="password" placeholder='Password' />
              </div>
            </div>

            <div className='checkbox'>
              <div className='check'>
                <input type="checkbox" checked={Agreetoterm} onChange={((ev)=>setAgreetoterm(ev.target.checked))} />
              </div>
              <div className='term'>
                <small>I agree to the Indiepro <a href="">User Agreement</a> and <a href="">Privacy Policy</a>.</small>
              </div>
            </div>

            <div className='subsmit'>
              <button type='submit'>Join Indiepro</button>
            </div>

            <div className='line'>
              <div className='sign-or'></div>
            </div>

            <div className='account'>
              <small>Already have an account?</small>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
