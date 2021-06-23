import { Link } from "react-router-dom";

export default function AccountInfoButton({ alreadyRegistered }) {
    return (
        <>
            {alreadyRegistered ? (
                <Link to="/account">ACCOUNT INFO</Link>
            ) : (
                <Link to="/">JOIN</Link>
            )}
        </>
    );
}
