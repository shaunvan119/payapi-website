import logo from '../assets/shared/desktop/logo.svg'
import {  Link } from "react-router-dom";
import Circle from "../assets/shared/desktop/bg-pattern-circle.svg"

function Header() {
    
    return (
        <header>
            <div class="container container-flex">
                <div class="site-nav">
                    <img src={logo} alt="Logo" className="logo" />   
                    <nav>
                    <ul>
                        <li><Link to="Price">Pricing</Link></li>
                        <li><Link to="About">About</Link></li>
                        <li><Link to="/contactUs">Contact</Link></li>
                    </ul>
                </nav>
                </div>
                
                
                
                <img src={Circle} alt="Logo" className="circle" />   
            </div>
        </header>
    )
}

export default Header