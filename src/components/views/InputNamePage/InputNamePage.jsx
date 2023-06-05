import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { useCookies } from 'react-cookie'; // useCookies import
import { useNavigate } from 'react-router-dom';

const InputNamePage = (props) => {
    const [cookies, setCookie] = useCookies(['id']); // 쿠키 훅
    const [Name, setName] = useState('');
    const [Usercar, setUsercar] = useState('');
    const navigate = useNavigate();

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onUsercarHandler = (event) => {
        setUsercar(event.currentTarget.value);
    };

    const handleJoinRoom = (event) => {
        event.preventDefault();

        const params = { username: Name, usercar: Usercar };
        const body = JSON.stringify(params);
        if (Name !== '' || Usercar !== '') {
            console.log(body);
            // 방 입장하기 버튼 클릭 시 실행되는 로직
            axios
                .post('https://backbone-ufribf.run.goorm.site/main/', body, {
                    withCredentials: true,
                }) //
                .then((response) => {
                    // 요청이 성공한 경우의 처리
                    console.log(response.data);
                    setCookie('id', response.data); // 쿠키에 토큰 저장
                    setCookie('username', Name); // 쿠키에 토큰 저장
                    setCookie('usercar', Usercar); // 쿠키에 토큰 저장
                    navigate('/');
                })
                .catch((error) => {
                    // 요청이 실패한 경우의 처리
                    console.error(error);
                });
        } else {
            alert('차량번호 및 호수를 확인해주세요.');
        }
    };

    return (
        <div ref={props.ref} className="wrap loaded">
            <ContainerDiv>
                <ContainerTitleDiv>간단한 회원 정보를 입력해주세요.</ContainerTitleDiv>
                <ContainersubTitleDiv>
                    ParKING은 세대 호수와 차량번호가 필요해요. 정보를 안전하게 보관되며, 어디에도
                    공개되지 않아요.
                </ContainersubTitleDiv>
            </ContainerDiv>
            <ContainerDiv>
                <NameInput
                    type="text"
                    minlength="3"
                    value={Name}
                    onChange={onNameHandler}
                    placeholder="세대 호수 예). 201호"
                />
                <NameInput
                    type="text"
                    minlength="7"
                    value={Usercar}
                    onChange={onUsercarHandler}
                    placeholder="차량 번호 예). 17가 8526"
                />
                <StartBtn onClick={handleJoinRoom}>가입하기</StartBtn>
            </ContainerDiv>
        </div>
    );
};

export default InputNamePage;

const NameInput = styled.input`
    width: 85%;
    height: 32px;
    font-size: 15px;
    border: 0px;
    border-radius: 15px;
    outline: none;
    padding: 10px;
    margin: 10px auto;
    background-color: rgb(233, 233, 233);
`;

const animation = keyframes`
50% {
  transform: scale(0.92);
}
`;

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerTitleDiv = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 25px;
    font-weight: 1000;
    margin-bottom: 2vh;
`;

const ContainersubTitleDiv = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 5vh;
`;

const StartBtn = styled.button`
    display: flex;
    justify-content: center;

    width: calc(100% - 32px);
    height: 54px;
    line-height: 54px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    background: #5849ff;
    color: #fff;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 17px;
    font-weight: 400;

    margin: 10px;
    &:active {
        animation: ${animation} 0.2s;
    }
`;