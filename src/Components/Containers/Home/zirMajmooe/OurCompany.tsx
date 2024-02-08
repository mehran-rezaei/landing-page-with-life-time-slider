import React from 'react';

const OurCompany = () => {
    const text = {
        text1 : 'شرکت راهبرد نوین تجارت ایتوک',
        text2 : 'شرکت دانش بنیان نیک نامان ',
        text3 : 'گروه معماری افق دانش ثریا',
    }
    const backgroundStyle = {
        backgroundImage: `url('../../Images/etokcompany.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius : '32px',
        height: '280px',
        // width: '100%',
      };
      const backgroundStyle2 = {
        backgroundImage: `url('../../Images/niknam.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius : '32px',
        height: '280px',
        // width: '50%',
      };
      const backgroundStyle3 = {
        backgroundImage: `url('../../Images/soaya.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius : '32px',
        height: '280px',
        // width: '50%',
      };
    return (
        <div className='w-full mt-7 px-6 xl:px-0'>
           <section  style={backgroundStyle} className=' w-full mb-6 overflow-hidden flex items-end justify-start'>
            <h2  className='text-white text-[36px] pr-6 pb-3 font-bold'>{text.text1}</h2>
            </section>

            <section className='flex xl:flex-row flex-col gap-y-4 gap-x-5 overflow-hidden'>
            <div  style={backgroundStyle2} className=' w-full xl:w-1/2 flex items-end justify-start'>
            <h2  className='text-white text-[36px] pr-6 pb-3 font-bold'>{text.text2}</h2>
            </div>
            <div  style={backgroundStyle3} className=' w-full xl:w-1/2 flex items-end justify-start'>
            <h2  className='text-white text-[36px] pr-6 pb-3 font-bold'>{text.text3}</h2>
            </div>
            </section>
            
        </div>
    );
};

export default OurCompany;