import phoneX from "../assets/home/desktop/iPhone-X-Mockup.png"


function BottomSectionTwo() {
    
    return (

        <div className="main-bottom-two">
            <div className="bottom-right-p">
                <h2 className="bottom-heading">Simple UI & UX</h2>
                <p className="bottom-p">Our pre-built form is easy to integrate in your app or website’s<br/> 
                checkout flow and designed to optimize conversion. </p>  
            </div>
                <img src={phoneX} alt="Logo" className="phoneOne" />     
        </div>
           
    )
}



export default BottomSectionTwo