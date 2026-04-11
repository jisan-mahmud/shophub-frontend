import React, { useState } from "react";
import {
  Download,
  Plus,
  Search,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Trash2,
  ChevronsUpDown,
} from "lucide-react";

const ORDERS = [
  { id: "#ORD-2024-892", date: "Oct 24, 2024", customer: "Anika Sharma", initials: "AS", avatarBg: "bg-primary-fixed", avatarText: "text-on-primary-fixed", items: "3 units", total: "৳12,450.00", status: "Paid", statusClass: "bg-primary/10 text-primary border-primary/20" },
  { id: "#ORD-2024-891", date: "Oct 24, 2024", customer: "Rahat Khan", initials: "RK", avatarBg: "bg-secondary-fixed", avatarText: "text-on-secondary-fixed", items: "1 unit", total: "৳4,200.00", status: "Pending", statusClass: "bg-tertiary-fixed text-tertiary border-tertiary/20" },
  { id: "#ORD-2024-890", date: "Oct 23, 2024", customer: "Maliha Zaman", initials: "MZ", avatarBg: "bg-surface-container-highest", avatarText: "text-on-surface", items: "5 units", total: "৳28,900.00", status: "Paid", statusClass: "bg-primary/10 text-primary border-primary/20" },
  { id: "#ORD-2024-889", date: "Oct 23, 2024", customer: "Tanvir Islam", initials: "TI", avatarBg: "bg-primary-fixed-dim", avatarText: "text-on-primary-fixed", items: "2 units", total: "৳8,600.00", status: "Failed", statusClass: "bg-error-container text-error border-error/20" },
];

export default function OrdersPage() {
  const [selected, setSelected] = useState(new Set());
  const [showConfirm, setShowConfirm] = useState(false);

  const allSelected = selected.size === ORDERS.length;
  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(ORDERS.map(o => o.id)));
  const toggleOne = (id) => setSelected(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  const handleConfirmCancel = () => { setSelected(new Set()); setShowConfirm(false); };

  return (
    <div className="p-8 w-full">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
            Products
          </h2>
          <p className="text-on-surface-variant mt-1">
            Real-time performance overview for your flagship store.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-sm font-semibold text-on-surface hover:bg-surface-container-high transition-all">
            <Download size={15} />
            Export Data
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-opacity">
            <Plus size={15} />
            Create Order
          </button>
        </div>
      </div>
      {/* Page Content */}
      <div>
        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="Search ID or Customer..."
              className="w-full h-10 pl-9 pr-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Date Filter */}
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
            <select className="h-10 pl-8 pr-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
              <option>Last 30 Days</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Quarter</option>
              <option>Custom Range</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
            <select className="h-10 pl-8 pr-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
          </div>

          <button className="h-10 px-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors">
            Reset
          </button>
        </div>

        {/* Bulk Actions Bar */}
        {selected.size > 0 && (
        <div className="bg-primary/5 border border-primary/10 rounded-xl px-6 py-3 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant"
                type="checkbox"
                checked
                onChange={toggleAll}
              />
              <span className="text-sm font-semibold text-primary">
                {selected.size} Order{selected.size > 1 ? 's' : ''} Selected
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setShowConfirm(true)} className="text-sm font-bold text-tertiary flex items-center gap-1.5 px-3 py-1.5 hover:bg-tertiary/10 rounded-lg transition-all">
              <Trash2 size={15} />
              Cancel Orders
            </button>
          </div>
        </div>
        )}

        {/* Cancel Confirmation Modal */}
        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-8 w-full max-w-sm mx-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-error-container mx-auto mb-4">
                <Trash2 size={22} className="text-error" />
              </div>
              <h3 className="text-lg font-bold text-on-surface text-center mb-1">Cancel Orders</h3>
              <p className="text-sm text-on-surface-variant text-center mb-6">
                Are you sure you want to cancel <span className="font-bold text-on-surface">{selected.size} order{selected.size > 1 ? 's' : ''}</span>? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button onClick={() => setShowConfirm(false)} className="flex-1 py-2.5 rounded-xl border border-outline-variant/30 text-sm font-semibold text-on-surface hover:bg-surface-container transition-colors">
                  Keep Orders
                </button>
                <button onClick={handleConfirmCancel} className="flex-1 py-2.5 rounded-xl bg-error text-on-error text-sm font-bold hover:brightness-90 active:brightness-75 active:scale-95 transition-all duration-150">
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Orders Table Container */}
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-surface-container-high">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-surface-container-high">
                <th className="py-4 px-6 w-12">
                  <input
                    className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant"
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                  />
                </th>
                <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider cursor-pointer hover:text-primary transition-colors">
                  Order ID{" "}
                  <ChevronsUpDown size={13} className="inline align-middle" />
                </th>
                <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider cursor-pointer hover:text-primary transition-colors">
                  Date
                </th>
                <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider">
                  Customer
                </th>
                <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider">
                  Items
                </th>
                <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider">
                  Total
                </th>
                <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="py-4 px-4 text-xs font-bold text-outline uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {ORDERS.map((order) => (
              <tr key={order.id} className={`hover:bg-surface-bright transition-colors group ${selected.has(order.id) ? 'bg-primary/5' : ''}`}>
                <td className="py-5 px-6">
                  <input
                    className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant"
                    type="checkbox"
                    checked={selected.has(order.id)}
                    onChange={() => toggleOne(order.id)}
                  />
                </td>
                <td className="py-5 px-4 font-bold text-primary">{order.id}</td>
                <td className="py-5 px-4 text-sm text-on-surface">{order.date}</td>
                <td className="py-5 px-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${order.avatarBg} flex items-center justify-center ${order.avatarText} font-bold text-xs`}>
                      {order.initials}
                    </div>
                    <span className="text-sm font-semibold">{order.customer}</span>
                  </div>
                </td>
                <td className="py-5 px-4 text-sm font-medium">{order.items}</td>
                <td className="py-5 px-4 font-extrabold text-on-surface">{order.total}</td>
                <td className="py-5 px-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight border ${order.statusClass}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-5 px-4 text-right">
                  <button className="p-2 hover:bg-surface-container-high rounded-lg transition-all">
                    <MoreVertical size={18} className="text-outline" />
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Footer */}
          <div className="p-6 bg-surface-container-low flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-outline">Show</span>
              <select
                defaultValue="25"
                className="h-9 px-3 bg-surface-container-lowest border-none rounded-lg text-sm font-semibold focus:ring-1 focus:ring-primary appearance-none min-w-[70px]"
              >
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-sm font-medium text-outline">
                items per page
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-outline-variant/30 text-outline hover:bg-surface-container-high disabled:opacity-30"
                disabled
              >
                <ChevronLeft size={16} />
              </button>
              <button className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold text-sm">
                1
              </button>
              <button className="h-9 w-9 flex items-center justify-center rounded-lg text-on-surface font-medium text-sm hover:bg-surface-container-high">
                2
              </button>
              <button className="h-9 w-9 flex items-center justify-center rounded-lg text-on-surface font-medium text-sm hover:bg-surface-container-high">
                3
              </button>
              <span className="px-2 text-outline">...</span>
              <button className="h-9 w-9 flex items-center justify-center rounded-lg text-on-surface font-medium text-sm hover:bg-surface-container-high">
                12
              </button>
              <button className="h-9 w-9 flex items-center justify-center rounded-lg border border-outline-variant/30 text-outline hover:bg-surface-container-high">
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="text-sm font-medium text-outline">
              Showing 1-25 of 284 orders
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
