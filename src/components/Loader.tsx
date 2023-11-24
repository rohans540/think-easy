import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loader = ({ isOpen }: any) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-opacity-30 bg-[#222] backdrop-blur-sm z-50 
    ${isOpen ? 'transition-opacity duration-300 opacity-100' : 'transition-opacity duration-300 opacity-0 pointer-events-none'}`}>
        <MoonLoader 
            color='#874ce8' 
            cssOverride={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            loading={isOpen}
        />
    </div>
  )
}

export default Loader;