// import { Link,NavLink } from "react-router-dom"
import '../index.css'
import "./Navbar.css";
export const Header=()=>{
    return(
        <>
         {/* <nav>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>  
          <li><NavLink to={"/about"}>About</NavLink></li>  
          <li><NavLink to={"/contact"}>Contact</NavLink></li>     
        </ul>
        
        </nav> */}
        <header className="navbar">
        <div className="logo">Shop<span>ly</span></div>

        <nav className="nav-links">
          <a className="active" href={"/"}>Home</a>
          <a href="#shop">Shop</a>
          <a href="#categories">Categories</a>
          <a href={"/about"}>About</a>
          <a href={"/contact"}>ContactUs</a>
        </nav>

        <div className="nav-actions">
          <button aria-label="Search">⌕</button>
          <button aria-label="Cart">🛒<b>2</b></button>
          <button className="login">Login</button>
        </div>
      </header>
        </>
    )
}