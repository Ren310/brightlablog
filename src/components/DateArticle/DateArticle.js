import React, {Component} from 'react';
import styled from 'styled-components';
import Article from '../Article/Article';


class DateArticle extends Component {
  render() {
    const articles = this.props.articles.map((article, index) => {
      return (
       <Article key = {index} {...article}/>
      )
    });
    
    return (
      <div>
        <Date> {this.props.globalArticlesDate} </Date>
        {articles}
      </div>
    );
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