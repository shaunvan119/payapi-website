import Contact from "./Contact"
import phone from "../assets/home/desktop/illustration-phone-mockup.svg"
import PhoneMobile from "../assets/home/desktop/phone-mobile.svg"


function MainTop() {
    
    return (

        <div className="main-top-section">
                <h1 className="top-heading">Start building<br/> 
                with our APIs for<br/> 
                absolutely free.</h1>
                <p><span className="questions">Have any questions?</span><span className="contact-us"> Contact Us</span></p>
                <Contact/>
            
                 <img src={phone} alt="Logo" className="phone" /> 
                 <img src={PhoneMobile} alt="Logo" className="phoneMobile" /> 
                          
                 </div>
           
    )
}

export default MainTop