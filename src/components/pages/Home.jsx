import Equipo from "./Equipo"
import Nosotros from "./Nosotros/Nosotros"
import Servicios from "./Servicios/Servicios"
import Clientes from "./clientes/Clientes"


const Home = () => {
  return (
    <div>
      <div><Nosotros /></div>
      <div><Servicios /></div>
      <div><Clientes /></div>
      <div><Equipo /></div>

    </div>
  )
}

export default Home