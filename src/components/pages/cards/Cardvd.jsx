import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Cardvd() {
  return (
    <Card
      sx={{
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
          image="../public/Foto Vane.jpg"
          alt="Vanesa Damill"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vanesa Damill
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Desde hace 10 años realizo implementación de Sistemas de Gestión
            basados en la Norma ISO 9001. Especialista en mejora continua
            aplicando el modelo TPS (Sistema de Producción Toyota)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://www.linkedin.com/in/vane-damill/"
        >
          <LinkedInIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
