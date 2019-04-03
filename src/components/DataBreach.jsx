import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core";

import {styles} from "./styles";

function DataBreach(props) {
    const {classes} = props;
    return (
        <div>
            <div className={classes.appBarSpacer}/>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                    Data Breach Page
                </Typography>
            </Paper>
        </div>
    );
}

DataBreach.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataBreach);
