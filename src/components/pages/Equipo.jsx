import React from 'react';
import Cardnj from './cards/Cardnj';
import Cardvd from './cards/Cardvd';
import Cardnf from './cards/Cardnf';
import Cardve from './cards/Cardve';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';


const Equipo = () => {
    return (
      <Container maxWidth="xl">
        <div><h1>Equipo</h1></div>
        <Grid container sx={{ flexGrow: 1 }} spacing={2} justifyContent="center">
          <Grid item xs={2} >
            <Cardnj />
          </Grid>
          <Grid item xs={2}>
            <Cardvd />
          </Grid>
          <Grid item xs={2}>
            <Cardve />
          </Grid>
          <Grid item xs={2}>
            <Cardnf />
          </Grid>
        </Grid>
    </Container>   
    ); 
  }
  
  export default Equipo