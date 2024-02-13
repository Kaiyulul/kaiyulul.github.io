import React from "react";
import "../../styles/Portfolio.css";

import BezierNoiseSketch from "../graphics/BezierNoiseSketch";
import Navbar from "../Navbar.js";

const techStack = [
    "Python", "JavaScript", "React.js", "Node.js",
    "HTML", "CSS", "SQL", "Java", "TypeScript",
    "Next.js", ""
]

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <BezierNoiseSketch />
                <div className = "portfolio-container">
                    <h1> {'Currently building!'} </h1>
                </div>
            </div>
        )
    }
}

export default Portfolio;