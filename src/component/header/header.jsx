import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./header.css";
import logo from "./Netflix_2015_logo.svg.png";

function Header() {
  const headerRef = useRef();
  const [input, setInput] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("scroll");
      } else {
        headerRef.current.classList.remove("scroll");
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  const handleInput = () => {
    setInput(!input);
  };

  return (
    <div ref={headerRef} className="header-nav">
      <div className="primary-nav">
        <div className="logo-nav">
          <img src={logo} alt="" />
        </div>
        <ul className="menu-nav">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/">Phim truyền hình</Link>
          </li>
          <li>
            <Link to="/">Phim</Link>
          </li>
          <li>
            <Link to="/">Mới & phổ biến</Link>
          </li>
          <li>
            <Link to="list">Danh sách của tôi</Link>
          </li>
        </ul>
      </div>
      <div className="secondary-nav">
        <div className="search-nav">
          <button onClick={handleInput} className="search-icon-nav">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          {input && (
            <input
              className="search-input"
              type="text"
              placeholder="Phim, diễn viên, thể loại"
            />
          )}
        </div>
        <i class="fa-solid fa-bell icon-nav"></i>
        <i class="fa-solid fa-gear icon-nav"></i>
      </div>
    </div>
  );
}
export default Header;
