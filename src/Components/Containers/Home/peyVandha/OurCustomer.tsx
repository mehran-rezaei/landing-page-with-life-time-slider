import React from 'react';
import Customer from './Customer';

const OurCustomer = () => {
    return (
        <div className='xl:w-[1120px] justify-items-center rounded-[18px]
        bg-mainBgGray 
        items-center grid grid-cols-1 xl:grid-cols-3 h-[200px] mt-[32px]'>
            <Customer text1={'پتروشیمی آبادان'} text2={'لورم ایپسوم'} />
            <Customer text1={'پتروشیمی ماهشهر'} text2={'لورم ایپسوم'} />
            <Customer text1={'پتروشیمی میبد'}   text2={'لورم ایپسوم'} />
        </div>
    );
};

export default OurCustomer;