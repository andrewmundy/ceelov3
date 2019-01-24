import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Rules from './Rules'
import Game from './Game'
import Login from './Login'


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" firebase={"firebase"} render={(props) => <Login {...props}/>} />
            <Route path="/rules" component={Rules}/>
            <Route path="/game/:gameId" component={Game}/>
        </Switch>
    </BrowserRouter>

)

export default Router 