import React from 'react';
import "../styles/About.css";

class About extends React.Component {
    render() {
        return (
            <div className='about-container'>
                <div className='brief-introduction'>
                    <p>
                        Having graduated in July 2023 with a Specialization in Data Science and Analytics, I initially graduated thinking I would become a data analyst for some <span> fancy schmancy </span> FMCG. <br/><br/> However, after a brief break, I realized that I was naturally drawn to the idea of creating something through hardwork and empowered by purpose. This became the beginning of my <span> development </span> and <span> design </span> journey.
                    </p>
                    {/* <h1>
                        I create holistic experiences empowered by innovation and driven by technology.
                    </h1> */}
                </div>
                <div className='education'>
                    <h1> Education </h1>
                    <hr/>
                    <div className='school-date'>  
                        <h1> Ateneo de Manila University </h1>
                        <h1> Graduated July 2023 </h1>
                    </div>
                    <p className='italic'> Bachelor of Science in Computer Science with a Specialization in Data Science and Analytics </p>
                    <p> <span className='bold'> Coursework: </span> Data Structures, Artificial Intelligence, Machine Learning Pipelines, Pattern Recognition, Javascript Development, Architecting Private Blockchain Networks, Software Engineering, InfoSec </p>
                </div>
            </div>
        )
    }
}

export default About;