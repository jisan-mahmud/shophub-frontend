import { Outlet, NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, Store, ShoppingBag, Settings as SettingsIcon, ListOrdered } from 'lucide-react';

const MainLayout = () => {
  return (
    <div className="min-h-screen surface-base pb-24">

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
