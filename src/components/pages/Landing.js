import React from "react";
import "../../styles/Landing.css";

import BezierNoiseSketch from "../graphics/BezierNoiseSketch";
import Socials from "../Socials.js"
import { CardLocal, CardExternal } from "../Card.js";

class Landing extends React.Component {
    render() {
        return (
            <section id="landing">
                <div className="main">
                    <div className="web">
                        <h1> {'KYLE TANDOC'} </h1>
                        <div className="web bubble-links">
                            <Socials/>
                        </div>
                    </div>
                    <div className="card-links">
                        <CardExternal
                            url="https://kyle-in-limbo.vercel.app/"
                            title='Personal blog' 
                            description=""/>
                        <CardExternal 
                            url="https://www.instagram.com/_kaiyulul_"
                            title="Art with Kaiyulul" 
                            description=""/>
                        <CardLocal 
                            url="/portfolio"
                            title="My Portfolio" 
                            description=""/>
                        <CardLocal 
                            url="/profile"
                            title="My Profile" 
                            description=""/>
                        <CardLocal 
                            url="/sketch"
                            title="View Sketch" 
                            description=""/>
                    </div>
                    <div className="mobile bubble-links">
                        <Socials/>
                    </div>
                    <BezierNoiseSketch/>    
                </div>
            </section>
        )
    }
}

export default Landing;