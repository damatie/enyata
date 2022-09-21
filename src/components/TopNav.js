import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import useIcon from '../assets/account.svg'
import { color } from '@mui/system';

export const TopNav = ({ navList,isBack=false, onClick }) => {

  return (
    <>
      <nav className={`flex w-full py-[18px] h-[64px] xl:w-full max-w-screen-2xl mx-auto  bg-white shadow-md justify-center ${isBack? 'md:justify-between': 'md:justify-end'}  px-3 md:px-10`}>
       {isBack&& <div className=' flex cursor-pointer' onClick={onClick}>
          <Icon
            icon="eva:arrow-ios-back-fill"
            style={{ fontSize: '22px', marginTop:'1',  color:'#333758' }}
          />
          <p className=' text-base'>
            Back
          </p>
        </div>}
        <div className=' flex justify-evenly'>
          <Icon
            icon="ooui:bell-outline"
            style={{ fontSize: '22px', marginTop:'3', cursor:'pointer', color:'#333758' }}
          />
          <div className=' flex px-8 border-l-2 border-gray-300 ml-8 gap-6  text-textColor1 text-[15px] cursor-pointer'>
             <img src={useIcon} alt="user" width={'30'} className=" mx-auto" />
            <p>
              John Doe
            </p>
          </div>
           <Icon
            icon="fluent:more-horizontal-16-regular"
            style={{ fontSize: '22px', marginTop:'3', color:'#C4C4C4', cursor:'pointer' }}
          />


        </div>
      </nav>
    </>
  )
}