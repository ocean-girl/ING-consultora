import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const styles = {
  title: {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  text: {
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
  },
};

export default function Contacto() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const emailValidation = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    console.log(email);
    setError({
      error: false,
      message: "",
    });
  };

  return (
    <div>
      <Box sx={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)" }}>
        <Typography
          variant="h2"
          fontWeight="fontWeightRegular"
          textAlign="center"
          p={3}
          color="#666666"
          style={styles.title}
          pt={10}
        >
          CONTACTO
        </Typography>

        <Box
          component="form"
          onSubmit={onSubmit}
          autoComplete="off"
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            p: 4,
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Nombre y Apellido"
            margin="normal"
          />
          <TextField
            required
            id="outlined-required"
            label="Celular"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            id="email"
            type="email"
            required
            margin="normal"
            error={error.error}
            helperText={error.message}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            id="outlined-multiline-static"
            label="Comentario"
            multiline
            rows={4}
            margin="normal"
          />

          <Button variant="outlined" type="submit" sx={{ mt: 2 }}>
            Enviar
          </Button>
        </Box>
      </Box>
    </div>
  );
}
