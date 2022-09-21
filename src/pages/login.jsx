import React, {useEffect, useState} from 'react'
import { LoginLayout } from '../layout/LoginLayout';
import TextField from '@mui/material/TextField';
import { Button } from '../components/form/Button';
import { useNavigate, Link } from "react-router-dom";
import { Formik } from 'formik';
import * as Yup from 'yup'


const Login = () => {
  const navigate = useNavigate();
    const userInfo = {
    email:'',
    password:'' 
  }

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string().trim().email('*Invalid email').required('*Email is required'),
    password: Yup.string().trim().required('*Password is required').length(6).matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/,
      "Must Contain 4 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
  })

  // Handle login
   const handleLogin = async (values) => {
    try {
      navigate("/dashboard");

    } catch (err){
      console.log(err)
      }
    
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
              <Formik initialValues={userInfo}
                validationSchema={validationSchema}
                onSubmit={(values, formikActions) => {
                  
                  if (values) {
                     handleLogin(values)
                  }
                  
                }}
              >
                {({ values, errors, touched, handleChange,
                  handleBlur, handleSubmit }) => {
                  console.log(errors.email)
                  const { email, password } = values
                  return <>
                    
                   <TextField
                    required
                    error={errors.email? true:false}
                    type={'email'}
                    id="email"
                    value={email}
                    label="Email Address"
                    placeholder='Email Address'
                    sx={{ width: '100%' }}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    />
                    <span className=' text-xs text-red-400'>{touched.email && errors.email}</span>
                  
                  <TextField
                    required
                    error={errors.password? true:false}
                    type={'password'}
                    value={password}
                    id="pwd"
                    label="Password"
                    placeholder='*******'
                    sx={{ width: '100%' }}
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    />
                    <span className=' text-xs text-red-400'>{touched.password && errors.password}</span>
                  <Button
                    onClick={handleSubmit}
                    label={'Log in'}
                    styleBtn={'bg-primaryBlue  h-[48px] w-full text-base' }
                    />
                  </>
                }}
             

              </Formik>
              
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