import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/pages/Homepage.js';

import { toggleMode } from './components/util/ToggleMode';
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
