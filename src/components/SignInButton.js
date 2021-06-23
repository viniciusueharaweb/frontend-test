import Button from "./Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function SignInButton({ alreadyRegistered }) {
    const history = useHistory();

    // função responsável pelo logout
    const handleLogout = () => {
        // exclui infos do local storage
        localStorage.removeItem("@frontend-test/userInfo");

        const cookiesNames = [
            "name",
            "day",
            "month",
            "year",
            "cpf",
            "cep",
            "address",
            "district",
            "city",
            "state",
        ];
        // exclui infos dos cookies
        cookiesNames.forEach((cookieName) => {
            return (document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`);
        });
        history.go(0);
    };
    return (
        <>
            {alreadyRegistered ? (
                <Button
                    className="btn btn-white"
                    text="LOGOUT"
                    onClick={handleLogout}
                />
            ) : (
                <Link className="btn btn-white" to="/register">
                    REGISTER
                </Link>
            )}
        </>
    );
}
