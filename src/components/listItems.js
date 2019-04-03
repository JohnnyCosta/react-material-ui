import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DonutSmall from "@material-ui/icons/DonutSmall";
import TouchApp from "@material-ui/icons/TouchApp";
import Security from "@material-ui/icons/Security";
import CallSplit from "@material-ui/icons/CallSplit";
import Settings from "@material-ui/icons/Settings";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DonutSmall />
            </ListItemIcon>{" "}
            <ListItemText primary="Process" />
        </ListItem>{" "}
        <ListItem button>
            <ListItemIcon>
                <TouchApp />
            </ListItemIcon>{" "}
            <ListItemText primary="Request" />
        </ListItem>{" "}
        <ListItem button>
            <ListItemIcon>
                <Security />
            </ListItemIcon>{" "}
            <ListItemText primary="Data Breach" />
        </ListItem>{" "}
        <ListItem button>
            <ListItemIcon>
                <CallSplit />
            </ListItemIcon>{" "}
            <ListItemText primary="Subcontractor" />
        </ListItem>{" "}
        <ListItem button>
            <ListItemIcon>
                <Settings />
            </ListItemIcon>{" "}
            <ListItemText primary="Settings" />
        </ListItem>{" "}
    </div>
);
