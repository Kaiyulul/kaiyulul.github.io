import React from 'react';
import "../styles/_Homepage.css";
import UnderConstruction from "../pages/UnderConstruction.js";
import Navigation from "../components/Navigation.js";
import Landing from "../sections/Landing.js";

import BezierNoise from "../graphics/BezierNoiseSketch.js";

class Homepage extends React.Component {
    render() {
        return (
            <section id="homepage">
                <Navigation/>
                <Landing/>
                {/* <UnderConstruction /> */}
                {/* <BezierNoise /> */}
            </section>
        )
    }
}

export default Homepage;