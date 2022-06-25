
import tesla from "../assets/shared/desktop/tesla.svg"
import microsoft from "../assets/shared/desktop/microsoft.svg"
import oracle from "../assets/shared/desktop/oracle.svg"
import google from "../assets/shared/desktop/google.svg"
import nvidia from "../assets/shared/desktop/nvidia.svg"
import hewlettpackard from "../assets/shared/desktop/hewlett-packard.svg"
import { Link } from "react-router-dom"

function MainMid() {
    
    return (

        <div className="main-mid-section">
            <div className="main-mid-left">
                <h2 className="mid-heading">Who we work with</h2>
                <p className="mid-p">Today, millions of people around the world have successfully<br/> connected their accounts to apps they love using our API. We <br/> provide developers with the tools they need to create easy and<br/>accessible experiences for their users.  </p>
                 <Link to="/About"><button className="about-us">About us</button></Link>
            </div>  
            <div className="logo-grid">
                 <img src={tesla} alt="Logo" className="tesla" />
                 <img src={microsoft} alt="Logo" className="microsoft" />
                 <img src={hewlettpackard} alt="Logo" className="microsoft" />
                 <img src={oracle} alt="Logo" className="oracle" />
                 <img src={google} alt="Logo" className="google" />
                 <img src={nvidia} alt="Logo" className="" />
             </div>    
            </div>
           
    )
}

export default MainMid