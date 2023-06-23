import React, { useEffect, useContext } from 'react';
import NavBar from '../navbar/NavBar';
import Alta from '../alta/Alta';
import { Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {API_PORTAL_URL} from '../../constants';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2'
import swal from 'sweetalert2'

import './Home.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SVGIcon from "../imagenes/Buttons/eye.svg";
import SVGAdd from "../imagenes/Buttons/add.svg";
import SVGTrash from "../imagenes/Buttons/Trash.svg";
import SVGEdit from "../imagenes/Buttons/edit.svg";
import Status from "../imagenes/Buttons/Activo.svg";
import SVGCompra from "../imagenes/Buttons/Vector.svg";
import SVGInventario from "../imagenes/Buttons/iventario.svg";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModAlta from '../AltaMod/ModAlta';
import CartItems from '../cartShop/index';

let user = JSON.parse(localStorage.getItem('user'));

const Inicio = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            
            fontSize: 16,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
    }));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid transparent',
        boxShadow: 24,
        p: 4,
      };

    const [users, setUsers] = React.useState({});
    const [pokemon, setPokemon] = React.useState({});
    const [datas, dataUs] =React. useState({});

    const [open, setOpen] = React.useState(false);
    const handleOpen = (userd) => {
        dataUs(userd);
        setOpen(true)
    };
    const handleClose = () => {
        dataUs({})
        setOpen(false);
    }

    const [openStock, setOpenStock] = React.useState(false);
    const handleOpenStock = (userd) => {
        setNombre(userd.nombre)
        setExistencia(userd.existencia)
        dataUs(userd);
        console.log("DATOS", userd)
        setOpenStock(true);
    }
    const handleCloseStock = () => {
        dataUs({})
        setOpenStock(false);
    }

    const [openDel, setOpenDel] = React.useState(false);
    const handleOpenDel = (userd) => {
        dataUs(userd);
        setOpenDel(true);
    }
    const handleCloseDel = () => {
        dataUs({})
        setOpenDel(false);
    }
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = (userd) => {
        dataUs(userd);
        setOpenEdit(true);
    }
    const handleCloseEdit = () => {
        setOpenEdit(false);
        dataUs({})
    }
    const [openAlta, setOpenAlta] = React.useState(false);
    const handleOpenAlta = () => setOpenAlta(true);
    const handleCloseAlta = () => setOpenAlta(false);
    const [nombre, setNombre] = React.useState('');
    const [existencia, setExistencia] = React.useState('');
    const [id, setId] = React.useState('');
    const [stock, setStock] = React.useState(0);
    const [buttonClicked, setButtonClicked] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    async function fectchData(){
        const response = await fetch(API_PORTAL_URL + "/alldata/product")
        const jsonData = await response.json();
        setUsers(jsonData)
    }

    async function getImage(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${1}`)
        const jsonData = await response.json();
        setPokemon(jsonData)
    }
    
    const handleButtonClick = () => {
        setButtonClicked(true)
    }

    function nombreOnChange(event) {
        setNombre(event.target.value);
    }

    function stockOnChange(event) {
        setExistencia(event.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            const datos = {
                id: datas.id,
                nombre: nombre,
                existencia: existencia
            };
            if(nombre == '' && existencia == ''){
                throw new Error("Los campos son requeridos.");
            }
            //Llamada PATCH para agregar el producto
            await axios.patch(API_PORTAL_URL + '/upd/product',
                datos
            ).then(res => {
                console.log("REWs", res)
                    if (res.status === 200)
                        window.location.reload(true);
            })
        } catch (error) {
            console.log(error);
            setLoading(false)
            // Aqui puedes setear tu mensaje => setMessage(error.message)
        }
    }

    const onDelSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            //Llamada PATCH para eliminar el producto
            axios.patch(API_PORTAL_URL + '/act/product',
                {
                    id: datas.id,
                }
            ).then(res => {
                console.log("REWs", res)
                    if (res.status === 200)
                        window.location.reload(true);
            })
        } catch (error) {
            console.log(error);
            setLoading(false)
            // Aqui puedes setear tu mensaje => setMessage(error.message)
        }
    }

    React.useEffect(() => {
        fectchData()
        getImage()
      }, [])

    return ( 
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='viewProduct'>
                    <div className='stylediv'>
                        <Typography className='titleModal styletitle' sx={{ mt: 2 }}>
                           Nombre del producto*: 
                        </Typography>
                        <label className='dataI' for="Name">{datas.nombre}</label>
                        <Typography className='titleModal' sx={{ mt: 2 }}>
                           Sustancia Activa*: {users.sustancia_activa}
                        </Typography>
                        <label className='dataIs' for="Name">{datas.sustancia_activa}</label>
                        <Typography className='titleModal' sx={{ mt: 2 }}>
                           Precio: {users.precio}
                        </Typography>
                        <label className='dataIs' for="Name">${datas.precio}</label>
                        <Typography className='titleModal' sx={{ mt: 2 }}>
                           Descripción:
                        </Typography>
                        <label className='dataIs' for="Name">{datas.descripcion}</label>
                    </div>
                    <div className='stylediv'>
                        <Typography className='titleModal' sx={{ mt: 2 }}>
                           Categoría:
                        </Typography>
                        <label className='dataIs' for="Name">{datas.categoria}</label>
                        <Typography className='titleModal' sx={{ mt: 2 }}>
                           Stock*:
                        </Typography>
                        <label className='dataIs' for="Name">{datas.existencia}</label>
                        <Typography className='titleModal' sx={{ mt: 2 }}>
                        </Typography>
                        <Typography className='titleModal' sx={{ mt: 2 }}>
                        </Typography>
                        <img
                            style={{height: '225px'}}
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name} />
                    </div>
                    <Button className='bGeneral' type="submit" onClick={handleClose} variant="contained">Salir</Button>
                </Box>
            </Modal>

            <Modal
                open={openStock}
                onClose={handleCloseStock}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='editProduct'>
                    <div>
                        <Row>
                            <Col className='my-3 mx-5'>
                                <Form onSubmit={onSubmit}>
                                    <Row>
                                        <Col xs={14}>
                                            <Typography className='textModal' gutterBottom >
                                                ¿ Usted desea actualizar la cantidad de stock en venta de este producto ?
                                            </Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={8}>
                                            <Typography className='labels px-1' variant="h6" gutterBottom >
                                                Producto
                                            </Typography>
                                        </Col>
                                    </Row>
                                    <Row className='mb-4'>
                                        <Col xs={11}>
                                            <TextField
                                                className='text-field'
                                                placeholder="Nombre del Producto"
                                                variant="outlined"
                                                value={nombre}
                                                onChange={nombreOnChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Typography className='labels px-1' variant="h6" gutterBottom >
                                                Stock
                                            </Typography>
                                        </Col>
                                    </Row>
                                    <Row className='mb-4'>
                                        <Col Col xs={11}>
                                            <TextField
                                                className='text-field'
                                                placeholder="Cantidad Disponible"
                                                variant="outlined"
                                                type="number"
                                                value={existencia}
                                                onChange={stockOnChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className='bGeneral' type="submit" variant="contained">Aceptar</Button>
                                            <Button className='bCancelar px-5' onClick={handleCloseStock} variant="contained">Cancelar</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Box>
            </Modal>

            <Modal
                open={openAlta}
                onClose={handleCloseAlta}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='altaProduct'>
                    <ModAlta> </ModAlta>
                </Box>
            </Modal>

            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='altaProduct'>
                    <Alta handleOpenAlta={datas}> </Alta>
                </Box>
            </Modal>

            <Modal
                open={openDel}
                onClose={handleCloseDel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='delProduct'>
                    <Form onSubmit={onDelSubmit}>
                        <div className='row'>
                            <div className='col-12'>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    ¿ Usted desea cancelar la comanda de este comensal ?
                                </Typography>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Button className='bGeneral' type="submit" variant="contained"> Aceptar </Button>
                            </div>
                            <div className='col'>
                                <Button className='bCancelar px-5' onClick={handleCloseDel}> Cancelar </Button>
                            </div>
                        </div>
                    </Form>
                </Box>
            </Modal>

            <NavBar> </NavBar> 
            
            {user.user.tipo == 2 ? 
                <div className='idvP row'>
                    <div className='col-lg-2 col-xs-12'>
                        <div className='col-lg-12 col-xs-12 pdb85'>
                            <Button className='ButtonSelected'> <img className='sizeImageB' src={SVGCompra} /> Compra </Button> 
                        </div>
                        <div className='col-lg-12 col-xs-12'>
                            <Button className='newButtonD'> Inventario </Button>
                        </div>
                    </div>
                    <div className='col-lg-10 col-xs-12'>
                        <div className='col-lg-12 col-xs-6 pdr10'>
                            <CartItems> </CartItems>
                        </div>
                    </div>
                </div>
                :
                <div className='idvP row'>
                    <div className='col-lg-2 col-xs-12'>
                        <div className='col-lg-12 col-xs-12 pdb85'>
                            <Button className='ButtonSelected newButtonD'><img className='sizeImageB' src={SVGCompra} /> Compra </Button>
                        </div>
                        <div className='col-lg-12 col-xs-12'>
                            <Button className='ButtonSelected ButtonSelectedD'> <img className='sizeImageB' src={SVGInventario} /> Inventario </Button>
                        </div>
                    </div>
                    <div className='col-lg-10 col-xs-12'>
                        <div className='col-lg-4 col-xs-12 pdb10'>
                            <Button className='newButton' onClick={() => handleOpenAlta()}> Nuevo Producto </Button> 
                        </div>
                        <div className='col-lg-12 col-xs-12 pdr10'>
                            {users?.data && users?.data.length > 0 && (
                                <TableContainer>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow className='HeadStyle'>
                                                <StyledTableCell>ID</StyledTableCell>
                                                <StyledTableCell align="center">Status</StyledTableCell>
                                                <StyledTableCell align="center">Producto</StyledTableCell>
                                                <StyledTableCell align="center">Sustancia Activa</StyledTableCell>
                                                <StyledTableCell align="center">Categoría</StyledTableCell>
                                                <StyledTableCell align="center">Precio</StyledTableCell>
                                                <StyledTableCell align="center">Stock</StyledTableCell>
                                                <StyledTableCell align="center">Acciones</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {users.data.map(userd => (
                                                <StyledTableRow key={userd.id}>
                                                    <StyledTableCell component="th" scope="row">{userd.id}</StyledTableCell>
                                                    <StyledTableCell align="center"><img className='sizeImage' src={Status} /></StyledTableCell>
                                                    <StyledTableCell align="center">{userd.nombre}</StyledTableCell>
                                                    <StyledTableCell align="center">{userd.sustancia_activa}</StyledTableCell>
                                                    <StyledTableCell align="center">{userd.categoria}</StyledTableCell>
                                                    <StyledTableCell align="center">{userd.precio}</StyledTableCell>
                                                    <StyledTableCell align="center">{userd.existencia}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                    <Button className='slideB'>
                                                        <img onClick={() => handleOpen(userd)}  className='sizeImage' src={SVGIcon} />
                                                    </Button>
                                                    <Button className='slideB'>
                                                        <img onClick={() => handleOpenStock(userd)} className='sizeImage' src={SVGAdd} />
                                                    </Button>
                                                    <Button className='slideB'>
                                                        <img onClick={() => handleOpenEdit(userd)} className='sizeImage' src={SVGEdit} />
                                                    </Button>
                                                    <Button className='slideB'>
                                                        <img onClick={() => handleOpenDel(userd)} className='sizeImage' src={SVGTrash} />
                                                    </Button>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            )}
                        </div>
                    </div>
            </div>
        } </div>
    );
}

export default Inicio;