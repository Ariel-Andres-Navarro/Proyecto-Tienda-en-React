
import CartWidget  from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {
    return (
      <nav>
         <h2> Ecommerce 🐻 </h2>
           <div>
             <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
             </ul>
           </div>
         <CartWidget/>
      </nav>
    )
}

export default NavBar