import React from 'react';
import SimpleSlider from '../Slider/SimpleSlider';
import styled from 'styled-components';


const Article = ({title, text, articleDay, articleMonth, images}) => {
  return(
    <>
    <ArticleWrapper>
      <Title>{title}</Title>
      <Date>{articleDay} {articleMonth}</Date>
      <Text>{text}</Text>
    </ArticleWrapper>
    <SimpleSlider images = { images }/>
    </>
  )
}

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
const Date = styled.span `
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
const Text = styled.p `
  font-size: 20px;
  line-height: 24px;
  @media (min-width: 760px) and (max-width: 1600px) {
    margin-top: 20px;
  }
  @media (max-width: 765px) {
    font-size: 16px;
    line-height: 20px;
    padding: 0;
  }
`
const ArticleWrapper = styled.div `
  padding-top: 30px;
  padding-bottom: 50px;
`

export default Article;