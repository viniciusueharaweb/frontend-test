import React, { useState, useEffect } from "react";

export default function HamMenu() {
    const [isHamMenuShowing, setIsHamMenuShowing] = useState(true);

    useEffect(() => {
        const menu = document.querySelector(".nav__list");
        const ham = document.querySelector(".ham");
        const xIcon = document.querySelector(".xIcon");
        const menuIcon = document.querySelector(".menuIcon");
        const menuLinks = document.querySelectorAll(".nav__item a");

        // retirar ou retomar tab index nos links do navbar
        // dependendo do viewport do usuário (acessibilidade)
        if (getComputedStyle(ham).display !== "none") {
            menuLinks.forEach(function (menuLink) {
                menuLink.tabIndex = -1;
            });
        } else {
            menuLinks.forEach(function (menuLink) {
                menuLink.tabIndex = 0;
            });
        }

        // mudar estado de se está aparecendo o hammenu se o
        // usuário mudar o viewport de tamanho
        const handleResize = () => {
            if (getComputedStyle(ham).display !== "none") {
                setIsHamMenuShowing(true);
            } else {
                setIsHamMenuShowing(false);
            }
        };
        window.addEventListener("resize", handleResize);

        // função que abre ou fecha o menu
        function toggleMenu(e) {
            if (menu.classList.contains("showMenu")) {
                // fechar menu
                menu.classList.toggle("showMenu");
                xIcon.style.display = "none";
                menuIcon.style.display = "block";

                // retirar tab index quando o usuário fechar o menu (acessibilidade)
                menuLinks.forEach(function (menuLink) {
                    menuLink.tabIndex = -1;
                });
                document.removeEventListener("keyup", closeMenuWhenTabAway);
            } else {
                // abrir menu
                menu.classList.toggle("showMenu");
                xIcon.style.display = "block";
                menuIcon.style.display = "none";

                //retomar tab index quando o usuário abrir o menu (acessibilidade)
                // e fecha menu quando clicar em um dos links do nav
                menuLinks.forEach(function (menuLink) {
                    menuLink.tabIndex = 0;
                    menuLink.addEventListener("click", (e) => toggleMenu(e));
                });

                // o listener registra o click que abre o menu, então
                // coloquei 1ms para adicionar o listener
                setTimeout(() => {
                    document.addEventListener(
                        "click",
                        closeMenuWhenClickOutside
                    );
                }, 1);

                document.addEventListener("keyup", closeMenuWhenTabAway);
            }
        }
        // função que fecha o menu se clicar fora do menu
        const closeMenuWhenClickOutside = (e) => {
            const mobileNavBarDescendants = Array.from(
                document.querySelector(".nav__list").querySelectorAll("*")
            );
            const targetDescendants = Array.from(
                e.target.querySelectorAll("*")
            );

            // função checa se os descendentes do elemento clicado
            // são os mesmos do navbar (comparando o primeiro descendente)
            if (targetDescendants[0] !== mobileNavBarDescendants[0]) {
                menu.classList.remove("showMenu");
                xIcon.style.display = "none";
                menuIcon.style.display = "block";
                document.removeEventListener(
                    "click",
                    closeMenuWhenClickOutside
                );
            }
        };

        // função que fecha o menu se o foco sair do menu (dando tab)
        const closeMenuWhenTabAway = (e) => {
            const targetClassArray = Array.from(e.target.classList);

            // checa se o foco já chegou no próximo elemento, no caso o input principal
            if (targetClassArray.includes("main-input")) {
                menu.classList.remove("showMenu");
                xIcon.style.display = "none";
                menuIcon.style.display = "block";
                document.removeEventListener("keyup", closeMenuWhenTabAway);

                // tira tab index dos links (acessibilidade)
                menuLinks.forEach(function (menuLink) {
                    menuLink.tabIndex = -1;
                });
            }
        };

        // listener que abre o menu
        ham.addEventListener("click", (e) => toggleMenu(e));
    }, [isHamMenuShowing]);

    return (
        <button className="ham" aria-label="Open the menu">
            <span className="menuIcon material-icons">&#xe5d2;</span>
            <span className="xIcon material-icons">&#xe5cd;</span>
        </button>
    );
}
