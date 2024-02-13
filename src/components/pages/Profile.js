import React from "react";
import "../../styles/Profile.css";

import BezierNoiseSketch from "../graphics/BezierNoiseSketch";
import Navbar from "../Navbar.js";

const tech = [
    "Python", "JavaScript", "HTML", "CSS", "SQL", "Java", "TypeScript",
    "React.js", "Node.js", "Next.js", "TailwindCSS", "Git", "Django", "Flask","MongoDB", "DynamoDB", "Firebase"
]

class Profile extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <BezierNoiseSketch />
                <div className = "profile-container">
                    <h1> {'KYLE TANDOC'} </h1>
                    <p>
                        {"I recently graduated from Ateneo de Manila University with a Bachelor's Degree in Computer Science and a Specialization in Data Science and Analytics. "}
                    </p>
                    <p>
                        {"During my stay in Ateneo, I have also taken an interest in full stack development and machine learning. "}
                    </p>
                    <p>
                        {"Here are some tech I have worked with: "}
                        <ul className = "tech">
                            {tech.map(function(tech, i) {
                                return(
                                    <li>{tech}</li>
                                )
                            })}
                        </ul>
                    </p>
                    <p>
                        {"Back in university, I was an active member of our dance organization. Having been a passion of mine since I was a kid, the Company of Ateneo Dancers has honed me as a leader and a follower. I have utilized my strengths as a creative to my technical side through web development and creative coding. Other than this, I am experienced in layouting and prototyping due to my graphic design background as well."}
                    </p>
                    <p>
                        {"If you are looking for an all-around software developer with experience in both creative and technical aspects, just message me!"}
                    </p>
                </div>
            </div>
        )
    }
}

export default Profile;