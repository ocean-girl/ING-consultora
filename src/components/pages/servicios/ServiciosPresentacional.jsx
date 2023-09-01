import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ServiceCard from "./ServiciosCard";
import { services } from "./services";
import Title from "../../common/title/Title";

const Servicios = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: "url(../public/background-web-servicios2.jpg)",
          backgroundSize: "cover",
          height: "80vh",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Title title={"SERVICIOS"} />

        <Box>
          <Grid container spacing={1} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={6} sm={4} md={2} key={index} m={4}>
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
