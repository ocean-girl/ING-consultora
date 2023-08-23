import Cardnj from './cards/Cardnj';
import Cardvd from './cards/Cardvd';
import Cardnf from './cards/Cardnf';
import Cardve from './cards/Cardve';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Typography} from '@mui/material';


const styles={
    title: {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    text: {
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
    }
};



const Equipo = () => {
    return (
      <Container maxWidth="xl">
        <Box >
               
              <Typography 
                  variant='h2'
                  fontWeight="fontWeightRegular"
                  textAlign="center"
                  p={3}
                  color="#666666"
                  style={styles.title}
                  pt={10}
              >
                  EQUIPO
              </Typography>
        <Grid container 
              sx={{ flexGrow: 1 }}
              pb={6} 
              spacing={2} 
              justifyContent="space-around"
              >
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
        </Box> 
    </Container>  
    
    ); 
  }
  
  export default Equipo