import './main.css'
import { Link } from 'react-router-dom'
import arrow from '../pict/chevron.svg'
import instagram from '../pict/icons8-instagram.svg'
import facebook from '../pict/icons8-facebook.svg'
import { Component } from 'react'
// ! Import Component
import Footer from '../Footer/footer'
import Header from '../Header/header'

class Main extends Component {
    componentDidMount(){
        // * DOM Selector
        let hamburger = document.querySelector("header nav .hamburger");
        let ul = document.querySelector("header nav ul")

        // * membuat fungsi saat hamburger di click menu akan muncul
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active')
            ul.classList.toggle('active')
        });
    }
    render(){
        return(
            <section className='mains'>
                <Header />
                    <div className="main">
                        <div className="main-item">
                            <h1><span>kir</span> sman 8 tangerang <br />
                            welcome to <span>kir</span> sman 8 tangerang
                            </h1>
                            <div className="button-bar">
                                <Link className='start' to='/About'>Get Started <img src={arrow} alt=">" /></Link>
                                <a className='insta' href="https://www.instagram.com/">
                                <img className='icon' src={instagram} alt="instagram" />
                                </a>
                                <a className='face' href='https://reactjs.org/docs/hooks-state.html'>
                                <img className='icon' src={facebook} alt="instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                <Footer />
            </section>
        )
    }
}

export default Main