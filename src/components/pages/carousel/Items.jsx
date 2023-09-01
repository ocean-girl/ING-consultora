import { Paper } from "@mui/material";

function Item({ item }) {
  return (
    <Paper
      sx={{
        backgroundAttachment: "scroll",

        backgroundPosition: "0 0",
        backgroundSize: "contain",
        minHeight: "70vh",
        backgroundImage: `url(${item.img})`,
        backgroundRepeat: "repeat-x",
      }}
    >
      <img
        src={item.img}
        alt={item.id}
        style={{
          width: "100%",
          height: "auto",
          backgroundAttachment: "scroll",
          backgroundPosition: "0 0",
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
          display: "none",
        }}
      />

      <p>{item.description}</p>
    </Paper>
  );
}

export default Item;
