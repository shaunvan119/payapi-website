import Home from "./components/pages/Home";
import Price from "./components/pages/Price";
import About from "./components/pages/About";
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="wrapper">
      <Home/>
      <Routes>
        <Route path="/Price" element={<Price/>}/>
         <Route path="/About" element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
