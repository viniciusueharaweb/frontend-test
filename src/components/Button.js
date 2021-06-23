export default function Button(props) {
    if (props.children) {
        return <>{props.children}</>;
    }
    return (
        <a
            href="/"
            onClick={props.onClick}
            // btn-shadow para os botões que têm box shadow
            className={props.shadow ? "btn btn-shadow" : "btn"}
        >
            {props.text}
        </a>
    );
}
