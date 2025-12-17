import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Footer from "./components/footer/Footer";
import Login from "./pages/SignLog/Login";
import Signup from "./pages/SignLog/Signup";

function App() {
  return (
    <Router>
       <Navbar />
       <Routes>
           <Route path="/" element={<Hero />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Signup" element={<Signup />} />
       </Routes>
       <Footer />
    </Router>
  );
}

export default App;


