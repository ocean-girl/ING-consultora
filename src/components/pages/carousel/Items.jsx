import { Paper } from "@mui/material";
import "./Item.css";

function Item({ item }) {
  return (
    <Paper
      sx={{
        backgroundRepeat: "repeat-x",
        backgroundPosition: "0 0",
        minHeight: "70vh",
        backgroundImage: `url(${item.img})`,
        backgroundAttachment: "fixed",
        backgroundSize: "50% auto",
        position: "relative",
      }}
    >
      <img
        src={item.img}
        alt={item.id}
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "none",
        }}
      />

      <div
        className="tear-drop"
        style={{
          color: "white",
          position: "absolute",
          padding: "5%",
          background: "rgba(0, 0, 0, 0.7)",
          backgroundAttachment: "fixed",
          backgroundSize: "2%",
          minHeight: "70vh",
          top: 0,
          width: "50%",
          left: "0%",
          overflow: "hidden",
          clipPath: "var(--circle-top-right-out)",
          animation: "in-circle-swoop 5s forwards",
          fontSize: "1.5 rem",
          lineHeight: "1.5",
        }}
      >
        {item.description}
      </div>
    </Paper>
  );
}

export default Item;
