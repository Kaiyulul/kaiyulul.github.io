import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

export default function Navbar() {
    return <nav className="navbar">
        <Link to="/ ">
            <img
                className="navicon"
                src="/assets/pixelSphereCut2.png"
                alt=""
            />
        </Link>
    </nav>
}