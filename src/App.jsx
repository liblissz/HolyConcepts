import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Shopcategory from './Pages/Shopcategory';
import Product from "./Pages/Product";
import Card from "./Pages/Card";
import LoginSignup from "./Pages/LoginSignup";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/assets/Frontend_Assets/banner_mens.png';
import women_banner from './Components/assets/Frontend_Assets/banner_women.png';
import banner_kids from './Components/assets/Frontend_Assets/banner_kids.png';
import NetworkStatus from "./Components/networkstatus/NetworkStatus";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<Shopcategory banner={banner_kids} category="kid" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/card' element={<Card />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <NetworkStatus />
    </div>
  );
}

export default App;
