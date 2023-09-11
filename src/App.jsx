import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
//import { menuRoutes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
// import Nosotros from "./components/pages/Nosotros/Nosotros";
// import Servicios from "./components/pages/servicios/ServiciosPresentacional";
// import Equipo from "./components/pages/equipo/Equipo";
// import Contacto from "./components/pages/Contacto";
// import Clientex from "./components/pages/clientes/Clientex";
//import Home from "./components/pages/Home";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Clientes" element={<Clientex />} />
          <Route path="/Equipo" element={<Equipo />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
