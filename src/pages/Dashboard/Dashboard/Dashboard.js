import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Outlet,
    Link,
} from "react-router-dom";
import { AdminPanelSettings, DashboardCustomize, Dehaze, Home, LibraryAdd, LocalLibrary, MenuBook, RateReview } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';

const appBarTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#b0c2d4',
        },
    },
});

const drawerWidth = 240;


function Dashboard(props) {
    const { admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {admin ? <List>
                <ListItem button component={Link} to='/home'>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem button component={Link} to='/books'>
                    <ListItemIcon>
                        <MenuBook />
                    </ListItemIcon>
                    <ListItemText primary='Books' />
                </ListItem>
                <ListItem button component={Link} to='/dashboard'>
                    <ListItemIcon>
                        <DashboardCustomize />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                </ListItem>
                <ListItem button component={Link} to='/dashboard/makeAdmin'>
                    <ListItemIcon>
                        <AdminPanelSettings />
                    </ListItemIcon>
                    <ListItemText primary='Make Admin' />
                </ListItem>
                <ListItem button component={Link} to='/dashboard/addBooks'>
                    <ListItemIcon>
                        <LibraryAdd />
                    </ListItemIcon>
                    <ListItemText primary='Add Books' />
                </ListItem>
                <ListItem button component={Link} to='/dashboard/manageRequests'>
                    <ListItemIcon>
                        <Dehaze />
                    </ListItemIcon>
                    <ListItemText primary='Manage Requests' />
                </ListItem>
            </List> :
                <List>
                    <ListItem button component={Link} to='/home'>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                    <ListItem button component={Link} to='/books'>
                        <ListItemIcon>
                            <MenuBook />
                        </ListItemIcon>
                        <ListItemText primary='Books' />
                    </ListItem>
                    <ListItem button component={Link} to='/dashboard'>
                        <ListItemIcon>
                            <DashboardCustomize />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                    <ListItem button component={Link} to='/dashboard/myBooks'>
                        <ListItemIcon>
                            <LocalLibrary />
                        </ListItemIcon>
                        <ListItemText primary='My Books' />
                    </ListItem>
                    <ListItem button component={Link} to='/dashboard/writeReview'>
                        <ListItemIcon>
                            <RateReview />
                        </ListItemIcon>
                        <ListItemText primary='Write Review' />
                    </ListItem>
                </List>}
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <ThemeProvider theme={appBarTheme}>
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
