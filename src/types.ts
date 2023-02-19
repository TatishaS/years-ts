export type SwiperParams = {
  spaceBetween: number;
  slidesPerView: number;
};

export type SubSlide = {
  id: string;
  year: number;
  text: string;
};
export type Slide = {
  id: number;
  title: string;
  yearFrom: number;
  yearTo: number;
  subsliderActive: boolean;
  isActive: boolean;
  subsliderContent: SubSlide[];
};
