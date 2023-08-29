import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  IconButton,
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
        backgroundColor: "primary.second",
        maxWidth: 600,
        minHeight: "250px",
        textAlign: "justify",
        transition: "transform 0.5s",
        maxHeight: hovered ? "400px" : "200px",
        transform: hovered ? "scale(1.2)" : "scale(1)",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton sx={{ top: 0 }}>
          <Icon sx={{ fontSize: "50px", color: "#ffffff", m: 2 }} />
        </IconButton>

        <CardContent>
          <Typography
            variant="h6"
            component="div"
            color="#ffffff"
            pb={2}
            sx={{
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          {hovered && (
            <Typography variant="body2" color="#ffffff">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
