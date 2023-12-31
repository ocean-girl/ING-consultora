import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import noe from "../../../../../public/Foto Noe.jpg";

export default function Cardnf() {
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
          image={noe}
          alt="Noelia Filippini"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Noelia Filippini
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Como experta en marketing y comunicación, mi objetivo es generar
            conexiones entre las marcas y su audiencia, construyendo lealtad y
            relevancia en un mercado competitivo.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://www.linkedin.com/in/noelia-florencia-filippini/"
        >
          <LinkedInIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
