import React from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';


function NotFound() {
    return <div>
        <NavMenu/>
        <h1>404 - No encontrado</h1>
        <p><Link to="/"><button>Volver a Home</button></Link></p>
    </div>;
}

export default NotFound;