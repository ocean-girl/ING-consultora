import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  // IconButton,
} from "@mui/material";
import { useState } from "react";

const ServiceCard = ({ Icon, title, description }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        maxWidth: 600,
        minHeight: "250px",
        textAlign: "justify",
        boxshadow: "0px 3px 5px -1px rgba(0,0,0,0.5)",
        transition: "transform 0.7s",
        maxHeight: hovered ? "600px" : "200px",
        transform: hovered ? "scale(1.2)" : "scale(1)",
        backgroundColor: hovered ? "#F7F9F8" : "#F7F9F8",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: "20px",
        }}
      >
        <img
          src={Icon}
          alt="grafico"
          style={{ fontSize: "10px", m: 2, width: "30%" }}
        />

        <CardContent>
          <Typography
            variant="h6"
            component="div"
            color="#666666"
            pb={2}
            sx={{
              textAlign: "center",
              color: hovered ? "#000000" : "primary.second",
            }}
          >
            {title}
          </Typography>
          {hovered && (
            <Typography
              variant="body2"
              sx={{
                color: hovered ? "#000000" : "primary.second",
                textAlign: { xs: "center", sm: "justify" },
              }}
            >
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
