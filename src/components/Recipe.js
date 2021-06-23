import Button from "./Button";

export default function Recipe({ recipeImg, recipeTitle }) {
    return (
        <article className="flex-row recipe__item">
            <img src={recipeImg} alt="" />
            <div>
                <h3>{recipeTitle}</h3>
                <Button text="See Recipe" />
            </div>
        </article>
    );
}
