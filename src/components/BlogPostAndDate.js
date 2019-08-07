import React from 'react';
import styled from 'styled-components';
import {dataBlog} from '../dataBlog';
import {months} from '../dataBlog';
import {years} from '../dataBlog';

const BlogPostAndDate = () => {
  return dataBlog.map( (item, index) => {
    return (
      <div key={index}>
        <ContainerWrapper>
          <DateArticle> {months.march} {years.year2018} </DateArticle>
            <TextWrapper>
              <Title> {item.title} </Title>
              <Date> {item.date} </Date>
              <ColumnWrapper>
              <Text> {item.text} </Text>
              <Text> {item.text} </Text>
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
`

const TextWrapper = styled.div `
 margin-left: 80px;
`
const ColumnWrapper = styled.div `
  column-count: 2;
  column-gap: 60px;
  padding-top: 40px;
`
const ContainerWrapper = styled.div `
border-top: 2px solid black;
padding-top: 25px;
display: flex;
flex-direction: row;
height: 420px;
`

export default BlogPostAndDate;