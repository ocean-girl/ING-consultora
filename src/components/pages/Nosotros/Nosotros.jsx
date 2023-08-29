import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography, CardMedia } from "@mui/material";
import Title from "../../common/title/Title";
import styled from "./Nosotros.module.css";

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
    <Box
      sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardMedia
        component="img"
        className={styled.inCircleSwoop}
        image="../public/imagenPrincipal.jpg"
        sx={{ height: "60vh" }}
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
        Propuesta de valor <br />
      </Typography>
    </Box>
  );
};

export default Nosotros;
