import React from 'react';

const Descreptions = () => {
    const text = 'شرکت ما افتخار دارد که در حوزه‌های متعددی از صنعت و تجارت فعالیت داشته باشد، جدا از صنایع نفت و گاز در زمینه های  فناوری اطلاعات، معماری نیز فعالیت دارد و با تمرکز بر اخلاق کسب و کار و پایبندی به کیفیت، ما به همراهی شما در دستیابی به موفقیت‌های بی‌پایان تعهد داریم. اعتماد شما به ما، انگیزه اصلی ما برای ادامه ارائه خدمات عالی است.'
    return (
        <h2  className='text-[15px] xl:text-[28px] text-[#5A5A5A]
         text-center mt-[20px] px-4 xl:px-0 xl:mt-[40px]'>
            {text}
        </h2>
    );
};

export default Descreptions;