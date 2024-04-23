import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage.js';

import { toggleMode } from './util/ToggleMode.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    toggleMode();
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/#/" element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
