import style from "./Header.module.css"

import IgniteLogo from "../assets/ignite-logo.svg"

export function Header() {
    return (
        <header className={style.header}>
            <img src={IgniteLogo} alt="Logo ignite" />
        </header>
    )
}