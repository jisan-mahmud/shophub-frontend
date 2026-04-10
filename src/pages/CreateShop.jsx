import { Bell, ChevronDown, HelpCircle, Store, ShieldCheck, ArrowRight } from 'lucide-react'

export default function CreateShop() {
  return (
    <div className="min-h-screen surface-base">
      {/* TopNavBar */}
      <nav className="w-full sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-surface-container">
        <div className="flex justify-between items-center px-8 py-5 max-w-screen-2xl mx-auto">
          <div className="text-xl font-extrabold tracking-tight text-primary">The Digital Artisan</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium text-on-surface/60 hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-bold text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Sell Online</a>
            <a className="text-sm font-medium text-on-surface/60 hover:text-primary transition-colors" href="#">Marketplace</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-on-surface/60 p-2 rounded-full hover:bg-surface-container hover:text-on-surface transition-all">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button className="text-on-surface/60 p-2 rounded-full hover:bg-surface-container hover:text-on-surface transition-all">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-grow py-16 px-4 md:px-0">
        <div className="max-w-[760px] mx-auto">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-4">Open Your Shop</h1>
            <p className="text-on-surface-variant text-lg max-w-lg mx-auto font-medium opacity-80">Join the premium network of local artisans and scale your business with professional digital tools.</p>
          </div>
          {/* Onboarding Form Card */}
          <div className="bg-surface-container rounded-3xl p-8 md:p-14 premium-shadow border border-surface-container">
            <form className="space-y-16">

<section>
<div className="flex items-center gap-4 mb-8">
  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
    <Store className="w-6 h-6 text-primary" />
  </div>
  <div>
    <h2 className="text-xl font-bold text-on-surface">Shop Information</h2>
    <p className="text-xs text-on-surface-variant font-medium">Tell us about your artisanal business</p>
  </div>
</div>
<div className="grid grid-cols-1 gap-8">
  <div className="space-y-2">
    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Shop Name</label>
    <input className="w-full h-14 px-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high focus:border-primary/30 focus:ring-0 form-input-focus transition-all placeholder:text-outline/50 text-on-surface" placeholder="e.g. Dhaka Artisan Crafts" type="text" />
  </div>
  <div className="space-y-2">
    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Business Category</label>
    <div className="relative">
      <select className="w-full h-14 px-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high focus:border-primary/30 focus:ring-0 form-input-focus transition-all appearance-none text-on-surface">
        <option>Select a category</option>
        <option>Handmade Crafts</option>
        <option>Organic Food</option>
        <option>Fashion &amp; Apparel</option>
        <option>Home Decor</option>
      </select>
      <span className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
        <ChevronDown className="w-5 h-5" />
      </span>
    </div>
  </div>
  <div className="space-y-2">
    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Shop Address/Location</label>
    <textarea className="w-full p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high focus:border-primary/30 focus:ring-0 form-input-focus transition-all placeholder:text-outline/50 text-on-surface" placeholder="Full business address..." rows={4}></textarea>
  </div>
</div>
</section>

<section>
<div className="flex items-center gap-4 mb-8">
  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10">
    <ShieldCheck className="w-6 h-6 text-primary" />
  </div>
  <div>
    <h2 className="text-xl font-bold text-on-surface">Account Security</h2>
    <p className="text-xs text-on-surface-variant font-medium">Protect your merchant account</p>
  </div>
</div>
<div className="grid grid-cols-1 gap-8">
<div className="space-y-2">
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Email Address</label>
<input className="w-full h-14 px-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high focus:border-primary/30 focus:ring-0 form-input-focus transition-all placeholder:text-outline/50 text-on-surface" placeholder="merchant@example.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Password</label>
<input className="w-full h-14 px-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high focus:border-primary/30 focus:ring-0 form-input-focus transition-all placeholder:text-outline/50 text-on-surface" placeholder="••••••••" type="password"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Confirm Password</label>
<input className="w-full h-14 px-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high focus:border-primary/30 focus:ring-0 form-input-focus transition-all placeholder:text-outline/50 text-on-surface" placeholder="••••••••" type="password"/>
</div>
</div>
</div>
</section>

<div className="pt-4">
  <button className="w-full h-16 rounded-2xl bg-primary text-on-primary font-bold text-lg hover:bg-primary-container active:scale-[0.99] transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20" type="submit">
    Create My Shop
    <ArrowRight className="w-5 h-5" />
  </button>
<p className="mt-6 text-center text-[11px] font-medium text-on-surface-variant leading-relaxed">
                            By clicking "Create My Shop", you agree to our 
                            <a className="text-primary font-bold hover:underline" href="#">Merchant Agreement</a> and 
                            <a className="text-primary font-bold hover:underline" href="#">Data Policy</a>.
                        </p>
</div>
</form>
</div>

<div className="mt-12 flex flex-col items-center gap-6">
  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface/30">Secured &amp; Trusted By</p>
  <div className="flex justify-center items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="bKash" className="h-7 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA92HziKfQ8G76MNrmlKvDtzh9TE5QooqqaoBKKE6sHn02Kw1b3zpQxhOQaymGLOGaSiX7Qgx_2XoGChcXnuKrnLYYG89Vy7QG2Wstj-_n67LiFrN7AavrD0osHn0mw7mur3w2PdoJtYHxqv43FysldGcQVnKRJrZ46tmXr1Jk2lS9lzmQLv-luFdEfHIrSTB0QSML4YeRdrrlTc5Ctmt0ZiMGiUMnUoAGUBzmtS_8e4uJi4UqKuy2CIzEPu0t-dv4KkZZfWI8b798"/>
<img alt="Nagad" className="h-7 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0ts6MWQ2IRHFoINBkVuMBkD0LCyrhinyw-S9vFXCjW2RoNIUnWNPgguP3UBXwJMtErnztnogdenctlB33FYdkmdcFRMC0ztXosL-os16ryWLGhl8b2Bty65Vwv-lNAnr1egb47IjccftN-nIpoN2tGoRERFwIQ6cJJSQzVdCe8AkUGsbhuTpCtRs4pOHieZRWS_qT3XACPUAyDkCNysXXaG6ibgmMZ0H-vSlsL867LPiHi2dU4Hq-whljxwYjZNQhPv-nfgp66Ag"/>
<img alt="Visa" className="h-5 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAmg-bmqw_xNm5zfKO6P1EvtdDlzL4zTLgllgpI7pgvLJ5z3yxjxm_UhJXqqWrgELrjcVj29499Y_CV71-m7vFY9hRwpG5vKlW1AvviO2edY323kdx-OM6CfkjnF36nqunSiWb8m0ZlgsIBv4d8KUA8qHVoHX8FtatP3BVv56vQowrGgw-aXn6bJqH439uOg4k8cu09z1bQX7_i37g2KsbYitQh-Nw8cvVC2lCRK8kKqxTyqEW35EA5SPKLZPJRxAh7wg4Ksa3IDY"/>
</div>
</div>
</div>
</main>

<footer className="w-full mt-auto py-12 bg-surface border-t border-surface-container">
  <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
    <div className="text-sm font-medium text-on-surface/50">© 2024 Digital Artisan Merchant Portal. All rights reserved.</div>
<div className="flex gap-8">
<a className="text-sm font-semibold text-on-surface/60 hover:text-primary transition-colors" href="#">Terms</a>
<a className="text-sm font-semibold text-on-surface/60 hover:text-primary transition-colors" href="#">Privacy</a>
<a className="text-sm font-semibold text-on-surface/60 hover:text-primary transition-colors" href="#">Help</a>
<a className="text-sm font-semibold text-on-surface/60 hover:text-primary transition-colors" href="#">Support</a>
</div>
</div>
</footer>
    </div>
  )
}
