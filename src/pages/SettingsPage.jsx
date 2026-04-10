import React from 'react'

export default function SettingsPage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-container font-sans">
      {/* Sidebar Navigation */}
      <aside className="h-screen w-72 fixed left-0 top-0 bg-surface-container-low overflow-y-auto flex flex-col gap-2 p-6 z-40 shadow-[12px_0_32px_-4px_rgba(0,77,52,0.04)]">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
            </div>
            <div>
              <h2 className="text-lg font-black text-primary tracking-tight">The Digital Artisan</h2>
              <p className="text-xs text-on-surface-variant font-medium">Flagship Store</p>
            </div>
          </div>
          <button className="btn-primary w-full">
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Listing
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 rounded-xl transition-all duration-300 font-medium text-[0.875rem]" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Overview
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 rounded-xl transition-all duration-300 font-medium text-[0.875rem]" href="#">
            <span className="material-symbols-outlined">receipt_long</span>
            Live Orders
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 rounded-xl transition-all duration-300 font-medium text-[0.875rem]" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            Catalog
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 rounded-xl transition-all duration-300 font-medium text-[0.875rem]" href="#">
            <span className="material-symbols-outlined">storefront</span>
            Shop Profile
          </a>
          <a className="btn-primary w-full justify-start gap-3 px-4 rounded-xl text-[0.875rem]" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>tune</span>
            Settings
          </a>
        </nav>
        <div className="mt-auto pt-6 px-2">
          <div className="p-4 bg-surface-container rounded-2xl flex items-center gap-3">
            <img alt="Merchant Workshop Logo" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEtxck3kqqfJE5Ps8acHegRppqcfkpsWb_kGDVkcxXcVkBd-fVwnQJTcoT6ijmiVilRdKlLNR_HEYVpwFstimRoqlmsKeEwCm-E_K43C63MKdZa7NeFPhLhIWGNFpN0cJEy3I8CIGcGEt0_x-7bW-rtw1U9bYzeNTsTPB4X9r04f8RggMv5Oder8TNX9KL59QUgxJIiHFobK6NnPBIYPD1sspemeZ7KeB8xKQv_XpGx6RRWM5uWpomuoHsU5b0VscclkgkGB8oero" />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate text-on-surface">Rahim Ahmed</p>
              <p className="text-xs text-on-surface-variant">Super Merchant</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 min-h-screen pb-20 bg-surface">
        {/* Top App Bar */}
        <header className="fixed top-0 right-0 left-72 bg-surface-container-low/80 backdrop-blur-xl z-30 h-18 flex justify-between items-center px-12">
          <h1 className="text-xl font-bold tracking-tighter text-primary">Shop Configuration</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors active:scale-95">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors active:scale-95">
                <span className="material-symbols-outlined">chat_bubble</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant"></div>
            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-surface-container rounded-full transition-colors">
              <span className="material-symbols-outlined text-primary">account_circle</span>
              <span className="text-sm font-semibold text-primary">Admin</span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="mt-18 max-w-6xl mx-auto px-12 pt-14 pb-28">
          <div className="flex flex-col gap-16">

            {/* Section 1: Shop Info */}
            <section id="shop-info">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary tracking-tight">Shop Info</h3>
                  <p className="text-on-surface-variant text-sm">Visual identity and public shop profile.</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-container text-[10px] font-bold uppercase tracking-widest">Public</span>
              </div>
              <div className="bg-surface-container-lowest rounded-[32px] p-10 space-y-10">
                <div className="relative group">
                  <div className="w-full h-64 rounded-[24px] bg-surface-container-low overflow-hidden relative">
                    <img alt="Shop Cover" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb0LePYbx0g17qIyinySzWqbcKq5tbhD_LAnmnv1LoeoyKfwuDnCyLJtfHEPS96GQUg9RloncmOzqQ_JOqLqLqeLtzSiwjjuGyaHT6zRK5tNGg8DR-tjhjCtGqT-puhCJUwAVZv82A0bN7IvVBhhXYksiLm8zu8kxVtLKGIeIZ1fzwClOyQDyk-Do-Ju4f0OSTkTdw60AHzbh5I1Dp0LqE_gCbygjfxUaTM9f549ijCsr2FjX7QwCVjp9-hW4lBx7ZAU_aL6QO1Ss" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-surface-container-lowest/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-bold text-primary flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                        Change Cover
                      </button>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 left-8 group/logo">
                    <div className="w-24 h-24 rounded-2xl bg-surface-container-lowest p-1 shadow-lg overflow-hidden relative">
                      <img alt="Shop Logo" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAGQBy0U7xEAcbt4vNM9OH_v5lE2tKdCPjC9EUyKJNTAYpkUhrzipKTajirOJb8L7YgzqmzCjehYDBCoQPT7ehbksTeYilPnqOm9C4_KGjMqKSAVOMFm29Q3AuvCBV11xI4n2lr7jY35YxUXeKZiXNiS27ZeJFjKDT0TMXZtA8TcqrHzyvAyDV5SHGn2g7SHCNQ0rhqfXybqOEAaca2Ak_HrltceQVBoRVZSQyuoc3QJJnvq11hmgPTo8UXlAwnQGta2mO6sWbesM" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/logo:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                        <span className="material-symbols-outlined text-on-primary">edit</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8 grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-[0.875rem] font-bold text-on-surface px-1">Shop Name</label>
                    <input className="w-full px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-sm font-medium" type="text" defaultValue="The Digital Artisan Flagship" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.875rem] font-bold text-on-surface px-1">Description</label>
                    <textarea className="w-full px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-sm font-medium leading-relaxed" rows="4" defaultValue="Curating the finest local crafts and delivering them to your doorstep with love. Every piece tells a story of heritage and precision." />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Business Details */}
            <section id="business-details">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary tracking-tight">Business Details</h3>
                <p className="text-on-surface-variant text-sm">Logistical information for operations.</p>
              </div>
              <div className="bg-surface-container-lowest rounded-[32px] p-10 grid grid-cols-2 gap-10">
                <div className="space-y-2 col-span-2 md:col-span-1">
                  <label className="text-[0.875rem] font-bold text-on-surface px-1">Category</label>
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-sm font-medium">
                      <option>Handicrafts &amp; Decor</option>
                      <option>Fashion &amp; Textiles</option>
                      <option>Organic Foods</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                  </div>
                </div>
                <div className="space-y-2 col-span-2 md:col-span-1">
                  <label className="text-[0.875rem] font-bold text-on-surface px-1">Contact Number</label>
                  <input className="w-full px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-sm font-medium" type="tel" defaultValue="+880 1712 345678" />
                </div>
                <div className="space-y-2 col-span-2">
                  <label className="text-[0.875rem] font-bold text-on-surface px-1">Physical Address</label>
                  <div className="relative">
                    <input className="w-full px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-sm font-medium pl-12" type="text" defaultValue="House 42, Road 12, Dhanmondi, Dhaka" />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">location_on</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2.5: Contact Info */}
            <section id="contact-info">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary tracking-tight">Contact Info</h3>
                <p className="text-on-surface-variant text-sm">Public contact details for your customers.</p>
              </div>
              <div className="bg-surface-container-lowest rounded-[32px] p-10 grid grid-cols-2 gap-10">
                <div className="space-y-2 col-span-2 md:col-span-1">
                  <label className="text-[0.875rem] font-bold text-on-surface px-1">Email Address</label>
                  <input className="w-full px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-sm font-medium" type="email" defaultValue="merchant@example.com" />
                </div>
                <div className="space-y-2 col-span-2 md:col-span-1">
                  <label className="text-[0.875rem] font-bold text-on-surface px-1">Phone Number</label>
                  <input className="w-full px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-sm font-medium" type="tel" defaultValue="+880 1XXX XXXXXX" />
                </div>
              </div>
            </section>

            {/* Section 3: Payment Integration */}
            <section id="payments">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary tracking-tight">Payment Integration</h3>
                  <p className="text-on-surface-variant text-sm">Receive funds directly to your wallets.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* bKash */}
                <div className="bg-surface-container-lowest rounded-[32px] p-8 border-b-4 border-secondary-container">
                  <div className="flex items-center justify-between mb-6">
                    <img alt="bKash Logo" className="h-8 object-contain rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDJly8QEnKAchFsFwr8bd8nTKnS0NMyj_XUKPgs88z4DWFvnNo1OwfCptoBcHWmd5Rnx0qVQhRmscwcrY-5_GgeqyKOhaVd9y31fQxbUOqdojooI9uUrz9qyKwrbBblEjPMEMlflM0HFdu8D5MNAx-F6gPrFO05COLpZFw9_wmyBld1rp0c3_zhCaVk4fa9fv9bV0eHlpFheRgm6nhYwzobXOEwKibu4UPTKHFMDsx6jkDeC7irdOugI8mErOmzsw2K_trL1rCoxo" />
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary-fixed rounded-full">
                      <span className="material-symbols-outlined text-[14px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      <span className="text-[10px] font-bold text-secondary-container uppercase tracking-wider">Verified</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">bKash Personal</label>
                      <div className="flex gap-2">
                        <input className="flex-1 px-4 py-3 rounded-lg border-none bg-surface-container text-sm font-bold text-on-surface" disabled type="text" defaultValue="01712345678" />
                        <button className="p-3 bg-surface-container-high rounded-lg text-primary hover:bg-primary-fixed transition-colors">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nagad */}
                <div className="bg-surface-container-lowest rounded-[32px] p-8 border-b-4 border-tertiary-container">
                  <div className="flex items-center justify-between mb-6">
                    <img alt="Nagad Logo" className="h-8 object-contain rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr5tvdhCaPPREkRBHKVnMOr-CkaUlKOgGXpmQGOmE06T7XLnVb1gfYQEsfxIUSyzRtjnS3kCkB4XCKM1TxTDQEx6iiS3HZOjsG5kgwg_9QF_UGrD6H0m3TvYoGjayoWMNlEqkZZaUqcaCfcX6ChazNTKFuAjAAzxIvAQZ1k-VVnE1QFJS2iArYbUb059aPxHvhsnhoBuDffREM7q8k5MQrhMh-oV618Vtb-FhaKkxjHZt8AABi6s6CRgxi1kSeBiZKoG-VUudBXg8" />
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container rounded-full">
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant">pending</span>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Unlinked</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Nagad Account</label>
                      <button className="w-full h-12 flex items-center justify-center gap-2 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant text-sm font-bold hover:border-tertiary-container hover:text-tertiary-container transition-all">
                        <span className="material-symbols-outlined">add_link</span>
                        Link Number
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Security */}
            <section id="security">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary tracking-tight">Security</h3>
                <p className="text-on-surface-variant text-sm">Manage your access and credentials.</p>
              </div>
              <div className="bg-surface-container-lowest rounded-[32px] p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[0.875rem] font-bold text-on-surface px-1">Login Email</label>
                    <div className="relative">
                      <input className="w-full px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-sm font-medium pr-12" type="email" defaultValue="rahim.artisan@hub.com" />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.875rem] font-bold text-on-surface px-1">Password</label>
                    <div className="relative">
                      <input className="w-full px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-sm font-medium pr-12" type="password" defaultValue="********" />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
                    </div>
                    <div className="flex justify-end">
                      <button className="text-xs font-bold text-primary hover:underline mt-1">Change Password</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Footer */}
            <div className="flex items-center justify-between pt-10 border-t border-outline-variant">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">info</span>
                <span className="text-sm">Last updated 2 days ago</span>
              </div>
              <div className="flex gap-4">
                <button className="px-8 py-3 rounded-xl font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors">Discard</button>
                <button className="btn-primary px-10 py-4 rounded-xl shadow-ambient">Save Changes</button>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 bg-surface-container-lowest/80 backdrop-blur-[24px] z-50 h-20 rounded-t-[32px] shadow-[0_-8px_24px_rgba(0,77,52,0.06)] md:hidden">
        <button className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">home</span>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">Sales</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">Inventory</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-primary-fixed/30 text-primary rounded-[20px] px-5 py-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">Settings</span>
        </button>
      </nav>
    </div>
  )
}
