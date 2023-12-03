// import Navbar from "./components/Navbar/Navbar";
import { About, Home, Footer, Skills, Contact } from "./components";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
