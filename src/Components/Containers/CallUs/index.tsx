import React from 'react';
import Navbar from '@/Components/shared/Navbar';
import FormContainer from '../Home/form'
import Footer from '../../shared/footer'


const index = () => {
    return (
        <div dir='rtl' className=' flex flex-col items-center w-full' >
        <header  className='xl:w-[1280px] w-full'>
        <Navbar />
        </header> 
        <FormContainer/>   
        <Footer />     
        </div>
    );
};

export default index;