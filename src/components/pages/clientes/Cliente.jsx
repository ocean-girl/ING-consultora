import * as React from 'react';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { images } from "./images";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
    <div>
        <Box
        sx={{
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
          maxWidth: "100%",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",

        }}
      >   
      <Container
          sx={{
            //maxWidth: "100%",
            paddingTop: 2,
            paddingBottom: 4,
            alignContent: "center",
            alignItems: "center"
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

        <ImageList sx={{ flexGrow: 1 }} cols={4} gap={32}>
            {images.map((item) => (
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
        </Container>
      </Box>  
    </div>
 
  );
}