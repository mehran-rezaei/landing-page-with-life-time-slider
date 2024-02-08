import Title from '../../../Common/Title';
import TitleDiffrentColor from '../../../Common/TitleDiffrentColor'
import React from 'react';
import OurCompany from './OurCompany';
import Descreptions from './Descreptions';

const index = () => {
    const text = {
        text1 : 'همراه با بهترین تخصص های روز ',
        text2 : 'دنیا',
        text3 : '',
    }
    return (
        <div className='mt-[96px] xl:w-[1120px]'>
            <Title text={'زیر مجموعه ها'} font={52}  />
            <TitleDiffrentColor  
            text1={text.text1} text2={text.text2} color2={'#1467E2'} text3={''}/>
            <OurCompany />
            <Descreptions />
        </div>

    );
};

export default index;