import { Paper } from "@mui/material";

function Item({ item }) {
  return (
    <Paper
      sx={{
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: { minHeight: "calc(10vh  - 260px)" },
      }}
    >
      <img
        src={item.img}
        alt={item.id}
        style={{
          width: "100%",
          backgroundAttachment: "scroll",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: { minHeight: "calc(50vh  - 260px)" },
        }}
      />

      <p>{item.description}</p>
    </Paper>
  );
}

export default Item;
