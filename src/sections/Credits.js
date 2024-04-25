import React from 'react';
import "../styles/Credits.css";

class Credits extends React.Component {
    render() {
        return (
            <div className='credits-container container'>
                <div className='dev-credits'>
                    Coded in Visual Studio Code. Built with React.js, p5.js, and possibly more in future versions. Deployed using Github Pages. 
                </div>
            </div>
        )
    }
}

export default Credits;