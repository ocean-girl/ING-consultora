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
        <Grid container sx={{ flexGrow: 1 }} spacing={2} justifyContent="space-around">
          <Grid item>
            <Cardve />
          </Grid>   
          <Grid item>
            <Cardnj />
          </Grid>
          <Grid item>
            <Cardvd />
          </Grid>
          <Grid item>
            <Cardnf />
          </Grid>
        </Grid>
    </Container>   
    ); 
  }
  
  export default Equipo