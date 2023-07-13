import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, TextField } from '@mui/material';
import ResponsiveAppBar from "../Header/Header";
import Footer from "../Footer/Fotter"
import Slider from "../Carrousel/Sliders";

export default function Data(){

    const user = JSON.parse(localStorage.getItem('user'));

    console.log("DATA", user);
    return(
        <React.Fragment>
            <ResponsiveAppBar/>
            <Slider />
            <Footer />
        </React.Fragment>
    );
}