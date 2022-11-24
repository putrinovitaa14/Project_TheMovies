import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Player from './pages/Player';
import Singup from './pages/Singup';
import Tmovies from './pages/Tmovies';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Singup />} />
        <Route exact path="/tiket" element={<Player />} />
        <Route exact path="/" element={<Tmovies />} />

      </Routes>
    </BrowserRouter>
  );
}
