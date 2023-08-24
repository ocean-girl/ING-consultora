import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
//import ImageListItemBar from "@mui/material/ImageListItemBar";

const styles = {
  title: {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  text: {
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
  },
};

export default function StandardImageList() {
  return (
    <Box sx={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)" }}>
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
      <Grid container spacing={3} p={5}>
        <ImageList
          sx={{
            width: 1400,
            height: 900,
          }}
          cols={3}
          rowHeight={50}
          justifyContent="center"
          gap={70}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: "./public/ddm.png",
    title: "DDM Interaction Agency",
  },
  {
    img: "./public/Logo Aromitalia.png",
    title: "Aromitalia",
  },
  {
    img: "./public/Logo Envairo.JPG",
    title: "Envairo",
  },
  {
    img: "./public/logo-nuevo-ch.png",
    title: "Oscar Entin",
  },
  {
    img: "./public/tecnocer log.png",
    title: "Tecnoser",
  },
  {
    img: "./public/logo_psicopRefresh.png",
    title: "Espacio Sicop",
  },
  {
    img: "./public/MVV.png",
    title: "Emeveve",
  },
  {
    img: "./public/SP LOGO INICIALES.png",
    title: "SP",
  },
  {
    img: "./public/logo bibac.png",
    title: "Bibac",
  },
  {
    img: "./public/sicametlogo.jpg",
    title: "Sicamet",
  },
];
