import { Alert, CircularProgress, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../resources/images/logo.svg'

const Registration = () => {
    const { setIsLoading, createNewUser, setUserName, error, setError, isLoading, saveUser } = useAuth();

    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);

    const handleCreateUser = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.confirmPassword) {
            alert("Password didn't match!");
            return
        }
        createNewUser(loginData.email, loginData.password)
            .then(userCredential => {
                setUserName(loginData.name);
                navigate('/login');
                setError('');
                saveUser(loginData.email, loginData.name, loginData.phone, loginData.address, 'POST');
                setSuccess(true);
                setOpen(true);
            }).catch((error) => {
                setError(error.message);
                setOpen(true);
            }).finally(() => { setIsLoading(false) });
    }


    const [loginData, setLoginData] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    //Snackbar Close
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom fontSize="40px">Please Register</Typography>
                    {!isLoading && <form onSubmit={handleCreateUser}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-name-input"
                            label="Name"
                            name="name"
                            onBlur={handleOnBlur}
                            type="name"
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-email-input"
                            label="Email"
                            name="email"
                            onBlur={handleOnBlur}
                            type="email"
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-number-input"
                            label="Phone"
                            name="phone"
                            onBlur={handleOnBlur}
                            type="tel"
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-address-input"
                            label="Address"
                            type="address"
                            name="address"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-confirm-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required
                        />
                        <Button sx={{ width: "75%", m: 1 }} variant="contained" style={{ backgroundColor: '#6797c7' }} type="submit">Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">Already registerd? Please login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {success && <Alert severity="success">Registration Successfull!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}

                    {success && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Registration Successfull!
                        </Alert>
                    </Snackbar>}
                    {error && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {error}
                        </Alert>
                    </Snackbar>}


                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registration;