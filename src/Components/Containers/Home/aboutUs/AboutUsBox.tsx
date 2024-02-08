import React from 'react';

const AboutUsBox = (props:any) => {
    const { Head , text , colspan} = props
    return (
        <section className={`flex flex-col items-center gap-y-4 text-center xl:col-span-1 col-span-${colspan}`}>
        <h2 className='text-[20px] xl:text-[24px] '>{Head}</h2>
        <div className='w-full h-[75px] px-3 xl:h-auto xl:w-[280px] rounded-[16px]
         bg-mainBgGray2 xl:px-10
        py-2 text-[15px] xl:text-[20px]'>
            {text}</div>
    </section>
    );
};

export default AboutUsBox;