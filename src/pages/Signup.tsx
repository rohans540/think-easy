import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { Custombutton, Custominput, Loader } from '../components'
import { BASE_URL, LOGIN_ROUTE, POSTS_ROUTE, validations } from '../constants'
import { signupUser } from '../store/auth.slice'


const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "" 
}

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState(initialState);
    const [error, setError] = useState(initialState);
    const { authSuccess, loading } = useSelector((state: any) => state.auth);

    useEffect(() => {
        if(authSuccess) navigate(POSTS_ROUTE);
    }, [authSuccess])

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        
        if(name.includes('name')) {
          if(validations.name.test(value)) {
            setError((prev => ({ ...prev, [name]: '' })))
          }
        }
        if(name === 'email') {
          if(validations.emailRegex.test(value)) {
            setError((prev => ({ ...prev, email: '' })))
          }
        }
        if(name === 'password') {
          if(validations.password.test(value)) {
            setError((prev) => ({ ...prev, password: '' }))
          }
        }

        setForm((form) => ({ ...form, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password } = form;
        dispatch(signupUser({firstname, lastname, email, password}))
    }

    const handleOnBlur = (e: any) => {
      const { name, value } = e?.target;
      if(name.includes('name')) {
        if(!validations.name.test(value)) {
          setError((prev => ({ ...prev, [name]: 'Invalid Name' })))
        } else {
          setError((prev) => ({ ...prev, [name]: '' }))
        }
      }
      if(name === 'email') {
        if(!validations.emailRegex.test(value)) {
          setError((prev => ({ ...prev, email: 'Invalid email' })))
        } else {
          setError((prev) => ({ ...prev, email: '' }))
        }
      }
      if(name === 'password') {
        if(!validations.password.test(value)) {
          setError((prev) => ({ ...prev, password: 'Password must be of minimum 8 length' }))
        } else {
          setError((prev) => ({ ...prev, password: '' }))
        }
      }
    }

    return (
        <div className='flex flex-col items-center w-[40%]
        h-full border-[1px] border-zinc-600 absolute left-[30%] top-[10%] bg-[#1b1a1a] rounded-lg'>
          <div className='text-[#dce1e3] text-4xl font-bold pt-5 w-full h-[50px] my-[50px]'>Sign Up</div>
          <form className='flex flex-col items-center w-full'>
          <Custominput 
            value={form.firstname}
            handleChange={handleFormChange}
            inputType="text"
            name="firstname"
            placeHolder="First Name"
            error={error.firstname}
            onBlur={handleOnBlur}
          />
          <Custominput 
            value={form.lastname}
            handleChange={handleFormChange}
            inputType="text"
            name="lastname"
            placeHolder="Last Name"
            error={error.lastname}
            onBlur={handleOnBlur}
          />
          <Custominput 
            value={form.email}
            handleChange={handleFormChange}
            inputType="email"
            name="email"
            placeHolder="Email"
            error={error.email}
            onBlur={handleOnBlur}
          />
          <Custominput 
            value={form.password}
            handleChange={handleFormChange}
            inputType="password"
            name="password"
            placeHolder="Password"
            error={error.password}
            onBlur={handleOnBlur}
          />
          <Custombutton 
            btnType="submit"
            title="Sign Up"
            handleClick={handleSubmit}
            styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[80%] h-[70px] sm:min-w-[100px] mt-[70px] font-epilogue"
            disabled={!form.firstname || !form.lastname || !form.email || !form.password || error.firstname || error.lastname || error.email || error.password}
          />
          </form>
          <div className='flex justify-around items-center mt-4'>
                    <span className='text-white font-epilogue text-[14px]'>
                            Already have an account? &nbsp;
                            <span 
                                className='text-[#874ce8] text-[14px] hover:text-white transition-all duration-500 ease-in-out cursor-pointer'
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                Sign In
                            </span>
                    </span>
            </div>
            <Loader isOpen={loading} />
        </div>
      )
}

export default Signup