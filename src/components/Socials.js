import React from "react";
import { Link } from "react-router-dom"

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import "../styles/Socials.css";

class Socials extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: true
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        return (
            <div id="socials">
                <Link to="https://github.com/Kaiyulul" target="_blank">
                    <GitHubIcon style={{ color: "rgb(234, 234, 234)"}} sx={{fontSize: "5vmin" }}/>
                </Link>
                <Link to="https://www.instagram.com/_kaiyul_/"  target="_blank">
                    <InstagramIcon style={{ color: "rgb(234, 234, 234)" }} sx={{fontSize: "5vmin" }}/>
                </Link>
                <Link to="https://www.linkedin.com/in/kyle-tandoc/"  target="_blank">
                    <LinkedInIcon style={{ color: "rgb(234, 234, 234)"}} sx={{fontSize: "5vmin" }}/>
                </Link>
                <Link className="email" to="mailto:kyle.tandoc@gmail.com"  target="_blank">
                    <EmailIcon style={{ color: "rgb(234, 234, 234)"}} sx={{fontSize: "5vmin" }}/>
                </Link>
            </div>
        )
    }
}

export default Socials;