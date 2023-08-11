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
import DragDropPage from './views/DragDropPage/DragDropPage';
import DragDropPage2 from './views/DragDropPage2/DragDropPage2';
import StartPage from './views/StartPage/StartPage';
import InputNamePage from './views/InputNamePage/InputNamePage';
import LoginPage from './views/LoginPage/LoginPage';
import RoomWaitPage from './views/RoomWaitPage/RoomWaitPage';
import ManagementPage from './views/ManagementPage/ManagementPage';
import { refreshAccessToken } from '../_actions/user_action';


function App() {
    const url = document.URL;
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const wrapRef = useRef(null);
    const dispatch = useDispatch();
    const NewMyParking = Auth(MyParking, true);
    const NewListPage = Auth(ListPage, true);
    const NewQrPage = Auth(QrPage, true);
    const NewRoomJoinPage = Auth(RoomJoinPage, false);
    const NewSettingPage = Auth(SettingPage, true);
    const NewRoomStart = Auth(RoomStart, false);
    const NewInputName = Auth(InputNamePage, false);
    const NewLoginPage = Auth(LoginPage, false);
    const NewRoomWaitPage = Auth(RoomWaitPage, false);
	const NewManagementPage = Auth(ManagementPage, false);

    useEffect(() => {
        const minute = 1000 * 60 * 60;
        // 로그인 상태 체크와 만료된 토큰 자동 갱신
        const authStatusInterval = setInterval(async () => {
            try {
                await dispatch(refreshAccessToken());
            } catch (error) {
                console.error('Error refreshing token:', error);
            }
        }, minute*24); // 일정 간격으로 실행

        return () => clearInterval(authStatusInterval); // 언마운트 시 인터벌 클리어
    }, []);

    const movePage = (url) => {
        if (pathname !== `/${url}`) {
            wrapRef.current.classList.replace('loaded', 'unloaded');
            setTimeout(() => {
                navigate(url);
                wrapRef.current.classList.replace('unloaded', 'loaded');
            }, 390);
        }
    };

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
                <div
                    className="wrap loaded"
                    style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '50px' }}
                >
                    <Routes>
                        <Route path="/login" element={<NewLoginPage ref={wrapRef} />} />
                        <Route path="/roomstart" element={<NewRoomStart ref={wrapRef} />} />
                        <Route path="/inputname" element={<NewInputName ref={wrapRef} />} />
                        <Route path="/roomjoin" element={<NewRoomJoinPage ref={wrapRef} />} />
                        <Route path="/roomwait" element={<NewRoomWaitPage ref={wrapRef} />} />
                        <Route path="/test" element={<DragDropPage2 />} />
						<Route path="/*" element={<Navigate to="/login"></Navigate>}></Route>
                    </Routes>
                </div>
            </div>
        );
    }
    return (
        <div>
            <NavBar movePage={movePage} />
            <div
                style={{
                    minHeight: 'calc(100vh - 80px)',
                    backgroundColor: '#f5f6f8',
                    paddingTop: '50px',
                }}
            >
                <Routes>
                    <Route path="/" element={<NewMyParking ref={wrapRef} />} />
                    <Route path="/list" element={<NewListPage ref={wrapRef} />} />
                    <Route path="/qrcode" element={<NewQrPage ref={wrapRef} />} />
					<Route path="/*" element={<Navigate to="/login"></Navigate>}></Route>
                    <Route path="/setting" element={<NewSettingPage ref={wrapRef} />} />
					<Route path="/management" element={<NewManagementPage ref={wrapRef} />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;