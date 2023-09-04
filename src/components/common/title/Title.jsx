import { Box, Typography } from "@mui/material";
import "./Title.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Title = ({ title }) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setIsTriggered(true);
    }
  }, [inView]);

  return (
    <Box ref={ref}>
      <Typography
        variant="h2"
        fontWeight="fontWeightRegular"
        textAlign="center"
        sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        className={`${isTriggered ? "tracking-in-contract-bck" : ""}`}
        p={3}
        color="primary.second"
        pt={10}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
