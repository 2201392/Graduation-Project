import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Footer from "./components/footer/Footer";
import Login from "./pages/SignLog/Login";
import Signup from "./pages/SignLog/Signup";
import DoctorAdditional from "./pages/SignLog/DoctorAdditional";
import PatientAdditional from "./pages/SignLog/PatientAdditional";


function App() {
  return (
    
    <Router>
      <Navbar />   

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />                 
        <Route path="/Signup/Doctor" element={<DoctorAdditional />} /> 
        <Route path="/Signup/Patient" element={<PatientAdditional />} />
      </Routes>

      <Footer />
      </Router> 
      
  );
}

export default App;

