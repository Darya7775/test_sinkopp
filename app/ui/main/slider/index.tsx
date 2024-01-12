'use client'

import React from 'react';
import data from '../../../../mock/mockData';
import { Navigation, FreeMode, Mousewheel } from 'swiper/modules';
import * as S from './styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

const Slider: React.FC = () => {
  const dataMask = ['circle', 'inset_left', 'inset_right'];
  let iMask = -1;

  return (
    <S.Wrapper>
      <S.StyleSwiper
        modules={[Navigation, FreeMode,Mousewheel]}
        slidesPerView={'auto'}
        freeMode={true}
        mousewheel={true}
        navigation= {{
          nextEl: '.next',
          prevEl: '.prev',
        }}
      >
        {data.map((item, i) => {
          let textMask = '';
          if(iMask === dataMask.length - 1) {
            iMask = -1;
          }
          if(item?.img[0] === 'h') {
            iMask++;
            textMask = dataMask[iMask];
          }
          return(
            <S.StyleSwiperSlide key={i}>
              <S.StyleImg
                src={item.img}
                width={item.title.length > 35 ? 688 : 344}
                height={344}
                alt='picture animal'
                priority={true}
                data-mask={textMask}
              />
              <p>{item.title}</p>
              <div>{item.date}</div>
            </S.StyleSwiperSlide>
          );
        })}
      </S.StyleSwiper>
      <S.WrapperButtons>
        <S.Button type='button' className="prev" aria-label='вперед'>
            <svg data-device="mobile" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="10.4348" width="24" height="3.13043" fill="#c9d0e1"/>
              <path d="M12 3.05176e-05V3.05176e-05C12 6.07516 7.07513 11 0.999996 11L-6.19952e-07 11" stroke="#c9d0e1" strokeWidth="3"/>
              <path d="M12 24V24C12 17.9249 7.07513 13 1 13L-4.41349e-07 13" stroke="#c9d0e1" strokeWidth="3"/>
            </svg>
            <svg data-device="desktop" width="181" height="47" viewBox="0 0 181 47" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="22" width="172" height="2.99998"/>
              <path d="M12 12V12C12 18.0751 7.07513 23 0.999998 23L-1.33918e-06 23" strokeWidth="3"/>
              <path d="M12 35V35C12 28.9249 7.07513 24 1 24L6.11999e-07 24" strokeWidth="3"/>
            </svg>
        </S.Button>
        <S.Button type='button' className="next" aria-label='назад'>
            <svg data-device="mobile" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="3.13043" transform="matrix(-1 8.74228e-08 8.74228e-08 1 24 10.4348)" fill="#c9d0e1"/>
              <path d="M12 3.05176e-05V3.05176e-05C12 6.3393 17.139 11.4783 23.4783 11.4783L24 11.4783" stroke="#c9d0e1" strokeWidth="3"/>
              <path d="M12 24V24C12 17.6608 17.139 12.5218 23.4783 12.5218L24 12.5218" stroke="#c9d0e1" strokeWidth="3"/>
            </svg>
            <svg data-device="desktop" width="181" height="47" viewBox="0 0 181 47" xmlns="http://www.w3.org/2000/svg">
              <rect width="172" height="2.99998" transform="matrix(-1 8.74228e-08 8.74228e-08 1 172 22)"/>
              <path d="M161 12V12C161 18.0751 165.925 23 172 23L173 23" strokeWidth="3"/>
              <path d="M161 35V35C161 28.9249 165.925 24 172 24L173 24" strokeWidth="3"/>
            </svg>
        </S.Button>
      </S.WrapperButtons>
    </S.Wrapper>
  );
}

export default Slider;


