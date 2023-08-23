import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Container } from '@mui/material';

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
    <Container maxWidth="xl">
      <h1>Contacto</h1>
      <Box
        component="form"
        onSubmit={onSubmit}
        autoComplete="off"
        sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr' },
            gap: 2,
            margin: 2,
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
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
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
        
        <Button
          variant="outlined"
          type="submit"
          sx={{ mt: 2 }}
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );
}