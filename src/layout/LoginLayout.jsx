import React from 'react'
import logo from '../assets/logo.svg'

export const LoginLayout = ({children}) => {
  return (
    <>
      <div className=' w-full flex h-screen'>
        <div className=' hidden w-[480px] h-screen bg-primary md:flex  justify-center  my-auto o '>
            <img src={logo} alt="Logo" className='lg:w-[385px] w-[260px]' />
        </div>
        <div className=' flex flex-1 w-full'>
          {children}
        </div>
      </div>
    </>
  )
}