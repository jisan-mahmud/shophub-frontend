import React from "react";

export default function DashboardPage() {
  return (
    <div>
      {/* Main Content Canvas */}
      <main className="min-h-screen bg-surface transition-all duration-300">
        {/* Header Actions */}
        <div className="flex justify-between items-end px-6 md:px-10">
          <div>
            <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
              Overview
            </h2>
            <p className="text-on-surface-variant mt-1">
              Real-time performance overview for your flagship store.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="pt-8 pb-12 px-6 md:px-10 space-y-8">
          {/* Summary Stats Section - Bento Style */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Sales Card */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border-none shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed/20 rounded-full blur-2xl group-hover:bg-primary-fixed/40 transition-colors"></div>
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-primary-fixed/30 rounded-xl text-primary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: `'FILL' 1` }}
                  >
                    payments
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-primary px-2 py-1 bg-primary-fixed/40 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">
                    trending_up
                  </span>
                  12.5%
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500 mb-1">
                  Total Sales
                </p>
                <h3 className="text-3xl font-extrabold text-primary tracking-tight">
                  ৳ 142,850
                </h3>
              </div>
            </div>
            {/* Active Orders Card */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border-none shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary-container/10 rounded-full blur-2xl group-hover:bg-secondary-container/20 transition-colors"></div>
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-secondary-container/10 rounded-xl text-secondary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: `'FILL' 1` }}
                  >
                    shopping_bag
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-secondary px-2 py-1 bg-secondary-container/10 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">
                    trending_up
                  </span>
                  8.2%
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500 mb-1">
                  Active Orders
                </p>
                <h3 className="text-3xl font-extrabold text-on-surface tracking-tight">
                  34
                </h3>
              </div>
            </div>
            {/* Pending Payments Card */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border-none shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-container/10 rounded-full blur-2xl group-hover:bg-tertiary-container/20 transition-colors"></div>
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-tertiary-container/10 rounded-xl text-tertiary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: `'FILL' 1` }}
                  >
                    pending_actions
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-neutral-500 px-2 py-1 bg-surface-container-high rounded-full">
                  Stable
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500 mb-1">
                  Pending Payments
                </p>
                <h3 className="text-3xl font-extrabold text-on-surface tracking-tight">
                  12
                </h3>
              </div>
            </div>
          </section>
          {/* Layout Grid: Performance Chart & Quick Actions */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shop Performance Chart Placeholder */}
            <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h4 className="text-lg font-bold text-on-surface">
                    Shop Performance
                  </h4>
                  <p className="text-sm text-neutral-500">
                    Sales volume over the last 7 days
                  </p>
                </div>
                <div className="flex bg-surface-container-low p-1 rounded-xl">
                  <button className="px-4 py-1.5 text-xs font-bold bg-surface-container-lowest shadow-sm rounded-lg text-primary">
                    Weekly
                  </button>
                  <button className="px-4 py-1.5 text-xs font-bold text-neutral-500">
                    Monthly
                  </button>
                </div>
              </div>
              <div className="flex-1 flex items-end gap-3 min-h-[220px]">
                {/* Simple visual bar chart representation as per "The Digital Artisan" aesthetic */}
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-surface-container-low rounded-t-xl h-24 relative overflow-hidden group">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/20 h-1/2 group-hover:bg-primary/40 transition-all"></div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Mon
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-surface-container-low rounded-t-xl h-32 relative overflow-hidden group">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/20 h-2/3 group-hover:bg-primary/40 transition-all"></div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Tue
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-surface-container-low rounded-t-xl h-48 relative overflow-hidden group">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/30 h-4/5 group-hover:bg-primary/50 transition-all"></div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">
                      Peak
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest text-primary">
                    Wed
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-surface-container-low rounded-t-xl h-40 relative overflow-hidden group">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/20 h-3/4 group-hover:bg-primary/40 transition-all"></div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Thu
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-surface-container-low rounded-t-xl h-28 relative overflow-hidden group">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/20 h-2/5 group-hover:bg-primary/40 transition-all"></div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Fri
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-surface-container-low rounded-t-xl h-36 relative overflow-hidden group">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/20 h-3/5 group-hover:bg-primary/40 transition-all"></div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Sat
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-surface-container-low rounded-t-xl h-16 relative overflow-hidden group">
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/20 h-1/4 group-hover:bg-primary/40 transition-all"></div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Sun
                  </span>
                </div>
              </div>
            </div>
            {/* Quick Actions Section */}
            <div className="bg-surface-container-low p-8 rounded-3xl flex flex-col gap-6">
              <div>
                <h4 className="text-lg font-bold text-on-surface">
                  Quick Actions
                </h4>
                <p className="text-sm text-neutral-500">
                  Fast access to your tools
                </p>
              </div>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl group hover:shadow-lg transition-all active:scale-[0.98]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <span className="material-symbols-outlined">add_box</span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-on-surface leading-none">
                        Add New Product
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">
                        Upload photos &amp; details
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-neutral-300 group-hover:text-primary transition-colors">
                    chevron_right
                  </span>
                </button>
                <button className="w-full flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl group hover:shadow-lg transition-all active:scale-[0.98]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary-container/10 rounded-xl text-secondary">
                      <span className="material-symbols-outlined">
                        list_alt
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-on-surface leading-none">
                        View All Orders
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">
                        Full history and export
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-neutral-300 group-hover:text-secondary transition-colors">
                    chevron_right
                  </span>
                </button>
                <button className="w-full flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl group hover:shadow-lg transition-all active:scale-[0.98]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-tertiary-container/10 rounded-xl text-tertiary">
                      <span className="material-symbols-outlined">
                        campaign
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-on-surface leading-none">
                        Run Campaign
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">
                        Boost shop visibility
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-neutral-300 group-hover:text-tertiary transition-colors">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </section>
          {/* Recent Orders Table Section */}
          <section className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="p-8 flex justify-between items-center">
              <h4 className="text-lg font-bold text-on-surface">
                Recent Orders
              </h4>
              <button className="text-sm font-bold text-primary hover:underline">
                See detailed list
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-8 py-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      Order ID
                    </th>
                    <th className="px-8 py-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      Customer
                    </th>
                    <th className="px-8 py-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      Amount
                    </th>
                    <th className="px-8 py-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      Status
                    </th>
                    <th className="px-8 py-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-8 py-5 font-mono text-sm text-neutral-500">
                      #ORD-77291
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
                          <img
                            alt="Customer"
                            className="w-full h-full object-cover"
                            data-alt="Close-up of a young woman smiling, soft natural lighting, high-quality portrait"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpIbb_RezA-tOOXuEds_lqICN9JBdFSu_MplxBD0D0LIOVprzqEZfthbzCjGyLpkzaLe9BYYikK5MOhIbUhEbyNdYi0qoIXftzV21skYje3jUKRzuPbO1aqkswojzjGeT3k_ClvjYQTOmk15fU_sV1hqxzayA1q7iEGLBXIVCzOwxgrBJipNqNLSWS3UOKL2P7tjqg7ArmsdQJATDlD5aAv33eVAvlUtRk3Fbcl7Pk0n4CFZNTZ1WZHYlB_52yQYTLdA4fDzldNLU"
                          />
                        </div>
                        <span className="text-sm font-semibold text-on-surface">
                          Farah Ahmed
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-on-surface">
                      ৳ 4,200
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary-fixed text-on-primary-fixed-variant">
                        Shipped
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 hover:bg-surface-container-lowest rounded-lg transition-all group-hover:text-primary">
                        <span className="material-symbols-outlined text-sm">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-8 py-5 font-mono text-sm text-neutral-500">
                      #ORD-77290
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden text-xs flex items-center justify-center font-bold text-neutral-400">
                          RK
                        </div>
                        <span className="text-sm font-semibold text-on-surface">
                          Rahat Karim
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-on-surface">
                      ৳ 12,850
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-secondary-container/10 text-secondary">
                        Processing
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 hover:bg-surface-container-lowest rounded-lg transition-all group-hover:text-primary">
                        <span className="material-symbols-outlined text-sm">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-8 py-5 font-mono text-sm text-neutral-500">
                      #ORD-77289
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
                          <img
                            alt="Customer"
                            className="w-full h-full object-cover"
                            data-alt="Portrait of a young man with glasses, professional aesthetic, studio lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMcXbpXpL5WnwxX76HmbjYnECG5_b0BDL0GxaBSJCMy-9eeeYGERalc5g05pm2N-Cwkx2lXhqV2L6TC1DeVug3t3jvOLE8z0PLyS4WWu9E6Z1DP1mkTCTrub-jlOwS_NLkK8JiW-ohKI-EIJniH9bARcrqOb8Yg02P_T3YX5Emx717R1Ndk9CU50-Lv4ybQwTjzyc4GOBBYzPFaniywTjS_OdlAAE20le8H3tRauzKPjHelG92l4-P3xhArFIJpMwTLGz8L-DD6ZM"
                          />
                        </div>
                        <span className="text-sm font-semibold text-on-surface">
                          Sajid Islam
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-on-surface">
                      ৳ 1,500
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-tertiary-container/10 text-tertiary">
                        Payment Pending
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 hover:bg-surface-container-lowest rounded-lg transition-all group-hover:text-primary">
                        <span className="material-symbols-outlined text-sm">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="px-8 py-5 font-mono text-sm text-neutral-500">
                      #ORD-77288
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
                          <img
                            alt="Customer"
                            className="w-full h-full object-cover"
                            data-alt="Portrait of a woman with a confident expression, natural lighting, bokeh background"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp747vTN6UVP5LGC71WSdoFOgDtN6Li6Tiqsct6dPhW_IpIS8C2irtM0tV3lgPpE6pCMbUMzVI-oVNKu4teWXm2ukXhBSHW7dW8W0SpeNPiSzalYrxFDKDeSB_l7vPWs6V6tBtRJY0OCooPfDRjKhIpTxh-iErCTVhEI6iDplD5bfLF1sGfMhCT_LhKwbCVZhCV4bLpFTJqJBKnYWMNzSSxw43JGil3Ps2fO4_i3mZ12ATTzoLDppOBQx-dgipieq98ajS-3gGU2g"
                          />
                        </div>
                        <span className="text-sm font-semibold text-on-surface">
                          Nabila Tabassum
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-on-surface">
                      ৳ 7,400
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-surface-container-high text-neutral-500">
                        Delivered
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 hover:bg-surface-container-lowest rounded-lg transition-all group-hover:text-primary">
                        <span className="material-symbols-outlined text-sm">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-surface-container-low/30 border-t border-surface-container-low flex justify-center">
              <button className="flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-primary transition-colors">
                View All Activity
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </div>
          </section>
        </div>
        {/* Hidden Mobile Bottom Nav (Managed by Shared Components Logic) */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 h-20 rounded-t-[32px] bg-surface-container-lowest/80 backdrop-blur-[24px] flex justify-around items-center px-4 pb-safe shadow-[0_-8px_24px_rgba(0,77,52,0.06)]">
          <a
            className="flex flex-col items-center justify-center bg-primary-fixed/30 text-primary rounded-[20px] px-5 py-2 active:scale-90 transition-transform"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: `'FILL' 1` }}
            >
              home
            </span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">
              Home
            </span>
          </a>
          <a
            className="flex flex-col items-center justify-center text-neutral-400 hover:opacity-80 active:scale-90 transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">
              Sales
            </span>
          </a>
          <a
            className="flex flex-col items-center justify-center text-neutral-400 hover:opacity-80 active:scale-90 transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined">grid_view</span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">
              Inventory
            </span>
          </a>
          <a
            className="flex flex-col items-center justify-center text-neutral-400 hover:opacity-80 active:scale-90 transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">
              Settings
            </span>
          </a>
        </nav>
      </main>
    </div>
  );
}
