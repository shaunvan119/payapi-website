
import line from "../assets/home/desktop/Rectangle.png"

import {  Link } from "react-router-dom";

function Pricing() {
    
    return (
         <div className="price-main-section">
            <div className="free-plan">
                <p className="price-title">Free Plan</p>
                <p className="price-p">Build and test using our core set of products with<br/> 
                up to 100 API requests </p>
                <p className="price-amount">$0.00</p>
                <img src={line} alt="line" className="line" />
              <ul className="price-items">
                  <li className="list-li">Transactions</li>
                  <li className="list-li" >Auth</li>
                  <li className="list-li" >Identity</li>
                  <li className="list-li">Investments</li>
                  <li className="list-li">Assets</li>
                  <li className="list-li">Liabilities</li>
                  <li className="list-li">Income</li>
              </ul>  
                 <img src={line} alt="line" className="line" />
                 <Link to="/contactUs"><button className="header-button">Contact Us</button></Link>
            </div>

            <div className="basic-plan">
                <p className="price-title">Free Plan</p>
                <p className="price-p">Launch your project with unlimited requests and<br/> no contractual minimums  </p>
                <p className="price-amount">$249.00</p>
                <img src={line} alt="line" className="line" />
                <ul className="price-items">
                    <li className="list-li">Transactions</li>
                    <li className="list-li">Auth</li>
                    <li className="list-li">Identity</li>
                    <li className="list-li">Investments</li>
                    <li className="list-li">Assets</li>
                    <li className="list-li">Liabilities</li>
                    <li className="list-li">Income</li>
              </ul>  
                 <img src={line} alt="line" className="line" />
                 <Link to="/contactUs"><button className="header-button">Contact Us</button></Link>
            </div>

            <div className="Premium-plan">
                <p className="price-title">Free Plan</p>
                <p className="price-p">Get tailored solutions, volume pricing, and<br/> 
                dedicated support for your team </p>
                <p className="price-amount">$499.00</p>
                <img src={line} alt="line" className="line" />
                <ul className="price-items">
                    <li className="list-li">Transactions</li>
                    <li className="list-li">Auth</li>
                    <li className="list-li">Identity</li>
                    <li className="list-li">Investments</li>
                    <li className="list-li">Assets</li>
                    <li className="list-li">Liabilities</li>
                    <li className="list-li">Income</li>
              </ul>  
                <img src={line} alt="line" className="line" />
                <Link to="/contactUs"><button className="header-button">Contact Us</button></Link>
            </div>
            
            
            
              
        </div>
    )
}

export default Pricing
