import React, { useRef, useEffect } from 'react';
import './App.css';
import Auth from '../hoc/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './views/NavBar/NavBar';
import MyParking from './views/LandingPage/MyParking';
import Footer from './views/Footer/Footer';
import ListPage from './views/ListPage/ListPage';
import QrPage from './views/QrPage/QrPage';
import RoomJoinPage from './views/RoomJoinPage/RoomJoinPage';
import RoomStart from './views/RoomStartPage/RoomStart';
import SettingPage from './views/SettingPage/SettingPage';
import InputNamePage from './views/InputNamePage/InputNamePage';
import LoginPage from './views/LoginPage/LoginPage';
import RoomWaitPage from './views/RoomWaitPage/RoomWaitPage';
import ManagementPage from './views/ManagementPage/ManagementPage';
import Profile from './views/Profile/Profile';
import { refreshAccessToken } from '../_actions/user_action';
import { useCookies } from 'react-cookie'; // useCookies import
import Axios from 'axios';
import { API_URL } from './config';
import useInterval from '../hook/useInterval'; // useInterval 파일의 경로에 맞게 수정

function App() {
    const url = document.URL;
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const wrapRef = useRef(null);
    const dispatch = useDispatch();
    const [cookies, setCookie, removeCookies] = useCookies(['refreshToken']);
    const NewLoginPage = Auth(LoginPage, false);

    const NewMyParking = Auth(MyParking, true, 1);
    const NewListPage = Auth(ListPage, true, 1);
    const NewQrPage = Auth(QrPage, true, 1);
    const NewProfile = Auth(Profile, true, 1);
    const NewSettingPage = Auth(SettingPage, true, 1);

    const NewInputName = Auth(InputNamePage, true, 2);

    const NewRoomJoinPage = Auth(RoomJoinPage, true, 5);
    const NewRoomStart = Auth(RoomStart, true, 5);

    const NewManagementPage = Auth(ManagementPage, true, 3);

    const NewRoomWaitPage = Auth(RoomWaitPage, true, 4);

    const minute = 1000 * 60 * 60;
    useInterval(() => {
        if (
            cookies.refreshToken !== 'undefined' &&
            cookies.refreshToken !== undefined &&
            cookies.refreshToken
        ) {
            let config = {
                headers: {
                    Authorization: `${cookies.refreshToken}`,
                },
                withCredentials: true,
            };
            Axios.get(`${API_URL}user/refresh`, config)
                .then((response) => {
                    const options = {
                        path: '/',
                        maxAge: 60 * 60 * 24 * 30,
                    };

                    if (
                        response.data.refreshToken !== 'undefined' &&
                        response.data.refreshToken !== undefined &&
                        response.data.refreshToken
                    ) {
                        removeCookies();

                        setCookie('refreshToken', response.data.refreshToken, options);

                        dispatch(refreshAccessToken(response.data.accessToken));
                        navigate('/inputname');
                    }
                })

                .catch((error) => {
                    navigate('/login');
                });
        } else {
            removeCookies();
        }
    }, minute * 24);

    if (
        url.includes('roomstart') ||
        url.includes('test') ||
        url.includes('inputname') ||
        url.includes('roomjoin') ||
        url.includes('roomwait') ||
        url.includes('login')
    ) {
        return (
            <div>
                <div style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '50px' }}>
                    <Routes>
                        <Route path="/login" element={<NewLoginPage />} />
                        <Route path="/roomstart" element={<NewRoomStart />} />
                        <Route path="/inputname" element={<NewInputName />} />
                        <Route path="/roomjoin" element={<NewRoomJoinPage />} />
                        <Route path="/roomwait" element={<NewRoomWaitPage />} />

                        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
                    </Routes>
                </div>
            </div>
        );
    }
    return (
        <div>
            <NavBar />
            <div
                style={{
                    minHeight: 'calc(100vh - 80px)',
                    backgroundColor: '#f5f6f8',
                    paddingTop: '50px',
                }}
            >
                <Routes>
                    <Route path="/" element={<NewMyParking />} />
                    <Route path="/list" element={<NewListPage />} />
                    <Route path="/qrcode" element={<NewQrPage />} />
                    <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
                    <Route path="/setting" element={<NewSettingPage />} />
                    <Route path="/profile" element={<NewProfile />} />
                    <Route path="/management" element={<NewManagementPage ref={wrapRef} />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;