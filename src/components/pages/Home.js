
import Header from "../Header"
import MainTop from "../MainTop"
import MainMid from "../MainMid"
import BottomSection from "../BottomSection"
import BottomSectionTwo from "../BottomSectionTwo"
import BottomSectionThree from "../BottomSectionThree"
import BottomSectionFour from "../BottomSectionFour"
import Footer from "../Footer"
import Price from "./Price"
import ContactForm from "../ContactForm"
import { Routes, Route } from "react-router-dom";
import About from "./About"


function Home() {
    
    return (
        <div className="home-page">
        <Routes>
        <Route path="/" element={[
        <Header/>,
        <MainTop/>,
        <MainMid/>,
        <BottomSection/>, 
        <BottomSectionTwo/>,
        <BottomSectionThree/>,
        <BottomSectionFour/>, 
        <Footer/> ]}/> 
        <Route path="/contactUs" element={<ContactForm/>}/>
       <Route path="/Price" element={<Price/>}/>
        <Route path="/About" element={<About/>}/>
       </Routes>
      
        </div>
    )
}

export default Home