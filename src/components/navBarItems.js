import DonutSmall from "@material-ui/icons/DonutSmall";
import TouchApp from "@material-ui/icons/TouchApp";

import Security from "@material-ui/icons/Security";
import CallSplit from "@material-ui/icons/CallSplit";
import Settings from "@material-ui/icons/Settings";
import Process from "./Process";
import Request from "./Request";
import DataBreach from "./DataBreach";
import SubContractor from "./SubContractor";


export const navBarItems = [
    {
        path: '/process',
        sidebarName: 'Process',
        icon: DonutSmall,
        component: Process
    },
    {
        path: '/request',
        sidebarName: 'Request',
        icon: TouchApp,
        component: Request
    },
    {
        path: '/databreach',
        sidebarName: 'Data Breach',
        icon: Security,
        component: DataBreach
    },
    {
        path: '/subcontractor',
        sidebarName: 'Subcontractor',
        icon: CallSplit,
        component: SubContractor
    },
    {
        path: '/settings',
        sidebarName: 'Settings',
        icon: Settings,
        component: Request
    }
];

