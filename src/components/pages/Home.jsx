import Contacto from "./Contacto"
import Equipo from "./Equipo"
import Nosotros from "./Nosotros/Nosotros"
import Servicios from "./servicios/ServiciosPresentacional"
import Clientex from "./clientes/Clientex"



const Home = () => {
  return (
    <div>
      <div><Nosotros /></div>
      <div><Servicios /></div>
      <div><Clientex /></div>
      <div><Equipo /></div>
      <div><Contacto /></div>
      
    </div>
  )
}

export default Home