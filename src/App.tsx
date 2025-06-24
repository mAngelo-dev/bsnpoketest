import Home from "./pages/home/Home.tsx";
import Navbar from "./Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import Favoritos from "./pages/favoritos/Favoritos.tsx";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
      </Routes>
    </>

)
}

export default App
