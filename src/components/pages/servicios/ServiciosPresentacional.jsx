import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ServiceCard from "./ServiciosCard";
import { services } from "./services";

const styles = {
  title: {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  text: {
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
  },
};

const Servicios = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: "url(../public/background-web-servicios2.jpg)",
          backgroundSize: "cover",
          height: "65vh",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="fontWeightRegular"
          textAlign="center"
          p={3}
          color="#666666"
          style={styles.title}
          pt={10}
        >
          SERVICIOS
        </Typography>

        <Box>
          <Grid container spacing={1} justifyContent="center">
            {services.map((service, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2}
                key={index}
                m={4}
                // sx={{ backgroundColor: "primary.second" }}
              >
                <ServiceCard
                  Icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Servicios;
