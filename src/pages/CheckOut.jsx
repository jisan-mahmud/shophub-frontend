import React from 'react'

export default function Checkout() {
  return (
    <div className="text-on-surface font-sans">
      {/* TopNavBar */}
      <header className="h-16 w-full sticky top-0 z-40 bg-surface">
        <nav className="flex justify-between items-center px-6 max-w-[1280px] mx-auto w-full h-full">
          <div className="flex items-center gap-8">
            <span className="text-xl font-black text-primary">Dokan</span>
            <div className="hidden md:flex gap-6">
              <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
              <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Products</a>
              <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Orders</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-on-surface-variant">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden">
              <img alt="Merchant Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo5LCD_0lILMGmibZZaOGdht0_sIvZrEfhVJ4WeJhxVkMui9RCdi2HnYfHb9D3yA52Ow6AY3kkA5TIt81tudvT-d3ZImFYSrxLEofOeacLITe_hsQYEZht-Pc4oes1mlZVsNTEsPTGiuoLaTu9dQ-_MG2kbj5i_i1uqLEhr3Pm8lzXfOgw9ClOXdNsZDp0jcDcNAgWwn2Hkp7be5LdComEatOV8pVWN7jcTa4DllT1o6nvBBPgKsOgF89BboqhhlRSgkRAnRUGZsE" />
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 py-8">
        {/* Info Banner */}
        <section className="mb-10 p-6 rounded-xl bg-primary-fixed border border-primary-fixed-dim flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex-shrink-0 bg-primary-container p-3 rounded-lg">
            <span className="material-symbols-outlined text-on-primary">info</span>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-primary mb-2">Important Order Policy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">local_shipping</span>
                <span>Same-day processing for orders before 2 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">verified_user</span>
                <span>100% Secure Payment Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">replay</span>
                <span>Hassle-free 7-day return policy</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Forms */}
          <div className="lg:col-span-7 space-y-10">
            {/* Contact Info */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-on-surface">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">Email Address</label>
                  <input className="w-full h-[56px] px-4 rounded-xl border-none bg-surface-container-highest focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="artisan@dokan.com" type="email" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">Phone Number</label>
                  <input className="w-full h-[56px] px-4 rounded-xl border-none bg-surface-container-highest focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="+880 1XXX-XXXXXX" type="tel" />
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-on-surface">Shipping Address</h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">Full Name</label>
                  <input className="w-full h-[56px] px-4 rounded-xl border-none bg-surface-container-highest focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Sarah Jenkins" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">Street Address</label>
                  <input className="w-full h-[56px] px-4 rounded-xl border-none bg-surface-container-highest focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Apartment, suite, etc." type="text" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="col-span-2 md:col-span-1 space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">City</label>
                    <input className="w-full h-[56px] px-4 rounded-xl border-none bg-surface-container-highest focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Dhaka" type="text" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">Area</label>
                    <select className="w-full h-[56px] px-4 rounded-xl border-none bg-surface-container-highest focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all">
                      <option>Gulshan</option>
                      <option>Banani</option>
                      <option>Dhanmondi</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">Postal Code</label>
                    <input className="w-full h-[56px] px-4 rounded-xl border-none bg-surface-container-highest focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="1212" type="text" />
                  </div>
                </div>
              </div>
            </section>

            {/* Order Note */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-on-surface">Order Note (Optional)</h2>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">Special Instructions</label>
                <textarea className="w-full min-h-[120px] px-4 py-4 rounded-xl border-none bg-surface-container-highest focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all resize-none" placeholder="Add any special instructions for your order..."></textarea>
              </div>
            </section>

            {/* Delivery Method */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-on-surface">Delivery Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="relative flex p-4 cursor-pointer rounded-xl bg-surface-container-lowest border-2 border-primary transition-all">
                  <input defaultChecked className="hidden" name="delivery" type="radio" />
                  <div className="flex flex-col">
                    <span className="font-bold text-primary">Inside Dhaka</span>
                    <span className="text-sm text-on-surface-variant">2-3 Business Days</span>
                    <span className="mt-2 font-bold">৳ 60.00</span>
                  </div>
                  <span className="material-symbols-outlined absolute top-4 right-4 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </label>
                <label className="relative flex p-4 cursor-pointer rounded-xl bg-surface-container-lowest border-2 border-transparent hover:border-outline-variant transition-all">
                  <input className="hidden" name="delivery" type="radio" />
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">Outside Dhaka</span>
                    <span className="text-sm text-on-surface-variant">3-5 Business Days</span>
                    <span className="mt-2 font-bold">৳ 120.00</span>
                  </div>
                </label>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6 text-on-surface">Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface-container-lowest border-2 border-primary transition-all">
                  <span className="material-symbols-outlined text-primary">payments</span>
                  <span className="text-sm font-bold text-primary">Cash on Delivery</span>
                </button>
                <button className="btn-bkash rounded-xl flex-col gap-1 h-auto py-4">
                  <span className="font-black text-lg">bKash</span>
                  <span className="text-xs font-medium">Digital Wallet</span>
                </button>
                <button className="btn-nagad rounded-xl flex-col gap-1 h-auto py-4">
                  <span className="font-black text-lg">Nagad</span>
                  <span className="text-xs font-medium">Digital Wallet</span>
                </button>
              </div>
              <button className="btn-primary w-full h-[60px] rounded-xl text-lg shadow-lg hover:opacity-90 active:scale-[0.98]">
                Place Order
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-surface-container-high">
              <h3 className="text-xl font-bold mb-6 text-on-surface">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-low flex-shrink-0">
                    <img alt="Artisan Vase" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIxre58dWqsmzuhYavowz_fqGwjWUHAEAAjVgKNnYFjB0_3RelB1TYbZrFGhKCp-cvcwWTeRgw5smKDtvGwJbOymxs1ugdlVurssQzlck4ijH8BcXnXdJwoBbtRhywWtxAGqdFMNhQGNV8nZ42Kl1GZh7MNei8ev8BDtcVUJDyNpym_p1wrSms5Opb17REmWV-6hP9P5DJvWqmlT3Jrg9Eg4g8Lg9XMZxgnkCBXoZ79CGzB5lASdn9vkg0oEwYKLL0X1rC139Mh14" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-bold text-on-surface">Artisan Matte Vase</h4>
                    <p className="text-xs text-on-surface-variant mb-2">Large / Cream White</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Qty: 1</span>
                      <span className="font-bold text-primary">৳ 2,450.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container-low flex-shrink-0">
                    <img alt="Premium Notebook" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT5pIm52xk6jas7yFaAUsIsk11lp3US_FKw25a3v2zEQoIw1GjT4TdFyo7PaNRux_o6pcDydAp2BYA8vqqWKP84RkfJcOMFfqR9sJhO1rf1BQckoHfYP2gOJ8KX2YX2-pv594ZHE67YfAxiiwhKAXTphrjIlEPnl-wiD2tI4Xkas_1gQvxjVx0u8PyQ4qVfAueFxtXtZii9jTZ9UzlZJe66PcgOScON-qfBYqkSDwj83Xpw4TfxiaiLZ0msLAUhLmIk4ZfmewfbWc" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-bold text-on-surface">Hand-bound Journal</h4>
                    <p className="text-xs text-on-surface-variant mb-2">A5 / Leather Brown</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Qty: 2</span>
                      <span className="font-bold text-primary">৳ 1,800.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 pt-6 border-t border-surface-container-high mb-6">
                <div className="flex justify-between text-on-surface-variant text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium text-on-surface">৳ 4,250.00</span>
                </div>
                <div className="flex justify-between text-on-surface-variant text-sm">
                  <span>Shipping</span>
                  <span className="font-medium text-on-surface">৳ 60.00</span>
                </div>
                <div className="flex justify-between text-on-surface-variant text-sm">
                  <span>Tax (VAT 5%)</span>
                  <span className="font-medium text-on-surface">৳ 212.50</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold">Total</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-primary leading-none">৳ 4,522.50</span>
                  <p className="text-[10px] uppercase font-bold text-outline-variant mt-1">Inclusive of all taxes</p>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-8 flex gap-2">
                <input className="flex-1 h-12 px-4 rounded-xl border-none bg-surface-container-low text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Promo code" type="text" />
                <button className="h-12 px-6 rounded-xl bg-surface-container-highest font-bold text-sm text-on-surface hover:bg-surface-container-high transition-all">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 mt-auto border-t border-surface-container-high bg-surface">
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
  )
}
