import React from 'react';

const MainButton = (props:any) => {
    const { type ,  text  } = props
    return (
        <div>
       <button className='min-h-[52px] min-w-[218px] xl:min-w-[192px]
        text-black hover:text-white hover:bg-mainBlue border border-mainBlue
         rounded-[14px] text-[24px] px-6'>
            {text}
        </button>
        </div>
 
    );
};

export default MainButton;