import React from 'react';
// import "../styles/Landing.css";
import "../styles/Dev.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

import About from './About.js';
import Experience from './Experience.js';

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
                    </div>
                </div>
                {/* <div className='mast-left'>
                    <div className="upper-button-container">
                        <a href='/' className='mast-button greeting'>
                            <h1>
                                Hey, I'm <span className='italic'> Kyle! </span>
                            </h1>
                        </a>
                        <a href='mailto:kyletandoc@gmail.com' target='_blank' className='mast-button socmed email'>
                            <SendIcon fontSize='large'/>
                        </a>
                    </div>
                    <video autoPlay muted loop className='mast-video' src='/assets/mast-video.MOV'/>
                    <a href='https://www.linkedin.com/in/kyle-tandoc/' target='_blank' className='mast-button socmed linkedin'>
                        <LinkedInIcon fontSize='large'/>
                    </a>
                    <a href='https://www.linkedin.com/in/kyle-tandoc/' target='_blank' className='mast-button socmed github'>
                        <GitHubIcon fontSize='large'/>
                    </a>
                </div> */}
                {/* <div className='mast-right'>
                    <div className='mast-heading-container'>
                        <h1>
                            Freelance
                        </h1>
                    </div>
                    <div className='mast-heading-container'>
                        <h1>
                            Developer
                        </h1>
                        <h1>
                            &
                        </h1>
                    </div>
                    <div className='mast-heading-container'>
                        <h1>
                            Designer
                        </h1>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Landing;