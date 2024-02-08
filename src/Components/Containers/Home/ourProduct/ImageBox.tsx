import React from 'react';
// import imagesss from '../../../../../public/Images/daleh.svg'

const ImageBox = (props:any) => {
    const { image , text} = props 
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '210px',
        width: '348px',
      };
    
    return (
        <div style={backgroundStyle} className='h-10 w-10 flex items-end justify-start'>
            <h2  className='text-white text-[28px] pr-5 pb-2 font-bold'>{text}</h2>
        </div>
    );
};

export default ImageBox;