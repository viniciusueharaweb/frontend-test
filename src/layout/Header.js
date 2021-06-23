import Navigation from "../components/Navigation";
import Button from "../components/Button";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Navigation />
                <div className="hero">
                    <h1>
                        Ready for <br />
                        Trying a new recipe?
                    </h1>
                    <form className="search">
                        <input
                            className="main-input"
                            placeholder="Search healthy recipes"
                        />
                        <Button
                            text={
                                <span className="material-icons">&#xe8b6;</span>
                            }
                        />
                    </form>
                </div>
            </div>
        </header>
    );
}
