import MainButton from '../../../Common/MainButton';
import React from 'react';

const index = () => {
    const text = 'شرکت ما، در دنیای بازرگانی، به تولید نوآوری و ارتقاء کیفیت اکتفا نمی‌کند. ما به عنوان شریکی اعتمادی در تجارت جهانی، با تیم متخصص و محصولات متنوع، شما را در دستیابی به موفقیت‌های بی‌پایان همراهی می‌کنیم. با ما همراه شوید تا برای رویایی که در  تجارت خود  دارید مسیر را اسان سازید . '
    return (
     <main className='flex  flex-col-reverse px-6 xl:px-0 xl:flex-row
      justify-between mt-[40px] xl:mt-[100px] xl:w-[1120px] gap-y-6 xl:gap-y-0 '>
        <section className='xl:w-[40%]'>
            <img src="../../Images/whyus.svg" alt="" className='' />
            <div className='xl:hidden flex items-center justify-center w-full mt-7'>
            <MainButton  text={'درباره ما'}/> 
            </div>
        </section>
        <section className='flex flex-col gap-y-5 xl:w-[60%]'>
            <h2 className='text-[#D9D9D9] text-[48px]'>چرا ما ؟ </h2>
            <p className='text-[#444] text-[20px] leading-8 xl:leading-normal xl:text-[28px]'>{text}</p>   
            <div className='hidden xl:block'>
            <MainButton  text={'درباره ما'}/> 
            </div>
        </section>
     </main>

    );
};
export default index;