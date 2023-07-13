import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/material/Tab';
import TabList from '@mui/material/Tab';
import TabPanel from '@mui/material/Tab';

export default function Slider(){
    const [value, setValue] = useState(0);

    const handlechange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log("cambio", value);
    }
    return(
        <React.Fragment>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} display="flex" flexDirection="column" alignItems="center" p={2}>
                <Tabs value={value} onChange={handlechange} centered>
                    <Tab label="Inicio"/>
                    <Tab label="Excursiones Activas"/>
                    <Tab label="Compra de Boletos"/>
                    <Tab label="Reportes"/>
                </Tabs>
            </Box>
            <Box sx={{ padding: 2 }}>
                {value == 0 && (
                    <Box>
                        <Typography>First Tab</Typography>
                    </Box>
                )}
            </Box>
        </React.Fragment>

    );
}