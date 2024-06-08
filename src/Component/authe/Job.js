import React from 'react'
import  logo from '../images/logo free.png'
import work from "../images/work.svg"
import hire from "../images/hire.svg"
import { Icon } from '@iconify/react';


const Job=() =>{
  return (
    <>
    <div className='w-100 d-flex justify-content-center d-flex align-items-center'>

    <div className='backjob-selector shadow-sm p-3 mb-5  rounded'>

        <div className='backselector-text'>
            <div className='backselector-image'>
            <Icon icon="ep:arrow-left-bold" width="16px" height="26px"  style={{color: 'black'}} />
                <img src={logo} alt=""/>
            </div>
            <div className='backjob-text'>
                <h1>Select account type</h1>
                <p>Don't worry, this can be changed later.</p>
            </div>

            <div className='backjob-work'>
                <button className=' shadow-sm p-3 mb-5  rounded'>
                    <img src={work} alt="" />
                    <p>I want to work</p>
                    <Icon icon="ph:arrow-right-bold" width="16" height="16"  style={{color: 'black'}} />
                </button>
            </div>

            <div className='backjob-hiring'>
            <button className=' shadow-sm p-3 mb-5  rounded'>
                    <img src={hire} alt="" />
                    <p>I want to hire</p>
                    <Icon icon="ph:arrow-right-bold" width="20" height="16"  style={{color: 'black'}} />
                </button>
            </div>

        </div>

    </div>

    </div>
    
    </>
  )
}

export default Job