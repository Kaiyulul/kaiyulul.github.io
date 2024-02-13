import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const CardLocal = ({id, url, title}) => {
    return <Link to={url}>
        <div className="card" id={id} url={url}>
            <p> {title} </p>
        </div>
    </Link>
};

const CardExternal = ({id, url, title}) => {
    return <Link to={url} target="_blank">
        <div className="card" id={id} url={url}>
            <p> {title} </p>
        </div>
    </Link>
};

export {CardLocal, CardExternal};