import React from 'react'

interface Props {
    value: string;
    handleChange: Function;
    inputType: string;
    name: string;
    placeHolder: string;
    style?: object;
    isTextArea: boolean;
}

const CustomInput = ({ value, handleChange, inputType, name, placeHolder, style = {}, isTextArea }: Props) => {
  if(isTextArea) {
    return (
      <textarea 
            required
            value={value}
            onChange={handleChange}
            rows={10}
            name={name}
            placeholder={placeHolder}
            className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-zinc-600 bg-[#222] font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] w-[80%] h-[200px]'
          />
    )
  } else {
    return (
      <input 
          className='py-[10px] sm:px-[25px] px-[10px] outline-none border-[1px] border-zinc-600 bg-[#222] hover:bg-[#555] font-epilogue text-white 
          text-[14px] placeholder:text-[#4b5264] placeholder:font-thin rounded-[10px] transition-all duration-300 ease-in-out h-[70px] my-[10px] w-[80%]' 
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
}

export default CustomInput;