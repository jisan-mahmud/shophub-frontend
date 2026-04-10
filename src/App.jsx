import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import CreateShop from './pages/CreateShop';
import ShopPage from './pages/ShopPage';
import ShopAbout from './pages/ShopAbout';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import PaymentPage from './pages/PaymentPage';
import TrakingPage from './pages/TrakingPage';
import DashboardPage from './pages/DashboardPage';
import OrdersPage from './pages/OrdersPage';
import OrderDetailPage from './pages/OrderDetailPage';
import AddProductPage from './pages/AddProductPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import ProductsPage from './pages/ProductsPage';

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
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/track-order" element={<TrakingPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/order-detail' element={<OrderDetailPage />} />
          <Route path='/add-product' element={<AddProductPage />} />
          <Route path='/analytics' element={<AnalyticsPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/products' element={<ProductsPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
