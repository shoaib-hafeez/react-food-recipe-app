import logo from "./assets/logo.jpg"
import PerfectRecipe from "./assets/PerfectRecipe.png"
import "./index.css"
import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <div>
        <footer className="footer">
            <div className="container1">
                <div className="logo_img">
                    <img src={logo} className="footer_logo_img"></img>
                    <img src={PerfectRecipe} className="footer_txt_img"></img>
                </div>
                <div className="footer_txt">
                    <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.</p>
                </div>
            </div>
            <div className="container2">
                <div>
                    <h3>Quick links</h3>
                    <Link to={"/"} className="footer_link">Home</Link><br></br><br></br>
                    <Link to={"/recipe"} className="footer_link">Recipe</Link><br></br><br></br>
                    <Link to={"/blog"} className="footer_link">Blog</Link>
                </div>
                <div>
                <h3>Quick links</h3>
                    <p>Share Recipe</p>
                    <Link to={"/about"} className="footer_link">About Us</Link>
                    <p>Contact</p>
                </div>
                <div>
                <h3>Legal</h3>
                    <p>Terms and COnditions</p>
                    <p>Privacy & cookies</p>
                </div>
            </div>
            <div className="container3">
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter to get more free tip</p>
                <input placeholder="Enter Your Email"></input><br></br>
                <button className="sub_btn">Subscibe</button>
            </div>
        </footer>
        <div className="container4">
        <p>© 2023 RecipeLogo. All Right Reserved</p>
    </div>
    </div>
    )
}

export default Footer;