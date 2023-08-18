import { Card, CardMedia, CardContent, Typography, CardActionArea, IconButton } from '@mui/material';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <Card>
        <CardActionArea>
          <IconButton>
          <CardMedia
          component="img"  // Cambiado de "svg" a "img"
          height="140"
          image={icon}
          alt=""
        />
        </IconButton>
            
          <CardContent>
            <Typography variant="h6" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {description}
            </Typography>
          </CardContent>
          
          </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
