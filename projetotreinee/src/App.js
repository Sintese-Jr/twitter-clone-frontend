import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/Home";
import PerfilPage from "./pages/Perfil";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/perfil" element={<PerfilPage />}/>
            <Route path="/explore"/>
            <Route path="/bookmarks"/>
        </Routes>
    )
}