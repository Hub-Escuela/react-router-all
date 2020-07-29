import React from 'react';
import { Link } from 'react-router-dom';


function NavMenu() {
    return <div className="App">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/game">Games</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
    </div>;
}

export default NavMenu;