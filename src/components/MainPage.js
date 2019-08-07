import React from 'react';
import styled from 'styled-components';
import HeaderBlog from './HeaderBlog';
import BlogPostAndDate from './BlogPostAndDate';
import SliderAndBlogPost from './SliderAndBlogPost';
import SliderBox from './SliderAndBlogPost';
import {arraySliderImages} from '../dataBlog';

const MainPage = () => {
  return (
    <MainStyle>
      <HeaderBlog />
      <BlogPostAndDate />
      <SliderAndBlogPost />
      <img src={arraySliderImages[0].slide1}/>
    </MainStyle>
  );
};

const MainStyle = styled.main`
  margin-right: 110px;
  margin-left: 110px;
`
export default MainPage;