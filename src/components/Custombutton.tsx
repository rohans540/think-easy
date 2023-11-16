import React from 'react'

interface Props {
    btnType: any;
    title: string;
    handleClick: any;
    styles?: string
}

const Custombutton = ({ btnType, title, handleClick, styles = '' }: Props) => {
    return (
      <button
        type={btnType}
        className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[42px] px-5 rounded-[10px] my-[10px] h-[70px] ${styles}`}
        onClick={handleClick}
      >
          {title}
      </button>
    )
  }

export default Custombutton;