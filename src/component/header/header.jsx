import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./header.css";
import logo from "./Netflix_2015_logo.svg.png";

function Header() {
  const headerRef = useRef();

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
            <Link to="/">Danh sách của tôi</Link>
          </li>
        </ul>
      </div>
      <div className="secondary-nav">
        <form className="search-nav">
          <button className="search-icon-nav">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            className="search-input"
            type="text"
            placeholder="Phim, diễn viên, thể loại"
          />
        </form>
        <i class="fa-solid fa-bell icon-nav"></i>
        <i class="fa-solid fa-gear icon-nav"></i>
      </div>
    </div>
  );
}
export default Header;
