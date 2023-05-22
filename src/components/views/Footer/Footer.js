import React, { useState } from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AiOutlineQrcode } from "react-icons/ai";
import { IoMdHome, IoMdTrophy } from "react-icons/io";
import { HiHome, HiOutlineQrCode } from "react-icons/hi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Footer = ({ movePage }) => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);

  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}

      <Link
        to="/"
        className="nav-link"
        onClick={() => {
          setActiveNav(1);
          //movePage("/");
        }}
      >
        <NavColor>
          <HiHome
            size="23"
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
          <div className={activeNav === 1 ? "nav-item active" : "nav-item"}>
            홈
          </div>
        </NavColor>
      </Link>

      <Link
        to="/list"
        className="nav-link"
        onClick={() => {
          setActiveNav(3);
          //movePage("/list");
        }}
      >
        <NavColor>
          <BsFillJournalBookmarkFill
            size="21"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
          <div className={activeNav === 3 ? "nav-item active" : "nav-item"}>
            리스트
          </div>
        </NavColor>
      </Link>
      <Link
        to="/qrcode"
        className="nav-link"
        onClick={() => {
          setActiveNav(4);
          //movePage("/qrcode");
        }}
      >
        <NavColor>
          <AiOutlineQrcode
            size="23"
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
          <div className={activeNav === 4 ? "nav-item active" : "nav-item"}>
            Qr
          </div>
        </NavColor>
      </Link>
      <Link
        to="/setting"
        className="nav-link"
        onClick={() => {
          //movePage("/setting");
          setActiveNav(5);
        }}
      >
        <NavColor>
          <GiHamburgerMenu
            size="23"
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
          <div className={activeNav === 5 ? "nav-item active" : "nav-item"}>
            전체
          </div>
        </NavColor>
      </Link>
    </nav>
  );
};

export default Footer;

const animation = keyframes`
50% {
  transform: scale(0.82);
}
`;

const NavColor = styled.div`
  &:active {
    animation: ${animation} 0.5s;
  }
`;
