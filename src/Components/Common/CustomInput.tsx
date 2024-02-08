import React from 'react';

const CustomInput = (props:any) => {
    const { label , placeHolderText , type } = props
    return (
        <div  className='text-black text-[20px] 
        flex flex-col items-start w-[100%] xl:w-[302px]'>
            <span className='pr-1 mb-1'>{label}</span>
            <input type="text" placeholder={placeHolderText} 
            className='w-full border border-[#CACACA] h-[56px] rounded-[16px] px-3
            placeholder:text-[#D9D9D9] placeholder:text-[20px]' />
        </div>
    );
};

export default CustomInput;