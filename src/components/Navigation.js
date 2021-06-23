import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamMenu from "./HamMenu";
import SignInButton from "./SignInButton";
import AccountInfoButton from "./AccountInfoButton";

export default function Navigation() {
    // estado responsável pela renderização condicional das opções register/logout ou join/account info
    const [alreadyRegistered, setAlreadyRegistered] = useState(false);

    useEffect(() => {
        // setar estado boolean através da presença ou não do localstorage
        const userInfo = localStorage.getItem("@frontend-test/userInfo");
        if (userInfo) {
            setAlreadyRegistered(true);
        }
    }, []);

    return (
        <nav className="main-nav">
            <h2 className="logo">
                <Link to="/">Healthy Food</Link>
            </h2>
            <HamMenu />
            <ul className="nav__list">
                <li className="nav__item">
                    <h4>
                        <Link to="/">HEALTHY RECIPES</Link>
                    </h4>
                </li>
                <li className="nav__item">
                    <h4>
                        <Link to="/">BLOG</Link>
                    </h4>
                </li>
                <li className="nav__item">
                    <h4>
                        <AccountInfoButton
                            alreadyRegistered={alreadyRegistered}
                        />
                    </h4>
                </li>
                <li className="nav__item">
                    <SignInButton alreadyRegistered={alreadyRegistered} />
                </li>
            </ul>
        </nav>
    );
}
