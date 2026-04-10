import React from 'react'

export default function OrderDetailPage() {
  return (
    <div className="bg-surface text-on-surface flex min-h-screen font-sans">
      {/* SideNavBar */}
      <aside className="h-screen w-64 bg-surface-container-low flex flex-col p-4 gap-2 sticky top-0 border-r border-outline-variant/10">
        <div className="mb-8 px-4">
          <h1 className="text-lg font-black text-primary">Flagship Store</h1>
          <p className="text-xs text-on-surface-variant">Premium Merchant</p>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          <div className="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-transform duration-200">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium text-sm">Dashboard</span>
          </div>
          <div className="cursor-pointer flex items-center gap-3 px-4 py-3 bg-surface-container-lowest text-primary rounded-lg shadow-ambient font-medium text-sm">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="font-medium text-sm">Orders</span>
          </div>
          <div className="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-transform duration-200">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-medium text-sm">Inventory</span>
          </div>
          <div className="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-transform duration-200">
            <span className="material-symbols-outlined">group</span>
            <span className="font-medium text-sm">Customers</span>
          </div>
          <div className="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-transform duration-200">
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-medium text-sm">Analytics</span>
          </div>
        </nav>
        <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-outline-variant/10">
          <div className="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-transform duration-200">
            <span className="material-symbols-outlined">help</span>
            <span className="font-medium text-sm">Support</span>
          </div>
          <div className="cursor-pointer flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-transform duration-200">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium text-sm">Logout</span>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-x-hidden">
        {/* TopNavBar */}
        <header className="w-full sticky top-0 z-50 bg-surface flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 focus:ring-1 focus:ring-primary text-sm text-on-surface" placeholder="Search orders..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full active:scale-95 duration-150">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full active:scale-95 duration-150">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden ml-2 ring-2 ring-primary/10">
              <img alt="Merchant Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD06LExmcsMBpIbfoklCv3PK5ebMJvPaXrJcXmINwm0z-x6PWewE-LZ49EedincZzU-9TxGRcBY-lRgBNOKhtthGL0UDCaCne2PZGWnXRnhzicZoKV3tiRQbpQ2z_gQePqxBntiGkYTBH4xbd6vnl4XU6tMiSjCNj-Uh0TZFjtMyTizCcQZXAjO8EfHxYHil2nYz5ohpwmubqq80WjdBm8c2x9tVI2Qizw-Uv011WNDlrcHfZug5_0n7ujxwSiTNEq3lxINYgNe13g" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-8 flex flex-col gap-8 w-full">
          {/* Page Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm cursor-pointer">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span>Back to Orders</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Order #ART-29401</h2>
                <p className="text-on-surface-variant">Placed on 24 October, 2023 at 02:45 PM</p>
              </div>
              <div className="px-4 py-2 bg-primary-fixed text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                Processing
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
              {/* Order Items */}
              <section className="bg-surface-container-lowest rounded-xl p-6">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-primary">shopping_bag</span>
                  Order Items
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container">
                      <img className="w-full h-full object-cover" alt="Hand-thrown Terracotta Vase" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHia2Vz--FAphfk1w11FX4f6VgewySnIB_w5b7iiNwAUI_AIgfsLDPIK5zxftsqMtsE-y-PCHiH3nGlalUFFfv0-3A5vqB6qKatKhH23s3Z7n3JKR9U7rY6Tvs23KK2QWqSrB6I6H729ehHzUzN68-0sqQymvcSQB1pi2AB2aTrfk4D4QXLlCqZmTLuVQRxEMwGT6xOtBtZuWaak6VikLToCMElmVAYOGJGZyTzAUJbc5ED7DJHHCKT5Jv9euWckCYELST5qDTNb8" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-on-surface">Hand-thrown Terracotta Vase</h4>
                      <p className="text-sm text-on-surface-variant">Size: Medium | Color: Burnt Sienna</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-on-surface">৳ 2,450.00</p>
                      <p className="text-xs text-on-surface-variant">Qty: 01</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-surface-container-high">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container">
                      <img className="w-full h-full object-cover" alt="Artisan Pigment Set" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfUXEevBUI8N7OkOyHnxo7DRd-ceo88EHGCOon1PKvJlO2xBthkZKBJFBmHYMG_ydCklWO2ZyTbtZZjAnlQGq2xGd3lC_kPzlNqCLQpsGI0JcGG0md678tOm8nz5B15pfJ6GzHIGAUu4ap6cTY-FhLSDnDDPIvWoBjXOedJ08DxeooYEZ42sp8tHXe4Ttqyl2fv7TC_DKmqmUZQNIU6oAfMGuOj64KEEQNl2jSCIsDUXMqiaRqhRni3XxpFxA0Z0FS8_FDgBA0eos" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-on-surface">Artisan Pigment Set</h4>
                      <p className="text-sm text-on-surface-variant">Edition: Pro Series</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-on-surface">৳ 4,800.00</p>
                      <p className="text-xs text-on-surface-variant">Qty: 02</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Customer & Payment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-surface-container-lowest rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary">person</span>
                    Customer Details
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Name</p>
                      <p className="text-on-surface font-semibold text-lg">Rafiqul Islam</p>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Phone</p>
                      <p className="text-on-surface">+880 1711-223344</p>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Shipping Address</p>
                      <p className="text-on-surface text-sm leading-relaxed">House 42, Road 12, Block C<br />Banani, Dhaka - 1213<br />Bangladesh</p>
                    </div>
                  </div>
                </section>

                <section className="bg-surface-container-lowest rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-primary">payments</span>
                    Payment Details
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Method</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-8 h-8 rounded bg-secondary-container flex items-center justify-center text-[10px] text-on-secondary font-bold">bKash</div>
                        <p className="text-on-surface font-semibold">bKash Mobile Wallet</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Transaction ID</p>
                      <p className="text-on-surface font-mono font-bold">BKSH8291047X</p>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Verification</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-sm font-semibold text-primary">Verified & Confirmed</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
              {/* Update Order */}
              <section className="bg-surface-container-lowest rounded-xl p-6 ring-2 ring-primary/5">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">sync_alt</span>
                  Update Order
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <label className="block text-xs font-bold text-on-surface-variant mb-2 ml-1">Current Status</label>
                    <select defaultValue="Processing" className="w-full h-14 bg-surface-container-highest border-none rounded-xl px-4 font-semibold text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer">
                      <option>Pending Confirmation</option>
                      <option>Processing</option>
                      <option>Ready for Pickup</option>
                      <option>In Transit</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-[42px] pointer-events-none text-on-surface-variant">expand_more</span>
                  </div>
                  <button className="btn-primary w-full">
                    <span className="material-symbols-outlined text-sm">save</span>
                    Save Update
                  </button>
                </div>
              </section>

              {/* Order Summary */}
              <section className="bg-surface-container-low rounded-xl p-6">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-primary">receipt_long</span>
                  Order Summary
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span><span>৳ 12,050.00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Delivery Fee</span><span>৳ 120.00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Vat (5%)</span><span>৳ 608.50</span>
                  </div>
                  <div className="mt-4 pt-4 border-t-2 border-dashed border-surface-container-highest flex justify-between items-center">
                    <span className="text-xl font-bold text-on-surface">Total</span>
                    <span className="text-2xl font-black text-primary">৳ 12,778.50</span>
                  </div>
                </div>
              </section>

              {/* Delivery Information */}
              <section className="bg-surface-container-lowest rounded-xl p-6 border border-surface-container-high">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  Delivery Information
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-surface-container-low rounded-lg flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">speed</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Service Type</p>
                      <p className="font-bold text-on-surface">Standard Home Delivery</p>
                    </div>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-lg flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">calendar_today</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Estimated Delivery</p>
                      <p className="font-bold text-on-surface">27 Oct - 28 Oct, 2023</p>
                    </div>
                  </div>
                  <button className="w-full py-3 text-primary font-bold text-sm border-2 border-primary/20 rounded-xl hover:bg-primary-fixed/30 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">print</span>
                    Print Shipping Label
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
