import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import "./SliderSection.css";

function SliderSection() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <EachSlide>
      <Slide>
        <EachSlideEffect>
          <div style={{ backgroundImage: `url(${images[0]})` }}>
            <span>Slide 1</span>
          </div>
        </EachSlideEffect>
        <EachSlideEffect>
          <div style={{ backgroundImage: `url(${images[1]})` }}>
            <span>Slide 2</span>
          </div>
        </EachSlideEffect>
        <EachSlideEffect>
          <div style={{ backgroundImage: `url(${images[2]})` }}>
            <span>Slide 3</span>
          </div>
        </EachSlideEffect>
      </Slide>
    </EachSlide>
  );
}

export default SliderSection;

const EachSlide = styled.div``;

const EachSlideEffect = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    border-radius: 20px;
    width: 90vw;
    height: 9vh;
    margin-top: 0.5vh;
  }
  & > span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
`;
