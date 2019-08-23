import React from 'react';
import styled from 'styled-components';

import b3d from '../../assetsBlog/b3d.svg';
import logo from '../../assetsBlog/logo.svg';

const Header = () => {
  return (
    <>
    <HeaderWrapper>
        <HeaderBlog>Brightlab blog</HeaderBlog>
          <B3D src={b3d} alt="B3D"/>
          <Logo src={logo} alt="logo"/>
          <LinkArrow href="https://brightlab.me">Official website <ArrowSize>&#129109;</ArrowSize></LinkArrow>
       </HeaderWrapper>
    
    </>
  );
};

//style
const HeaderBlog = styled.h2`
  font-family: 'HelveticaNeueCyrMedium';
  margin: 0;
  font-size: 200px;
  width: 900px;
  line-height: 190px;

  @media (min-width: 766px) and (max-width: 1299px) {
    font-size: 110px;
    line-height: 100px;
    width: 500px;
  }
  @media (max-width: 765px) {
    width: 175px;
    font-size: 40px;
    line-height: 42px;
    order: 3;
  }
`
const B3D = styled.img`
  position: absolute;
  z-index: -1;
  width: 55%;
  left: 33%;
  top: 1%;
  @media (max-width: 765px) {
    left: 285px;
  }
`
const Logo = styled.img`
  position: relative;
  bottom: 351px;
  left: 900px;
  @media (min-width: 1300px) and (max-width: 1600px) {
    left: 50%;
  }
  @media (min-width: 766px) and (max-width: 1299px) {
    width: 550px;
    height: 350px;
    bottom: 200px;
    left: 40%;
  }
  @media (max-width: 765px) {
    width: 40px;
    height: 25px;
    position: static;
    order: 1;
  }
`
const LinkArrow = styled.a`
  position: absolute;
  text-decoration: none;
  font-style: normal;
  color: black;
  left: 90%;
  top: 1%;
  width: 100%;
  @media (min-width: 1300px) {
    left: 86%;
  }
  @media (max-width: 765px) {
    position: static;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
    order: 2;
  }
`
const ArrowSize = styled.sup`
  font-size: 22px;

`

const HeaderWrapper = styled.div`
  margin-bottom: 100px;
  height: 500px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1300px) {
    height: 350px;
    margin-bottom: 50px;
  }
  @media (max-width: 765px) {
    height: 175px;
    margin-bottom: 24px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`

export default Header;