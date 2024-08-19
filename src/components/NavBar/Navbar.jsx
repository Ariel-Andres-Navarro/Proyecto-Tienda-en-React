import { CartWidget } from "../CartWidget/CartWidget"
import "./Navbar.css"

export const Navbar = () => {
    return (
      <header>
         <div className="logo"> 🐻 </div>
        <nav>
           <div className="link">
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
           </div>
        </nav>
        <div className="cart-widget"><CartWidget/></div>
      </header>
    )
}