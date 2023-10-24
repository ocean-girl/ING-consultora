//import Contacto from "./Contacto";
import Equipo from "./equipo/Equipo";
import Nosotros from "./Nosotros/Nosotros";
import Servicios from "./servicios/ServiciosPresentacional";
import Clientex from "./clientes/Clientex";

const Home = () => {
  return (
    <div>
      <Nosotros />

      <Servicios />

      <Clientex />

      <Equipo />

      {/* <Contacto /> */}
    </div>
  );
};

export default Home;
