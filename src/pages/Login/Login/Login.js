import { Alert, CircularProgress, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../resources/images/logo.svg'

const Login = () => {

    const { logInUsingGoogle, setIsLoading, loginWithEmailPassword, email, setUser, error, setError, isLoading, saveUser } = useAuth();
    const { register, handleSubmit } = useForm();


    const phone = 'Not Provided';
    const address = 'Not Provided';

    const [open, setOpen] = React.useState(false);

    const location = useLocation();
    const navigate = useNavigate()
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        logInUsingGoogle()
            .then((result) => {
                navigate(redirect_uri);
                setError('');
                setOpen(true);
                saveUser(result.user.email, result.user.displayName, phone, address, 'PUT');
            }).catch((error) => {
                setError(error.message);
                setOpen(true);
            }).finally(() => setIsLoading(false));
    }

    const handleEmailLogin = (data) => {
        loginWithEmailPassword(data.email, data.password)
            .then(result => {
                navigate(redirect_uri);
                setError('');
                setOpen(true);
                setUser(result);
            }).catch((error) => {
                setError(error.message);
                setOpen(true);
            }).finally(() => setIsLoading(false));
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
                    <Typography variant="body1" gutterBottom fontSize="40px">Login</Typography>
                    <form onSubmit={handleSubmit(handleEmailLogin)}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            label="Email"
                            name="email"
                            type="email"
                            {...register("email", { required: true })}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            label="Password"
                            name="password"
                            type="password"
                            {...register("password", { required: true })}
                            variant="standard"
                        />

                        <Button sx={{ width: "75%", m: 1 }} variant="contained" style={{ backgroundColor: '#6797c7' }} type="submit">Login</Button>
                        <Button sx={{ width: "75%", m: 1 }} variant="contained" style={{ backgroundColor: '#6797c7' }} onClick={handleGoogleLogIn}>Login With Google</Button>
                    </form>
                    <NavLink style={{ textDecoration: 'none' }} to="/registration">
                        <Button variant="text">New user? Please register</Button>
                    </NavLink> <br />

                    {isLoading && <CircularProgress />}

                    {email && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
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

export default Login;