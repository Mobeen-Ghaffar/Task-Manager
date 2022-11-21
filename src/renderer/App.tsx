import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import React from 'react';
import FocusSession from './pages/focusSession'
import  Apps from './component/Navigation'

import Timer from './pages/timer'

export default function App() {
  return (
    <Router>
    <Apps/>

      <Routes>
        <Route path="/" element={<FocusSession />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}
