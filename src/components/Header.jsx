import { Filters } from './Filters.jsx'
import Logo from "../assets/Logo.png"
export function Header () {
  return (
    <header>
      <img 
      src={Logo}
      alt='Commerce.js'
      height='100px'/>
            <h1>Hola Gamer</h1>
      <Filters />

    </header>
  )
}