import { Link, Outlet } from 'react-router-dom';
import { Menu, X, CircleUser, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="surface-base">
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-outline-variant/20 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <Link to="/" className="text-2xl font-serif font-black text-primary">Dokan</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 font-serif text-base" href="#features">Features</a>
            <a className="text-on-surface-variant hover:text-primary transition-all duration-300 font-serif text-base" href="#pricing">Pricing</a>
            <a className="text-on-surface-variant hover:text-primary transition-all duration-300 font-serif text-base" href="#success">Success Stories</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 hover:bg-surface-container rounded-lg transition-colors">
              <Link to="/cart">
                <ShoppingCart className="w-6 h-6 text-on-surface-variant" />
              </Link>
            </button>
            <button className="hidden md:block p-2 hover:bg-surface-container rounded-lg transition-colors">
              <Link to='/dashboard'>
                <CircleUser className="w-6 h-6 text-on-surface-variant" />
              </Link>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-surface-container rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-on-surface" />
              ) : (
                <Menu className="w-6 h-6 text-on-surface" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-outline-variant/20 bg-surface">
            <div className="flex flex-col gap-4 px-6 py-4">
              <a href="#features" className="text-primary font-bold py-2">Features</a>
              <a href="#pricing" className="text-on-surface-variant hover:text-primary py-2">Pricing</a>
              <a href="#success" className="text-on-surface-variant hover:text-primary py-2">Success Stories</a>
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold mt-2">
                Create Shop
              </button>
            </div>
          </div>
        )}
      </nav>
      <main className='w-full my-18'>
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="w-full py-12 pt-40px border-t border-surface-container-high bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-primary text-lg">Dokan</span>
            <span className="font-sans text-xs text-on-surface-variant">© 2024 Dokan Digital Artisan. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-on-surface transition-all text-xs" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-all text-xs" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-all text-xs" href="#">Merchant Agreement</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-all text-xs" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
