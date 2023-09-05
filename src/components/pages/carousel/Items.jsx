import { Paper } from "@mui/material";
import "./Item.css";

function Item({ item }) {
  return (
    <Paper
      sx={{
        backgroundRepeat: { xs: "no-repeat", lg: "repeat-x" },
        backgroundPosition: { xs: "center", lg: "0 0 " },
        minHeight: { xs: "30vh", lg: "40vh" },
        backgroundImage: `url(${item.img})`,
        backgroundAttachment: "fixed",
        //
        backgroundSize: { xs: "contain", lg: "50% auto" },
        position: "relative",
        overflow: "hidden",
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
          // backgroundAttachment: "fixed",
          // backgroundSize: { xs: "contain", lg: "50% auto" },
          //minHeight: "30vh",
          //height: "50%",
          top: 0,
          width: { xs: "100%", lg: "50%" },
          left: "0%",
          zIndex: 1,
          overflow: "hidden",
          // clipPath: "var(--circle-top-right-out)",
          // animation: "in-circle-swoop 5s forwards",
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
