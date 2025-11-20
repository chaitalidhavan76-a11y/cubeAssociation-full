import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import Header from './Components/Header';
import Aboutus from './pages/Aboutus';
import Footer from './Components/Footer';
import ContactUs from './pages/contactus';
import ApplyLoan from './pages/ApplyLoan';

import AdminLayout from './Admin/adminLayout';

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Check if user is on an admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Show Header only on public pages */}
      {!isAdminRoute && <Header />}

      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ApplyLoan" element={<ApplyLoan />} />

        {/* Admin Area */}
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>

      {/* Show Footer only on public pages */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
