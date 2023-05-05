import React from "react";
import styled from "styled-components";

const MainText = styled.h1`
  font-size: 25px;
  margin-top: 10%;
  margin-bottom: 10%;
  font-weight: bolder;
  color: #ffffff;
  font-family: "Bungee Inline", cursive;
  @media (min-width: 800px) {
    font-size: 30px;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #452b75;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
`;
function NavBar() {
  return (
    <div>
      <NavContainer>
        <MainText>Parking</MainText>
      </NavContainer>
    </div>
  );
}

export default NavBar;
