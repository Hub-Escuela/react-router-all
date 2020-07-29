import React from 'react';
import { Link } from 'react-router-dom';

function Febrero() {
    return <div>
        <h1>Entrada de Febrero</h1>
        <h3>Este es el componete de Febrero</h3>
        <Link to="/blog">Volver atrás</Link>
    </div>;
}

export default Febrero;