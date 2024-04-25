import React from 'react';
import "../styles/Works.css";

import LinkCard from '../components/LinkCard.js';

class Works extends React.Component {
    render() {
        return (
            <div className='works-container container'>
                <div className='bold works-title'>
                    Selected Works
                </div>
                <div className='works-items'>
                    <LinkCard
                        title="La Nada"
                        desc="Design and Development"
                        href="/"
                        img="/assets/la-nada-preview.jpg"
                    />
                    <LinkCard
                        title="In Limbo"
                        desc="Personal Blog"
                        href="/"
                        img="/assets/in-limbo-preview.jpg"
                    />
                    <LinkCard
                        title="Kaiyulul"
                        desc="Generative Art"
                        href="https://www.instagram.com/_kaiyulul_"
                        img="/assets/kaiyulul-preview.jpg"
                    />
                </div>
            </div>
        )
    }
}

export default Works;