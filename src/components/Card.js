import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({id, url, title}) => {
    return <Link to={url} target="_blank">
        <div className="card" id={id} url={url}>
            <p> {title} </p>
        </div>
    </Link>
};

export default Card;