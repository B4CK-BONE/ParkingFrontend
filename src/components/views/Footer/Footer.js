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
 
  const [activeNav, setActiveNav] = useState(1);

  return (
    <nav className="wrapper">
     

      <Link
        to="/"
        className="nav-link"
        onClick={() => {
          setActiveNav(1);
          
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
