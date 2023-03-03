import React, { useState } from "react";
import "./header.css";

const Header = () => {

    const [Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Artaly</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                
                                <span className="li__number">01. </span>&nbsp;About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#edu" className="nav__link">
                                <span className="li__number">02. </span>&nbsp;Education
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#exp" className="nav__link">
                                <span className="li__number">03. </span>&nbsp;Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <span className="li__number">04. </span>&nbsp;Skills
                            </a>
                            
                        </li>
                        <li className="nav__item">
                            <a href="#certs" className="nav__link">
                                <span className="li__number">05. </span>&nbsp;Certifications
                            </a>
                        </li>
                    </ul>

                    <i 
                    className="uil uil-times nav__close"
                    onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
