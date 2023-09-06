import Contacto from "./Contacto";
import Equipo from "./equipo/Equipo";
import Nosotros from "./Nosotros/Nosotros";
import Servicios from "./servicios/ServiciosPresentacional";
import Clientex from "./clientes/Clientex";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Nosotros />
      </div>
      <div>
        <Servicios />
      </div>
      <div>
        <Clientex />
      </div>
      <div>
        <Equipo />
      </div>
      <div>
        <Contacto />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
