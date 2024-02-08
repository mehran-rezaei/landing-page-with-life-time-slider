import Title from '../../../Common/Title';
import React from 'react';
import ImageBox from './ImageBox';
import MoreProduct from './MoreProduct';
import Description from './Description';

const index = () => {
    const data = [
         {  text : 'نفت' ,              image : '../../Images/Product/naft.svg'}, 
         {  text : 'مشتقات پتروشیمی' , image : '../../Images/Product/moshtagat.svg'}, 
         {  text : 'فولاد' ,             image : '../../Images/Product/foolad.svg'}, 
         {  text : 'لوازم ساختمانی' ,  image : '../../Images/Product/lavazem.svg'}, 
         {  text : 'اوره پتروشیمی' ,   image : '../../Images/Product/oreh.svg'}, 
         {  text : 'سرامیک',            image : '../../Images/Product/sermik.svg'}, 
    ]
    return (
        <div className='mt-[60px] xl:mt-[90px] xl:w-[1120px] '>
            <Title text={'محصولات ما'} font={82}/>
            <section className='grid items-center mt-4 grid-cols-1 xl:grid-cols-3 justify-items-stretch 
            gap-y-8 gap-x-6'>
                <ImageBox text={data[0].text} image={data[0].image} />
                <ImageBox text={data[1].text} image={data[1].image} />
                <ImageBox text={data[2].text} image={data[2].image} />
                <ImageBox text={data[3].text} image={data[3].image} />
                <ImageBox text={data[4].text} image={data[4].image} />
                <ImageBox text={data[5].text} image={data[5].image} />
            </section>
            <MoreProduct />
            <Description />
        </div>
    );
};

export default index;