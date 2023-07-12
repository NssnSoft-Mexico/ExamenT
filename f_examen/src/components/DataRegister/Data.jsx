import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, TextField } from '@mui/material';
import ResponsiveAppBar from "../Header/Header";

export default function Data(){

    const user = JSON.parse(localStorage.getItem('user'));

    console.log("DATA", user);
    return(
        <React.Fragment>
            <ResponsiveAppBar/>
            <Box sx={{ overflow: "auto" }}>
                <Box  sx={{width: "100%", display: "table", tableLayout: "fixed" }}>
                               
                </Box >
            </Box>
        </React.Fragment>
    );
}