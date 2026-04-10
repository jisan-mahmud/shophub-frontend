import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import CreateShop from './pages/CreateShop';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/create-shop" element={<CreateShop />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
