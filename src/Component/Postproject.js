import React from 'react';
import makeitreal from '../Component/images/make-it-real.webp';
import  logo from './images/logo free.png'
import { Icon } from '@iconify/react';



const Postproject =() =>{
  return (
    <> 
    
    <div className='post-background'>
      
      <div className='post-backtext'>
        
        <div className='postallinfo'>

            <div className='post-logo'>
              <img src={logo} alt="" />
            </div>

            <div className='post-text'>
              <h1>Tell us what you need <span>done.</span></h1>
            </div>

            <div class="post-textarea">
              <textarea placeholder="I'm looking for ..."  ></textarea>
            </div>

            <div className='post-button'>
              <button>Let's go!</button>
            </div>

         
            <div className='post-list'>

             <div className='post-list-icon'>
             <Icon icon="ri:checkbox-circle-fill" width="30px" height="25px"  style={{color: '#ea268b'}} />
             <p>Post projects up to $10 million</p>
             </div>
            
          
              
              <div className='post-list-icon'>
              <Icon icon="ri:checkbox-circle-fill" width="30px" height="25px"  style={{color: '#ea268b'}} />
              <p>Contact skilled freelancers within minutes</p>
              </div>
              
              <div className='post-list-icon'>
              <Icon icon="ri:checkbox-circle-fill" width="30px" height="25px"  style={{color: '#ea268b'}} />
              <p>Pay only when you are 100% satisfied</p>
              </div>
             
            </div>

        </div>
  
      </div>

      <div className='post-backimages'>
          <div className='post-makeitreal'>
            <img src={makeitreal} alt="" />
          </div>
      </div>

    </div>

    </>
  )
}

export default Postproject