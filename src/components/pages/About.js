
import Footer from "../Footer"
import Header from "../Header"
import Contact from "../Contact"
import team from "../pages/image-team-members.jpg"
import line from "../pages/Rectangle.png"






function About() {
    
    return (
        <div className="about-page">
        <Header/>
        <h1 className="innovators">We empower innovators<br/>
              by delivering access to the<br/>financial system</h1>
            <div className="aboutus-section-one">
                <h2 className="about-h2-top">Our Vision</h2>
                <p className="about-p">Our main goal is to build beautiful consumer experiences along with developer-friendly<br/> infrastructure. The result is an intelligent tool that gives everyone the ability to create<br/>
                amazing products that solve big problems. We are deeply focused on democratizing<br/>
                financial services through technology. </p>
            </div>
            <div className="aboutus-section-two">
            
                <h2 className="about-h2">Our Business</h2>
                <p className="about-p">At the core of our platform is the technical infrastructure APIs that connect consumers. Our<br/> 
                innovative product provides key insights for businesses and individuals, as well as robust<br/>
                reporting for traditional financial institutions and developers.</p>
            </div>
            <img src={team} alt="team" className="team" />
            <div className="bottom-info-section">
                <div className="bottom-info">
                    <img src={line} alt="line" className="line" />
                    <h3 className="bottom-info-h3">Team Members</h3>
                    <p className="bottom-info-p">300</p>
                    <img src={line} alt="line" className="line" />
                </div>
                <div className="bottom-info">
                    <img src={line} alt="line" className="line" />
                    <h3 className="bottom-info-h3">Offices in the US</h3>
                    <p className="bottom-info-p">3</p>
                    <img src={line} alt="line" className="line" />
                </div>
                <div className="bottom-info">
                    <img src={line} alt="line" className="line" />
                    <h3 className="bottom-info-h3">Transactions analyzed</h3>
                    <p className="bottom-info-p">10M+</p>
                    <img src={line} alt="line" className="line" />
                </div>
            </div>
            <div className="ready-price-contact">
            <h3 className="ready-price-page">Ready to start?</h3>
             <Contact/>
        </div>
        <Footer/>

      
        </div>
    )
}

export default About