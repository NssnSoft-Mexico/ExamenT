import React, {useState} from 'react';
import LogoSVG from '../imagenes/Okeio2.svg';
import { Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { RemoveRedEye, VisibilityOff } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';

import { login } from "../../actions/auth";

import '../login/Login.css'

const Login = (props) => {
    //Constante y Use state para almacenar el usuario y contraseña/
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //Const para cambiar el tipo de Input al presionar el icono del Ojo/
    const [passwordType, setPasswordType] = useState("password");
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    //Función para cambiar el tipo de Input de la contraseña/
    const togglePassword = (e) => {
        e.preventDefault();
        if(passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    }
    //Función para detectar el cambio de valor en el input del usuario y almacenarlo/
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    //Función para detectar el cambio de valor en el input de la contraseña y almacenarla/
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        if (username && password) {
            //Se mandan los datos a la función para iniciar sesión/
            dispatch(login(username, password))
            .then((response) => {
                //URL a la que se direccionará al ingresar al sistema, se deberá complementar/
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

    return (
        <div className='fondo'>
            <div className='imagen'>
                <img className='center' src={LogoSVG} alt='LogoOkeio' height={400} width={700}/>
            </div>
            <Row>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <Form className="row-login-form" onSubmit={handleLogin}>
                        <Form.Group>
                            <div className="col-md-12 pe-5 ps-5 mt-3">
                                <label className='textoLogin pb-2' htmlFor="username">Usuario</label>
                                <input type="text" className="form-control" id="username" name="username"
                                placeholder="Ingrese Usuario" value={username} onChange={onChangeUsername}/>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <div className="col-md-12 pe-5 ps-5 mt-4">
                                <label className='textoLogin pb-2' htmlFor="password">Contraseña</label>
                                <input type={passwordType} className="form-control" id="password" name="password"
                                placeholder="Ingrese Contraseña" value={password} onChange={onChangePassword}/>
                                <div className="input-group-btn estiloBotonEye">
                                <button className="btn btn-outline-primary estiloEye" onClick={togglePassword}>
                                { passwordType==="password"? <RemoveRedEye/> :<VisibilityOff/> }
                                </button>
                                </div>
                            </div>
                        </Form.Group>
                        <Row className="marginBottom">
                            <div className="col-md-7">
                            </div>
                            <Row className="col-md-5">
                                <button type="submit" className="btn-lg botonLogin" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Iniciar sesión</span>
                                </button>
                            </Row>
                        </Row>
                        {message && (
                            <Form.Group className="me-1 ms-1">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </Form.Group>
                        )}
                    </Form>
                </div>
                <div className='col-md-4'></div>
            </Row>
        </div>
    );
  }

  export default Login;