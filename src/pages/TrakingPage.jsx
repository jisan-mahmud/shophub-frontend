import React from 'react'

export default function TrakingPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-sans">

      {/* Top Navigation Bar */}
      <nav className="h-16 w-full sticky top-0 z-40 bg-surface border-b border-surface-container-high">
        <div className="flex justify-between items-center px-6 max-w-[1280px] mx-auto w-full h-full">
          <div className="flex items-center gap-8">
            <span className="text-xl font-black text-primary">Dokan</span>
            <div className="hidden md:flex gap-6 items-center">
              <a className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors px-3 py-1 rounded" href="#">Shop</a>
              <a className="text-primary font-bold border-b-2 border-primary" href="#">Track Order</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">notifications</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">settings</button>
            <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
              <img alt="Merchant Profile Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx_E_ZL6kydwxmUKrvqq-57qU_qQb-p43sWiJNsfjqJCWUKioimNsVymsG5_5UlQ79MPN81ciwp78TeuvTWovVyDve9UpLifV-WTNHS54sRmyR3fKAgpKzeCakllJ2USAbRSL3A-tBLC_oA5LRtXPTmIMAV6sROcDgKeverwuZf4wEgyqAxiNnc2vv3_yAjX48ViIQVH0SpKTAcUJA63p4tqGQnXcmr1qHOnJ0ZQ3wts7ovEeUDEzjfE89qtJc5O_6Bmwzjf20OZs" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center p-6 bg-surface-container-low">
        <div className="w-full max-w-[600px] space-y-8">

          {/* Tracking Search Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary">Track Your Order</h1>
            <p className="text-on-surface-variant max-w-md mx-auto">Enter your order ID to see real-time updates on your artisan delivery.</p>
          </div>

          {/* Search Card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <input
                  className="w-full h-[60px] px-6 rounded-xl bg-surface-container-highest border-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all font-medium text-lg text-on-surface"
                  placeholder="Order ID (e.g. #DKN-8821)"
                  type="text"
                />
              </div>
              <button className="btn-primary h-[60px] px-8 rounded-xl">
                <span>Track</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Tracking Result Section */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden">
            <div className="p-8 space-y-8">

              {/* Order Header Meta */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block mb-1">Order Details</span>
                  <h2 className="text-2xl font-black text-on-surface">#DKN-8821904</h2>
                  <p className="text-sm text-on-surface-variant">Placed on Oct 24, 2024</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-4 py-1.5 bg-primary-fixed text-on-surface rounded-full text-xs font-bold uppercase tracking-wider">Paid</span>
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    Secure Checkout
                  </span>
                </div>
              </div>

              {/* Horizontal Stepper */}
              <div className="relative pt-10 pb-4">
                <div className="absolute top-[49px] left-0 w-full h-[2px] bg-surface-container-highest"></div>
                <div className="absolute top-[49px] left-0 w-[66%] h-[2px] bg-primary"></div>
                <div className="relative flex justify-between">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                      <span className="material-symbols-outlined text-on-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <span className="text-xs font-bold text-on-surface">Confirmed</span>
                  </div>
                  {/* Step 2 */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                      <span className="material-symbols-outlined text-on-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <span className="text-xs font-bold text-on-surface">Processing</span>
                  </div>
                  {/* Step 3 - Active */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 -mt-1 rounded-full bg-primary-fixed border-4 border-surface-container-lowest flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-xs font-black text-primary">In Transit</span>
                  </div>
                  {/* Step 4 */}
                  <div className="flex flex-col items-center gap-3 opacity-40">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest z-10"></div>
                    <span className="text-xs font-bold text-on-surface-variant">Delivered</span>
                  </div>
                </div>
              </div>

              {/* Delivery Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low rounded-xl p-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Estimated Delivery</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">calendar_today</span>
                    <span className="font-bold text-on-surface">October 28, 2024</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">Before 8:00 PM local time</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Shipping Address</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span className="font-bold text-on-surface">House 24, Road 11, Gulshan-2</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">Dhaka, Bangladesh (Masked: **** ***)</p>
                </div>
              </div>

              {/* Recent Updates */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Latest Activity</h3>
                <div className="flex gap-4">
                  <div className="pt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Arrived at local sorting facility</p>
                    <p className="text-xs text-on-surface-variant">October 26, 2024 • 09:42 AM</p>
                  </div>
                </div>
                <div className="flex gap-4 opacity-60">
                  <div className="pt-1">
                    <div className="w-2 h-2 rounded-full bg-outline"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-on-surface">Departed from artisan warehouse</p>
                    <p className="text-xs text-on-surface-variant">October 25, 2024 • 02:15 PM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Help Link */}
          <div className="text-center">
            <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all" href="#">
              <span className="material-symbols-outlined text-lg">help</span>
              <span>Need help with this order? Contact Support</span>
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 mt-auto border-t border-surface-container-high bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="font-bold text-primary">Dokan Digital Artisan</span>
            <span className="font-sans text-xs text-on-surface-variant">© 2024 Dokan Digital Artisan. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a className="font-sans text-xs text-on-surface-variant hover:text-on-surface hover:underline transition-all" href="#">Privacy Policy</a>
            <a className="font-sans text-xs text-on-surface-variant hover:text-on-surface hover:underline transition-all" href="#">Terms of Service</a>
            <a className="font-sans text-xs text-on-surface-variant hover:text-on-surface hover:underline transition-all" href="#">Merchant Agreement</a>
            <a className="font-sans text-xs text-on-surface-variant hover:text-on-surface hover:underline transition-all" href="#">Contact Support</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
