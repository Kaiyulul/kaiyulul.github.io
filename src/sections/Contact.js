import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import "../styles/Contact.css";


class Contact extends React.Component {
    render() {
        return (
            <div className='contacts-container container'>
                <div className='bold project-title'>
                    Contacts
                </div>
                <div className='contact-items'>
                    <a href='mailto:kyletandoc@gmail.com' target='_blank' className='socmed email'>
                        <SendIcon fontSize='small'/>
                    </a>
                    <a href='https://www.linkedin.com/in/kyle-tandoc/' target='_blank' className='socmed linkedin'>
                        <LinkedInIcon fontSize='small'/>
                    </a>
                    <a href='https://github.com/Kaiyulul' target='_blank' className='socmed github'>
                        <GitHubIcon fontSize='small'/>
                    </a>
                    <a href='https://instagram/_kaiyulul_' target='_blank' className='socmed instagram'>
                        <InstagramIcon fontSize='small'/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;