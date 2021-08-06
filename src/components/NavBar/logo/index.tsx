import React from 'react';
import logo from '@/assets/img/nav_bar/logo_white.png';
import { Link } from 'umi';

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}

export default Logo;
