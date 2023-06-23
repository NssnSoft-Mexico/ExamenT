import React, {useState} from 'react';
import Container from "@mui/material/Container";
import Logo from '../imagenes/Buttons/Logo.png';
import '../login/Login.css'
import { Box, TextField } from '@mui/material';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";

function Logins(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState("password");
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const togglePassword = (e) => {
        e.preventDefault();
        if(passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    }
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        if (username && password) {
            dispatch(login(username, password))
            .then((response) => {
                props.history.push("/inicio");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    };

    return(
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop:8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    class="img-fluid wuI" 
                    alt="icono"
                    src={Logo}
                ></Box>
                <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1}}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='username'
                        label='Usuario'
                        name='username'
                        value={username} 
                        onChange={onChangeUsername}
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='password'
                        label='Password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        value={password} 
                        onChange={onChangePassword}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        {...loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        disabled={loading}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                ¿Has olvidado la contraseña?
                            </Link>
                        </Grid>
                    </Grid>
                    {message && (
                        <div className='alert alert-danger' role="alert">
                            {message}
                        </div>
                    )}
                </Box>
            </Box>
        </Container>
    )
}

export default Logins;