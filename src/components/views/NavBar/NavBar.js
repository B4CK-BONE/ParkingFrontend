import React, { useState } from 'react';
import styled from 'styled-components';
import { BiMessageAltEdit } from 'react-icons/bi';
import SurveyBottomSheetSection from './Sections/SurveyBottomSheetSection';
import { useSelector } from 'react-redux';

function NavBar() {
    const [Survey, setSurvey] = useState(false);
    const userinfos = useSelector((state) => state.user);
    const onSurveyBtn = (event) => {
        setSurvey(true);
    };
    return (
        <div>
            <NavContainer>
                {userinfos?.userData?.result?.role === 1 ? (
                    <React.Fragment>
                        <SubIcon>
                            <NoneBtn></NoneBtn>
                        </SubIcon>
                        <MainText>Parking</MainText>
                        <SubIcon onClick={onSurveyBtn}>
                            <BiMessageAltEdit size="30" />
                        </SubIcon>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Main2Text>Parking</Main2Text>
                    </React.Fragment>
                )}
            </NavContainer>
            <SurveyBottomSheetSection open={Survey} setSurvey={setSurvey} Survey={Survey} />
        </div>
    );
}

export default NavBar;

const MainText = styled.h1`
    font-size: 25px;
    margin-top: 10%;
    margin-bottom: 10%;
    font-weight: bolder;
    color: #ffffff;
    font-family: 'Audiowide', cursive;
    @media (min-width: 800px) {
        font-size: 30px;
    }
`;

const Main2Text = styled.h1`
    font-size: 25px;
    margin: auto;
    font-weight: bolder;
    color: #ffffff;
    font-family: 'Audiowide', cursive;
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
    justify-content: space-between;
    position: fixed;
    z-index: 9999;
`;

const SubIcon = styled.div`
    width: 50px;
    filter: invert(100%);
`;

const NoneBtn = styled.div`
    width: 50px;
`;