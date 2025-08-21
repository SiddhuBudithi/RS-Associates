import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage.jsx';
import { ToastContainer } from "react-toastify";
import GalleryPage from './Pages/GalleryPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import ServicesPage from './Pages/ServicesPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/gallery" element={<GalleryPage/>} />
    <Route path="/contact" element={<ContactPage/>} />
    <Route path="/services" element={<ServicesPage/>} />
    <Route path="/about" element={<AboutPage/>} />
    </Routes>
     <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Footer />
    </Router>
  );
}

export default App;