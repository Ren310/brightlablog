import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header';
import ArticleWithDate from './ArticleWithDate';
import Article from './Article';

export default class MainPage extends Component {
  
  state = {
    
  };
  
  render() {
    return(
      <MainStyle>
        <Header />
        <ArticleWithDate />
        <Article />
        <Article />
        <ArticleWithDate />
      </MainStyle>
    );
  };
}


const MainStyle = styled.main`
  margin-right: 110px;
  margin-left: 110px;
  @media (max-width: 765px) {
    margin-right: 30px;
    margin-left: 30px;
  }
`