import React from 'react';
import styled from 'styled-components';
import { dataBlog } from '../../dataBlog';
import SimpleSlider from '../Slider/SimpleSlider';

const Article = () => {
  return dataBlog.map( (item, index) => {
    console.log(item);
    return (
      <div>
        <ContainerWrapper key={index}>
            <TextWrapper>
              <Title> {item.title} </Title>
              <Date> {item.day} {item.month} </Date>
              <Text> { item.text } </Text>
            </TextWrapper>
        </ContainerWrapper>
          <SliderBox>
            <SimpleSlider images = {this.props.sliderUrls} />
          </SliderBox>
      </div> 
      )
    }
  )
};


const Date = styled.p `
  font-size: 20px;
  line-height: 23px;
  margin: 0;
  @media (max-width: 765px) {
    font-size: 13px;
    line-height: 15px;
    font-family: 'HelveticaNeueCyrBold';
    margin-top: 5px;
  }
`
const Title = styled.h2 `
  font-size: 34px;
  line-height: 40px;
  margin: 0;
  @media (max-width: 765px) {
    font-family: 'HelveticaNeueCyrBold';
    font-size: 16px;
    line-height: 20px;
  }
`
const Text = styled.p `
  font-size: 20px;
  line-height: 24px;
  margin-top: 30px;
  @media (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 20px;
    text-align: justify;
  }
  @media (max-width: 765px) {
    font-size: 16px;
    line-height: 20px;
    padding: 0;
  }
`
const TextWrapper = styled.div `
  @media (max-width: 765px) {
  }
`
const ContainerWrapper = styled.div `
  border-top: 2px solid black;
  padding-top: 35px;
  display: flex;
  flex-direction: row;
  margin-left: 70px;
  margin-bottom: 70px;
  .slick-dots li button:before
{
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 6px;

    text-align: left;

    opacity: 1;
    color: black;
}
  @media (max-width: 765px) {
    padding-top: 24px;
    margin-top: 25px;
    margin-bottom: 28px;
    margin-left: 100px;
  }
`
const SliderBox = styled.div`
  margin-left: 100px;
  @media (max-width: 765px) {
    margin: 0;
  }
`

export default Article;