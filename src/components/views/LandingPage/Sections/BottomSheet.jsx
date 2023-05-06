import styled from "styled-components";
import { GrClose } from "react-icons/gr";

function BottomSheet({ title, closeModal, children }) {
  return (
    <>
      <StyledModalBackground />
      <StyledBottomSheet>
        <StyledBottomSheetHeader>
          <div>{title}</div>
          <GrClose size="23" onClick={closeModal} />
        </StyledBottomSheetHeader>
        <div>{children}</div>
      </StyledBottomSheet>
    </>
  );
}

export default BottomSheet;

const StyledModalBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
`;

const StyledBottomSheet = styled.div`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: fit-content;
  max-height: 90%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  background-color: white;
`;

const StyledBottomSheetHeader = styled.div`
  height: 1.4rem;
  padding: 1.1rem 2.2rem 0.9rem 2.2rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid gray;
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
