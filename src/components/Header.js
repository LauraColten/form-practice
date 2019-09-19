import React from 'react';
import logo from '../img/ycombinator-logo.png';

function Header() {
  return (
    <div className="header">
        <img src={logo}/>
        <span>
          News Articles
          new |
          past |
          comments |
          ask |
          show |
          jobs |
          submit
        </span>
    </div>
  )
}

export default Header;