import "./index.css";
import hero from "./assets/hero.png";
import shareCard from "./assets/shareCard.png"
import onionRing from "./assets/onionRing.png"
import cake from "./assets/cake.png"
import roll from "./assets/roll.png"
import tost from "./assets/tost.png"
import tuna from "./assets/tuna.png"
import wrap from "./assets/wrap.png"
import blogposts from "./assets/blogposts.png"
import greenWrap from "./assets/greenWrap.png"
import salad from "./assets/salad.png"
import pizza from "./assets/pizza.png"
import cheery from "./assets/cheery.png"
import smothi from "./assets/smothi.png"
import snaper from "./assets/snaper.png"
import logogroup from "./assets/Logosgroup.png"
import HeaderWithButton from "../../components/HeaderWithButton/index.js";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="tiitle_front">
        <HeaderWithButton />
        <div className="jumbo_wraper">
          <div className="jumpo_text_box">
            <h2>
              Your Daily Dish <br></br>A{" "}
              <span className="brown_color">Food</span> Journey
            </h2>
            <p className="grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
            </p>
            <button className="signup_btn_for_jumpo">Sign Up</button>
          </div>
          <div className="jumpo_pic">
            <img src={hero}></img>
          </div>
        </div>
      </div>
      <section className="share_your_recipe">
        <div className="share_your_recipe_pic"><img src={shareCard}></img></div>
        <div className="share_your_recipe_txt">
            <h2>Share Your <span className="brown_color">Recipes</span></h2>
            <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit</p>
            <button className="create_new_recipe_btn">Create new Recipe</button>
        </div>
      </section>
      <section className="trending_recipe">
        <h2 className="trend_heading">Trending Recipe</h2>
        <div className="trend_card_warper">
            <img src={onionRing} className="recipe_card"></img>
            <img src={tost} className="recipe_card"></img>
            <img src={roll} className="recipe_card"></img>
            <img src={wrap} className="recipe_card"></img>
            <img src={tuna} className="recipe_card"></img>
            <img src={cake} className="recipe_card"></img>
        </div>
      </section>
      <section className="blog">
        <h2 className="trend_heading">Blog</h2>
        <div className="log_btn">
        <Link to={"/blog"}className="log_btn">View more</Link></div>
        <div className="blog_card_warper">
            <img src={blogposts} className="blog_card"></img>
        </div>
      </section>
      <section className="explore_recipe">
        <h2 className="trend_heading">Explore Recipe</h2>
        <div className="explore_card_warper">
            <img src={greenWrap} className="recipe_card"></img>
            <img src={salad} className="recipe_card"></img>
            <img src={pizza} className="recipe_card"></img>
            <img src={cheery} className="recipe_card"></img>
            <img src={smothi} className="recipe_card"></img>
            <img src={snaper} className="recipe_card"></img>
        </div>
      </section>
      <section className="newsletter">
        <div className="newsletter_txt">
            <h2>Lets stay in touch</h2>
            <p className="grey">Join our newsletter, so that we reach out to you with our news and offers.</p>
       </div>
       <div className="newsletter_input">
       <input placeholder="enter your email"></input>
       <button className="subs_btn">Subscribe</button>
       </div>
      </section>
      <section className="company_logo">
        <img src={logogroup}></img>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
