import Cardnj from "./cards/Cardnj";
import Cardvd from "./cards/Cardvd";
import Cardnf from "./cards/Cardnf";
import Cardve from "./cards/Cardve";
import Grid from "@mui/material/Grid";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Equipo = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setIsTriggered(true);
    }
  }, [inView]);

  return (
    <Box
      Box
      ref={ref}
      sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
        backgroundImage: "url(./public/background-web-equipo2.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="fontWeightRegular"
        textAlign="center"
        p={6}
        color="#ffffff"
        sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        className={`${isTriggered ? "tracking-in-contract-bck" : ""}`}
      >
        NUESTRO EQUIPO
      </Typography>
      <Grid
        container
        sx={{ flexGrow: 1 }}
        pb={6}
        pl={12}
        pr={12}
        spacing={2}
        justifyContent="space-around"
      >
        <Grid item>
          <Cardve />
        </Grid>
        <Grid item>
          <Cardnj />
        </Grid>
        <Grid item>
          <Cardvd />
        </Grid>
        <Grid item>
          <Cardnf />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Equipo;
