import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import nico from "../../../../../public/Nico J.jpg";

export default function Cardnj() {
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
          image={nico}
          alt="Nicolas Jontin"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nicolas Jontin
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Desde hace más de 15 años me desempeño en Logística formando equipos
            de trabajos y realizando mejoras de procesos. Facilitador en
            filosofía Lean.
            <br />
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href="https://www.linkedin.com/in/nicolas-jontin-6990a966/"
        >
          <LinkedInIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
