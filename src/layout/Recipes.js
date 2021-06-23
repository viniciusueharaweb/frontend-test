import Recipe from "../components/Recipe";
import comida1 from "../assets/comida_1.svg";
import comida2 from "../assets/comida_2.svg";
import comida3 from "../assets/comida_3.svg";
import comida4 from "../assets/comida_4.svg";

export default function Recipes() {
    // const recipes usada para imitar uma funcionalidade dinâmica que normalmente
    // viria de uma API (provavelmente um headless CMS)
    const recipes = [
        { id: 1, img: comida1, title: "Broccoli Salad with Bacon" },
        { id: 2, img: comida2, title: "Classic Beef Burgers" },
        { id: 3, img: comida3, title: "Classic Potato Salad" },
        { id: 4, img: comida4, title: "Cherry Cobbler on the Grill" },
    ];
    return (
        <section className="recipes__section">
            <div className="container">
                <h2 className="section__heading">Our Best Recipes</h2>
                <p>
                    Far far away, behind the word mountains, far from the
                    countries
                    <br />
                    Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="grid-wrapper">
                    {recipes.map((recipe) => (
                        <Recipe
                            key={recipe.id}
                            recipeImg={recipe.img}
                            recipeTitle={recipe.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
