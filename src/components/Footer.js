import logowhite from '../assets/shared/desktop/logowhite.png'
import facebook from '../assets/shared/desktop/facebook.svg'
import twitter from '../assets/shared/desktop/twitter.svg'
import linkedIn from '../assets/shared/desktop/linkedin.svg'
import {  Link } from "react-router-dom";


function Footer() {
    
    return (
        <footer>
            <div class="container-flex-footer">
                <div class="site-nav-footer">
                    <img src={logowhite} alt="Logo" className="logo" />   
                    <nav className='footer-nav'>
                <ul >
                    <li ><Link to="#">Pricing</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="/contactUs">Contact</Link></li>
                </ul>
                </nav>
                </div>
                
                <div className='social-logos'>
                    <img src={facebook} alt="facebook" className="facebook" /> 
                    <img src={twitter} alt="twitte" className="twitter" /> 
                    <img src={linkedIn} alt="Logo" className="linkedIn" />  
                </div>
            </div>
        </footer>
    )
}

export default Footer