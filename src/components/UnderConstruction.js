import React from 'react';
import "../styles/UnderConstruction.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

class UnderConstruction extends React.Component {
    render() {
        return (
            <section className="construction">
                <div className="construction-container">
                    <a href='/' className='greeting'>
                        <div>
                            Hey, I'm <span className='italic bold'> Kyle! </span>
                        </div>
                    </a>
                    <video autoPlay muted loop className='preview-vid' src='/assets/mast-video.MOV'/>
                    <a href='/' className='chicken'>
                        <div>
                            I'm currently building my personal website still. (Sorry 'bout that!)
                        </div>
                    </a>
                    <a href='/' className='rice'>
                        <div>
                            But, you can check out my other socials!
                        </div>
                    </a>
                    <div className='ginger'>
                        <a href='https://www.linkedin.com/in/kyle-tandoc/' target='_blank' className=''>
                            <LinkedInIcon fontSize='large'/>
                        </a>
                        <a href='https://www.linkedin.com/in/kyle-tandoc/' target='_blank' className=''>
                            <GitHubIcon fontSize='large'/>
                        </a>
                        <a href='mailto:kyletandoc@gmail.com' target='_blank' className=''>
                            <EmailIcon fontSize='large'/>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default UnderConstruction;