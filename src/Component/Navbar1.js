import React from 'react';
import logopro from "./image2/logo_pro-removebg-preview.png";
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const navigate = useNavigate(); // Call useNavigate as a function to get navigate

  const handleProfileClick = () => {
    navigate("/profile")
  };

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
            <span>Username</span>
          </button>
          <div className='profile-dropdown'>
            <button>My Dashboard</button>
            <div>
              <h1>My account</h1>
              <button>profile</button>
            </div>
          </div>
        </div>

        <div>
          <button className='buttlines'> <Icon icon="el:lines" width="20" height="20"  style={{color: 'white'}} /> </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
