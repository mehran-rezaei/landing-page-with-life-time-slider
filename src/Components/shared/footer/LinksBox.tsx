import React from 'react';

const LinksBox = (props:any) => {
    const { head , text1 , text2 , text3} = props
    return (
        <div className='w-full flex flex-col gap-y-4 text-right items-start text-[#1B1B1B] text-[20px]'>
            <h2  className='text-[24px]'>{head}</h2>
            <span>{text1}</span>
            <span>{text2}</span>
            <span>{text3}</span>

        </div>
    );
};

export default LinksBox;