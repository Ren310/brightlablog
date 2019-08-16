import React from 'react';
import styled from 'styled-components';
import { dataBlog } from '../../dataBlog';

const ArticleWithDate = () => {
  return dataBlog.map( (item, index) => {
    return (
      <div key={index}>
        <ContainerWrapper>
          <DateArticle>  </DateArticle>
            <TextWrapper>
              <Title> {item.title} </Title>
              <Date> {item.day} {item.month} </Date>
              <ColumnWrapper>
              <Text> { item.text } </Text>
              <Text> { item.text } </Text>
              </ColumnWrapper>
            </TextWrapper>
        </ContainerWrapper>
      </div>
      )
    }
  )
};

const DateArticle = styled.div `
  max-width: 100px;
  max-height: 90px;
  font-size: 34px;
  line-height: 40px;
  font-weight: 700;
  @media (max-width: 765px) {
    font-family: 'HelveticaNeueCyrBold';
    font-size: 16px;
    line-height: 20px;
    width: 50px;
    height: 40px;
  }
`
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
  font-weight: 700;
  @media (max-width: 765px) {
    font-family: 'HelveticaNeueCyrBold';
    font-size: 16px;
    line-height: 20px;
  }
`
const Text = styled.p `
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 50px;
  margin: 0;
  margin-bottom: 50px;
  @media (max-width: 765px) {
    font-size: 16px;
    line-height: 20px;
    padding: 0;
  }
`

const TextWrapper = styled.article `
 margin-left: 80px;
 @media (max-width: 765px) {
    margin-left: 40px;
  }
`
const ColumnWrapper = styled.div `
  column-count: 2;
  column-gap: 60px;
  padding-top: 40px;
  @media (min-width: 1300px) and (max-width: 1600px) {
    column-gap: 30px;
    padding-top: 30px;
  }
  @media (max-width: 765px) {
    column-count: 1;
    padding-top: 10px;
  }
`
const ContainerWrapper = styled.div `
border-top: 2px solid black;
padding-top: 35px;
margin-top: 260px;
display: flex;
flex-direction: row;
@media (max-width: 765px) {
    padding-top: 24px;
    margin-top: 25px;
  }
`

export default ArticleWithDate;