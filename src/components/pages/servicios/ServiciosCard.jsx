import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  IconButton,
} from "@mui/material";

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <Card>
      <CardActionArea>
        <IconButton>
          <Icon />
        </IconButton>

        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
