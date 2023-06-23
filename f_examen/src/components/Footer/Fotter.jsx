import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

function Fotter() {
    return (
        <footer>
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
        </footer>
    );
}

export default Fotter;