export default function AnalyticsPage() {
  return (
    <div className="bg-surface text-on-surface font-sans">
      <section className="p-4 sm:p-8 space-y-8">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div>
            <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
              Analytics
            </h2>
            <p className="text-on-surface-variant mt-1">
              Real-time performance overview for your flagship store.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex bg-surface-container-highest p-1 rounded-xl">
              <button className="px-4 py-2 text-xs font-bold rounded-lg bg-surface-container-lowest text-primary shadow-sm">
                Today
              </button>
              <button className="px-4 py-2 text-xs font-medium text-outline-variant hover:text-outline transition-colors">
                7 Days
              </button>
              <button className="px-4 py-2 text-xs font-medium text-outline-variant hover:text-outline transition-colors">
                30 Days
              </button>
            </div>
            <button className="h-10 px-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-primary text-sm font-bold flex items-center gap-2 hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-lg">
                picture_as_pdf
              </span>
              Export PDF
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "payments",
              iconColor: "text-primary-container",
              bg: "bg-primary-fixed",
              badge: "+12.5%",
              label: "Total Revenue",
              value: "৳482,900",
              valueColor: "text-primary",
            },
            {
              icon: "shopping_bag",
              iconColor: "text-secondary",
              bg: "bg-secondary-fixed",
              badge: "+8.2%",
              label: "Total Orders",
              value: "1,284",
              valueColor: "text-on-surface",
            },
            {
              icon: "analytics",
              iconColor: "text-tertiary",
              bg: "bg-tertiary-fixed",
              badge: "+3.1%",
              label: "Avg. Order Value",
              value: "৳376",
              valueColor: "text-on-surface",
            },
            {
              icon: "ads_click",
              iconColor: "text-outline",
              bg: "bg-surface-container-highest",
              badge: "-0.4%",
              label: "Conversion Rate",
              value: "4.2%",
              valueColor: "text-on-surface",
            },
          ].map(({ icon, iconColor, bg, badge, label, value, valueColor }) => (
            <div
              key={label}
              className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`material-symbols-outlined ${iconColor} p-2 ${bg} rounded-lg`}
                >
                  {icon}
                </span>
                <span
                  className={`text-[10px] font-bold text-on-surface ${bg} px-2 py-1 rounded-full`}
                >
                  {badge}
                </span>
              </div>
              <p className="text-sm font-medium text-outline">{label}</p>
              <h3 className={`text-3xl font-black ${valueColor} mt-1`}>
                {value}
              </h3>
              <div className="absolute bottom-0 right-0 w-24 h-24 -mr-8 -mb-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[80px]">
                  {icon}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue vs Orders Chart */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="font-bold text-on-surface">Revenue vs Orders</h4>
                <p className="text-xs text-outline">
                  Performance trend over last 30 days
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-xs font-medium text-outline">
                    Revenue
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
                  <span className="text-xs font-medium text-outline">
                    Orders
                  </span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-2">
              {[40, 55, 45, 70, 85, 60, 75, 95, 65, 80, 70, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-surface-container group relative h-full"
                >
                  <div
                    className="absolute bottom-0 w-full bg-primary rounded-t-sm"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div
                    className="absolute bottom-0 w-full bg-secondary-container/30"
                    style={{ height: `${Math.round(h * 0.6)}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-surface-container-lowest p-6 rounded-xl">
            <h4 className="font-bold text-on-surface mb-6">Traffic Sources</h4>
            <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full border-[18px] border-primary"
                style={{
                  clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 40%, 50% 50%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-[18px] border-secondary"
                style={{
                  clipPath:
                    "polygon(50% 50%, 100% 40%, 100% 100%, 70% 100%, 50% 50%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-[18px] border-surface-container-highest"
                style={{
                  clipPath:
                    "polygon(50% 50%, 70% 100%, 0% 100%, 0% 0%, 50% 50%)",
                }}
              ></div>
              <div className="text-center">
                <span className="text-2xl font-black text-on-surface">12k</span>
                <p className="text-[10px] text-outline uppercase font-bold">
                  Total Visits
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {[
                { color: "bg-primary", label: "Direct Search", pct: "45%" },
                { color: "bg-secondary", label: "Social Media", pct: "30%" },
                {
                  color: "bg-surface-container-highest",
                  label: "Referrals",
                  pct: "25%",
                },
              ].map(({ color, label, pct }) => (
                <div
                  key={label}
                  className="flex justify-between items-center text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded ${color}`}></div>
                    <span className="text-outline font-medium">{label}</span>
                  </div>
                  <span className="font-bold text-on-surface">{pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Products */}
          <div className="bg-surface-container-lowest p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-on-surface">Top Products</h4>
              <button className="text-xs font-bold text-primary hover:underline">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs636nsTukVKKQSmWbE3QC82K7K82Az1CyfEf-wZlGPQxKEd05_bY2n5bltCTsONQV7YW1tjSObtvv72Gm110dzJDQD7-AlgWJv3K6dM_ymZaDBf0xBL5M0NZex8R1xendRCfi6NvYnDGxpPdWrvdIxzLtemoG3c_GxL2X4m1GqwRZVESswzrI6pia-ypjSquSafgn7HOsZwfbl9mKyC5WUdL74Ez69ttM9R1r_Bcbfl3nNDayf1pScFvz6dty1ejqIzPYixaLmSg",
                  name: "Artisan Watch",
                  sales: "342 sales",
                  price: "৳12.4k",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV0Gr9sKITzfCE4Ppd0l2kyPWkqweBf0X3u-9_1E2QAqysQNHRzu24dCiXM7l-IxkCcohpKnm4ccLcXjZGOJSPvG8BCc0JO4w3wDfS2guTUMRW-C9BQhJYIGvCYMniMxZYYSEpBl7sul6G-Dr3crCquWAJWD1zH1kEGZkjbh8A9AHUQ00WSAHLoAg70KPUK9L2b-qj2js6tkBCf1YodYyq3IsqQNY2iengpsMn_6Mq-BFVofT5bYO0uLruIZbTjbu88WnqUt-x1Ls",
                  name: "Studio Wireless",
                  sales: "218 sales",
                  price: "৳8.9k",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGSXEmrn29hQebS1iQO6OGJ6TAdfA-82r6mgSV9D66PeZtKuxgns58JwzRhgMfkrPHDN-DS7Dc1967LmYo83VaUk4zwNwK3NhgjgPmU_WRQhrLtzyN7MLLHW28hG987A3ysTH9MkshlWKLiegyym7jmAaC9HjUTRg-g6gcX78nHyqZXrZ4u4V-L8nAj_ZVTgxCubKktHzacJsNSSwIqt3r1On_6_9mrGWpmdLEmbhRy_sA8EYWvJQqrxPrr-LPnMsuBjyTxdqxzHs",
                  name: "Velocity Runner",
                  sales: "194 sales",
                  price: "৳5.2k",
                },
              ].map(({ img, name, sales, price }) => (
                <div key={name} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low overflow-hidden">
                    <img
                      alt={name}
                      className="w-full h-full object-cover"
                      src={img}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-on-surface">{name}</p>
                    <p className="text-xs text-outline">{sales}</p>
                  </div>
                  <span className="text-sm font-black text-primary">
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-on-surface">Recent Orders</h4>
              <div className="flex gap-2">
                <button className="p-2 bg-surface-container-low rounded-lg text-outline">
                  <span className="material-symbols-outlined text-sm">
                    filter_list
                  </span>
                </button>
                <button className="p-2 bg-surface-container-low rounded-lg text-outline">
                  <span className="material-symbols-outlined text-sm">
                    more_horiz
                  </span>
                </button>
              </div>
            </div>
{(() => {
                const orders = [
                  { id: "#DKN-9021", initials: "AS", avatarBg: "bg-primary-fixed", textColor: "text-primary", name: "Adnan Sami", product: "Velocity Runner...", status: "Success", statusBg: "bg-primary-fixed text-on-surface", amount: "৳5,200" },
                  { id: "#DKN-9020", initials: "RM", avatarBg: "bg-secondary-fixed", textColor: "text-secondary", name: "Raisa Mariam", product: "Artisan Watch (S)", status: "Pending", statusBg: "bg-surface-variant text-on-surface-variant", amount: "৳12,400" },
                  { id: "#DKN-9019", initials: "TF", avatarBg: "bg-tertiary-fixed", textColor: "text-tertiary", name: "Tanvir Fahim", product: "Studio Wireless...", status: "Success", statusBg: "bg-primary-fixed text-on-surface", amount: "৳8,900" },
                ];
                return (
                  <>
                    {/* Mobile cards */}
                    <div className="sm:hidden space-y-3">
                      {orders.map(({ id, initials, avatarBg, textColor, name, product, status, statusBg, amount }) => (
                        <div key={id} className="bg-surface-container-low rounded-xl p-4 flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full ${avatarBg} flex items-center justify-center text-xs ${textColor} font-bold shrink-0`}>
                            {initials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-bold text-on-surface truncate">{name}</span>
                              <span className="text-sm font-black text-primary ml-2">{amount}</span>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-xs text-outline truncate">{product}</span>
                              <span className={`ml-2 px-2 py-0.5 text-[10px] font-bold rounded-full shrink-0 ${statusBg}`}>{status}</span>
                            </div>
                            <span className="text-[10px] text-outline-variant">{id}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop table */}
                    <div className="hidden sm:block overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-surface-container-high">
                            {["Order ID", "Customer", "Product", "Status", "Amount"].map((h) => (
                              <th key={h} className="pb-4 font-bold text-xs text-outline uppercase tracking-wider">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container-high">
                          {orders.map(({ id, initials, avatarBg, textColor, name, product, status, statusBg, amount }) => (
                            <tr key={id}>
                              <td className="py-4 font-medium text-sm text-on-surface">{id}</td>
                              <td className="py-4">
                                <div className="flex items-center gap-2">
                                  <div className={`w-6 h-6 rounded-full ${avatarBg} flex items-center justify-center text-[10px] ${textColor} font-bold`}>{initials}</div>
                                  <span className="text-sm text-on-surface">{name}</span>
                                </div>
                              </td>
                              <td className="py-4 text-sm text-outline">{product}</td>
                              <td className="py-4"><span className={`px-2 py-1 text-[10px] font-bold rounded-full ${statusBg}`}>{status}</span></td>
                              <td className="py-4 font-bold text-sm text-primary">{amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                );
              })()}
          </div>
        </div>
      </section>
    </div>
  );
}
