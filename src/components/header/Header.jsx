import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Artaly</a>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <span className="li__number">01. </span>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#edu" className="nav__link">
                                <span className="li__number">02. </span>Education
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#exp" className="nav__link">
                                <span className="li__number">03. </span>Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#exp" className="nav__link">
                                <span className="li__number">04. </span>Skills
                            </a>
                            
                        </li>
                        <li className="nav__item">
                            <a href="#exp" className="nav__link">
                                <span className="li__number">05. </span>Certifications
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
