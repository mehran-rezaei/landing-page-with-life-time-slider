import MainButton from '@/Components/Common/MainButton';
import React from 'react';

const index = () => {
    const backgroundStyle = {
        background: 'linear-gradient(180deg, #EDEDED 0%, rgba(237, 237, 237, 0.00) 100%)',
        boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.12)',
      };
      const text2 = 'همراه ما باشید تا در مسیری پر از فرصت‌ها و رشد به شما یاری برسانیم'
    return (
        <div style={backgroundStyle} className='xl:w-[1062px] px-12 xl:px-0 mt-[112px] 
        py-10 xl:h-[456px] 
        xl:rounded-[32px] flex xl:flex-row flex-col   items-center justify-center
          xl:pr-[40px]'>
            <section className='text-[#1A1A1A] xl:w-[45%]'>
                <h2 className='text-[28px] xl:text-[48px]'>
                    <span className=''> انتخابی </span>
                    <span className='text-mainRed'>هوشمند</span>
                </h2>
                <h3 className='text-[28px] xl:text-[40px] xl:mb-[60px]'>
                    <span>  همراه ما باشید تا در مسیری پر از فرصت‌ها و </span>
                    <span className='text-mainRed'> رشد </span>
                    <span>به شما یاری برسانیم</span>
                </h3>
                <div className='hidden xl:block'>
                <MainButton text={'همین الان نیازتو برطرف کن'}  />
                </div>
            </section>
            <section className='xl:w-[55%]'>
                <img src="../../Images/continer.svg" className='' alt="" />
            </section> 
            <div className='block xl:hidden'>
                <MainButton text={'همین الان نیازتو برطرف کن'}  />
                </div>           
        </div>
    );
};

export default index;