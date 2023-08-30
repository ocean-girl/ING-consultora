import Equipo from "../components/pages/Equipo";
import Nosotros from "../components/pages/Nosotros/Nosotros";
import Servicios from "../components/pages/servicios/ServiciosPresentacional";
import Clientex from "../components/pages/clientes/Clientex";
import Contacto from "../components/pages/Contacto";

export const menuRoutes = [
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
    id: "Contactos",
    path: "/Contacto",
    Element: Contacto,
  },
];
