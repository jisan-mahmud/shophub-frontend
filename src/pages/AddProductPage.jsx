import React, { useState } from 'react'

export default function AddProductPage() {
  const [category, setCategory] = useState('')
  const [newCategory, setNewCategory] = useState('')

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
            Add Product
          </h2>
          <p className="text-on-surface-variant mt-1">
            Create a new product listing for your flagship store.
          </p>
        </div>
      </div>

      <form className="w-full grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-7 space-y-8">
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center">
              <span className="material-symbols-outlined mr-2 text-primary">description</span>
              Product Information
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Product Name</label>
                <input className="w-full h-14 px-4 bg-surface-container-highest border-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-xl transition-all text-on-surface" placeholder="e.g. Handcrafted Leather Satchel" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Price ($)</label>
                  <input className="w-full h-14 px-4 bg-surface-container-highest border-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-xl transition-all text-on-surface" placeholder="0.00" type="number" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Category</label>
                  <div className="relative">
                    <select
                      className="w-full h-14 px-4 bg-surface-container-highest border-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-xl transition-all appearance-none pr-10 text-on-surface"
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option>Leather Goods</option>
                      <option>Accessories</option>
                      <option>Footwear</option>
                      <option value="__new__" className="text-primary font-bold">+ Create New</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                  </div>
                  {category === '__new__' && (
                    <input
                      autoFocus
                      className="w-full h-14 px-4 mt-2 bg-surface-container-highest border-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-xl transition-all text-on-surface"
                      placeholder="Enter new category name"
                      value={newCategory}
                      onChange={e => setNewCategory(e.target.value)}
                    />
                  )}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Description</label>
                <textarea className="w-full px-4 py-3 bg-surface-container-highest border-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-xl transition-all resize-none text-on-surface" placeholder="Describe your artisan product..." rows="6"></textarea>
              </div>
            </div>
          </section>

          {/* Inventory & Variants */}
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center">
              <span className="material-symbols-outlined mr-2 text-primary">inventory</span>
              Inventory &amp; Variants
            </h3>
            <div className="space-y-8">
              <div className="p-6 bg-surface-container-low rounded-xl">
                <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-3">Initial Stock Quantity</label>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <input className="w-full h-12 px-4 bg-surface-container-highest border-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary rounded-lg transition-all text-on-surface" placeholder="0" type="number" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-outline text-xs">units</div>
                  </div>
                  <div className="flex items-center text-outline">
                    <span className="material-symbols-outlined text-xl">info</span>
                    <span className="text-xs ml-1">Stock across all variants</span>
                  </div>
                </div>
              </div>

              {/* Size Variant */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-3 text-outline">straighten</span>
                    <div>
                      <p className="font-semibold text-sm text-on-surface">Size Options</p>
                      <p className="text-xs text-outline">Manage available sizes</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button className="h-12 border border-outline-variant flex items-center justify-center rounded-lg text-sm font-medium text-on-surface hover:border-primary transition-colors" type="button">Small</button>
                  <button className="h-12 border-2 border-primary bg-primary-fixed/20 flex items-center justify-center rounded-lg text-sm font-bold text-primary" type="button">Medium</button>
                  <button className="h-12 border border-outline-variant flex items-center justify-center rounded-lg text-sm font-medium text-on-surface hover:border-primary transition-colors" type="button">Large</button>
                </div>
              </div>

              {/* Color Variant */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined mr-3 text-outline">palette</span>
                    <div>
                      <p className="font-semibold text-sm text-on-surface">Color Options</p>
                      <p className="text-xs text-outline">Select available product colors</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button className="flex items-center p-2 rounded-xl border-2 border-primary bg-primary-fixed/10 group transition-all" type="button">
                    <div className="w-8 h-8 rounded-full bg-[#8B4513] border border-black/10 shadow-inner mr-3"></div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-on-surface leading-tight">Rustic Tan</p>
                      <p className="text-[10px] text-outline uppercase tracking-tighter">Selected</p>
                    </div>
                  </button>
                  <button className="flex items-center p-2 rounded-xl border border-outline-variant hover:border-primary transition-all group" type="button">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-black/10 shadow-inner mr-3"></div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-on-surface leading-tight">Midnight</p>
                      <p className="text-[10px] text-outline uppercase tracking-tighter">Available</p>
                    </div>
                  </button>
                  <button className="flex items-center p-2 rounded-xl border border-outline-variant hover:border-primary transition-all group" type="button">
                    <div className="w-8 h-8 rounded-full bg-[#2F4F4F] border border-black/10 shadow-inner mr-3"></div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-on-surface leading-tight">Olive Drab</p>
                      <p className="text-[10px] text-outline uppercase tracking-tighter">Available</p>
                    </div>
                  </button>
                  <button className="flex items-center p-2 rounded-xl border border-dashed border-outline-variant hover:bg-surface-container-low transition-all justify-center group" type="button">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary">add</span>
                    <span className="text-xs font-bold text-outline ml-1 group-hover:text-primary">Add New</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-5 space-y-8">
          <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center">
              <span className="material-symbols-outlined mr-2 text-primary">image</span>
              Product Gallery
            </h3>
            <div className="space-y-4">
              <div className="aspect-square w-full rounded-2xl bg-surface-container-highest border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center p-6 hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-primary">add_a_photo</span>
                </div>
                <p className="font-bold text-on-surface">Upload Primary Image</p>
                <p className="text-xs text-outline mt-2 px-4 leading-relaxed">Drag and drop or click to browse. Supports high-res JPG, PNG (min. 1200x1200px)</p>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square rounded-xl bg-surface-container-low overflow-hidden relative group border border-outline-variant/30">
                  <img alt="Backpack side view" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB97DqxRGPQesd1Mlc6e6L2oNJu1-WXotxmFw9nJYiYVeJATA6hGx_pi5kwSovqCP9LRGb6s5u04Gd8YWmTIf45SkAcumK170dZpa1yZLobUWykUf-t7KbkYFAeM6BiIwEL2m7y9d5ObPDwNcuDg3f_Kp76FErlJerbzCNOYMLjsBcr1SFcx7Wmh6_kRKp7aybHQOgU13xbLzwEMbKPUt5qnbZ32oRmcxkvEOGhVdhOKYLRau4PU3nHdgzl7m3gZw-DoKaPI6nsiDI" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white">delete</span>
                  </div>
                </div>
                <div className="aspect-square rounded-xl bg-surface-container-low overflow-hidden relative group border border-outline-variant/30">
                  <img alt="Backpack inside view" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDb3X8Ygrd7bqfPRl88hgEOOmjz-W1yjubjRRVDCvVvezlM4ZgkM9QUis12yTSpcu3L2Gr1RBmsW4sPX1h8VneG4lJx3YIWjv0a-mU1J1FYkKVT6h2rWPhKlV_HnkPU0SSIfdoGbYKSb86vxFB-duFbC7ZSeYq7HLZ962Oipl9jrzWg_ty_Bak8DUca9HjK0bc4C6KEUsT5ZpuGdFZn1l83Gnu96vJ4WRdrnJw9wZMP3dqHc_hJutQoiryvlLp7i0SqHJcvAQ2-6k" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white">delete</span>
                  </div>
                </div>
                <button className="aspect-square rounded-xl border-2 border-dashed border-outline-variant flex items-center justify-center hover:bg-surface-container-low transition-colors" type="button">
                  <span className="material-symbols-outlined text-outline">add</span>
                </button>
                <div className="aspect-square rounded-xl bg-surface-container-low/50 flex items-center justify-center">
                  <p className="text-[10px] text-outline text-center uppercase tracking-tighter">Slot 4</p>
                </div>
              </div>
            </div>
          </section>

          {/* Actions Card */}
          <section className="bg-primary text-on-primary p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Ready to Launch?</h3>
              <p className="text-sm opacity-80 mb-8 leading-relaxed">Ensure all details are accurate. Artisan products are reviewed by our quality team before appearing on the flagship store.</p>
              <div className="space-y-4">
                <button className="w-full h-14 bg-surface-container-lowest text-primary font-bold rounded-xl shadow-lg flex items-center justify-center hover:bg-primary-fixed transition-all active:scale-[0.98]" type="button">
                  <span className="material-symbols-outlined mr-2">publish</span>
                  Publish Product
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="h-12 bg-primary-container/50 text-on-primary font-medium rounded-xl flex items-center justify-center hover:bg-primary-container/70 border border-white/10 transition-all" type="button">
                    Save Draft
                  </button>
                  <button className="h-12 bg-transparent text-on-primary font-medium rounded-xl flex items-center justify-center hover:bg-white/10 border border-white/20 transition-all" type="button">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Help */}
          <div className="p-6 bg-surface-container-high rounded-xl border border-outline-variant/20 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface">Design Pro Tip</h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Stock management is crucial for high-demand launches. Set accurate initial quantities to avoid overselling.</p>
            </div>
          </div>
        </div>
      </form>

      {/* Success Toast */}
      <div className="fixed bottom-8 right-8 hidden items-center p-4 bg-primary text-on-primary rounded-xl shadow-2xl" id="success-toast">
        <span className="material-symbols-outlined mr-3">check_circle</span>
        <span className="font-medium">Product saved successfully!</span>
      </div>
    </div>
  )
}
