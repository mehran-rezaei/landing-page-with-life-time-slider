import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import Slide from './Slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./_SlickSliderStyle";

const HeroSections = () => {
    const settings = {
        // fade: true,
        
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "ease-out",
        appendDots: (dots: string | number | boolean |
             React.ReactElement<any, string | React.JSXElementConstructor<any>> 
             | Iterable<React.ReactNode> | React.ReactPortal | 
             React.PromiseLikeOfReactNode | null | undefined) => <ul>{dots}</ul>,
        customPaging: (i: any) => (
          <div className="ft-slick__dots--custom">
            <div className="loading" />
          </div>
        )
    };
    const images = {
        image1: '../../Images/daleh.svg',
        image2: '../../Images/shen.svg',
        image3: '../../Images/seramiketok.svg',
    }
    const Titles = [
        {
            text: <h3 className='text-[42px] xl:text-[85px]  w-full font-semibold xl:leading-[95px]'>
                “ تضمین
                <span className='text-[#E21414]'> کیفیت </span>
                و
                <span className='text-[#1467E2]'> رهبری </span>
                در صنعت “  </h3>
        },
        {
            text: <h3 className='text-[42px] xl:text-[70px] w-full font-semibold xl:leading-[95px]'>
                <span className='text-[#E21414]'> “پیشرو </span>
                در تولید وتوزیع محصولات “  </h3>
        },
        {
            text: <h3 className='text-[42px] xl:text-[70px] w-full font-semibold xl:leading-[95px]'>
                “ رقم زدن 
                <span className='text-[#1467E2]'> تفاوت ها  </span>
                برای تجارت شما “    </h3>
        },
    ]
    return (
        <div className='bg-[#E7E7E7] xl:h-[568px]  pb-8 xl:pb-0   w-full flex items-center flex-col'>
            <div dir='rtl' className='w-full'>
                <SliderWrapper>
                <Slider {...settings} rtl={true} arrows={false}>
                    <Slide img={images.image3} htmlElement={Titles[2].text} />
                    <Slide img={images.image1}  htmlElement={Titles[0].text} />
                    <Slide img={images.image2} htmlElement={Titles[1].text} />
                </Slider>
                </SliderWrapper>
            </div>
        </div>
    );
};

export default HeroSections;