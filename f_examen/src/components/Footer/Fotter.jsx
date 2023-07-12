import React from 'react';
import { Container, Grid, Typography, Link, Box} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";


function Fotter() {
    return (
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
              p: 6,
          }}
          component="footer"
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Typography variant='h6' color="text.primary" gutterBottom>
                  Acerca de Nosotros</Typography>
                <Typography variant='body2' color="text.secondary">
                  Somos AVT Tour, Una agencia dedicada a proveer los mejores servicios a nuestros clientes.</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h6' color="text.primary" gutterBottom>
                  Contactanos
                </Typography>
                <Typography variant='body2' color="text.secondary">
                  Monte Illimani, La Alborada, Cuautitlan México
                </Typography>
                <Typography variant='body2' color="text.secondary">
                  Correo Electronico: info@avttour.com
                </Typography>
                <Typography variant='body2' color="text.secondary">
                  Telefono: 5510697776
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant='h6' color="text.primary" gutterBottom>
                  Siguenos
                </Typography>
                <Link href='#' color="inherit">
                  <Facebook />
                </Link>
                <Link href='#' color="inherit" sx={{ pl: 1, pr: 1 }}>
                  <Instagram />
                </Link>
              </Grid>
            </Grid>
          </Container>
          
        </Box>
        /*<footer>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="textSecondary" align="left">
                  © {new Date().getFullYear()} Your Website. All rights reserved.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} align="right">
                <Link href="https://www.whatsapp.com">
                  <WhatsAppIcon />
                </Link>
                <Link href="https://www.facebook.com">
                  <FacebookIcon />
                </Link>
              </Grid>
            </Grid>
          </Container>
        </footer>*/
    );
}

export default Fotter;