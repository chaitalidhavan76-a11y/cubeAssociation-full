import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './pages/Aboutus';
import Footer from './Components/Footer';
import ContactUs from './pages/contactus';
import ApplyLoan from './pages/ApplyLoan';

function App() {
  return (
    <><BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />}></Route>
        <Route path='/home' exact={true} element={<Home />}></Route>
        <Route path='/aboutus' exact={true} element={<Aboutus />}></Route>
        <Route path='/contactus' exact={true} element={<ContactUs />}></Route>
        <Route path='/ApplyLoan' exact={true} element={<ApplyLoan />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter></>
  );
}

export default App;
