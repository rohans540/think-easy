import React from 'react'

interface Props {
    value: string;
    handleChange: Function;
    inputType: string;
    name: string;
    placeHolder: string;
    style?: object
}

const CustomInput = ({ value, handleChange, inputType, name, placeHolder, style = {} }: Props) => {
  return (
    <input 
        className='py-[10px] sm:px-[25px] px-[10px] outline-none bg-[#222] hover:bg-[#555] font-epilogue text-white 
        text-[14px] placeholder:text-[#fff] placeholder:font-thin rounded-[10px] sm:min-w-[300px] transition-all duration-300 ease-in-out h-[70px] my-[10px] w-[500px]' 
        required
        value={value}
        onChange={handleChange}
        type={inputType}
        name={name}
        placeholder={placeHolder}
        style={style}
    />
  )
}

export default CustomInput;