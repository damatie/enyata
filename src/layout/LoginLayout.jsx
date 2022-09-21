import React from 'react'
import logo from '../assets/logo.svg'

export const LoginLayout = ({children}) => {
  return (
    <>
      <div className=' w-full flex h-screen'>
        <div className=' w-[480px] h-screen bg-primary flex  justify-center  my-auto o '>
            <img src={logo} alt="Logo" width={'385'} />
        </div>
        <div className=' flex flex-1 w-full'>
          {children}
        </div>
      </div>
    </>
  )
}