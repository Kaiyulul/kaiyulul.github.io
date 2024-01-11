import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import BezierNoiseSketch from './components/graphics/BezierNoiseSketch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sketch" element={<BezierNoiseSketch />} />
      </Routes>
      {/* <img 
        className="marble"
        src ="/assets/pixelSphereCut.png"
        alt=""/> */}
    </div>
  );
}

export default App;
