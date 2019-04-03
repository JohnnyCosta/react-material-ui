import React, {Component} from "react";
import PropTypes from "prop-types";
import {ListItem, ListItemIcon, ListItemText, MenuList, withStyles} from "@material-ui/core";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import {withRouter} from 'react-router'

import {navBarItems} from "./navBarItems";
import {styles} from "./styles";


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.activeRoute = this.activeRoute.bind(this);
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1;
    }

    render() {
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(
                        this.props.classes.drawerPaper,
                        !this.props.open && this.props.classes.drawerPaperClose
                    )
                }}
                open={this.props.open}
            >
                <div className={this.props.classes.toolbarIcon}>
                    <IconButton onClick={this.props.handleDrawerClose}>
                        <ChevronLeft/>
                    </IconButton>
                </div>
                <Divider/>
                <MenuList>
                    {navBarItems.map((prop, key) => {
                        return (
                            <ListItem button key={key}
                                      // component={Link} to={prop.path}
                                      selected={this.activeRoute(prop.path)}
                                      onClick={() => this.props.history.push(prop.path) }
                            >
                                <ListItemIcon>
                                    <prop.icon/>
                                </ListItemIcon>
                                <ListItemText primary={prop.sidebarName}/>
                            </ListItem>
                        );
                    })}
                </MenuList>
            </Drawer>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NavBar));
