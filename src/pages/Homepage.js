import React from 'react';
import "../styles/_Homepage.css";
import UnderConstruction from "../pages/UnderConstruction.js";
import Navigation from "../components/Navigation.js";
import Landing from "../sections/Landing.js";

import BezierNoise from "../graphics/BezierNoiseSketch.js";

class Homepage extends React.Component {
    render() {
        return (
            <div className='app-container'>
                <Navigation/>
                <section id="homepage">
                    <Landing/>
                    {/* <UnderConstruction /> */}
                    <BezierNoise />
                </section>
            </div>
        )
    }
}

export default Homepage;