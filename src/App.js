import React, {Component} from 'react';
import Dashboard from "./components/Dashboard";
import {Route, Switch} from 'react-router'
import {BrowserRouter, NavLink} from 'react-router-dom'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route exact path='/dash' component={Dashboard}/>
            </Switch>
        )
    }
}

class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <NavLink to="/">Comp1</NavLink>
                </li>
                <li>
                    <NavLink exact to="/comp2">Comp2</NavLink>
                </li>
                <li>
                    <NavLink exact to="/comp3">Comp3</NavLink>
                </li>
            </ul>
        )
    }
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Routes/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
