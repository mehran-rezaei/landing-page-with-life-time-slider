import React from 'react';

const Slide = (props:any) => {
    const {img  , htmlElement} = props
    return (
        <div dir='rtl' className='flex flex-col xl:flex-row justify-center items-center  xl:px-[190px] w-full  h-full'>
        <section className='w-full xl:w-1/2 px-6 xl:px-0 flex xl:gap-y-4 pt-6 xl:pt-[70px]   flex-col items-start h-full justify-start'>
            <h2 className='text-[#C8C8C8] text-[32px] xl:text-[56px] font-semibold'
            >شرکت بازرگانی ایتوک </h2>
           <div className='w-full '>{htmlElement}</div>
            <button className='text-[20px] mt-[15px] w-[158px] h-[46px] 
            bg-[#1467E2] text-white rounded-xl xl:block hidden shadow-[#1467E2] shadow-sm'
            >محصولات ما</button>
        </section>
        <section className='w-full xl:w-1/2 flex flex-col  items-center xl:items-end  justify-start'>
            <img src={img}
            className='xl:h-[450px] object-cover  h-[266px] w-[267px] xl:w-[500px]' alt="" />
        </section>
        <button className='text-[20px] mt-[15px] mb-10 w-[158px] h-[46px] 
            bg-[#1467E2] text-white rounded-xl xl:hidden  shadow-[#1467E2] shadow-sm'
            >محصولات ما</button>
    </div>
    );
};

export default Slide;