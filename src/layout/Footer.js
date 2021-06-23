import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <h4 className="copyright">
                © Copyrights 2019 Stack. All Rights Reserved.
            </h4>
            <ul>
                <li className="privacy">
                    <h4>
                        <Link to="/">Privacy Policy</Link>
                    </h4>
                </li>
                <li className="terms">
                    <h4>
                        <Link to="/">Terms and Conditions</Link>
                    </h4>
                </li>
            </ul>
        </footer>
    );
}
