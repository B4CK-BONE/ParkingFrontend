import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import BottomSheet from "./BottomSheet";

import styled from "styled-components";

function Bottom(props) {
  const [isDisabled, setDisabled] = useState(true);

  const [bottomSheetTitle, setBottomSheetTitle] = useState("위시리스트");
  const [wishListName, setWishListName] = useState("");

  return (
    <StyledRoom>
      {props.isModalOpen && (
        <div>
          {props.User.use === true ? (
            <BottomSheet
              title={props.User.userCar}
              closeModal={() => props.setIsModalOpen(false)}
            >
              <StyledNewWishList>
                <StyledButtonWrapper>
                  <div>주차{props.User.inTime}</div>
                  <div>출차 예정 {props.User.outTime}</div>
                </StyledButtonWrapper>
              </StyledNewWishList>
            </BottomSheet>
          ) : (
            <BottomSheet
              title="출발시간 설정"
              closeModal={() => props.setIsModalOpen(false)}
            >
              <StyledNewWishList>
                <input
                  value={wishListName}
                  placeholder="최대 50자"
                  maxLength="50"
                  onChange={(e) => {
                    setWishListName(e.target.value);
                    setDisabled(e.target.value.length === 0 ? true : false);
                  }}
                />
              </StyledNewWishList>
            </BottomSheet>
          )}
        </div>
      )}
    </StyledRoom>
  );
}

export default Bottom;

const StyledRoom = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledExistingWishList = styled.div`
  padding: 2.4rem 2.2rem 2rem 2.2rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & > button {
    width: 5.8rem;
    height: 5.8rem;
    border: 0.1rem solid gray;
    border-radius: 0.8rem;
    background-color: white;
  }

  & > button > img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const StyledNewWishList = styled.div`
  padding: 3.3rem 2.2rem 3.6rem 2.2rem;

  & > input {
    width: 100%;
    padding: 2rem 1.2rem 2.1rem 1.2rem;
    border: 0.1rem solid gray;
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  & > input:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem black;
  }

  & > div {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: gray;
    margin-bottom: 6.8rem;
  }

  & > button {
    width: 100%;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    padding: 1.6rem 0 1.5rem 0;
    border-radius: 0.6rem;
    color: white;
    background-color: pink;
  }

  & > button:disabled {
    background-color: gray;
  }
`;
