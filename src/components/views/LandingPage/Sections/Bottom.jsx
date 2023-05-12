import { useEffect, useState } from "react";
import BottomSheet from "./BottomSheet";
import styled from "styled-components";

function Bottom(props) {
  const [isDisabled, setDisabled] = useState(true);
  const [wishListName, setWishListName] = useState("");

  useEffect(() => {
    console.log(props.User);
    const $body = document.querySelector("body");
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  const createNewWishList = () => {
    props.User.outTime = wishListName;
    props.setIsModalOpen(false);
    setWishListName("");
    console.log(wishListName);
    console.log(props.User.outTime);
  };

  return (
    <StyledRoom>
      {props.User.use === true ? (
        <BottomSheet
          title={props.User.userCar}
          closeModal={() => props.setIsModalOpen(false)}
        >
          <StyledNewWishList>
            <StyledButtonWrapper>
              <ParkingInDiv>
                <ParkingInChildDiv>
                  주차 : {props.User.inTime}
                </ParkingInChildDiv>
              </ParkingInDiv>
              <ParkingInDiv>
                <ParkingInChildDiv>
                  출차 예정 : {props.User.outTime}
                </ParkingInChildDiv>
              </ParkingInDiv>
            </StyledButtonWrapper>
          </StyledNewWishList>
        </BottomSheet>
      ) : (
        <BottomSheet
          title="주차가능"
          closeModal={() => props.setIsModalOpen(false)}
        >
          <StyledNewWishList>
            <input
              type="time"
              name="inTime"
              onChange={(e) => {
                setWishListName(e.target.value);
                setDisabled(e.target.value.length === 0 ? true : false);
              }}
            />
            <button disabled={isDisabled} onClick={createNewWishList}>
              새로 만들기
            </button>
          </StyledNewWishList>
        </BottomSheet>
      )}
    </StyledRoom>
  );
}

export default Bottom;

const ParkingInDiv = styled.div`
  border-bottom: 3px solid #00aaff;
  border-top: 3px solid #00aaff;
  color: black;
  text-align: center;
  margin-left: 10px;
`;

const ParkingInChildDiv = styled.div`
  margin: 10px;
`;

const StyledRoom = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
    width: 85%;
    padding: 0.5rem 1rem;
    border: 0.1rem solid gray;
    border-radius: 0.8rem;
    margin-bottom: 1.8rem;
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
    width: 98%;
    font-weight: 600;
    font-size: 1rem;
    line-height: 2.3rem;
    margin-bottom: 30px;
    border-radius: 0.6rem;
    color: white;
    background-color: #452b75;
  }

  & > button:disabled {
    background-color: gray;
  }
`;
