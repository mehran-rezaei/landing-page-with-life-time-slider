import React from 'react';
import Links from './Links';

const index = () => {
    return (
        <div className='w-full flex items-center flex-col mt-[60px]'>
               <Links />
               <div className='w-full bg-mainBgGray flex items-center flex-col '>
               <section className='px-6 xl:px-24 py-6 text-[16px] xl:text-[20px] text-white 
               xl:h-[390px] gap-y-10 xl:gap-y-0 gap-x-6 grid grid-cols-1 w-full xl:grid-cols-4'>
                  <div className='flex xl:block  items-center justify-between'>
                    <h2 className='text-[20px] xl:text-[24px]'>شبکه های اجتماعی</h2>
                    <div className='flex  items-center gap-x-3 xl:mt-4 xl:mb-[55px]'>
                       <div className='bg-mainBgGray2 p-5 xl:p-0 rounded-[27px] h-[68px] xl:w-[102px] w-[72px] xl:h-[96px] flex items-center justify-center'>
                       <img src="../../Logo/whatsapp.svg" alt="" />
                        </div>
                       <div className='bg-mainBgGray2 p-5 xl:p-0 rounded-[27px] h-[68px] xl:w-[102px] w-[72px] xl:h-[96px] flex items-center justify-center'>
                       <img src="../../Logo/insta.svg" alt="" />
                        </div>
                    </div>
                    <div className='hidden xl:block'>
                        <img  src="../../Logo/logo2.svg" className='w-[92px] mb-1 h-[32px]' alt="" />
                        <h2>شرکت بازرگانی ایتوک </h2>
                    </div>
                  </div>
                  <div className='flex flex-col gap-y-5 col-span-2'>
                  <h2 className='text-[20px] xl:text-[24px]'>زیر مجموعه ها </h2>
                  <span>شرکت راهبرد نوین تجارت ایتوک</span>
                  <span>شرکت دانش بنیان نیک نامان</span>
                  <span>گروه معماری افق دانش ثریا</span>
                  <span className='mt-[40px]'>تمامی حقوق کاربران نزد شرکت بازرگانی ایتوک محفوظ است.</span>
                  </div>
                  <div>
                    <img src="../../Logo/enamad.svg" alt="" className='mb-6' />
                    <span>نشانی : پادادشهر، خیابان10، ساختمان هیراد، طبقه 3 </span>
                  </div>
               </section>
               </div>
    </div>
    );
};

export default index;