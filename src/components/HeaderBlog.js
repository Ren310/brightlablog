import React from 'react';
import b3d from '../AssetsBlog/b3d.svg';
import logo from '../AssetsBlog/logo.svg';

const HeaderBlog = () => {
  return (
    <div>
      <h1>Brightlab <br/> blog</h1>
      <img src={b3d} alt="B3D"/>
      <img src={logo} alt="logo"/>
    </div>
  );
};

export default HeaderBlog;