import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

 
const styles={
    title: {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    text: {
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
    }
};

function FormRow() {
    return (
      <Grid Container>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
     </Grid>
    );
  }

const Servicios = () => {
  return (
    <div>
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
                SERVICIOS
            </Typography>
        </Box>    
        <Grid container spacing={1}>
            <Grid container item spacing={3}>
                <FormRow />
            </Grid>
            <Grid container item spacing={3}>
                <FormRow />
            </Grid>
            <Grid container item spacing={3}>
                <FormRow />
            </Grid>
        </Grid>
        
    </div>
  )
}


export default Servicios



