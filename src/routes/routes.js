import Equipo from "../components/pages/equipo/Equipo";
import Nosotros from "../components/pages/Nosotros/Nosotros";
import Servicios from "../components/pages/servicios/ServiciosPresentacional";
import Clientex from "../components/pages/clientes/Clientex";
import Contacto from "../components/pages/Contacto";
import Home from "../components/pages/Home";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "Nosotros",
    path: "/Nosotros",
    Element: Nosotros,
  },
  {
    id: "Servicios",
    path: "/Servicios",
    Element: Servicios,
  },
  {
    id: "Clientes",
    path: "/Clientes",
    Element: Clientex,
  },
  {
    id: "Equipo",
    path: "/Equipo",
    Element: Equipo,
  },
  {
    id: "Contacto",
    path: "/Contacto",
    Element: Contacto,
  },
];
