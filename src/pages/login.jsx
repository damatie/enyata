import React from 'react'
import { LoginLayout } from '../layout/LoginLayout';
import TextField from '@mui/material/TextField';
import { Button } from '../components/form/Button';
import { useNavigate,Link } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

   const handleLogin = () =>{ 
    navigate("/dashboard");
  }
  return (
    <LoginLayout>
      <div className='w-full my-auto '>
        <div className=' mx-auto  h-[564px] w-[467px] border   rounded-[8px] border-[rgba(164, 167, 183, 0.3)]'>
          <div className='w-[335px]  mx-auto py-[36px] h-full relative'>
            <h1 className=' text-[24px] font-semibold text-textColor1'>
            Login 
          </h1>
          <p className='  font-normal text-base text-textColor2'>
            Kindly enter your details to log in 
            </p>
            
            <div className='mt-14 flex-col  w-full space-y-8'>
              <TextField
                required
                type={'email'}
                id="email"
                label="Email Address"
                placeholder='Email Address'
                sx={{ width: '100%' }}
              />
              
              <TextField
                required
                type={'password'}
                id="pwd"
                label="Password"
                 placeholder='*******'
                sx={{ width: '100%' }}
              />
              <Button
                onClick={handleLogin}
                label={'Log in'}
                styleBtn={'bg-primaryBlue  h-[48px] w-full text-base' }
              />
              
            </div>
            <p className=' text-primaryBlue text-sm font-normal text-center pt-[24px]'>
              <Link to={'#'}>
                Forgot your password?
               </Link>
            </p>
            <p  className=' text-linkColor1 w-full text-xs absolute bottom-10  flex justify-center gap-1'>
              <span className='  underline'>
                <Link to={'#'}>
                  Privacy Policy
               </Link>
              </span>
               <span className=' text-textColor3'>and</span>
                <span className='  underline'>
                <Link to={'#'}>
                  Terms of services
               </Link>
              </span>
              
            </p>
          </div>
        </div>
      </div>
      </LoginLayout>
  )
}
export default Login