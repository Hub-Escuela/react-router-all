import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import GameList from './components/GameList';
import Game from './components/Game';
import NotFound from './components/NotFound';
import Blog from './components/Blog';

function Routes() {
    return <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/contact">
            <ContactPage />
        </Route>
        <Route exact path="/game/:id">
            <Game />
        </Route>
        <Route exact path="/game">
            <GameList />
        </Route>
        <Route path="/blog">
            <Blog />
        </Route>
        <Route path="*">
            <NotFound/>
        </Route>
    </Switch>;
}

export default Routes;