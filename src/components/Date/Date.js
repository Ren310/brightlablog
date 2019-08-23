import React from 'react';
import styled from 'styled-components';

const Date = ({month, year}) => {
  return(
    <DateWrapper>
      <DateArticle>{month} <br/> {year}</DateArticle>
    </DateWrapper>
  )
}

const DateArticle = styled.span `
  font-size: 34px;
  line-height: 40px;
  font-weight: 700;
`
const DateWrapper = styled.div `
  display: inline;
  margin-right: 78px;
  padding-top: 30px;
`

export default Date;