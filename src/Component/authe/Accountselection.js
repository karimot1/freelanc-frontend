import React, { useState } from 'react';
import logopro from "../image2/logo_pro-removebg-preview.png";
import { Icon } from '@iconify/react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AccountSelection = () => {
  const [username, setusername] = useState(''); // Initialize as a string
  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

   

    try {
      const userResponse = await axios.post('http://localhost:5001/Api/users/username', { username });

      console.log(userResponse);

      if (userResponse.data.status === 'success') {
        toast.success(userResponse.data.message);
        localStorage.setItem('userId', userResponse.data.userId); // Store user ID in local storage
        navigate("/dashboard");
      } else {
        toast.error("Creating Username Failed, please try again");
        navigate('/signup');
      }
    } catch (error) {
      toast.error("Username has already been used or Internal Server error. Please try again.");
      console.log("error", error);
    }
  }

  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
      <div className='back-selector shadow-sm p-3 mb-5 rounded'>
        <form onSubmit={handleSubmit}>
          <div className='backselector-text'>
            <div className='backselector-image'>
              <Icon icon="ep:arrow-left-bold" width="16px" height="26px" style={{ color: '#fff' }} />
              <img src={logopro} alt="Logo" />
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
              <input onChange={(ev) => setusername(ev.target.value)} type="text" placeholder='eg: keney34, john-smith, karimot...' />
              <p>Build trust by using your full name or business name</p>
            </div>
            <div className='selector-button'>
              <button type='submit'>Create my account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountSelection;
