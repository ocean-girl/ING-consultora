// const styles = {
//   title: {
//     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//   },
// };
//animación de titulo
// .tracking-in-contract-bck {
// 	-webkit-animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
// 	        animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
// }

import { Box, Typography } from "@mui/material";
import styles from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="fontWeightRegular"
        textAlign="center"
        style={styles.title}
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
