import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
import MyParking from "./views/LandingPage/MyParking";
import Footer from "./views/Footer/Footer";
import ListPage from "./views/ListPage/ListPage";
import QrPage from "./views/QrPage/QrPage";
<<<<<<< HEAD
import RoomStart from "./views/RoomStartPage/RoomStart";
import LoginForm from "./views/LoginPage/LoginForm";
=======
import DragDropPage from "./views/DragDropPage/DragDropPage";
>>>>>>> 38094c71b7c001dd46f06128ab19370d5692ef2e

function App() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          minHeight: "calc(100vh - 80px)",
          backgroundColor: "#f5f6f8",
          paddingTop: "50px",
        }}
      >
        <Routes>
          <Route path="/" element={<MyParking />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/qrcode" element={<QrPage />} />
<<<<<<< HEAD
        <Route path="/login" element={<LoginForm />} />
            <Route path="/roomstart" element={<RoomStart />} />

=======
          <Route path="/test" element={<DragDropPage />} />
>>>>>>> 38094c71b7c001dd46f06128ab19370d5692ef2e
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
