/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxGear } from 'react-icons/rx';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import styles from "../../styles/index.module.scss";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [iconRotated, setIconRotated] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setIconRotated(!iconRotated);
    };

    return (
        <main className={styles.main}>
            <nav>
                {/* Icono para abrir el menú a la izquierda */}
                <section onClick={toggleMenu}>
                    <RxGear className={iconRotated ? styles.menuIcon : styles.rotateIcon} />
                </section>

                {/* Menú de navegación */}
                <ul>
                    <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
                        Home
                    </li>
                    <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
                        What We Do
                    </li>
                    <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
                        Why Enginectra
                    </li>
                    <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
                        How It Works
                    </li>
                    <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
                        Fire Alarm Verification
                    </li>
                    <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
                        Log in
                    </li>
                </ul>
            </nav>

            {/* Logo en el centro */}
            <section className={styles.logo}>
                <img src="https://assets-global.website-files.com/5eccece43dd22180f71e8429/60fed9f56e15a3b8e737db90_logo-enginectra.svg" alt="Logo" />
            </section>

            {/* Icono del menú a la derecha */}
            <section>
                <BsTelephoneOutboundFill className={styles.menuIcon}/>
            </section>
        </main>
    );
};

export default NavBar;
