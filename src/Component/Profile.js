import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState({});
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Skills, setSkills] = useState('');
  const [sCategories, setSCategories] = useState('');
  const [Salary, setSalary] = useState('');
  const [Education, setEducation] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [AboutMe, setAboutMe] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userDetails'));
    if (storedUser) {
      setFirstName(storedUser.FirstName || '');
      setLastName(storedUser.LastName || '');
      setEmail(storedUser.Email || '');
      // Add other fields as necessary
    }
  }, []);

  const handleProfileClick = async (ev) => {
    ev.preventDefault();
    const UserDetails = {
      images,
      FirstName,
      LastName,
      Email,
      Skills,
      sCategories,
      Salary,
      Education,
      workExperience,
      AboutMe,
    };

    try {
      const Profileresponse = await axios.post("http://localhost:5001/Api/profile/uploadprofile", UserDetails);
      console.log(Profileresponse);

      if (Profileresponse.data.status === 'success') {
        // Redirect to my account page or show success message
        toast.success("Profile Informtion created successful!");
      } else {
        // Handle server error response
        console.error('Profile update failed');
        toast.error("profile information failed. Please try again.");
      }
    } catch (error) {
      toast.error("Error uploading profile");
      console.error('Error uploading profile:', error);
    }
  };

  const ChooseImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImages(reader.result);
    };
  };

  return (
    <div className='w-100'>
      <form onSubmit={handleProfileClick}>
        <div className='profilepage'>
          <div className='profileback'>
            <div className='profile-content'>
              <div className='profile-file'>
                <input onChange={ChooseImg} type="file" />
              </div>
              <div className='profit-inputs'>
                <div className='profit-input'>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='profit-input'>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className='profit-input'>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='profit-input'>
                  <label htmlFor="skills">Skills</label>
                  <input
                    type="text"

                    onChange={(e) => setSkills(e.target.value)}
                  />
                </div>
                <div className='profit-input'>
                  <label htmlFor="skillsCategories">Skills Categories</label>
                  <input
                    type="text"

                    onChange={(e) => setSCategories(e.target.value)}
                  />
                </div>
                <div className='profit-input'>
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="text"
                    placeholder='$/N'
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
                <div className='profit-input'>
                  <label htmlFor="aboutMe">About Me</label>
                  <textarea
                    placeholder='Give a short overview of your career history and skills.'

                    onChange={(e) => setAboutMe(e.target.value)}
                  />
                </div>
                <div className='profit-input'>
                  <label htmlFor="workExperience">Work Experience</label>
                  <textarea
                    placeholder='Add your Work Experience. Such as an internship, part-time work or long term specialised experience.'

                    onChange={(e) => setWorkExperience(e.target.value)}
                  />
                </div>
                <div className='profit-input'>
                  <label htmlFor="education">Education</label>
                  <textarea
                    placeholder='List your qualifications here.'
                    onChange={(e) => setEducation(e.target.value)}
                  />
                </div>
                <div className="profits-input">
                  <button type='submit'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
