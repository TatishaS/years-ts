import React, { FC } from 'react';
import { SwiperOptions } from 'swiper';
import { Navigation, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Slide } from '../types';
import { JSONData } from '../App';
import { ReactComponent as ArrowLeft } from '../assets/images/arrow-left.svg';

const SwiperParams: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 50,
};

export type Props = {
  activeSlide: number;
  slides: JSONData;
};

const Slider: FC<Props> = ({ activeSlide, slides }) => {
  /*  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null); */
  return (
    <Swiper
      className="big-slider"
      effect={'fade'}
      fadeEffect={{ crossFade: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade, Navigation, A11y]}
      slidesPerView={1}
      navigation
      /* navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }} */
      /*   onBeforeInit={{
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
     }} */

      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id} className="big-slide">
          <div className="big-slide__item-wrapper">
            <h2 className="big-slide__title">Исторические даты</h2>
            <h3 className="big-slide__subtitle">{slide.title}</h3>
            <div className="big-slide__years-block">
              {' '}
              <span className="big-slide__year big-slide__year--from">
                {slide.yearFrom}
              </span>
              <span className="big-slide__year big-slide__year--to">
                {slide.yearTo}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/*     <div className="big-slider__slider-btns">
        <button
          className="big-slider__slider-arrow swiper-button-prev"
          ref={navigationPrevRef}
        >
          <ArrowLeft
            className="big-slider__icon-img big-slider__icon-img--left"
            width="6"
            height="12"
          />
        </button>
        <button
          className="big-slider__slider-arrow swiper-button-next"
          ref={navigationNextRef}
        >
          <ArrowLeft
            className="big-slider__icon-img--right"
            width="6"
            height="12"
          />
        </button>
      </div> */}
    </Swiper>
  );
};

export default Slider;
