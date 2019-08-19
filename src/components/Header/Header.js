import React from 'react';
import styled from 'styled-components';

import b3d from '../../assetsBlog/b3d.svg';
import logo from '../../assetsBlog/logo.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBlog>Brightlab <br/> blog</HeaderBlog>
          <B3D src={b3d} alt="B3D"/>
          <Logo src={logo} alt="logo"/>
          <LinkArrow href="https://brightlab.me">Official website <ArrowSize>&#129109;</ArrowSize></LinkArrow>
    </HeaderWrapper>
  );
};

//style
const HeaderBlog = styled.span`
  font-family: 'HelveticaNeueCyrMedium';
  font-size: 200px;
  line-height: 190px;
  
  @media (min-width: 1300px) and (max-width: 1600px) {
    margin: 0;
    margin-top: 80px;
    margin-bottom: 90px;
  }
  @media (min-width: 766px) and (max-width: 1299px) {
    font-size: 110px;
    line-height: 100px;
  }
  @media (max-width: 765px) {
    font-size: 40px;
    line-height: 42px;
  }
`
const B3D = styled.img`
  position: absolute;
  z-index: -1;
  width: 55%;
  left: 33%;
  top: 1%;
  @media (min-width: 1300px) and (max-width: 1600px) {
    top: -15%;
    left: 38%;
    width: 60%;
  }
  @media (min-width: 766px) and (max-width: 1299px) {
    top: -4%;
    left: 47%;
    width: 40%;
  }
  @media (max-width: 765px) {
    width: 70%;
    left: 38%;
    top: -3%;
  }
`
const Logo = styled.img`
  position: absolute;
  top: 15%;
  left: 50%;
  @media (min-width: 1300px) and (max-width: 1600px) {
    left: 68%;
    top: 13%;
  }
  @media (min-width: 766px) and (max-width: 1299px) {
    transform: scale(0.50);
    left: 55%;
    top: -5%;
  }
  @media (max-width: 765px) {
    width: 40px;
    height: 25px;
    position: static;
    order: 1;
    margin-top: 24px;
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
  }
`
const ArrowSize = styled.sup`
  font-size: 22px;

`

const HeaderWrapper = styled.div`
  margin-bottom: 240px;
  @media (max-width: 765px) {
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: column-reverse;
    flex-shrink: 190px;
    margin-bottom: 24px;
  }
`
export default Header;