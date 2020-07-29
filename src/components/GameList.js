import React from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

async function getApi() {
    const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=cf666fece5c38969dc259ab90e870c87");
    const data = await response.json();
    console.log(data);
    return data;
};

function GameList() {

    //getApi();

    return <div>
        <NavMenu/>
        <ul>
            <li>
                <div>
                    <p>Id: 1</p>
                    <p>Name: Asteroids</p>
                    <Link to="/game/1?name=hola">Open game</Link>
                </div>
            </li>
            <li>
                <div>
                    <p>Id: 2</p>
                    <p>Name: Mario 64</p>
                    <Link to="/game/2">Open game</Link>
                </div>
            </li>
        </ul>
    </div>;
}

export default GameList;