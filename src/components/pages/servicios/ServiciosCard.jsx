import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  IconButton,
} from "@mui/material";

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <Card sx={{ backgroundColor: "secondary.second" }}>
      <CardActionArea>
        <IconButton color="primary.main">
          <Icon color="primary.main" />
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
          <Typography variant="body2" color="prymary.second">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;
