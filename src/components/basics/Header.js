import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header id="header">
      <div className="header__port">
        <Link to="/portfolio">Portfolio</Link>
      </div>
      <div className="header__logo">
        <Link to="/">silvery</Link>
      </div>
      <div className="header__menu">
        <div className="header__nav demo">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/reference">Reference</Link>
            </li>
            <li>
              <Link to="/youtube">Youtube</Link>
            </li>
            <li>
              <Link to="/script">Script</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">회원가입</Link>
            </li>
            <li>
              <Link to="/">로그인</Link>
            </li>
            <li>
              <Link to="/">게시판</Link>
            </li>
          </ul>
        </div>
        <Link to="#" className="rang">
          <span className="sr-only">menu</span>
        </Link>
      </div>
    </header>
  );
}
export default Header;