import Contacto from "./Contacto"
import Equipo from "./Equipo"
import Nosotros from "./Nosotros/Nosotros"
import Servicios from "./servicios/ServiciosPresentacional"
import Cliente from "./clientes/Cliente"



const Home = () => {
  return (
    <div>
      <div><Nosotros /></div>
      <div><Servicios /></div>
      <div><Cliente /></div>
      <div><Equipo /></div>
      <div><Contacto /></div>
      
    </div>
  )
}

export default Home