import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Custominput, Custombutton } from './index';
import { closeIcon } from '../assets';
import { createPost } from '../store/app.slice';

const initialState = {
    title: '',
    content: ''
}

const CreatePost = ({ isOpen, setIsOpen }: any) => {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setForm((form) => ({ ...form, [name]: value }));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(createPost({ ...form }))
    }

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-opacity-30 bg-[#222] backdrop-blur-sm z-50 
        ${isOpen ? 'transition-opacity duration-300 opacity-100' : 'transition-opacity duration-300 opacity-0 pointer-events-none'}`}>

        <div className='flex flex-col items-center w-[40%]
            h-[80%] border-[1px] border-zinc-600 absolute left-[30%] top-[10%] bg-[#1b1a1a] rounded-lg'>
                <div className='flex justify-center items-center rounded-full w-[32px] h-[32px] ml-[90%] mt-4 hover:grayscale-2'>
                    <img 
                        src={closeIcon}
                        alt='close'
                        className='w-[20px] h-[20px] cursor-pointer'
                        onClick={() => setIsOpen(false)}
                    />

            </div>
            <div className='text-[#dce1e3] text-4xl font-bold pt-5 w-full h-[50px] my-[50px]'>CREATE POST</div>
            <form className='flex flex-col items-center w-full' onSubmit={handleSubmit}>
                <Custominput 
                    value={form.title}
                    handleChange={handleFormChange}
                    inputType="text"
                    name="title"
                    placeHolder="Title"
                />
                <Custominput 
                    value={form.content}
                    handleChange={handleFormChange}
                    inputType="text"
                    name="content"
                    placeHolder="Content..."
                    isTextArea
                />
                <Custombutton 
                    btnType="submit"
                    title="Submit"
                    handleClick={handleSubmit}
                    styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[80%] mt-[70px] font-epilogue"
                    disabled={!form.title || !form.content}
                />
            </form>
        </div>
    </div>
  )
}

export default CreatePost