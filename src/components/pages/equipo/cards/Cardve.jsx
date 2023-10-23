import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Cardve() {
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
          image="../src/assets/Foto Vale.jpg"
          alt="Valeria Evans"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Valeria Evans
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hace más de 15 años acompaño a mis clientes en el proceso de mejora
            continua, adaptando herramientas de gestión a sus necesidades.
            Experta en mejora de procesos en PyMES.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://www.linkedin.com/in/valeria-evans-71797236/"
        >
          <LinkedInIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
