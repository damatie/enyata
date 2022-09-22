import React from 'react'
import logo from '../assets/logo.svg'
import { Link, useLocation, } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { sideNavLinks } from '../utils/Constants';

export const SideNav = ({ navList, }) => {
  const location = useLocation();
  // console.log(location.pathname)

  return (
    <>
      <nav className=' flex w-full py-4 xl:w-10/12 max-w-screen-2xl mx-auto mb-3'>
        <div className=" w-full cursor-pointer py-5">
        <p className=" w-full">
           <img src={logo} alt="Logo" width={'107'} className=" mx-auto" />
          </p>
          <div className=' mt-10'>
            <ul>
              <li className=' mb-14'>
                <Link to={'/dashboard'}>
                  <p className={`flex text-white space-x-4 
                  ${location.pathname === '/dashboard' ? 'bg-primaryBlue' : ''} ${location.pathname.startsWith("/film") ? 'bg-primaryBlue' : ''}  py-[12px] px-6 rounded-[4px]`}>
                    <Icon
                      icon="bxs:grid-alt"
                      style={{ fontSize: '22px' }}
                    />
                    <span className=' text-base font-semibold'>
                      Overview
                    </span>
                    
                  </p>
                </Link>
              </li>
              {sideNavLinks && sideNavLinks.map((link, index) => (
                <li key={index}>
                <Link to={link.url}>
                    <p className={`flex text-white space-x-4 ${location.pathname === link.url ? 'bg-primaryBlue' : ''}${location.pathname.startsWith(link.child) ? 'bg-primaryBlue' : ''} py-[12px] px-6 rounded-[4px]`}
                    >
                    <Icon
                      icon={link.icon}
                      style={{ fontSize: '18px', marginTop:'3px', color:link.color }}
                    />
                    <span className=' text-base font-semibold -pt-[4px] '>
                      {link.name}
                    </span>
                    
                  </p>
                </Link>
                </li>
              ))}
              
            </ul>
          </div>
      </div>
      </nav>
    </>
  )
}