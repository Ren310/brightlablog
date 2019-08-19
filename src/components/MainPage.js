import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header';
import DateArticle from './DateArticle/DateArticle';

import { postDataBlog, Articles } from '../dataBlog';

export default class MainPage extends Component {
  render() {
    
    const dateItems = postDataBlog.map((article, index) => {
      return( 
        <DateArticle key = {index}  { ...article }/>
        //Я не понимаю, сюда можно вписать второй мап или же нет,
        //так как в return уже есть какой-то код?
        //Если мапать нужно уже в другом компоненте, к примеру ArticleBlog
        //то как обратиться к ключу article в объекте с массивом
        )
    })
    return(
      <MainStyle>
        <Header />
        { dateItems }
      </MainStyle>
    );
  };
}


const MainStyle = styled.main`
  padding-right: 110px;
  padding-left: 110px;
  @media (max-width: 765px) {
    padding-right: 26px;
    padding-left: 26px;
  }
`