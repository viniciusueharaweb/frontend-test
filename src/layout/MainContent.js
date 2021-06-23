import Recipes from "./Recipes.js";
import Services from "./Services.js";
import Blog from "./Blog.js";
import Newsletter from "./Newsletter.js";

export default function MainContent() {
    return (
        <>
            <main>
                <Recipes />
                <Services />
                <Blog />
            </main>
            <Newsletter />
        </>
    );
}
