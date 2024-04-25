import React from 'react';

const skills =[
    "JavaScript", "HTML", "CSS", "Python", "Liquid", "SQL", "Java"
]

const dev =[
    "React", "NodeJS", "Shopify", "Next.js", "Tailwind", "Django", "MongoDB", "Firebase", "Git"
]

class About extends React.Component {
    render() {
        return (
            <div className='about-container container'>
                <div className='bold about-title'>
                    About Me
                </div>
                <div className='bold tagline description '>
                I love to create and work on projects with a holistic approach to both functionality and design.
                </div>
                <div className='extra-info description'>
                I graduated with a <span className='bold'> Bachelor's Degree in Computer Science with a specialization in Data Science and Analytics </span> from <span className='bold'>Ateneo de Manila University </span>in <span className='bold'>2023</span>. Other than full stack, I have also familiarized myself with some Blockchain and InfoSec side quests. 
                </div>
                <div className='extra-info description'>
                I draw creative inspiration from my time as a graphic designer, and as a performer in the Company of Ateneo Dancers. <span className='bold'>I have disciplined myself into striving to go above and beyond in all things that I do, being very keen with details that are often overlooked.</span>
                </div>
                <div className='bold currently description'>
                I am currently freelancing as a full-stack web developer who can also design applications when needed.
                </div>
                
                {/* <div className='profile skills-dev'>
                    <div className='profile description'>
                        Here's some of the tech I've worked with recently -
                    </div>
                    <div className='skills'>
                        {skills.map(item => <div className='item'> {item} </div>)}
                        {dev.map(item => <div className='item'> {item} </div>)}
                    </div>
                    <div className='dev'>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default About;