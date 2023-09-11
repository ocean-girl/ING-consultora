import { Box, Button, TextField } from "@mui/material";
import { useState, useRef } from "react";
import Title from "../common/title/Title";
import emailjs from "@emailjs/browser";

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_l1okmtb', 'template_v132pk8', form.current, '0xQ6z1Nf22IOfl5mj')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Box sx={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)" }}>
      <Title title={"CONTACTO"} />
        <Box sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            p: 4,
          }}>
          <form ref={form} onSubmit={sendEmail}>
            <label>Nombre y Apellido</label>
            <input type="text" name="user_name" required/>
            
            <label>Celular</label>
            <input type="celphone" name="user_cel" required inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} margin="normal"/>

            <label>Email</label>
            <input type="email" name="user_email" required/>
            
            <label>Mensaje</label>
            <textarea name="message" />
            <input type="submit" value="Enviar" required/>
          </form>
          </Box>
    </Box>
    </div>
  );
  //return (
 //       <form
          //component="form"
 //         onSubmit={onSubmit}
  //        autoComplete="off"
  //        sx={{
  //          display: "grid",
  //          gridTemplateColumns: { sm: "1fr 1fr" },
  //          gap: 2,
  //          p: 4,
   //       }}
   //     >
   //       <TextField
   //         required
    //        id="outlined-required"
    //        label="Nombre y Apellido"
    //        name="user_name"
    //        margin="normal"
    //      />
     //     <TextField
     //       required
     //       id="outlined-required"
     //       label="Celular"
     //       inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
     //       margin="normal"
     //     />
     //     <TextField
     //       label="Email"
     //       name="user_email"
     //       variant="outlined"
     //       id="email"
     //       type="email"
     //       required
     //       margin="normal"
     //       error={error.error}
     //       helperText={error.message}
     //       onChange={(e) => setEmail(e.target.value)}
     //       value={email}
     //     />
     //     <TextField
     //       id="outlined-multiline-static"
     //       label="Comentario"
     //       name="message"
     //       multiline
     //       rows={4}
     //       margin="normal"
     //     />

     //     <Button variant="outlined" type="submit" sx={{ mt: 2 }} onSubmit={sendEmail}>
     //       Enviar
     //     </Button>
     //   </form>
    //  </Box>
   // </div>
 // );
}
