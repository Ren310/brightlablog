import React from 'react';
import styled from 'styled-components';
import b3d from '../AssetsBlog/b3d.svg';
import logo from '../AssetsBlog/logo.svg';

const HeaderBlog = () => {
  return (
    <div>
      <Header>Brightlab <br/> blog</Header>
        <BlockLogo>
          <B3D src={b3d} alt="B3D"/>
          <Logo src={logo} alt="logo"/>
        </BlockLogo>
      <LinkArrow href="https://brightlab.me">Official website <sup>&#129109;</sup></LinkArrow>
    </div>
  );
};

//style
const Header = styled.h1`
  font-family: 'HelveticaNeueCyrMedium';
  font-size: 200px;
  line-height: 190px;
`
const B3D = styled.img`
  position: absolute;
  z-index: -1;
  width: 55%;
  left: 30%;
  top: 1%;
`
const Logo = styled.img`
  position: absolute;
  top: 15%;
  left: 50%;
`
const LinkArrow = styled.a`
  position: absolute;
  text-decoration: none;
  font-style: normal;
  color: black;
  left: 90%;
  top: 1%;
`
const BlockLogo = styled.div`

`
export default HeaderBlog;