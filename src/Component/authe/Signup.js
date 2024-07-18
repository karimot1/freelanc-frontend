import React, { useState } from 'react';
import logopro from "../image2/logo_pro-removebg-preview.png";
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from "axios";
import { toast } from 'react-toastify';

const Signup = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Agreetoterm, setAgreetoterm] = useState(false);
  const [Showpassword, setShowpassword] = useState(false);

  const navigate = useNavigate(); // Correctly call useNavigate

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const userDetails = {
      FirstName,
      LastName,
      Password,
      Email,
      Agreetoterm
    };

  

    try {
      const response = await axios.post("http://localhost:5001/Api/users/sign-up", userDetails);
      console.log(response);
      if (response.data.status === 'success') {
        toast.success("Signup successful!");
        localStorage.setItem('userDetails', JSON.stringify(response.data.createUser));
        navigate('/Usernames'); // Use the navigate function
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.log(error);
    }

    if (!Agreetoterm) {
      toast.error("You must agree to the terms and conditions.");
      return;
    }
  };

  const toggleShowPassword = () => {
    setShowpassword(!Showpassword);
  };

  return (
    <div className='sign-back'>
      <div className='sign-cover'>
        <form className='form-content' onSubmit={handleSubmit}>
          <div className='sign-content'>
            <div className='sign-logo'>
              <img src={logopro} alt="" />
            </div>

            <div className='sign-all'>
              <div className='sign-text'>
                <h1>Sign up</h1>
              </div>

              <div className='sign-facebook'>
                <div className='sign-facebookicon'>
                  <Icon icon="akar-icons:facebook-fill" width="30" height="30" style={{ color: 'white' }} />
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
              <div className='inputs'>
                <div className='input1'>
                  <input onChange={(ev) => setFirstName(ev.target.value)} type="text" placeholder='First Name' />
                </div>

                <div className='input2'>
                  <input onChange={(ev) => setLastName(ev.target.value)} type="text" placeholder='Last Name' />
                </div>
              </div>

              <div className='input3'>
                <input onChange={(ev) => setEmail(ev.target.value)} type="email" placeholder='Email' />
              </div>

              <div className='input4'>
                <div className='input4-cover'>
                  <input onChange={(ev) => setPassword(ev.target.value)} type={Showpassword ? "text" : "password"} placeholder='Password' />
                  <button onClick={toggleShowPassword} type="button">
                    {Showpassword ? <Icon icon="simple-line-icons:eye" width="20" height="20" style={{ color: 'black' }} /> : <Icon icon="iconamoon:eye-off-light" width="20" height="20" style={{ color: 'black' }} />}
                  </button>
                </div>
              </div>
            </div>

            <div className='checkbox'>
              <div className='check'>
                <input type="checkbox" checked={Agreetoterm} onChange={(ev) => setAgreetoterm(ev.target.checked)} />
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
              <Link to="/login" className='account-Link1'>Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
