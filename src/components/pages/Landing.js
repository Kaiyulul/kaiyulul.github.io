import React from "react";
import "../../styles/Landing.css";

import BezierNoiseSketch from "../graphics/BezierNoiseSketch";
import Socials from "../Socials.js"
import Card from "../Card.js";

class Landing extends React.Component {
    render() {
        return (
            <section id="landing">
                <div className="main">
                    <h1> {'KYLE TANDOC'} </h1>
                    <div className="card-links">
                        <Card 
                            url="https://kyle-in-limbo.vercel.app/"
                            title='Personal blog' 
                            description=""/>
                        <Card 
                            url="https://www.instagram.com/_kaiyulul_"
                            title="Art with Kaiyulul" 
                            description=""/>
                        <Card 
                            url="/sketch"
                            title="My Portfolio" 
                            description=""/>
                        <Card 
                            url="/sketch"
                            title="View Sketch" 
                            description=""/>
                    </div>
                    <div className="bubble-links">
                        <Socials/>
                    </div>
                    <BezierNoiseSketch/>    
                </div>
            </section>
        )
    }
}

export default Landing;