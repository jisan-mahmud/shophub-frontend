import React from 'react'

export default function PaymentPage() {
  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="w-full top-0 sticky z-50 bg-surface">
        <nav className="flex justify-between items-center px-8 h-16 max-w-full mx-auto">
          <div className="text-xl font-black text-primary tracking-tight">
            The Digital Artisan
          </div>
          <div className="hidden md:flex items-center space-x-8 font-sans font-medium text-sm">
            <a className="text-on-surface-variant hover:text-primary cursor-pointer active:opacity-80 transition-opacity" href="#">Dashboard</a>
            <a className="text-primary border-b-2 border-primary pb-1 font-bold cursor-pointer active:opacity-80 transition-opacity" href="#">Orders</a>
            <a className="text-on-surface-variant hover:text-primary cursor-pointer active:opacity-80 transition-opacity" href="#">Inventory</a>
            <a className="text-on-surface-variant hover:text-primary cursor-pointer active:opacity-80 transition-opacity" href="#">Payments</a>
            <a className="text-on-surface-variant hover:text-primary cursor-pointer active:opacity-80 transition-opacity" href="#">Settings</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors duration-200">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors duration-200">
              <span className="material-symbols-outlined text-on-surface-variant">help</span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest border border-outline-variant">
              <img alt="Merchant Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9W20Rma8-Fi1eGwziYubNFXF-l26i6RLzHpajEk8TaNzQoh3So4KMLpWg2SgHTHBEZdj4Cd60SP_m5PXl9e2rVU_x0iysKoZH5XWAs9CQr-uQZX5WnoxddPNAYsCDKIm8V6roRAymuc7YKoXYMU82DpP0fhJEQHUYIWJkVjDAwjj6Kf3JwU_XUDC9R4H0mxEXkRUHBc7haCQUswymaoCqSi3ozB1Qwu5zglVkBqMztrDG-QqJHSXrqopn08OSdDPDM2SK1WaYDI" />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="max-w-[1280px] w-full flex justify-center">
          {/* Payment Verification Card */}
          <div className="w-full max-w-[560px] bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient">
            {/* Section 1: Success Header */}
            <div className="pt-10 pb-6 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-fixed mb-6">
                <span className="material-symbols-outlined text-on-primary-fixed-variant text-4xl" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
              </div>
              <h1 className="text-2xl font-bold text-on-surface mb-2">Order Placed Successfully</h1>
              <div className="flex items-center justify-center space-x-2 bg-surface-container-low py-1.5 px-4 rounded-full w-fit mx-auto">
                <span className="text-on-surface-variant text-sm font-medium">Order ID: #DOK-2024-101</span>
                <button className="text-primary hover:text-primary-container transition-colors">
                  <span className="material-symbols-outlined text-lg">content_copy</span>
                </button>
              </div>
            </div>

            <div className="px-8 pb-10 space-y-8">
              {/* Section 2: Amount Due */}
              <div className="text-center p-6 rounded-xl bg-surface-container-low">
                <p className="text-on-surface-variant text-sm font-medium mb-1">Total Amount Due</p>
                <h2 className="text-primary text-4xl font-black mb-3">৳ 4,522.50</h2>
                <div className="flex items-start justify-center space-x-2 text-on-surface-variant text-xs text-center max-w-xs mx-auto">
                  <span className="material-symbols-outlined text-sm mt-0.5">info</span>
                  <p>Please complete payment within 24 hours to secure your order items and delivery slot.</p>
                </div>
              </div>

              {/* Section 3: Payment Details Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <span className="material-symbols-outlined text-6xl">payments</span>
                </div>
                <div className="flex flex-col space-y-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Merchant bKash Number</label>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xl font-bold text-on-surface">01712-XXXXXX</span>
                      <button className="btn-bkash text-xs font-bold uppercase tracking-tight px-4 py-2 h-auto rounded-lg space-x-2">
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                        <span>Copy Number</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Reference</label>
                      <p className="text-on-surface font-semibold">Order #101</p>
                    </div>
                    <div className="bg-surface-container-highest p-1.5 rounded-lg">
                      <span className="material-symbols-outlined text-3xl text-on-surface">qr_code_2</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Verify Transaction */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-bold text-on-surface" htmlFor="trxid">Enter Transaction ID (TrxID)</label>
                  <a className="text-xs text-primary font-medium hover:underline" href="#">Where to find TrxID?</a>
                </div>
                <div className="relative">
                  <input className="w-full h-14 bg-surface-container-highest border-none rounded-xl px-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all text-on-surface font-mono placeholder:font-sans placeholder:text-outline" id="trxid" placeholder="e.g. 8N7A6D5C4B" type="text" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-bold text-sm uppercase px-2 py-1 hover:bg-primary-fixed rounded transition-colors">
                    Paste
                  </button>
                </div>
              </div>

              {/* Section 5: Actions */}
              <div className="flex flex-col space-y-6 pt-4">
                <button className="btn-primary w-full text-lg font-bold">
                  <span>Confirm Payment</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="flex flex-col items-center space-y-3">
                  <button className="text-on-surface-variant text-sm font-medium hover:text-on-surface transition-colors">I'll do it later</button>
                  <button className="flex items-center space-x-1.5 text-primary text-sm font-bold group">
                    <span className="material-symbols-outlined text-sm">support_agent</span>
                    <span className="group-hover:underline">Contact Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-surface-variant bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 w-full mt-auto">
          <div className="font-bold text-on-surface mb-4 md:mb-0">
            Digital Artisan Merchant
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-sans text-xs uppercase tracking-wider">
            <a className="text-on-surface-variant hover:text-primary hover:underline transition-all opacity-90 hover:opacity-100" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-primary hover:underline transition-all opacity-90 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-primary hover:underline transition-all opacity-90 hover:opacity-100" href="#">Contact Support</a>
            <a className="text-on-surface-variant hover:text-primary hover:underline transition-all opacity-90 hover:opacity-100" href="#">Security</a>
          </div>
          <div className="mt-4 md:mt-0 font-sans text-xs uppercase tracking-wider text-on-surface-variant">
            © 2024 Digital Artisan Merchant Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
