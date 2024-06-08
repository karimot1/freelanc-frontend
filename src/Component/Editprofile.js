import React from 'react'

const Editprofile = () => {
  return (
    <>
    
    <div className='w-100'>
     
      
    <div className='profilepage'>
        
        <div className='profileback'>

            <div className='profile-content'>

              <div className='profile-file'>
                <input type="file" />
              </div>


              <div className='profit-inputs'>
              <div className='profit-input'>
                <label htmlFor="">SurName</label>
                <input type="text" />
              </div>
              <div className='profit-input'>
                <label htmlFor="">Last Name</label>
                <input type="text" />
              </div>
              <div className='profit-input'>
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>

              <div className='profit-input'>
                <div className='selection'>
                <label htmlFor="">Skills</label>
                <select name="" id="">  
                  <option value="">Select any Skill of your choice</option>
                </select>
                </div>

                <div className='selection'>
                <label htmlFor="">Skills Categories</label>
                <select name="" id="">
                  <option  value="">Skills Categories</option>
                </select>
              </div>

              </div>
              <div className="profit-input">
                <label htmlFor="">Salary</label>
                <input type="text" placeholder='$/N' />
              </div>

              <div className='profit-input'>
                  <label htmlFor="">About me</label>
                    <textarea name="" id="" placeholder='Give a short overview of your career history and skills.'></textarea>
              </div>

              
              <div className='profit-input'>
                  <label htmlFor=""> Work Experience</label>
                    <textarea name="" id="" placeholder='Add your Work Experience. Such as an internship, part-time work or long term specialised experience.'></textarea>
              </div>

              <div className='profit-input'>
                  <label htmlFor="">Education</label>
                    <textarea name="" id="" placeholder='List your qualifications here.'></textarea>
              </div>
              
              <div className="profits-input">
                <button>Edit account</button>
              </div>
              </div>
            </div>

        </div>

    </div>


    </div>

    </>
  )
}

export default Editprofile