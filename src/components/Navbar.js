import {MenuItems} from "./MenuItems"
import {SocialItems} from "./SocialItems"
import {useState} from 'react'
import navlogo from "../imgs/nav_logo.png"
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    const [clicked, setclicked] = useState(false)
    return (
        <div className = 'navbar'>
            <img className='navbar-logo' src={navlogo} alt="logo"></img>
            <div className = "menu-icon" onClick={() => setclicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu' : 'nav-menu-active'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key = {index}>
                            <a className = {item.cName} href = {item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className={clicked ? 'social-menu' : 'social-menu-active'}>
                {SocialItems.map((item, index) => {
                    return(
                        <li key = {index}>
                            <a className = {item.cName} href = {item.url}>
                            <FontAwesomeIcon icon={item.img} />
                            </a>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Navbar
