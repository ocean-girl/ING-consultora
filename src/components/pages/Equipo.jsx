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

const styles = {
  title: {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  text: {
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
  },
};

const Equipo = () => {
  return (
    <Box
      sx={{
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
        backgroundImage: "url(../public/background-web-equipo2.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="fontWeightRegular"
        textAlign="center"
        p={6}
        color="#ffffff"
        style={styles.title}
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
