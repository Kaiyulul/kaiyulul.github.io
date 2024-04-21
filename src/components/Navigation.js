import React from 'react';
import "../styles/Navigation.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

class Navigation extends React.Component {
    render() {
        return (
            <div className='nav'>
                <div className='bold status'>
                    OPEN TO WORK
                </div>
            </div>
        )
    }
}

export default Navigation;