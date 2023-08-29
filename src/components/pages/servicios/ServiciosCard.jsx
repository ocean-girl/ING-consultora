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
        backgroundColor: "secondary.second",
        maxWidth: 600,
        transition: "transform 0.3s",
        transform: hovered ? "scale(1.2)" : "scale(1)",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <IconButton color="primary.main" sx={{ top: 0 }}>
          <Icon color="primary.main" sx={{ fontSize: "50px" }} />
        </IconButton>

        <CardContent>
          <Typography
            variant="h6"
            component="div"
            color="primary.second"
            pb={2}
          >
            {title}
          </Typography>
          {hovered && (
            <Typography variant="body2" color="prymary.second">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
