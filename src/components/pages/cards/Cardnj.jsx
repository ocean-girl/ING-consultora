import React from 'react';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Cardnj() {
    return (
        <Card sx={{
            transition: "0.2s",
            "&:hover": {
            transform: "scale(1.05)",
            },
            maxWidth: 250,
            
        }}
        >
        <CardActionArea>
          <CardMedia
            component="img"
            height="270"
            image="../public/Nico J.jpg"
            alt="Nicolas Jontin"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nicolas Jontin
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Desde hace más de 15 años me desempeño en Logística formando equipos de trabajos y realizando mejoras de procesos. 
            Facilitador en filosofía Lean.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://www.linkedin.com/in/nicolas-jontin-6990a966/'>
            <LinkedInIcon />
          </Button>
        </CardActions>
      </Card>
      
    ); 
  }
  
