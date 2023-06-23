import React from 'react';
import { useDispatch } from "react-redux";
import { Nav, Navbar } from 'react-bootstrap';
import { Logout } from '@mui/icons-material';

import LogoSVG from '../imagenes/Okeio2.svg';

import { logout } from "../../actions/auth";

import './NavBar.css';

const NavBar = () => {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout());
    };
    return (
        <Nav id='navbar' variant='pills'>
            <Navbar.Brand href="">
                <img className='align-left' src={LogoSVG} alt='Logo Okeio' height={200} width={500} />
            </Navbar.Brand>

            <Nav.Item className='mx-5' id='logout-item'>
                <Nav.Link href="/login" id='logout-icon' onClick={logOut}>
                    <Logout sx={{ fontSize: 50 }} />
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;