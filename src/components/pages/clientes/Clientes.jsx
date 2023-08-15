import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Typography } from '@mui/material';


const styles={
    title: {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    text: {
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
    }
};

const Clientes = () => {
  return (
    <Box sx={{boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)'}} >
    <Typography 
        variant='h2'
        fontWeight="fontWeightRegular"
        textAlign="center"
        p={3}
        color="#666666"
        style={styles.title}
        pt={10}
    >
        CLIENTES
    </Typography>
</Box>    
  )
}

export default Clientes