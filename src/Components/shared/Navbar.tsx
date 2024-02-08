import React from 'react';

const Navbar = () => {
    return (
        <main className='px-6 xl:px-[80px] mb-[20px] pt-[20px] w-full'>
            <section className='flex items-center justify-between w-full '>
                <div className='flex items-center flex-col xl:flex-row gap-x-4 text-sm  '>
                    <img src="../../Logo/logo.svg" className='h-[29px] xl:h-[39px] w-[72px] xl:w-[95px]' alt="" />
                    <span className='text-[16px] xl:text-[20px] pt-2 font-semibold'>شرکت بازرگانی ایتوک</span>
                </div>
                <div className='xl:hidden'>
                          <img src="../../Logo/hamber.svg" alt="555" />
                </div>
                <div className='xl:flex items-center  hidden gap-x-2'>
                    <img src="../../Logo/call.svg" className='w-[32px] h-[32px]' alt="" />
                    <span className='text-mainGray text-[32px] font-semibold'>باماهمراه شو !</span>
                </div>
            </section>
            <section className='xl:flex  hidden justify-between items-center pl-12 mt-[15px]'>
                <div>
                    <ul className='flex font-medium text-[16px] gap-x-14'>
                        <li>صفحه نخست</li>
                        <li>محصولات ما</li>
                        <li>زیر مجموعه ها</li>
                        <li>درباره ها</li>
                        <li>تماس باما</li>
                    </ul>
                </div>
                <div>
                    <span className='border-2  border-black rounded-3xl font-medium
                     w-[126px] h-[36px] leading-9 text-center block text-[18px]  text-black'>تماس باما</span>
                </div>
            </section>
        </main>
    );
};

export default Navbar;