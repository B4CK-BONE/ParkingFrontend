import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import SliderSection from './views/SettingPage/Sections/SliderSection';

function App() {
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
                    <Route path="/" element={<MyParking />} />
                    <Route path="/list" element={<ListPage />} />
                    <Route path="/qrcode" element={<QrPage />} />
                    <Route path="/roomjoin" element={<RoomJoinPage />} />

                    <Route path="/roomstart" element={<RoomStart />} />
                    <Route path="/setting" element={<SettingPage />} />

                    <Route path="/test" element={<DragDropPage />} />
					<Route path="/test2" element={<DragDropPage2 />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;