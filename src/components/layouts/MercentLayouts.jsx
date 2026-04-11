import React, { useState } from "react";
import { Outlet, NavLink } from "react-router";
import { Droplets, LayoutDashboard, Store, ShoppingCart, BarChart2, Users, PlusCircle, HelpCircle, LogOut, Bell, Settings, Menu, X } from "lucide-react";

export default function MercentLayouts() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`w-[280px] h-screen fixed left-0 top-0 overflow-y-auto bg-surface-container-low flex flex-col p-4 gap-2 z-50 transition-transform duration-300 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-2 py-6 mb-4">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-primary flex items-center justify-center text-on-primary">
            <Droplets size={20} fill="currentColor" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-display font-bold text-on-surface leading-tight truncate">
              Artisan Flagship
            </h2>
            <p className="text-xs text-outline font-medium">Verified Merchant</p>
          </div>
          {/* Mobile close button */}
          <button
            className="md:hidden ml-auto p-1.5 rounded-lg hover:bg-surface-container-high transition-colors text-outline"
            onClick={() => setMobileOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { icon: <LayoutDashboard size={20} />, label: "Dashboard", to: "/mercent" },
            { icon: <Store size={20} />, label: "Products", to: "/mercent/products" },
            { icon: <ShoppingCart size={20} />, label: "Orders", to: "/mercent/orders" },
            { icon: <BarChart2 size={20} />, label: "Analytics", to: "/mercent/analytics" },
            { icon: <Users size={20} />, label: "Customers", to: "/mercent/customers" },
            { icon: <Settings size={20} />, label: "Settings", to: "/mercent/settings" },
          ].map(({ icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === "/mercent"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 transition-all duration-300 rounded-lg group ${
                  isActive
                    ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
                    : "text-outline hover:bg-surface-container-high"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`shrink-0 ${isActive ? "text-primary" : "group-hover:text-primary"}`}>{icon}</span>
                  <span className="font-sans text-sm font-medium">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 px-2">
          <NavLink to="/mercent/add-product" onClick={() => setMobileOpen(false)} className="btn-primary w-full">
            <PlusCircle size={18} />
            Add New Product
          </NavLink>
        </div>

        <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-3 text-outline hover:bg-surface-container-high rounded-lg transition-all duration-300" href="#">
            <HelpCircle size={20} />
            <span className="font-sans text-sm font-medium">Help</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-outline hover:bg-surface-container-high rounded-lg transition-all duration-300" href="/">
            <LogOut size={20} />
            <span className="font-sans text-sm font-medium">Logout</span>
          </a>
        </div>
      </aside>

      {/* Header */}
      <header className="fixed top-0 right-0 left-0 md:left-[280px] z-30 h-16 bg-surface/80 backdrop-blur-xl flex justify-between md:justify-end items-center px-6 md:px-10 border-none">
        {/* Mobile open button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-surface-container-low transition-colors"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={22} className="text-on-surface" />
        </button>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors relative">
            <Bell size={20} className="text-neutral-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary-container rounded-full ring-2 ring-surface"></span>
          </button>
          <div className="h-8 w-[1px] bg-surface-container-highest mx-2"></div>
          <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr56J6NlAg7kw3vXtly4o_UlfHCs8yAEWLIo4gOM-OiRw9Hzerf8H8lrhhDSr5iSTSU0Pv2OmpGXXG90wZEO1jOaYeOhEdwlFZkFlLPvsnBjE_mjrIaTpXfhEei5xujQ1g_2ejYXYC72qnl_WqtILEVcJ0Hfx6HsRm2dyAL0vGZkxCVBuQg_3b5_Eel-MySunyC58rr7VZr22rQgOk9U4HEcTfkHMWlI0j6CkkfaEdFmi-nUMSKWLmWzaKTOz7CjlpWuFbZxBFNy0"
            />
          </div>
        </div>
      </header>

      <main className="md:ml-[280px] pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 mt-auto border-t border-surface-container-high bg-surface-bright">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary font-display">Dokan</span>
            <span className="text-xs text-outline font-sans">
              © 2024 Dokan Digital Artisan. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Merchant Agreement", "Contact Support"].map((link) => (
              <a
                key={link}
                className="text-xs text-outline hover:text-on-surface transition-all hover:underline"
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
