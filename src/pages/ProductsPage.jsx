import React from 'react'

export default function ProductsPage() {
  return (
    <>
      <aside className="hidden lg:flex w-64 border-r border-outline-variant flex-col fixed h-full bg-surface-container-lowest z-20 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-on-primary font-bold text-xl">D</div>
            <div>
              <h2 className="text-sm font-bold tracking-tight">Artisan Flagship</h2>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">Verified Merchant</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:bg-surface-container-low rounded-xl transition-all" href="#">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span className="font-medium text-sm">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl shadow-ambient" href="#">
            <span className="material-symbols-outlined text-xl">inventory_2</span>
            <span className="font-medium text-sm">Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:bg-surface-container-low rounded-xl transition-all" href="#">
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="font-medium text-sm">Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:bg-surface-container-low rounded-xl transition-all" href="#">
            <span className="material-symbols-outlined text-xl">insights</span>
            <span className="font-medium text-sm">Analytics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:bg-surface-container-low rounded-xl transition-all" href="#">
            <span className="material-symbols-outlined text-xl">people_outline</span>
            <span className="font-medium text-sm">Customers</span>
          </a>
        </nav>
        <div className="p-4 mt-auto border-t border-outline-variant">
          <button className="btn-primary w-full mb-4">
            <span className="material-symbols-outlined text-sm">add</span>
            <span>Add New Product</span>
          </button>
          <a className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-on-surface text-sm" href="#">
            <span className="material-symbols-outlined text-xl">help_outline</span>
            <span>Help</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-neutral-500 hover:text-on-surface text-sm" href="#">
            <span className="material-symbols-outlined text-xl">logout</span>
            <span>Logout</span>
          </a>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 p-4 lg:p-8 min-h-screen bg-surface">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="relative w-full max-w-lg">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">search</span>
            <input
              className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border-none ring-1 ring-outline-variant rounded-full focus:ring-2 focus:ring-primary text-sm transition-all outline-none font-sans"
              placeholder="Search products, SKUs, or categories..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4 self-end md:self-auto">
            <button className="p-2 text-neutral-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-2 border border-outline-variant p-1 pr-3 rounded-full bg-surface-container-lowest">
              <img alt="User Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2fUDBhARSdwb92S6aLALVrtvb1vhvTZpqJ4Hy9G4579ep4czwF7xzV5aRZse-eBncjI4j29Z49Mq6kwmeYn8WTkw8Q0EdEshzg8fi-PvJVvxaXk_2EabBmZ5yvwDxQ2Xh2PExkh5l8H9vvUtbOuLUoy520I2tG1ADCgQjnLZl5z71B9SKXn6cDkbrvoaHXo7GkA5JO9DM9oNfird2Pu1JgViJjMmcYNY5gZpH2hbMr_fRHsIuvTCVqyl9JqtzClvjqVLIF2eYEyM" />
              <span className="text-xs font-semibold font-sans">Jane Cooper</span>
            </div>
            <button
              className="p-2 rounded-full border border-outline-variant text-neutral-500"
              onClick={() => document.documentElement.classList.toggle('dark')}
            >
              <span className="material-symbols-outlined block dark:hidden">dark_mode</span>
              <span className="material-symbols-outlined hidden dark:block">light_mode</span>
            </button>
          </div>
        </header>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Product Catalog</h1>
          <p className="text-neutral-500">Manage your boutique's inventory and visual storytelling.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-ambient border-none">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Total Products</p>
            <h3 className="text-4xl font-extrabold text-on-surface">1,284</h3>
          </div>
          <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-ambient border-none">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Active Now</p>
            <h3 className="text-4xl font-extrabold text-primary">842</h3>
          </div>
          <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-ambient border-none">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Out of Stock</p>
            <h3 className="text-4xl font-extrabold text-tertiary">12</h3>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full text-xs font-semibold whitespace-nowrap">
            <span className="material-symbols-outlined text-sm">filter_list</span> Category: All
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full text-xs font-semibold whitespace-nowrap">
            Stock: Low to High
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full text-xs font-semibold whitespace-nowrap">
            Status: Active
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeeovbjS9nVNL9WnniXbt4RAzUQ3X0luKtSbKk9vdkCEqHKZojzvbliT6SllHmHHEPnyo05SJ2ZoiMEh2EsSTaEn618P3cXBAUJt2ASSyqfUhQqssFspy3yLD22_2frggNdMCaGeZZmy__rFuAP2eNTnRG_swLbrGLeMFq-M4TzdIDB__CJbE_VsYo71Lc8uMw3ur8I6PnyfbdyCj1yxpbXe5X1SMMLesGnIuQYv4BS-LKHh_F1CrjGywal8teZCbvhQwe3LZP0o8",
              name: "Terra Minimalist Vase", category: "Home Decor", price: "$120.00", stock: "42 in stock", status: "Active", lowStock: false,
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1S-CWYZoqMZe_NAL4xRwmds886Vfdozwocinm3KpeB-GCL_FZKJHVJImSe5UkVwmaWjouodVnozHl90jc77vmJ2FfHBQvUD3tk_B17NEN7lJJiFwRuQSip6SfToq6TMdGSt54UlY1KKWw8mix4uLAbS2knNpEvYxrggKe1GhuRqn88wSoR4DExMdq68hRquZSeFfbXQgRTBZEVuM7hllkhwyqFIdKBu5NmtK1PdbAW6aFbnCoTX4JE8dsx8xE1iJFoi_OP1ZFQrM",
              name: "Heritage Leather Tote", category: "Accessories", price: "$450.00", stock: "8 in stock", status: "Active", lowStock: false,
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkIPa_N3AWf9skpzu7kGIxV_Rr-nRsUke3YuAKg99OReRxcmZ3LJWr_JdGinmJ1lva49DH3xDZxP2IbXLNSyXfLR7rbbOM3F9iZENgseUQOLrmotp64DAUdHsCoFPyyzgiLwNOucMMCoYpUGWzbT6UbwFVOhFqRpGNd8ytBmlkd1vaGlmbCfsLCkbojL1MqcZz6nJziXEnqj8sMgwppGYSF5gd7K7LvoEthYyYwm7tyblCAzF_-6ZAIAjg3pBF3Z6OFPkeETeJJlc",
              name: "Essence Cotton Shirt", category: "Apparel", price: "$85.00", stock: "3 in stock", status: "Low Stock", lowStock: true,
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOiOSevwv5pcN5CYoOgN8RbkOXp7wekeDVAVpMTa_ElnGAb6NW9ZxIbEXYgUOVfQWJb9O1LuW9YpnTzg5WsBx0EO8pDimBlDjBWYE090K3mSuCGOL5VT6ZTXEFdUF14IY2FG5tFXOTpD5b1SM_4hwtFMOxKOS7aIYdDxYKChvZIG1NbvMYukIh5igBX_r9enbrOEK4LDit7Y6fLE7nYjP4QhXQjPslQ9kmALRzoeUI9pjcjGyVhfMh79sIT153rnf-UixVke6lm08",
              name: "Modernist Wood Bowl", category: "Tableware", price: "$65.00", stock: "15 in stock", status: "Active", lowStock: false,
            },
          ].map((product) => (
            <div key={product.name} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-square">
                <img alt={product.name} className="w-full h-full object-cover" src={product.img} />
                <div className="absolute top-4 left-4">
                  <span className={`text-on-primary text-[10px] font-bold uppercase px-2 py-1 rounded-md ${product.lowStock ? 'bg-tertiary-container' : 'bg-primary'}`}>
                    {product.status}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-9 h-9 bg-surface-container-lowest/90 backdrop-blur shadow-sm rounded-full flex items-center justify-center text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{product.category}</p>
                  <button className="text-neutral-300 hover:text-primary lg:hidden">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
                <h4 className="font-bold text-lg leading-tight mb-3">{product.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <span className={`text-xs font-medium ${product.lowStock ? 'text-tertiary font-bold' : 'text-neutral-400'}`}>· {product.stock}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center z-50">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </>
  )
}
