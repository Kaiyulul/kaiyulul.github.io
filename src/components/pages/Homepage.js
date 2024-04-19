import React from 'react';
import "../../styles/_Homepage.css";
import Landing from "../Landing.js";
import About from "../About.js";

import Test from "../Test.js"

class Homepage extends React.Component {
    render() {
        return (
            <section id="homepage">
                <Landing />
            </section>
        )
    }
}

export default Homepage;