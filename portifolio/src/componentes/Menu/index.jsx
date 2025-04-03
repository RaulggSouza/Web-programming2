import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";
import { Link, useLocation } from "react-router-dom";
export default function Menu() {
    const localizacao = useLocation();
    console.log(localizacao);

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    );
}
