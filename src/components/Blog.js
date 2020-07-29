import React from 'react';
import NavMenu from './NavMenu';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Enero from './blog/Enero';
import Febrero from './blog/Febrero';
import Marzo from './blog/Marzo';
import BlogSwitch from './blog/BlogSwitch';

function Blog() {

    const {path, url} = useRouteMatch();
    console.log("path",path);
    console.log("url", url);

    return <div>
        <NavMenu/>
        <h1>Blog Page</h1>
        <h3>Lista de entradas</h3>


        <ul>
            <li><Link to={`${url}/enero`}>Enero</Link></li>
            <li><Link to={`${url}/febrero`}>Febrero</Link></li>
            <li><Link to={`${url}/marzo`}>Marzo</Link></li>
        </ul>

        <BlogSwitch/>
        
    </div>;
}

export default Blog;