import React from 'react';
import { Link } from 'react-router-dom';

function Marzo() {
    return <div>
        <h1>Entrada de Marzo</h1>
        <h3>Este es el componete de Marzo</h3>
        <Link to="/blog">Volver atrás</Link>
    </div>;
}

export default Marzo;