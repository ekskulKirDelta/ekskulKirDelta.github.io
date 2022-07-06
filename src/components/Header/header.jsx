import { Component } from "react"
import { Link } from "react-router-dom"
import logo from '../pict/logo.svg'
// * Import Header Css
import './header.css'

export default function Header() {
        return(
            <header className="header1">
                    <div className="imgBx">
                        <img src={logo} alt="Pict" />
                    </div>
                <nav>
                    <div className="hamburger"><div className="bar"></div></div>
                    <ul>
                        <li><Link to='About'>About</Link></li>
                        <li><Link to='Contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        )
}