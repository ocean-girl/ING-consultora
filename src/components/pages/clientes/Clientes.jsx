import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import { images } from "./images";
//import ImageListItemBar from "@mui/material/ImageListItemBar";

const styles = {
  title: {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  text: {
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
  },
};

const Gallery = () => {
  return (
    <div>
      <Box
        sx={{
          boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Container
          sx={{
            maxWidth: "100%",
            paddingTop: 2,
            paddingBottom: 4,
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
            CLIENTES
          </Typography>

          <Grid container spacing={3}>
            {images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  sx={{
                    width: "100%",
                    paddingTop: "100%", // Mantendrá el aspect ratio de 1:1
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image.img}
                    alt={`Imagen ${index + 1}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Gallery;
