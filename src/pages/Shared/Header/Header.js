import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Dashboard, Home, MenuBook } from '@mui/icons-material';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import logo from '../../../resources/images/logo.svg'
import useAuth from '../../../hooks/useAuth';

const appBarTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#b0c2d4',
        },
    },
});


const Header = () => {

    const { user, logOut } = useAuth();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {user.email ? <Box>
                <MenuItem component={Link} to='/profile'>Profile</MenuItem>
                <MenuItem component={Link} to='/myBooks'>My Books</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
            </Box> :
                <Box>
                    <MenuItem component={Link} to='/login'>Login</MenuItem>
                    <MenuItem component={Link} to='/registration'>Registration</MenuItem>
                </Box>}


        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem component={Link} to='/home'>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Home />
                </IconButton>
                <p>Home</p></MenuItem>
            <MenuItem component={Link} to='/books'>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <MenuBook />
                </IconButton>
                <p>Books</p></MenuItem>

            {user?.email && <MenuItem component={Link} to='/dashboard'>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Dashboard />
                </IconButton>
                <p>Dashboard</p></MenuItem>
            }
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={appBarTheme}>
                <AppBar position="sticky">
                    <Toolbar>
                        <img width='80px' src={logo} alt="" />

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>

                            <Link style={{ width: { xs: '50%', sm: 'block', md: 'auto' }, marginLeft: '30px' }} to="/home" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                            <Link style={{ width: { xs: '50%', sm: 'block', md: 'auto' }, marginLeft: '30px' }} to="/books" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Books</Link>

                            {user?.email && <Link style={{ width: { xs: '50%', sm: 'block', md: 'auto' }, marginLeft: '30px' }} to="/dashboard" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>}

                            <IconButton
                                style={{ width: { xs: '50%', sm: 'block', md: 'auto' }, marginLeft: '30px' }}
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};

export default Header;