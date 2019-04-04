import React, {Component} from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import {Table, TableBody, TableCell, TableHead, TableRow, withStyles} from "@material-ui/core";

import {styles} from "./styles";

class Process extends Component {

    constructor(props) {
        super(props);

        this.classes = props.classes;

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const {error, isLoaded, items} = this.state;
        let list;
        if (error) {
            list = <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            list = <div>Loading...</div>;
        } else {
            list =
                    <Table className={this.classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Weight</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.weight}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
            ;
        }
        return (
            <div>
                <div className={this.classes.appBarSpacer}/>

                <Typography variant="h5" component="h3">
                    Process Page
                </Typography>

                {list}

            </div>
        );
    }
}

Process.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Process);
