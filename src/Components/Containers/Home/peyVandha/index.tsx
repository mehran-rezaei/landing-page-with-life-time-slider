import React from 'react';
import MultiHeader from './MultiHeader';
import OurCustomer from './OurCustomer';

const index = () => {
    return (
        <div className='mt-[20px] text-right xl:w-[1120px] mb-20 xl:mb-0'>
            <h2 className='text-mainGray text-[48px] '>پیوند ها</h2>
            <MultiHeader />
            <OurCustomer />
            

        </div>
    );
};

export default index;