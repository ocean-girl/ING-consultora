import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography, CardMedia } from "@mui/material";
import Title from "../../common/title/Title";
import styles2 from "./Nosotros.module.css";

const styles = {
  title: {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  text: {
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
  },
};

const Nosotros = () => {
  return (
    <Box sx={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)" }}>
      <CardMedia
        component="img"
        className={styles2.inCircleSwoop}
        image="../public/imagenPrincipal.jpg"
        alt=""
      />

      <Title title={"NOSOTROS"} />

      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          backgroundSize: "cover",
          backgroundImage: "url(../public/backgroundIng.jpg)",
        }}
        p={5}
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="#ffffff"
        style={styles.text}
      >
        Nuestra energía se unió para formar esta comunidad, hacia un mismo
        propósito, <br />
        crear Conocimiento, Comunicación y Conciencia <br />
        sobre los procesos (y las personas ver..) de las organizaciones que nos
        elijan.
      </Typography>
    </Box>
  );
};

export default Nosotros;
