import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: false,
    };

    this.checkImg = () => {
        return this.props.images.length > 0 ?  true : false;
    }
    
    const slides = this.props.images.map((img, key) => {
      return(
        <SlideImg key = {key} src={img} alt="slide"/> 
      );
    })
    
    if (this.checkImg()) {
      return (
        <SliderWrapper>
        <Slider {...settings}>
          { slides }
        </Slider>
        </SliderWrapper>
      );
    }
    return null;
  }
}

const SliderWrapper = styled.div`
  order: 1;
  width: 1200px;
  height: 500px;
  box-sizing: border-box;
  margin-bottom: 65px;
  @media (min-width: 770px) and (max-width: 1300px) {
    width: 930px;
    margin-right: 50px;
  }
  @media (max-width: 765px) {
    width: 230px;
    margin-bottom: 30px;
  }
`
const SlideImg = styled.img`
  width: 1200px;
  height: 500px;
  @media (min-width: 770px) and (max-width: 1300px) {
    width: 930px;
    height: 500px;
  }
  @media (max-width: 765px) {
    width: 230px;
    height: 140px;
  }
`