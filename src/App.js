import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Price from "./components/pages/Price";
import About from "./components/pages/About";



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
