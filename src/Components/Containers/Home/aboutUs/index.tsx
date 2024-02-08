import React from 'react';
import AboutUsBox from './AboutUsBox';

const index = () => {
    const text = [
        {Head1 : 'پیشرو در صنعت ', text1 : 'بی حد و مرز در  پیشروی به سوی خدمات بهتر' },
        {Head1 : 'تنوع بالا محصول', text1 : 'ساخت و تولید  برای پیشروی در صنعت' },
        {Head1 : 'کیفیت بالا محصولات ', text1 : 'تلاش و پشتکار  برای ساخت کیفیتی بی همتا' },
    ]
    return (
        <div className='xl:w-[1120px] w-full py-[44px] xl:py-0 xl:h-[200px]
         bg-mainBgGray rounded-[32px] xl:px-[80px] -mt-4 -xl:mt-16'>
            <main className='grid w-full gap-x-4 grid-cols-2 xl:grid-cols-3 h-full
             text-white items-center px-6 xl:px-0 gap-y-7 xl:gap-y-0'>
              <AboutUsBox Head={text[0].Head1} text={text[0].text1} colspan={1} />
              <AboutUsBox Head={text[1].Head1} text={text[1].text1} colspan={1} />
              <AboutUsBox Head={text[2].Head1} text={text[2].text1} colspan={2} />
            </main>
        </div>
    );
};

export default index;