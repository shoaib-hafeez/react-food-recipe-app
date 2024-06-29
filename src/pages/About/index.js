import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";
import card1 from "./assets/card1.png";
import marry from "./assets/marry.png"
import james from "./assets/james.png"
import john from "./assets/john.png"

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="about_wraper">
        <h2>About Us</h2>
        <h3>Explore Our Delicious Recipes</h3>
        <p>
          At NutriRecipe, we believe in the power of food to bring people
          together, to create cherished memories, and to nourish the soul. Our
          passion for cooking and sharing delectable recipes is at the core of
          everything we do. It's a passion that has simmered for generations
          and, with every recipe we share, continues to evolve and flourish.
        </p>
        <div className="about_card_wraper">
          <div className="image_box">
            <img src={card1} className="card1"></img>
          </div>
          <div className="text_box">
            <h3>Explore Our Delicious Recipes</h3>
            <p>
              At NutriRecipe, we believe in the power of food to bring people
              together, to create cherished memories, and to nourish the soul.
              Our passion for cooking and sharing delectable recipes is at the
              core of everything we do. It's a passion that has simmered for
              generations and, with every recipe we share, continues to evolve
              and flourish.
            </p>
          </div>
        </div>
        <div>
            <h2 className="our_team_heading">Our Team</h2>
            </div>
        <div className="our_team">
            <div className="profile"><img src={marry}></img>
            <p>Mary Richard</p>
            <p className="grey">Food Blogger</p>
            </div>
            <div className="profile"> <img src={john}></img>
            <p>John David</p>
            <p className="grey">Chef</p>
            </div>
            <div className="profile"><img src={james}></img>
            <p>James Robert</p>
            <p className="grey">Food Blogger</p></div>
        </div>
        <h3>Be One Of US</h3>
        <p>
        But this story isn't complete without you. Your feedback, your passion, and your shared moments in the kitchen are what give life to our recipes. Together, let's make every meal a masterpiece, every gathering a feast, and every bite a memory worth savoring.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
