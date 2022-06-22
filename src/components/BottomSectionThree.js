import banking from "../assets/home/desktop/icon-finances.svg"
import coverage from "../assets/home/desktop/icon-coverage.svg"
import consumer from "../assets/home/desktop/icon-consumer.svg"


function BottomSectionThree() {
    
    return (

        <div className="main-bottom-three">
            <div className="Personal-finances">
                <img src={banking} alt="Logo" className="banking" />
                <h3 className="bottom-three-heading">Personal Finances</h3>
                <p className="bottom-p">Consolidate financial data from multiple sources<br/>
                 and categorize transactions up to 2 years of<br/>
                  history. Analyze reports to reconcile activities in<br/>
                 your account.  </p>  
            </div>
            <div className="Banking-cov">
                <img src={coverage} alt="Logo" className="coverage" />
                <h3 className="bottom-three-heading">Banking & Coverage</h3>
                <p className="bottom-p">With our platform, you can speed up account<br/> 
                onboarding and support ongoing payments for<br/>
                 checking, savings, credit card, and brokerage<br/> 
                 accounts.</p>  
            </div>
            <div className="consumer-payments">
                <img src={consumer} alt="Logo" className="consumer" />
                <h3 className="bottom-three-heading">Consumer Payments</h3>
                <p className="bottom-p">It’s easier to set up secure bank payments with us<br/>
                 through a flow designed with the user experience<br/>
                  in mind. Customers could instantly authenticate<br/>
                their account.</p>  
            </div>
            
            
            
              
        </div>
           
    )
}



export default BottomSectionThree