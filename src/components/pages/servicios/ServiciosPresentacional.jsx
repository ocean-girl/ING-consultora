import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import ServiceCard from './ServiciosCard';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import BarChartIcon from '@mui/icons-material/BarChart';

const services = [
  {
    icon: <AssistantPhotoIcon />,
    title: 'Servicio 1',
    description: 'Descripción del servicio 1...',
  },
  {
    icon: BarChartIcon,
    title: 'Servicio 2',
    description: 'Descripción del servicio 2...',
  },
  {
    icon: BarChartIcon,
    title: 'Servicio 3',
    description: 'Descripción del servicio 2...',
  },
  {
    icon: BarChartIcon,
    title: 'Servicio 4',
    description: 'Descripción del servicio 2...',
  },
  {
    icon: BarChartIcon,
    title: 'Servicio 5',
    description: 'Descripción del servicio 2...',
  },
  {
    icon: BarChartIcon,
    title: 'Servicio 6',
    description: 'Descripción del servicio 2...',
  },
  {
    icon: BarChartIcon,
    title: 'Servicio 7',
    description: 'Descripción del servicio 2...',
  },
  {
    icon: BarChartIcon,
    title: 'Servicio 8',
    description: 'Descripción del servicio 2...',
  },
 
  
];

 
const styles={
    title: {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    text: {
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)"
    }
};



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
        <Box>
            <Grid container 
                spacing={1}
                justifyContent="center"
                >
                {services.map((service, index) => (
                <Grid item 
                xs={6} sm={4} md={2} key={index}
                m={4}>
                    <ServiceCard
                   
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    />
                </Grid>
                ))}
            </Grid>
        </Box>
       
        
    </div>
  )
}


export default Servicios



