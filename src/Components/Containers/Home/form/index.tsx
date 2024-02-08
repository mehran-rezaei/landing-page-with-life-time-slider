import CustomInput from '@/Components/Common/CustomInput';
import CustumTextArea from '@/Components/Common/CustumTextArea';
import MainButton from '@/Components/Common/MainButton';
import Title from '@/Components/Common/Title';
import TitleDiffrentColor from '@/Components/Common/TitleDiffrentColor';
import React from 'react';

const index = () => {
    const text = {
        text1 : 'درخواست بده و مشاوره',
        text2 : 'رایگان',
        text3 : 'بگیر !',
    }
    const inputData=[
        { label :'نام و نام خانوادگی :',  placeHolderText:'نام شما ...', 
         type:'text'},
        { label :'شماره تلفن : ', placeHolderText:'شماره شما  ...',
         type:'text'},
        { label :'درخواست شما : ', placeHolderText:'متن در خواست خود را بنویسید ...', 
         type:'text'},
    ]
    const backgroundStyle = {
        backgroundImage: `url('../../Images/formbg.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius : '32px',
        height: '456px',
        width: '302px',
      };
    return (
        <div className='mt-[50px] w-full xl:w-[1120px] px-6 xl:px-0'>
        <Title text={'مشاوره'} font={52}  />
        <TitleDiffrentColor  
        text1={text.text1} text2={text.text2} color2={'#1467E2'} text3={text.text3}/>
        <main className='mt-6 flex xl:gap-x-10 items-start '>
            <section style={backgroundStyle} className='relative hidden xl:block'>
                    <img src="../../Images/formimg.svg" alt="" 
                    className='absolute -bottom-12 -right-10 h-[154px] w-[154px]
                     object-cover drop-shadow-md' />
            </section>
            <section className='grid grid-cols-1 w-full xl:w-auto justify-items-center
             xl:justify-items-stretch   xl:grid-cols-2 gap-y-6 items-center mt-3'>
            <CustomInput label={inputData[0].label}
              placeHolderText={inputData[0].placeHolderText}  type={inputData[0].type} />
            <CustomInput label={inputData[1].label} 
              placeHolderText={inputData[1].placeHolderText}  type={inputData[1].type} />
              <div className='xl:col-span-2 w-[100%] xl:w-full'>
            <CustumTextArea label={inputData[2].label} 
              placeHolderText={inputData[2].placeHolderText}   />
              </div>
              <div className='flex justify-center xl:justify-end xl:col-span-2 '>
              <MainButton text={'ثبت درخواست'} />
              </div>

            </section>
        </main>
        </div>
    );
};

export default index;