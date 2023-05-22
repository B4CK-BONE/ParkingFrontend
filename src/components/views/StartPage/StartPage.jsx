import React, { useState, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";

function StartPage(props) {
  const [open, setOpen] = useState(false);

  return (
    <div ref={props.ref} className="wrap loaded">
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        header={
          <StyledBottomSheetHeader>
            <div className="sheetHeader">SHEET HEADER</div>{" "}
            <GrClose size="23" onClick={() => setOpen(false)} />
          </StyledBottomSheetHeader>
        }
        snapPoints={({ maxHeight }) => 0.5 * maxHeight}
      >
        <div
          style={{
            height: "50vh",
          }}
        ></div>
      </BottomSheet>
    </div>
  );
}

export default StartPage;

const StyledBottomSheetHeader = styled.div`
  height: 1.4rem;
  padding: 1.1rem 2.2rem 0.9rem 2.2rem;
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  background: white;

  & > img {
    cursor: pointer;
  }

  & > div {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    width: 100%;
  }
`;
