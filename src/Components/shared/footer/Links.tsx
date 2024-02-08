import React from 'react';
import LinksBox from './LinksBox';

const Links = () => {
    const linkData = [
        { head : 'لینک های مفید' ,
         text1 : 'نفت' , text2 : 'لوازم ساختمانی', text3 : 'اوره پتروشیمی' },
         { head : 'دسترسی ها' ,
         text1 : 'صفحه نخست' , text2 : 'محصولات ما', text3 : 'درباره ما' },
         { head : 'شماره تماس های شرکت : ' ,
         text1 : '09162636126' , text2 : '0612312313131', text3 : '09172736361' }
    ]
    return (
        <section className='w-full xl:w-[1120px] items-center justify-items-center
         xl:justify-items-center  bg-[#FAFAFA] shadow-sm xl:h-[270px] 
        rounded-[56px] gap-y-10 gap-x-4 xl:gap-x-0 grid grid-cols-2 xl:grid-cols-5 py-6 px-6 xl:px-5'>
          {linkData.map((item) => (
          <LinksBox head={item.head} text1={item.text1} 
          text2={item.text2} text3={item.text3}  />      
          ))}
          <section className='xl:col-span-2 xl:block h-full xl:h-auto  flex items-end'>
          <div className='flex items-end h-full xl:h-auto  xl:items-center gap-x-2'>
            <img src="../../Logo/call.svg" className='h-[44px] w-[44px] hidden xl:block' alt="" />
            <span className='text-[46px] hidden xl:block'>با ما همراه شو ! </span>
          </div>
          <div className=''>
                    <span className='border-2 border-black rounded-3xl font-medium
                     w-[126px] h-[36px] leading-9 text-center block text-[18px]  text-black'>تماس باما</span>
            </div>
          </section>
        </section>
    );
};

export default Links;