import React, { useState } from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { AiOutlineQrcode } from "react-icons/ai";
import { IoMdHome, IoMdTrophy } from "react-icons/io";
import { HiHome, HiOutlineQrCode } from "react-icons/hi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Footer = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);

  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}

      <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <div className="nav-color">
          <HiHome
            size="23"
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
          <div className={activeNav === 1 ? "nav-item active" : "nav-item"}>
            홈
          </div>
        </div>
      </Link>

      <Link to="/" className="nav-link" onClick={() => setActiveNav(3)}>
        <div className="nav-color">
          <BsFillJournalBookmarkFill
            size="21"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
          <div className={activeNav === 3 ? "nav-item active" : "nav-item"}>
            리스트
          </div>
        </div>
      </Link>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(4)}>
        <div className="nav-color">
          <AiOutlineQrcode
            size="23"
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
          <div className={activeNav === 4 ? "nav-item active" : "nav-item"}>
            Qr
          </div>
        </div>
      </Link>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(5)}>
        <div className="nav-color">
          <GiHamburgerMenu
            size="23"
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
          <div className={activeNav === 5 ? "nav-item active" : "nav-item"}>
            전체
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Footer;
