import  CartWidget  from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

 const NavBar = () => {

    return (
        <nav className="NavBar">
          <NavLink to='/' aria-label="Ir a la página principal"  className="Logo">
             <h3> Mi Tienda</h3>
          </NavLink>
           <div className="categories" >
              <NavLink
              to={`/category/vino`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                Vino
                </NavLink>
              <NavLink 
              to={`/category/whisky`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                Whisky
                </NavLink>
              <NavLink 
              to={`/category/gin`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                Gin
                </NavLink>              
          </div>
          <div className="Cart">
               <CartWidget aria-label="Ir al carrito"/>
         </div>
        </nav>
    )
}

export default NavBar