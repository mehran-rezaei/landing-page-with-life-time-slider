import Navbar from '@/Components/shared/Navbar';
import React from 'react';
import HeroSections from './HeroSections';
import AboutUsContainer from './aboutUs';
import WhyUsContainer from './whyUs';
import OurProductContainer from './ourProduct';
import PeyVandhaContainer from './peyVandha'
import BannerConatiner from './banner' 
import ZirMajmooeConatiner from './zirMajmooe' 
import FormConatiner from './form' 
import Footer from '../../shared/footer';

const index = () => {
    return (
        <div dir='rtl' className=' flex flex-col items-center w-full' >
            <header  className='xl:w-[1280px] w-full'>
            <Navbar />
            </header>
            <HeroSections />
            <div className='xl:w-[1280px] w-full'>
            <main className='flex flex-col items-center w-full'>
            <AboutUsContainer />
            <WhyUsContainer/>
            <OurProductContainer />
            <PeyVandhaContainer />
            <BannerConatiner />
            <ZirMajmooeConatiner />
            <FormConatiner/>
            </main>   
            </div>
            <div className='flex flex-col items-center w-full'>
                <Footer />
            </div>
        </div>
    );
};
export default index;