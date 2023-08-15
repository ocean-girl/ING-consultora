import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Typography } from '@mui/material';
import fondoImagen from "./public/backgroundIng"

const styles={
    title: {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    text: {
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
    }
};

const Nosotros = () => {
  return (
    <Box sx={{boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)'}}>                            
        <Typography 
            variant='h2'
            fontWeight="fontWeightRegular"
            textAlign="center"
            p={3}
            color="#666666"
            style={styles.title}

        >
            NOSOTROS
        </Typography>
        <Typography
            variant="h4"
            textAlign="center"
            sx={{backgroundSize: 'cover', backgroundImage: fondoImagen}}
            p={5}
            height="50vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#ffffff"
            style={styles.text}
            
            
            
        >
            Nuestra energía se unió para formar esta comunidad, hacia un mismo propósito, <br /> 
            crear Conocimiento, Comunicación y Conciencia <br/>
            sobre los procesos (y las personas ver..) de las organizaciones que nos elijan.
        </Typography>
    </Box>
  )
}

export default Nosotros