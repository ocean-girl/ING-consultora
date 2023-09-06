import Equipo from "../components/pages/equipo/Equipo";
import Nosotros from "../components/pages/Nosotros/Nosotros";
import Servicios from "../components/pages/servicios/ServiciosPresentacional";
import Clientex from "../components/pages/clientes/Clientex";
import Contacto from "../components/pages/Contacto";

export const menuRoutes = [
  {
    id: "Nosotros",
    path: "/nosotros",
    Component: Nosotros,
  },
  {
    id: "Servicios",
    path: "/servicios",
    Component: Servicios,
  },
  {
    id: "Clientes",
    path: "/clientes",
    Component: Clientex,
  },
  {
    id: "Equipo",
    path: "/equipo",
    Component: Equipo,
  },
  {
    id: "Contactos",
    path: "/contacto",
    Component: Contacto,
  },
];
