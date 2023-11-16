import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Custombutton, Custominput } from '../components';
import { SIGNUP_ROUTE } from '../constants';

const initialState = {
  email: "",
  password: ""
}

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }))
  }

  return (
    <div className='flex flex-col items-center w-[40%]
    h-[80%] border-[1px] border-zinc-600 absolute left-[30%] top-[10%] bg-[#1b1a1a] rounded-lg'>
      <div className='text-[#dce1e3] text-4xl font-bold pt-5 w-full h-[50px] my-[50px]'>LOGIN</div>
      <form className='flex flex-col items-center w-full'>
      <Custominput 
        value={form.email}
        handleChange={handleFormChange}
        inputType="text"
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
        title="Login"
        handleClick={() => {}}
        styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[500px] mt-[70px] font-epilogue"
      />
      </form>
      <div className='flex justify-around items-center mt-4'>
                <span className='text-white font-epilogue text-[14px]'>
                        Don't have an account? &nbsp;
                        <span 
                          className='text-[#874ce8] text-[14px] hover:text-white transition-all duration-500 ease-in-out cursor-pointer'
                          onClick={() => navigate(SIGNUP_ROUTE)}
                        >
                            Sign Up now
                        </span>
                </span>
        </div>
    </div>
  )
}

export default Login;