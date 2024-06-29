import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg"
import PerfectRecipe from "./assets/PerfectRecipe.png"
import search from "./assets/search.png"
import "./index.css";

const Header = () =>{
    return(
        <div className="main">
            <div className="logo"><img src={logo}></img><img  className="logo_text" src={PerfectRecipe}></img>
            </div>
            <nav className="nav_bar">
                    <Link to={"/"} className="nav_links">Home</Link>
                    <Link to={"/recipe"} className="nav_links">Recipe</Link>
                    <Link to={"/addRecipe"} className="nav_links">Add Recipe</Link>
                    <Link to={"/blog"} className="nav_links">Blog</Link>
                    <Link to={"/about"} className="nav_links">About Us</Link>                      
                    </nav>
                    <div className="serach_icon"> <img src={search}></img></div>
        </div>
    )
}
export default Header
