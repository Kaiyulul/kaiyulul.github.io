import React from 'react';

const skills =[
    "JavaScript", "HTML", "CSS", "Python", "Liquid", "SQL"
]

const dev =[
    "React", "NodeJS", "Shopify", "Next.js", "Tailwind", "Djago", "MongoDB", "Firebase", "Git"
]

class About extends React.Component {
    render() {
        return (
            <div className='about-container container'>
                <div className='bold about-title'>
                    About
                </div>
                <div className='profile description'>
                Hey, I'm Kyle. I love to create products with a holistic approach to both functionality and design. I am often regarded as a Jack of all trades, being able to thrive even in unfamiliar environments.
                </div>
                {/* <div className='profile skills-dev'>
                    <div className='skills'>
                        {skills.map(item => <div className='item'> {item} </div>)}
                    </div>
                    <div className='dev'>
                        {dev.map(item => <div className='item'> {item} </div>)}
                    </div>
                </div> */}
            </div>
        )
    }
}

export default About;