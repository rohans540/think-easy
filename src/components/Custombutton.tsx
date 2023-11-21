import React from 'react'

interface Props {
    btnType: any;
    title: string;
    handleClick: any;
    styles?: string;
    disabled?: boolean;
}

const Custombutton = ({ btnType, title, handleClick, styles = '', disabled = false }: Props) => {
    return (
      <button
        type={btnType}
        className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white px-5 rounded-[10px] my-[10px] ${styles}`}
        onClick={handleClick}
        disabled={disabled}
      >
          {title}
      </button>
    )
  }

export default Custombutton;