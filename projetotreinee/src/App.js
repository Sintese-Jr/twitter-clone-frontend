import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/Home";
import PerfilPage from "./pages/Perfil";
import Bookmarks from "./pages/Bookmarks";
import Explore from "./pages/Explore";
import LoginPage from "./pages/Login";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/perfil/:id" element={<PerfilPage />}/>
            <Route path="/explore" element={<Explore />}/>
            <Route path="/bookmarks" element={<Bookmarks />}/>
        </Routes>
    )
}