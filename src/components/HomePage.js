import React from 'react';
import NavMenu from './NavMenu';
import { Link, useHistory } from 'react-router-dom';

function HomePage() {

    const history = useHistory();

    function onClick() {
        history.push("/game?name=test&description=hola");
    }

    return <div>
        <h1>Home Page</h1>
        <p>Estoy en la página principal</p>
        <button onClick={onClick}>Ver juegos</button>
        <Link to="/blog"><button>Blog</button></Link>
    </div>;
}

export default HomePage;