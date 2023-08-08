import React from 'react';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Cardvd() {
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
            image="../public/Vane D.jpg"
            alt="Vanesa Damill"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vanesa Damill
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Diez años de experiencia en implementación y mantenimiento de Sistemas de Gestión de Calidad basados en 
            la norma ISO 9001. Especialista en mejora continua.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://www.linkedin.com/in/vane-damill/'>
            <LinkedInIcon />
          </Button>
        </CardActions>
      </Card>
      
    ); 
  }
  
