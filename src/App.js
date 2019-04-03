import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import {withStyles} from "@material-ui/core";
import Process from "./components/Process";
import Request from "./components/Request";
import {styles} from "./components/styles";
import SubContractor from "./components/SubContractor";
import DataBreach from "./components/DataBreach";
import Settings from "./components/Settings";
import NavBar from "./components/NavBar";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Process}/>
                <Route exact path='/process' component={Process}/>
                <Route exact path='/request' component={Request}/>
                <Route exact path='/subcontractor' component={SubContractor}/>
                <Route exact path='/databreach' component={DataBreach}/>
                <Route exact path='/settings' component={Settings}/>
            </Switch>
        )
    }
}

class App extends Component {

    state = {
        open: true
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        return (
            <BrowserRouter>
                <div className={classes.root}>
                    <CssBaseline/>
                    <AppBar
                        position="absolute"
                        className={classNames(
                            classes.appBar,
                            this.state.open && classes.appBarShift
                        )}
                    >
                        <Toolbar
                            disableGutters={!this.state.open}
                            className={classes.toolbar}
                        >
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(
                                    classes.menuButton,
                                    this.state.open && classes.menuButtonHidden
                                )}
                            >
                                <Menu/>
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                className={classes.title}
                            >
                                Dashboard
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <NavBar open={this.state.open} handleDrawerClose={this.handleDrawerClose}/>

                    <main className={classes.content}>
                        <Routes/>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
