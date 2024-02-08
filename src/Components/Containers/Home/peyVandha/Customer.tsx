import React from 'react';

const Customer = (props:any) => {
    const { text1 , text2 , image} = props
    return (
        <div className='h-[112px] w-[340px] gap-x-2.5 bg-white rounded-[18px] 
        flex items-center px-3'>
            <section>
                <img src={image} className='w-[82px] h-[86px] ' alt="" />
            </section>
            <section>
                <h2 className='text-[28px]'>{text1}</h2>
                <h2 className='text-[20px]'>{text2}</h2>
            </section>
        </div>
    );
};

export default Customer;