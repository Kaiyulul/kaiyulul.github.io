import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/pages/Landing';
import BezierNoiseSketch from './components/graphics/BezierNoiseSketch';
import Portfolio from './components/pages/Portfolio';
import Profile from './components/pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/#/" element={<Navigate to='/' />} />
        <Route path="/sketch" element={<BezierNoiseSketch />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <img 
        className="marble"
        src ="/assets/pixelSphereCut.png"
        alt=""/> */}
    </div>
  );
}

export default App;
