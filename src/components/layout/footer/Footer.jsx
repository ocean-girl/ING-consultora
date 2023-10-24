import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Footer = () => {
//   return (
//     <div className="mx-auto flex w-[90%] max-w-[800px] flex-col items-center gap-8 text-white xsm:items-start">
//       <a
//         href="mailto:info@ing-consultora.com.ar"
//         className=" hover:text- flex w-fit flex-col items-center gap-3 duration-300 hover:text-red  xsm:flex-row xsm:gap-12 "
//       >
//         <FontAwesomeIcon icon={faEnvelope} className="h-11" />
//         <p className="font-text text-xl">info@ing-consultora.com.ar</p>
//       </a>
//       <a
//         href="tel:+549113287-0975"
//         rel="noreferrer"
//         aria-label="link to whatsapp"
//         className=" flex w-fit  flex-col  items-center gap-3 duration-300 hover:text-red xsm:flex-row xsm:gap-12  "
//       >
//         <FontAwesomeIcon icon={faPhone} className="h-11" />
//         <p className="font-text text-xl">+54 911 3287 0975</p>
//       </a>
//       <a
//         href="https://api.whatsapp.com/send?phone=5491132870975"
//         rel="noreferrer"
//         target="_blank"
//         aria-label="link to whatsapp"
//         className=" flex w-fit  flex-col  items-center gap-3 duration-300 hover:text-red xsm:flex-row xsm:gap-12  "
//       >
//         <FontAwesomeIcon icon={faWhatsapp} className="h-12" />
//         <p className="font-text text-xl">+54 911 3287 0975</p>
//       </a>
//     </div>
//   );
// };

// export default Footer;

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  Email,
} from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Nosotros
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nos dedicamos a sumar Conocimiento, fomentar Comunicacion y crear
              Conciencia.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} display={"flex"} flexDirection={"column"}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contáctenos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Buenos Aires / Chubut - Argentina / LATAM
            </Typography>
            <Link
              variant="body2"
              color="text.secondary"
              href="mailto:info@ing-consultora.com.ar"
            >
              <Email />
              info@ing-consultora.com.ar
            </Link>
            <Link
              variant="body2"
              color="text.secondary"
              href="https://api.whatsapp.com/send?phone=5491132870975"
              rel="noreferrer"
              target="_blank"
              aria-label="link to whatsapp"
            >
              <WhatsApp />
              +54 9 11 3287 0975
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Seguinos en las redes
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://www.ing-consultora.com.ar/">
              ING Consultora
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
