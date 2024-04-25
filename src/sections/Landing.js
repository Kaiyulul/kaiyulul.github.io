import React from 'react';
import "../styles/Landing.css";
// import "../styles/Dev.css";
import About from './About.js';
import Experience from './Experience.js';
import Works from './Works.js';
import Contact from './Contact.js';
import Credits from './Credits.js';

class Landing extends React.Component {
    render() {
        return (
            <div className='mast-container'>
                <div className='mast-left'>
                    <div className='greeting'>
                        <img className='preview-vid' src='/assets/mast-video.gif'/>
                        <h1 className='name'>
                            KYLE TANDOC
                        </h1>
                        <div className='description'>
                            Full-Stack Developer & Designer
                        </div>
                    </div>
                </div>
                <div className='mast-right'>
                    <div className='content'>
                        <About />
                        <Experience />
                        <Works />
                        {/* <Contact /> */}
                        <Credits />
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;