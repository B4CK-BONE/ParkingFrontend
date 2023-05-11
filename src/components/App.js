import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
import MyParking from "./views/LandingPage/MyParking";
import Footer from "./views/Footer/Footer";
import ListPage from "./views/ListPage/ListPage";
import QrPage from "./views/QrPage/QrPage";

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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
