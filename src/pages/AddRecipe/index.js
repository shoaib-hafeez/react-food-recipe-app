import Header from "../../components/Header"
import Footer from "../../components/Footer";
import "./index.css";

const AddRecipe = () =>{
    return(
        <div className="addRecipe">
            <Header/>
            <h1 className="create_recipe_heading">Create New Recipe</h1>
            <section className="form_box">
                <form>
                    <label>Recipe Title</label><br></br><br></br>
                    <input type="text" name="title" id="title" placeholder="Recipe Title"></input><br></br>
                    <label>Recipe Image</label><br></br><br></br>
                    <input type="file" className="img_select_box"></input><br></br>
                    <label>Recipe Description</label><br></br><br></br>
                    <textarea name="description" id="description" placeholder="Description"></textarea><br></br>
                    <label>Ingredients</label><br></br><br></br>
                    <input type="text" name="ingredients" id="ingredients" placeholder="Write Ingredient"></input><br></br>
                    <label>Instructions</label><br></br><br></br>
                    <input name="instructions" id="instructions" placeholder="Write Instructions"></input><br></br>
                    <label>Serving</label><br></br><br></br>
                    <input type="number" placeholder="#"></input><br></br>
                    <span className="grey">How many portions does this recipe make?</span><br></br><br></br>
                    <label>Cooking Time:</label><br></br><br></br>
                    <input type="number" placeholder="Hours 0" className="nut1"></input>
                    <input type="number" placeholder="Minutes 0" className="nut1"></input><br></br>
                    <span className="grey">How long does it takes to cook this recipe?</span><br></br><br></br>
                    <label>Prep time:</label><br></br><br></br>
                    <input type="number" placeholder="Hours 0" className="nut1"></input>
                    <input type="number" placeholder="Minutes 0" className="nut1"></input><br></br>
                    <span className="grey">How long does it takes to prep this recipe?</span><br></br><br></br>
                    <label>Cuisine</label><br></br><br></br>
                    <select className="select_cuisine">
                        <option value="Chinese">Chinese</option>
                        <option value="Italian">Italian</option>
                        <option value="Thai">Thai</option>
                    </select><br></br><br></br>
                    <label>Nutrition Fact:</label><br></br><br></br>
                    <div className="wraper_nutrition">
                    <div>
                        <p>Calories</p>
                        <input placeholder="#" className="nut"></input><br></br>
                        <p>Calories</p>
                        <input placeholder="#" className="nut"></input><br></br>
                    </div>
                    <div>
                        <p>Carbohydrates</p>
                        <input placeholder="#" className="nut"></input><br></br>
                        <p>Carbohydrates</p>
                        <input placeholder="#" className="nut"></input><br></br>
                    </div>
                    <div>
                        <p>Protein</p>
                        <input placeholder="#" className="nut"></input><br></br>
                        <p>Protein</p>
                        <input placeholder="#" className="nut"></input><br></br>
                    </div>
                    <div>
                        <p>Fat</p>
                        <input placeholder="#" className="nut"></input><br></br>
                        <p>Fat</p>
                        <input placeholder="#" className="nut"></input><br></br>
                    </div>
                    </div><br></br>
                    <label>Collection</label><br></br><br></br>
                    <select className="select_collection"><br></br><br></br>
                    <option>Select Collection</option>
                        <option>Cook Book</option>
                        <option>My recipe</option>
                    </select><br></br><br></br>
                    <button className="sub_btn">Submit</button>
                </form>
            </section>
            <Footer/>
        </div>
    )
}

export default AddRecipe