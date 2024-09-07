import  CartWidget  from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

 const NavBar = () => {
    return (
      
         
        <nav className="NavBar">
          <NavLink to='/'>
             <h3> 🐻 </h3>
          </NavLink>
           <div className="categories">
              <NavLink to={`/category/vino`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Vinos</NavLink>
              <NavLink to={`/category/Whisky`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Whiskys</NavLink>
              <NavLink to={`/category/Gin`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gin</NavLink>
          </div>
        <CartWidget/>
        </nav>
    )
}

export default NavBar