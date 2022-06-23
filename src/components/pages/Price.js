
import Pricing from "../Pricing"
import Footer from "../Footer"
import Header from "../Header"
import Contact from "../Contact"




function Price() {
    
    return (
        <div className="home-page">
        <Header/>
        <Pricing/>
       <div className="ready-price-contact">
            <h3 className="ready-price-page">Ready to start?</h3>
             <Contact/>
        </div>
        <Footer/>

      
        </div>
    )
}

export default Price