import React from 'react';
import "../../styles/_Homepage.css";
import UnderConstruction from "../UnderConstruction.js";
import Landing from "../Landing.js";
import About from "../About.js";

import BezierNoise from "../graphics/BezierNoiseSketch.js";

class Homepage extends React.Component {
    render() {
        return (
            <section id="homepage">
                <UnderConstruction />
                {/* <BezierNoise /> */}
            </section>
        )
    }
}

export default Homepage;