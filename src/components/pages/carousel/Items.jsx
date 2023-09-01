import { Paper } from "@mui/material";

function Item({ item }) {
  return (
    <Paper sx={{ height: "30%" }}>
      <img src={item.img} alt={item.id} style={{ width: "100%" }} />

      <p>{item.description}</p>
    </Paper>
  );
}

export default Item;
