import React from 'react';

const TitleDiffrentColor = (props:any) => {
    const  { text1 , text2 , text3 , color1 , color2 , color3} = props
    return (
        <div className='text-[28px] xl:text-[64px] text-[#4F4F4F]'>
            <span style={{ color : color1 }}> {text1} </span>
            <span style={{ color : color2 }}> {text2} </span>
            <span style={{ color : color3 }}> {text3} </span>
        </div>
    );
};

export default TitleDiffrentColor;