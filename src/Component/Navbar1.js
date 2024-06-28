import React, { useEffect, useState } from 'react';
import logopro from "./image2/logo_pro-removebg-preview.png";
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar1 = () => {
  const [getUser, setGetUser] = useState({});
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
    console.log('User ID from localStorage:', userId);

    if (userId) {
      axios.get(`http://localhost:5001/Api/users/getuser/${userId}`)
        .then((res) => {
          console.log('API response:', res.data);
          setGetUser(res.data); 
        }).catch((error) => {
          console.error('Error fetching user data:', error);
        });
    } else {
      console.error('No user ID found in localStorage');
    }
  }, []);

  useEffect(() => {
    console.log('getUser state:', getUser.usernames);
  }, [getUser]);

  return (
    <div className='navbar1'>
      <div className='logopro'>
        <img src={logopro} alt="Logo" />
        <div>
          <h1>Find job</h1>
        </div>
        <div>
          <h1>About us</h1>
        </div>
      </div>

      <div className='nav-texts'>
        <div>
          <p>
            <Icon icon="ph:folder-open-thin" width="25" height="25" style={{ color: "white" }} />
            <span>Notification</span>
          </p>
        </div>

        <div>
          <button className='post'>Post project</button>
        </div>

        <div className='profile-dd'>
          <button onClick={handleProfileClick} className='profile'>
            <Icon icon="ion:person-circle-outline" width="25" height="25" style={{ color: "white" }} />
            <span>{ getUser.usernames}</span>
          </button>
            <div className='profile-dropdown'>
              <button>My Dashboard</button>
              <div>
                <h1>My account</h1>
                <button>Profile</button>
                
              </div>
            </div>

        </div>

        <div>
          <button className='buttlines'>
            <Icon icon="el:lines" width="20" height="20" style={{ color: 'white' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
