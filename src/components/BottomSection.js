import implement from "../assets/home/desktop/illustration-easy-to-implement.svg"

function BottomSection() {
    
    return (

        <div className="main-bottom">
            <img src={implement} alt="Logo" className="tesla" />
            <div className="bottom-right-p">
                <h2 className="bottom-heading">Easy to implement</h2>
                <p className="bottom-p">Our API comes with just a few lines of code. You’ll be up and<br/> 
                    running in no time. We built our documentation page to<br/>
                    integrate payments functionality with ease.</p>  
            </div>     
        </div>
           
    )
}

export default BottomSection