import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VirtualTour from './components/VirtualTour';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
