import React, {Component} from 'react';
import styled from 'styled-components';


class DateArticle extends Component {
  render() {
    return (
    <Date> {this.props.globalArticlesDate} </Date>
    )
  }
};

const Date = styled.div `
  max-width: 100px;
  max-height: 90px;
  font-size: 34px;
  line-height: 40px;
  font-weight: 700;
  display: flex;
  flex-grow: 1;
`

export default DateArticle;