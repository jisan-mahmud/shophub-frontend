import React from 'react'

export default function OrdersPage() {
  return (
    <div className="bg-surface font-sans text-on-surface antialiased">
      {/* SideNavBar */}
      <aside className="w-[280px] h-screen fixed left-0 top-0 overflow-y-auto bg-surface-container-low flex flex-col p-4 gap-2 z-50">
        <div className="px-4 py-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary font-black text-xl">D</div>
            <div>
              <h2 className="font-sans font-semibold tracking-tight text-on-surface">Artisan Flagship</h2>
              <p className="text-xs text-outline font-medium">Verified Merchant</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-surface-container-high transition-all duration-300 ease-in-out rounded-lg" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-surface-container-high transition-all duration-300 ease-in-out rounded-lg" href="#">
            <span className="material-symbols-outlined">storefront</span>
            <span>Products</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 bg-surface-container-lowest text-primary font-bold rounded-lg shadow-sm transition-all duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
            <span>Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-surface-container-high transition-all duration-300 ease-in-out rounded-lg" href="#">
            <span className="material-symbols-outlined">bar_chart</span>
            <span>Analytics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-surface-container-high transition-all duration-300 ease-in-out rounded-lg" href="#">
            <span className="material-symbols-outlined">groups</span>
            <span>Customers</span>
          </a>
        </nav>
        <div className="mt-auto pt-4 border-t border-surface-container-highest space-y-1">
          <button className="w-full bg-primary text-on-primary h-12 rounded-xl font-bold flex items-center justify-center gap-2 mb-4 shadow-lg hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined">add</span>
            <span>Add New Product</span>
          </button>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-surface-container-high transition-all duration-300 ease-in-out rounded-lg" href="#">
            <span className="material-symbols-outlined">help</span>
            <span>Help</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-medium hover:bg-surface-container-high transition-all duration-300 ease-in-out rounded-lg" href="#">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main className="ml-[280px] min-h-screen flex flex-col">
        {/* TopAppBar */}
        <header className="h-16 w-full sticky top-0 z-40 bg-surface-bright border-none flex justify-between items-center px-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input className="w-full h-10 pl-10 pr-4 bg-surface-container-highest border-none rounded-lg text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Search orders, customers..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-outline hover:bg-surface-container-high rounded-full transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-outline hover:bg-surface-container-high rounded-full transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-surface-container-highest">
              <img alt="Merchant Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLLHzIWcOoHpfEGeqrFFZ8CuNnq9DHiqoiXrma0Hkn-c-2f_1MPEI1T06pCmArLHcEXOGLDwzSgTE5u97DY8mHdrn4hMfYEcCTYjrUMvzd3DoHeF1PODBpTt9DSItZvNZwF1GPgh6EzPPAHb2FuLnnK5sjTkZd-bKXlO8VaQtQsLHdpjwL_r4QSx4ITeDrd-9hW2UPds0V1pGSpLFsPz2BQcHm0X7jqt1vnn_VEqwOLZtNXIucperePTXat4S0wS2VnLNMDrjwfyc" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8 max-w-[1280px] mx-auto w-full">
          {/* Header Section */}
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black text-primary tracking-tight mb-2">Orders Management</h1>
              <p className="text-outline-variant font-medium">Manage and track your artisan store sales</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-sm font-semibold text-on-surface hover:bg-surface-container-high transition-all">
                <span className="material-symbols-outlined text-sm">file_download</span>
                Export Data
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-sm">add</span>
                Create Order
              </button>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="bg-surface-container-low rounded-2xl p-4 mb-6 flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xs">filter_list</span>
                <input className="w-full h-11 pl-10 pr-4 bg-surface-container-lowest border-none rounded-xl text-sm focus:ring-1 focus:ring-primary" placeholder="Search ID or Customer..." type="text" />
              </div>
            </div>
            <div className="w-48">
              <select className="w-full h-11 px-4 bg-surface-container-lowest border-none rounded-xl text-sm focus:ring-1 focus:ring-primary appearance-none">
                <option>Last 30 Days</option>
                <option>Today</option>
                <option>This Week</option>
                <option>This Quarter</option>
                <option>Custom Range</option>
              </select>
            </div>
            <div className="w-40">
              <select className="w-full h-11 px-4 bg-surface-container-lowest border-none rounded-xl text-sm focus:ring-1 focus:ring-primary appearance-none">
                <option>All Status</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
            <button className="h-11 px-4 bg-surface-container-lowest border-none rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors">
              Reset
            </button>
          </div>

          {/* Bulk Actions Bar */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl px-6 py-3 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant" type="checkbox" />
                <span className="text-sm font-semibold text-primary">3 Orders Selected</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="text-sm font-bold text-primary flex items-center gap-1.5 px-3 py-1.5 hover:bg-primary/10 rounded-lg transition-all">
                <span className="material-symbols-outlined text-sm">print</span>
                Print Labels
              </button>
              <button className="text-sm font-bold text-tertiary flex items-center gap-1.5 px-3 py-1.5 hover:bg-tertiary/10 rounded-lg transition-all">
                <span className="material-symbols-outlined text-sm">delete</span>
                Cancel Orders
              </button>
            </div>
          </div>

          {/* Orders Table Container */}
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-surface-container-high">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-surface-container-high">
                  <th className="py-4 px-6 w-12"><input className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant" type="checkbox" /></th>
                  <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider cursor-pointer hover:text-primary transition-colors">
                    Order ID <span className="material-symbols-outlined text-xs align-middle">unfold_more</span>
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider cursor-pointer hover:text-primary transition-colors">Date</th>
                  <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider">Customer</th>
                  <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider">Items</th>
                  <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider">Total</th>
                  <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider">Payment Status</th>
                  <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                <tr className="hover:bg-surface-bright transition-colors group">
                  <td className="py-5 px-6"><input className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant" type="checkbox" /></td>
                  <td className="py-5 px-4 font-bold text-primary">#ORD-2024-892</td>
                  <td className="py-5 px-4 text-sm text-on-surface">Oct 24, 2024</td>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-xs">AS</div>
                      <span className="text-sm font-semibold">Anika Sharma</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-sm font-medium">3 units</td>
                  <td className="py-5 px-4 font-extrabold text-on-surface">৳12,450.00</td>
                  <td className="py-5 px-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight bg-primary/10 text-primary border border-primary/20">Paid</span>
                  </td>
                  <td className="py-5 px-4 text-right">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg transition-all">
                      <span className="material-symbols-outlined text-outline">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright transition-colors group">
                  <td className="py-5 px-6"><input className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant" type="checkbox" /></td>
                  <td className="py-5 px-4 font-bold text-primary">#ORD-2024-891</td>
                  <td className="py-5 px-4 text-sm text-on-surface">Oct 24, 2024</td>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold text-xs">RK</div>
                      <span className="text-sm font-semibold">Rahat Khan</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-sm font-medium">1 unit</td>
                  <td className="py-5 px-4 font-extrabold text-on-surface">৳4,200.00</td>
                  <td className="py-5 px-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight bg-tertiary-fixed text-tertiary border border-tertiary/20">Pending</span>
                  </td>
                  <td className="py-5 px-4 text-right">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg transition-all">
                      <span className="material-symbols-outlined text-outline">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright transition-colors group">
                  <td className="py-5 px-6"><input className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant" type="checkbox" /></td>
                  <td className="py-5 px-4 font-bold text-primary">#ORD-2024-890</td>
                  <td className="py-5 px-4 text-sm text-on-surface">Oct 23, 2024</td>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface font-bold text-xs">MZ</div>
                      <span className="text-sm font-semibold">Maliha Zaman</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-sm font-medium">5 units</td>
                  <td className="py-5 px-4 font-extrabold text-on-surface">৳28,900.00</td>
                  <td className="py-5 px-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight bg-primary/10 text-primary border border-primary/20">Paid</span>
                  </td>
                  <td className="py-5 px-4 text-right">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg transition-all">
                      <span className="material-symbols-outlined text-outline">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright transition-colors group">
                  <td className="py-5 px-6"><input className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant" type="checkbox" /></td>
                  <td className="py-5 px-4 font-bold text-primary">#ORD-2024-889</td>
                  <td className="py-5 px-4 text-sm text-on-surface">Oct 23, 2024</td>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed-dim flex items-center justify-center text-on-primary-fixed font-bold text-xs">TI</div>
                      <span className="text-sm font-semibold">Tanvir Islam</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-sm font-medium">2 units</td>
                  <td className="py-5 px-4 font-extrabold text-on-surface">৳8,600.00</td>
                  <td className="py-5 px-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight bg-error-container text-error border border-error/20">Failed</span>
                  </td>
                  <td className="py-5 px-4 text-right">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg transition-all">
                      <span className="material-symbols-outlined text-outline">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination Footer */}
            <div className="p-6 bg-surface-container-low flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-outline">Show</span>
                <select defaultValue="25" className="h-9 px-3 bg-surface-container-lowest border-none rounded-lg text-sm font-semibold focus:ring-1 focus:ring-primary appearance-none min-w-[70px]">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <span className="text-sm font-medium text-outline">items per page</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-outline-variant/30 text-outline hover:bg-surface-container-high disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold text-sm">1</button>
                <button className="h-9 w-9 flex items-center justify-center rounded-lg text-on-surface font-medium text-sm hover:bg-surface-container-high">2</button>
                <button className="h-9 w-9 flex items-center justify-center rounded-lg text-on-surface font-medium text-sm hover:bg-surface-container-high">3</button>
                <span className="px-2 text-outline">...</span>
                <button className="h-9 w-9 flex items-center justify-center rounded-lg text-on-surface font-medium text-sm hover:bg-surface-container-high">12</button>
                <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-outline-variant/30 text-outline hover:bg-surface-container-high">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
              <div className="text-sm font-medium text-outline">
                Showing 1-25 of 284 orders
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-12 mt-auto border-t border-surface-container-high bg-surface-bright">
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="font-bold text-primary">Dokan Digital Artisan</span>
              <p className="font-sans text-xs text-outline">© 2024 Dokan Digital Artisan. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a className="font-sans text-xs text-outline hover:text-on-surface transition-all hover:underline" href="#">Privacy Policy</a>
              <a className="font-sans text-xs text-outline hover:text-on-surface transition-all hover:underline" href="#">Terms of Service</a>
              <a className="font-sans text-xs text-outline hover:text-on-surface transition-all hover:underline" href="#">Merchant Agreement</a>
              <a className="font-sans text-xs text-outline hover:text-on-surface transition-all hover:underline" href="#">Contact Support</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
