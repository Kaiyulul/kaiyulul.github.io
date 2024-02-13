import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import BezierNoiseSketch from './components/graphics/BezierNoiseSketch';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sketch" element={<BezierNoiseSketch />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      {/* <img 
        className="marble"
        src ="/assets/pixelSphereCut.png"
        alt=""/> */}
    </div>
  );
}

export default App;
