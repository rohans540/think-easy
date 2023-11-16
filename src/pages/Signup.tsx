import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Custombutton, Custominput } from '../components'
import { LOGIN_ROUTE } from '../constants'

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "" 
}

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState(initialState);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((form) => ({ ...form, [name]: value }));
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
            handleClick={() => {}}
            styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[500px] mt-[70px] font-epilogue"
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