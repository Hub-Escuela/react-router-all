import React from 'react';
import NavMenu from './NavMenu';
import { useParams, useLocation } from 'react-router-dom';

function useQuery() {
    console.log("search",useLocation().search);
    return new URLSearchParams(useLocation().search);
}

function Game() {

    const { id } = useParams();

    const query = useQuery();

    return <div>
        <NavMenu />
        <h3>Id {id}</h3>
        <p>Name {query.get("name")}</p>
        <p>Surname {query.get("surname")}</p>
    </div>;
}

export default Game;