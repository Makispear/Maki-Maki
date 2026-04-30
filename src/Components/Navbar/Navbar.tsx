import '../../index.css'
import './navbar.css'
import { useState } from 'react'

const Navbar: React.FC = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen)
        console.log(isHamburgerOpen)
    }

    return <nav className="navbar-div">
        <div className='logo'>
            <h1>M<span>/</span></h1>
        </div>
        <div className={'nav nav-hamburger-menu ' + (isHamburgerOpen ? 'nav-open' : 'nav-closed')}>
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/contact">Contact</a></li>
                <li className='mobile-only'><a href="/">Hire Me</a></li>
            </ol>
            <button className='desktop-only'>Hire Me</button>
        </div>
        <div className='hamburger-menu' onClick={toggleHamburger}>
            <span className={isHamburgerOpen ? 'upper-bread' : ''}></span>
            <span className={isHamburgerOpen ? 'middle-bread' : ''}></span>
            <span className={isHamburgerOpen ? 'lower-bread' : ''}></span>
        </div>
    </nav>
}

export default Navbar