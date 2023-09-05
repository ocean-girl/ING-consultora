import { Paper } from "@mui/material";
import "./Item.css";

function Item({ item }) {
  return (
    <Paper
      sx={{
        backgroundSize: { xs: "570px", sm: "1200px", lg: "50% auto" },
        backgroundRepeat: { xs: "no-repeat", lg: "repeat-x" },
        backgroundPosition: { xs: "top", sm: "top", lg: "0 0 " },
        minHeight: { xs: "30vh", xl: "45vh" },
        backgroundImage: `url(${item.img})`,
        backgroundAttachment: "fixed",
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
          // color: "white",
          // position: "absolute",
          // padding: "5%",
          // background: "rgba(0, 0, 0, 0.7)",
          // backgroundAttachment: "fixed",
          backgroundSize: { xs: "contain", md: "50%" },
          minHeight: { xs: "30vh", lg: "40vh" },
          // height: "100%",
          // top: 0,
          width: { xs: "100%", md: "50%" },
          // left: "0%",

          // overflow: "hidden",
          // clipPath: "var(--circle-top-right-out)",
          // animation: "in-circle-swoop 5s forwards",
          // fontSize: "1.5 rem",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // lineHeight: "2",
        }}
      >
        {item.description}
      </div>
    </Paper>
  );
}

export default Item;
