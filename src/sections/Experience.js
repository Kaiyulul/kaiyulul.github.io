import React from 'react';

const Experience = () => {
    const xpItems = {
        "La Nada": {
            href: "https://lanadabrand.com/",
            title: "Freelance Dev & Designer",
            duration: "Since Mar 2024",
            desc: [
                "Designed and wireframed responsive layouts using Figma, ensuring user-friendly interfaces and optimal user experiences.",
                "Created a custom Shopify theme that integrated unique designs and functionalities tailored to client demands.",
                "Collaborated closely with the client throughout the design and development process, swiftly addressing concerns and incorporating feedback by iterating through designs.",
                "Currently providing ongoing maintenance and technical support and preparing for future collection releases."
            ],
            stack: "Liquid / JavaScript / HTML / CSS / Figma"
        },
        "Qairos, Inc.": {
            title: "All-Around Intern",
            duration: "June - Sept 2022",
            desc: [
                "Assisted in UX/UI research and design using Figma, providing feedback to create meaningful product experiences through a user-centered approach.",
                "Performed testing of prototypes using Cypress, troubleshooting the products before deployment to ensure full feature functionality."
            ],
            stack: "JavaScript / Cypress / Figma"
        }
    }

    return (
        <div className='xp-container'>
            <div className='bold xp-title'>
                Work Experience
            </div>
            <div className='xp-items'>
                {Object.keys(xpItems).map((key, i) => {
                    const item = xpItems[key];
                    return(
                        <div className={`experience ${key}`}>
                            <div className='xp-details'>
                                <a href={item.href} className='bold xp-company'> {key} </a>
                                <div className='title'> {item.title} </div>
                                {item.desc?.map(function (descItem, i) {
                                    return(
                                        <li className='description'> {descItem} </li>
                                    );
                                })}
                                <div className='stack'> {item.stack} </div>
                            </div>
                            <div className='xp-duration'>
                                {item.duration}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Experience;