import React from 'react';
import './Header.css';
// import { HashLink } from "react-router-hash-link";

{/* <HashLink smooth to="/#work">
								work
							</HashLink> */}

{/* <HashLink smooth to="/#about">
								about
							</HashLink> */}

function Header() {
  return (
    <div className="top-bar">
      <div className="header-item">work</div>
      <div className="header-item">about</div>
      <div className="header-item">contact</div>
      <div className="header-item">cv</div>
    </div>
  );
}

export default Header;
