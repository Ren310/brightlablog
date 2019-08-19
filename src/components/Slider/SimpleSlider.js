import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';

import {arraySliderImages} from '../../dataBlog';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SliderWrapper>
      <Slider {...settings}>
              <SlideImg src={arraySliderImages[0].slide1} alt="slide1"/>
              <SlideImg src={arraySliderImages[1].slide2} alt="slide2"/>
              <SlideImg src={arraySliderImages[2].slide3} alt="slide3"/>
              <SlideImg src={arraySliderImages[3].slide4} alt="slide4"/>
      </Slider>
      </SliderWrapper>
    );
  }
}

const SliderWrapper = styled.div`
  width: 1200px;
  height: 500px;
  box-sizing: border-box;
  margin-bottom: 65px;
  @media (min-width: 1300px) and (max-width: 1600px) {
   
    width: 993px;
    height: 500px;
  }

  @media (max-width: 765px) {
    width: 230px;
    height: 230px;
    margin-bottom: 30px;
  }
`
const SlideImg = styled.img`
  width: 100%;
  height: 500px;
`