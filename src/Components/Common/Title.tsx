import React from 'react';

const Title = (props:any) => {
    const {text , font} = props
    return (
        <div className='text-[#D9D9D9] flex justify-between items-center w-full'>
            <h2  style={{ fontSize : font}} className=' xl:w-[40%]'>{text}</h2>
            <div className='xl:w-[60%] border-b-8 border-dashed border-[#EAEAEA] h-6'></div>
        </div>
    );
};

export default Title;