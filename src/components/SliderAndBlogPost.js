import React, {Component} from 'react';
import styled from 'styled-components';
import {dataBlog, arraySliderImages} from '../dataBlog';

const SliderAndBlogPost = () => {
  return dataBlog.map( (item, index) => {
    return (
      <div key={index}>
        <ContainerWrapper>
            <TextWrapper>
              <Title> {item.title} </Title>
              <Date> {item.date} </Date>
              <Text> {item.text} </Text>
            </TextWrapper>
        </ContainerWrapper>
      </div>
      )
    }
  )
};

const SliderBox = () => {
  return (
    <div>
      <Box>
        <img src={arraySliderImages[0].slide1}/>
      </Box>
    </div>
  );
};

// class Slider extends Component {
//   state = {
//   };
// };
const Box = styled.div `
  border: 2px solid black;
  width: 1010px;
  height: 580px;
`

const Date = styled.p `
  font-size: 20px;
  line-height: 23px;
  margin: 0;
`
const Title = styled.h2 `
  font-size: 34px;
  line-height: 40px;
  margin: 0;
`
const Text = styled.p `
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 50px;
  margin-top: 40px;
`
const TextWrapper = styled.div `

`
const ContainerWrapper = styled.div `
border-top: 2px solid black;
padding-top: 25px;
display: flex;
flex-direction: row;
height: 420px;
margin-left: 175px;
`
export default SliderAndBlogPost;