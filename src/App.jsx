import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import CreateShop from './pages/CreateShop';
import ShopPage from './pages/ShopPage';
import ShopAbout from './pages/ShopAbout';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/create-shop" element={<CreateShop />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop-about" element={<ShopAbout />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
