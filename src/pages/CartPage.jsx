import React from 'react'

export default function CartPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-surface-container-low w-full top-0 sticky z-50">
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tight text-primary">Verdant Ledger</div>
          <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
            <a className="text-on-surface-variant hover:text-primary-container transition-colors duration-200" href="#">Shop</a>
            <a className="text-on-surface-variant hover:text-primary-container transition-colors duration-200" href="#">Collections</a>
            <a className="text-on-surface-variant hover:text-primary-container transition-colors duration-200" href="#">Artisans</a>
            <a className="text-on-surface-variant hover:text-primary-container transition-colors duration-200" href="#">Support</a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">person</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">notifications</span>
            </div>
            <button className="flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-medium text-sm transition-all hover:opacity-90">
              <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
              Cart
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-8 py-12">
        <div className="mb-10">
          <h1 className="text-[3.5rem] font-extrabold text-primary tracking-tight leading-none mb-2">Your Basket</h1>
          <p className="text-on-surface-variant font-medium">Review your items and proceed to individual merchant checkout.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Shop Cards */}
          <div className="lg:col-span-8 space-y-8">
            {/* Merchant Group 1 */}
            <section className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient overflow-hidden border border-outline-variant/10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">store</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-on-surface">The Weaver's Guild</h2>
                    <p className="text-sm text-on-surface-variant">Handcrafted Textiles &amp; Rugs</p>
                  </div>
                </div>
                <span className="bg-surface-variant text-on-primary-fixed-variant px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Verified Merchant</span>
              </div>
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-center gap-6 group">
                  <img className="w-24 h-24 object-cover rounded-lg bg-surface-container-high" alt="Close-up of a hand-woven organic cotton rug with intricate geometric patterns in indigo and cream" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbX9oEa1XVvM5Hap6rddoENsdhtpFxCGLw-NytQa7qzeNgeyfimW9AQdIil2dCX-TblOZvLI5gltr3WNxBbfbPwzE8ofT-hoTwixcuZ4NOp9zpce3S0Z86dMCr9A18ZHYgYSn9-Kl4uLV1RyILwpzNeyfn0U99qCuqHZlZOlcIkKIO2zPOHpB3JwA328HPdffNeGZQu6sEY2zMsFsqpJeqVFuhOwXhRT6Y_iU8B4w1IAtF8IpDxBANBgNu9hVWpjXE_REUlp5T5lo" />
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-on-surface leading-snug">Indigo Hand-Woven Rug</h3>
                    <p className="text-sm text-on-surface-variant mb-3">Material: Organic Cotton | Size: 4x6 ft</p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center bg-surface-container-highest rounded-lg overflow-hidden h-10">
                        <button className="px-3 hover:bg-surface-dim transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                        <span className="px-4 text-sm font-bold">1</span>
                        <button className="px-3 hover:bg-surface-dim transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                      </div>
                      <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 text-sm font-medium">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-primary">$185.00</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-on-surface-variant">Subtotal for this shop</p>
                  <p className="text-2xl font-extrabold text-primary">$185.00</p>
                </div>
                <button className="h-[56px] px-8 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:shadow-lg active:scale-[0.98]">
                  Checkout<span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </section>

            {/* Merchant Group 2 */}
            <section className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient overflow-hidden border border-outline-variant/10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">palette</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-on-surface">Clay &amp; Kiln Studio</h2>
                    <p className="text-sm text-on-surface-variant">Sustainable Ceramic Housewares</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {/* Item 2 */}
                <div className="flex items-center gap-6 group">
                  <img className="w-24 h-24 object-cover rounded-lg bg-surface-container-high" alt="Set of minimalist matte grey ceramic coffee mugs on a rustic wooden table with soft window lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfOm7xJrlBT7BDttYyjRX3b4BCeqH4huTaOzxQGbSrrWKeAjw0XScgX03_MB3wsiwVLJnSkzAvqSmV010xsidmBYFRYGfeRIaQyMCK4uzpWkQW2wV9uxmSdTBaCQhpprtJkudvZK8005QFEpVPvcDXkRwcUQjSNGOAl_LwoGFJhFzCP9kLFKqfyxZ7fODnI3YSW7nRlNFjDKb3sllkipTW1A9F64_9JVq6u3XU9FRBjtfcU-_Brh0HW86IOIHMp6GzUPV--cp2whk" />
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-on-surface leading-snug">Artisan Espresso Mug Set</h3>
                    <p className="text-sm text-on-surface-variant mb-3">Set of 4 | Matte Charcoal Finish</p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center bg-surface-container-highest rounded-lg overflow-hidden h-10">
                        <button className="px-3 hover:bg-surface-dim transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                        <span className="px-4 text-sm font-bold">2</span>
                        <button className="px-3 hover:bg-surface-dim transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                      </div>
                      <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 text-sm font-medium">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-primary">$48.00</span>
                    <p className="text-xs text-on-surface-variant font-medium mt-1">($24.00 each)</p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex items-center gap-6 group pt-6 border-t border-outline-variant/10">
                  <img className="w-24 h-24 object-cover rounded-lg bg-surface-container-high" alt="Handcrafted ceramic vase with organic shape and textured glaze finish sitting in a sunlit corner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVr0XzzSSry49enCjD83lf1Cdik7p8J71wbQefp_kYErZckUMUdxwdjBDNwvml0g9MtlFz214WQadFu82KLOsYlqzHQeC_4QNFJnsWNF-8ZTk1DtUXiyeL5a5voCkj6AwSgwKLYLBsGBhWq5QwdE2sC9HSVY2S1GT7Mi9D-nqqmYZkz45gwAO3KROHb9rxDHvJsWsT09nhQD7ckkJ6iULg8q94lF8Bdb8B6Jz_k9A1UobHibMt5Gl2wvitTZI0JRcCqKQku94iaoI" />
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-on-surface leading-snug">Speckled Clay Vase</h3>
                    <p className="text-sm text-on-surface-variant mb-3">Height: 12" | Natural Finish</p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center bg-surface-container-highest rounded-lg overflow-hidden h-10">
                        <button className="px-3 hover:bg-surface-dim transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                        <span className="px-4 text-sm font-bold">1</span>
                        <button className="px-3 hover:bg-surface-dim transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                      </div>
                      <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 text-sm font-medium">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-primary">$72.00</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-on-surface-variant">Subtotal for this shop</p>
                  <p className="text-2xl font-extrabold text-primary">$120.00</p>
                </div>
                <button className="h-[56px] px-8 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:shadow-lg active:scale-[0.98]">
                  Checkout<span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </section>
          </div>

          {/* Right Column: Summary & Help */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10">
              <h2 className="text-xl font-bold text-on-surface mb-6">Cart Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="text-sm">Total items across all shops</span>
                  <span className="font-bold text-on-surface">4 items</span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="text-sm">Merchants participating</span>
                  <span className="font-bold text-on-surface">2 shops</span>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-end">
                  <div>
                    <span className="text-sm font-medium text-on-surface-variant">Estimated Total</span>
                    <p className="text-sm text-on-surface-variant italic leading-tight mt-1">Checkouts are handled per-merchant.</p>
                  </div>
                  <span className="text-3xl font-extrabold text-primary leading-none">$305.00</span>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 rounded-xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                  Continue Shopping
                </button>
              </div>
            </div>

            <div className="bg-primary-fixed p-6 rounded-xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-on-primary-fixed font-bold text-lg mb-2">Need assistance?</h4>
                <p className="text-on-primary-fixed-variant text-sm mb-4">Our artisan support team is here to help with your multi-shop orders.</p>
                <a className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline" href="#">
                  Visit Help Center
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl text-on-primary-fixed opacity-5 group-hover:scale-110 transition-transform">help</span>
            </div>

            <div className="bg-surface-container-highest/30 p-6 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Why Verdant Ledger?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">eco</span>
                  <span className="text-xs text-on-surface-variant">Sustainable &amp; ethical sourcing for every handcrafted item.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
                  <span className="text-xs text-on-surface-variant">Consolidated tracking for multi-merchant orders.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low mt-auto border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto w-full gap-8">
          <div className="text-lg font-bold text-primary">Verdant Ledger</div>
          <div className="flex flex-wrap justify-center gap-8 font-sans text-xs font-normal">
            <a className="text-on-surface-variant hover:text-primary transition-colors focus:ring-2 focus:ring-primary" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors focus:ring-2 focus:ring-primary" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors focus:ring-2 focus:ring-primary" href="#">Shipping Info</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors focus:ring-2 focus:ring-primary" href="#">Returns</a>
          </div>
          <div className="text-on-surface-variant font-sans text-xs font-normal">
            © 2024 Verdant Ledger. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
