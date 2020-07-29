import React from 'react';
import { Link } from 'react-router-dom';

function Enero() {
    return <div>
        <h1>Entrada de Enero</h1>
        <h3>Este es el componete de Enero</h3>
        <Link to="/blog">Volver atrás</Link>
    </div>;
}

export default Enero;