import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { Custombutton, Custominput } from '../components'
import { BASE_URL, LOGIN_ROUTE, AUTH_SIGNUP, HOME_ROUTE } from '../constants'
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
    const { signupSuccess } = useSelector((state: any) => state.auth);

    useEffect(() => {
        if(signupSuccess) navigate(HOME_ROUTE);
    }, [signupSuccess])

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((form) => ({ ...form, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password } = form;
        dispatch(signupUser({firstname, lastname, email, password}))
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
          />
          <Custominput 
            value={form.lastname}
            handleChange={handleFormChange}
            inputType="text"
            name="lastname"
            placeHolder="Last Name"
          />
          <Custominput 
            value={form.email}
            handleChange={handleFormChange}
            inputType="email"
            name="email"
            placeHolder="Email"
          />
          <Custominput 
            value={form.password}
            handleChange={handleFormChange}
            inputType="password"
            name="password"
            placeHolder="Password"
          />
          <Custombutton 
            btnType="submit"
            title="Sign Up"
            handleClick={handleSubmit}
            styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[500px] mt-[70px] font-epilogue"
            disabled={!form.firstname || !form.lastname || !form.email || !form.password}
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
        </div>
      )
}

export default Signup