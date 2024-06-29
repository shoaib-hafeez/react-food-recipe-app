import Header from "../../components/Header";
import "./index.css";
import cheesecake from "./assets/cheesecake.png";
import Blog1 from "./assets/Blog1.png";
import Blog2 from "./assets/Blog2.png";
import Blog3 from "./assets/Blog3.png";
import Blog4 from "./assets/Blog4.png";
import Blog5 from "./assets/Blog5.png";
import Blog6 from "./assets/Blog6.png";
import Footer from "../../components/Footer";

const Blog = () => {
  return (
    <div className="blog">
      <Header />
      <h1 className="blog_haeding">Blog</h1>


      <div className="blog_card">
        <div className="blog_card_text">
          <p>28/June/2024</p>
          <h2>Classic New York-Style Cheesecake Recipe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
            erat, ornare elementum dolor gravida, vehicula vestibulum nibh Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae
            enim pharetra, venenatis nunc eget, finibus est. Proin velit erat,
            ornare elementum dolor gravida, vehicula vestibulum nibh....
          </p>
          <button className="read_more_btn">Read more</button>
        </div>
        <div className="cheese_cake_img">
          <img src={cheesecake}></img>
        </div>
      </div>

      <section className="all_blog">
        <img src={Blog1} className="all_blog_card"></img>
        <img src={Blog2} className="all_blog_card"></img>
        <img src={Blog3} className="all_blog_card"></img>
        <img src={Blog4} className="all_blog_card"></img>
        <img src={Blog5} className="all_blog_card"></img>
        <img src={Blog6} className="all_blog_card"></img>
      </section>
      <Footer/>
    </div>
  );
};

export default Blog;
