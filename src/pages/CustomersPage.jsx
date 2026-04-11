import React, { useState, useRef, useEffect } from "react";
import {
  Download,
  Filter,
  ChevronDown,
  ArrowUp,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <main className="pb-12 px-4 md:px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-on-surface font-display tracking-tight">
              Customers
            </h2>
            <p className="text-on-surface-variant mt-1">
              Real-time performance overview for your flagship store.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-surface-container-lowest text-on-surface px-6 py-3 rounded-2xl font-semibold border border-outline-variant/30 hover:bg-surface-container transition-colors flex items-center gap-2">
              <Download size={16} />
              Export CSV
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1 min-w-[180px]">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
            />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full h-10 pl-9 pr-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
            {/* Status Filter */}
            <div className="relative col-span-2 sm:col-span-1">
              <Filter
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
              />
              <select className="w-full sm:w-auto h-10 pl-8 pr-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="new">New Customer</option>
                <option value="vip">VIP Member</option>
                <option value="gold">Gold Member</option>
                <option value="silver">Silver Member</option>
                <option value="inactive">Inactive</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
              />
            </div>

            {/* Spend Filter */}
            <div className="relative">
              <select className="w-full sm:w-auto h-10 px-4 pr-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
                <option value="high-low">Spend: High to Low</option>
                <option value="low-high">Spend: Low to High</option>
                <option value="above-50k">Above ₹50,000</option>
                <option value="10k-50k">₹10,000 – ₹50,000</option>
                <option value="below-10k">Below ₹10,000</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
              />
            </div>

            {/* Last Order Filter */}
            <div className="relative">
              <select className="w-full sm:w-auto h-10 px-4 pr-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
                <option value="all-time">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="3months">Last 3 Months</option>
                <option value="inactive">6+ Months Ago</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
              />
            </div>
          </div>

          <div className="text-sm text-on-surface-variant whitespace-nowrap sm:ml-auto">
            Showing <span className="text-on-surface font-semibold">1,240</span> customers
          </div>
        </div>

        {/* Table */}
        <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-ambient">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-4 md:px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      Customer Name
                      <ArrowUp size={13} />
                    </div>
                  </th>
                  <th className="px-4 md:px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant hidden sm:table-cell">
                    Email Address
                  </th>
                  <th className="px-4 md:px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant hidden lg:table-cell">
                    Billing Address
                  </th>
                  <th className="px-4 md:px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Total Spent
                  </th>
                  <th className="px-4 md:px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant hidden md:table-cell">
                    Last Order
                  </th>
                  <th className="px-4 md:px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {[
                  {
                    name: "Aditi Mukherjee",
                    badge: "Gold Member",
                    email: "aditi.m@editorial.in",
                    address: "122 Park Street, 4th Floor, Kolkata, WB 700016",
                    spent: "₹45,290.00",
                    last: "2 hours ago",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj2NtwwGSVAq17Y3psBzmrzIiFahcE1B2iz3dEdWoNxIkrkiWV_LIcKZdjHzasekSlHgz3tCNWaQE9vMG_eXtLiSO6_3bd6Irw6OVn44uQupYQNA8oH2kliOK5fqkLqolpaKDumHwSvVOdHY_ftZLJe5QrW-bpPPuJCx2B7jdu-zi6TclhHzQtOCyJ9XjjHLk4BFIgNvXFEiSTJ42Ug4Os2P7_i-xt44VqueDaFQbr0dxz26vCC932iTyTdBfo3k1mG1KeycItcnY",
                  },
                  {
                    name: "Rahat Bin-Sayed",
                    badge: "New Customer",
                    email: "rahat.bs@gmail.com",
                    address: "Plot 45, Road 12, Banani, Dhaka 1213",
                    spent: "₹12,400.00",
                    last: "Yesterday",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_vVVnXwR_Stbz8fJDcBs_0yfVRBm77CT4QTm-bqBKrlJhZ48p0J1kSUt68g6_qi3Gn558sWdd5wYsBy-BvtmIxpHlnbxUUBW3zaflijKCV7VUbJwAW8-ZtfdnShqvq1WNHfqpWVvvXpQevCLW_ZcOcAZytlja4M3UCPxFwkP87m2nKqxCM9JjHrA6U2Vxkile_vIoQnsCekS4laWvuzGTkc3-TZTIdK_8o0KKqyInXJKaHrMgS7Un-lCrmwe1drUh7QYGt41JPpY",
                  },
                  {
                    name: "Sarah Chowdhury",
                    badge: "VIP Member",
                    email: "sarah@luxury.co",
                    address: "Apt 7B, Skyview Towers, Ballygunge, Kolkata",
                    spent: "₹1,28,500.00",
                    last: "Mar 12, 2024",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqfXS6vxH2ZRTkmIGY3e0nfZ0a53r6K4R1R52NfHIQz7qXK3cn2HK1b7ierIhoxz_LI8XQlfMdZ95ryOPUzDKBX2rAAWop9SEHutPYaXfaNpnm8cuNxF1zvLvbrMYZdJ2_3YN9DwAd7ME0IG55AwlHVp_xYmOv8AzDmd8kXqXU9mVyPEoUGX_9YyzqSHbBZVzWWcRn-ziUWSKqLbEUktc-HTKiCvR5NVGIvyArXwQMYW9J7lu0D-2zQszwHPT_5o2_KfrH-6TdgRY",
                  },
                  {
                    name: "Niloy Karmakar",
                    badge: "Silver Member",
                    email: "niloy.k@design.io",
                    address: "44 Salt Lake, Sector V, Bidhannagar, Kolkata",
                    spent: "₹8,900.00",
                    last: "Mar 10, 2024",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRN69HhsOtwrE2yVPSypN5Pmq071dzO5QYkcwkL2jMNYQnSxP8g5XY6Go1okOU_R7dQxKje1MK6baQLnJCyoM2VBiIRZJH70ZUwfcC0eRNkEoXnDP-R22agXan5igbmE2j3JHGzUDMuwVwGPIUb1yw0Kv3sTS_aNjMtPQwMCAPTMI8shGDa6cdPqgrE7PKKpVr7cwaAZuf0SlHsFNy1rhVlQNfxsiD1r4L_0YUvXyOhoWfKe8cCJIzkvOe3p-YnVpEzfACuYEPzsA",
                  },
                ].map((c) => (
                  <tr
                    key={c.email}
                    className="hover:bg-surface-container-low/50 transition-colors"
                  >
                    <td className="px-4 md:px-6 py-4 md:py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-surface-container flex-shrink-0 overflow-hidden">
                          <img
                            alt={c.name}
                            className="w-full h-full object-cover"
                            src={c.img}
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-on-surface text-sm md:text-base">
                            {c.name}
                          </div>
                          <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">
                            {c.badge}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 md:py-5 text-sm text-on-surface-variant hidden sm:table-cell">
                      {c.email}
                    </td>
                    <td className="px-4 md:px-6 py-4 md:py-5 text-sm text-on-surface-variant max-w-[200px] truncate hidden lg:table-cell">
                      {c.address}
                    </td>
                    <td className="px-4 md:px-6 py-4 md:py-5">
                      <div className="text-sm font-bold text-primary">{c.spent}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4 md:py-5 text-sm text-on-surface-variant hidden md:table-cell">
                      {c.last}
                    </td>
                    <td className="px-4 md:px-6 py-4 md:py-5 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors p-1">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-outline-variant/20">
            <p className="text-xs text-on-surface-variant font-medium">
              Page <span className="text-on-surface">1</span> of 48
            </p>
            <div className="flex gap-2">
              <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant cursor-not-allowed">
                <ChevronLeft size={16} />
              </button>
              <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-on-primary font-semibold">
                1
              </button>
              <button className="h-8 w-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                2
              </button>
              <button className="h-8 w-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                3
              </button>
              <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
