import React, { useState } from 'react'
import { Search, Filter, ChevronDown } from 'lucide-react'

export default function ProductsPage() {
  return (
    <div>
      <main className="min-h-screen bg-surface">
        {/* Header Actions */}
        <div className="flex justify-between items-end px-6 md:px-10 pt-6 pb-6">
          <div>
            <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
              Products
            </h2>
            <p className="text-on-surface-variant mt-1">
              Real-time performance overview for your flagship store.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-sm">add</span>
            Add Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-6 md:px-10">
          <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-ambient border-none">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Total Products</p>
            <h3 className="text-4xl font-extrabold text-on-surface">1,284</h3>
          </div>
          <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-ambient border-none">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Active Now</p>
            <h3 className="text-4xl font-extrabold text-primary">842</h3>
          </div>
          <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-ambient border-none">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Out of Stock</p>
            <h3 className="text-4xl font-extrabold text-tertiary">12</h3>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8 px-6 md:px-10">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-10 pl-9 pr-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
            <select className="h-10 pl-8 pr-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
              <option value="all">All Categories</option>
              <option value="home-decor">Home Decor</option>
              <option value="accessories">Accessories</option>
              <option value="apparel">Apparel</option>
              <option value="tableware">Tableware</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
          </div>

          {/* Stock Filter */}
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
            <select className="h-10 pl-8 pr-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
              <option value="low-high">Stock: Low to High</option>
              <option value="high-low">Stock: High to Low</option>
              <option value="out">Out of Stock</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
            <select className="h-10 pl-8 pr-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="low-stock">Low Stock</option>
              <option value="inactive">Inactive</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-10 pb-12">
          {[
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeeovbjS9nVNL9WnniXbt4RAzUQ3X0luKtSbKk9vdkCEqHKZojzvbliT6SllHmHHEPnyo05SJ2ZoiMEh2EsSTaEn618P3cXBAUJt2ASSyqfUhQqssFspy3yLD22_2frggNdMCaGeZZmy__rFuAP2eNTnRG_swLbrGLeMFq-M4TzdIDB__CJbE_VsYo71Lc8uMw3ur8I6PnyfbdyCj1yxpbXe5X1SMMLesGnIuQYv4BS-LKHh_F1CrjGywal8teZCbvhQwe3LZP0o8",
              name: "Terra Minimalist Vase", category: "Home Decor", price: "$120.00", stock: "42 in stock", status: "Active", lowStock: false,
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1S-CWYZoqMZe_NAL4xRwmds886Vfdozwocinm3KpeB-GCL_FZKJHVJImSe5UkVwmaWjouodVnozHl90jc77vmJ2FfHBQvUD3tk_B17NEN7lJJiFwRuQSip6SfToq6TMdGSt54UlY1KKWw8mix4uLAbS2knNpEvYxrggKe1GhuRqn88wSoR4DExMdq68hRquZSeFfbXQgRTBZEVuM7hllkhwyqFIdKBu5NmtK1PdbAW6aFbnCoTX4JE8dsx8xE1iJFoi_OP1ZFQrM",
              name: "Heritage Leather Tote", category: "Accessories", price: "$450.00", stock: "8 in stock", status: "Active", lowStock: false,
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkIPa_N3AWf9skpzu7kGIxV_Rr-nRsUke3YuAKg99OReRxcmZ3LJWr_JdGinmJ1lva49DH3xDZxP2IbXLNSyXfLR7rbbOM3F9iZENgseUQOLrmotp64DAUdHsCoFPyyzgiLwNOucMMCoYpUGWzbT6UbwFVOhFqRpGNd8ytBmlkd1vaGlmbCfsLCkbojL1MqcZz6nJziXEnqj8sMgwppGYSF5gd7K7LvoEthYyYwm7tyblCAzF_-6ZAIAjg3pBF3Z6OFPkeETeJJlc",
              name: "Essence Cotton Shirt", category: "Apparel", price: "$85.00", stock: "3 in stock", status: "Low Stock", lowStock: true,
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOiOSevwv5pcN5CYoOgN8RbkOXp7wekeDVAVpMTa_ElnGAb6NW9ZxIbEXYgUOVfQWJb9O1LuW9YpnTzg5WsBx0EO8pDimBlDjBWYE090K3mSuCGOL5VT6ZTXEFdUF14IY2FG5tFXOTpD5b1SM_4hwtFMOxKOS7aIYdDxYKChvZIG1NbvMYukIh5igBX_r9enbrOEK4LDit7Y6fLE7nYjP4QhXQjPslQ9kmALRzoeUI9pjcjGyVhfMh79sIT153rnf-UixVke6lm08",
              name: "Modernist Wood Bowl", category: "Tableware", price: "$65.00", stock: "15 in stock", status: "Active", lowStock: false,
            },
          ].map((product) => (
            <div key={product.name} className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-square">
                <img alt={product.name} className="w-full h-full object-cover" src={product.img} />
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-md ${product.lowStock ? 'bg-tertiary-container text-tertiary' : 'bg-primary text-on-primary'}`}>
                    {product.status}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-9 h-9 bg-surface-container-lowest/90 backdrop-blur shadow-sm rounded-full flex items-center justify-center text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{product.category}</p>
                  <button className="text-neutral-300 hover:text-primary lg:hidden">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
                <h4 className="font-bold text-lg leading-tight mb-3">{product.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <span className={`text-xs font-medium ${product.lowStock ? 'text-tertiary font-bold' : 'text-neutral-400'}`}>· {product.stock}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center z-50">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  )
}
