import React from 'react';
import "../styles/Navigation.css";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='nav'>
                {/* <div className='bold status'>
                    OPEN TO WORK
                </div> */}
                <div className='contact-items'>
                    <a href='mailto:kyletandoc@gmail.com' target='_blank' className='socmed email'>
                        <SendIcon fontSize='small'/>
                    </a>
                    <a href='https://www.linkedin.com/in/kyle-tandoc/' target='_blank' className='socmed linkedin'>
                        <LinkedInIcon fontSize='small'/>
                    </a>
                    <a href='https://www.github.com/Kaiyulul' target='_blank' className='socmed github'>
                        <GitHubIcon fontSize='small'/>
                    </a>
                    <a href='https://www.instagram/_kaiyul_' target='_blank' className='socmed instagram'>
                        <InstagramIcon fontSize='small'/>
                    </a>
                </div>
                <div className='italic nav-clock'>{this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

export default Navigation;