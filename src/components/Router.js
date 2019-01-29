import React from 'react'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import App from './App'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/ceelo"/>
            )}/>
            <Route path="/" component={App}/>
            <Route exact path="/:player" isGame="true" component={App}/>
        </Switch>
    </BrowserRouter>
)
export default Router 