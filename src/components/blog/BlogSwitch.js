import React from 'react';
import { Switch, Route, useRouteMatch,  } from 'react-router-dom';
import Enero from './Enero';
import Febrero from './Febrero';
import Marzo from './Marzo';

function BlogSwitch() {

    const {path, url} = useRouteMatch();

    return <Switch>
    <Route exact path={`${path}/enero`}>
        <Enero/>
    </Route>
    <Route exact path={`${path}/febrero`}>
        <Febrero/>
    </Route>
    <Route exact path={`${path}/marzo`}>
        <Marzo/>
    </Route>
</Switch>
}

export default BlogSwitch;