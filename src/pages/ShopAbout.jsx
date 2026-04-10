import React from 'react'

export default function ShopAbout() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans">
      <header className="h-16 w-full sticky top-0 z-40 bg-surface dark:bg-gray-950 transition-all duration-150 ease-in-out shadow-sm">
        <div className="flex justify-between items-center px-6 max-w-[1280px] mx-auto w-full h-full">
          <div className="flex items-center gap-8">
            <span className="text-xl font-black text-primary tracking-tight">Dokan</span>
            <div className="hidden md:flex gap-6">
              <a className="text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-gray-800 p-1 px-2 rounded-lg transition-colors" href="#">Explore</a>
              <a className="text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-gray-800 p-1 px-2 rounded-lg transition-colors" href="#">Stores</a>
              <a className="text-on-surface-variant font-medium hover:bg-surface-container-high dark:hover:bg-gray-800 p-1 px-2 rounded-lg transition-colors" href="#">Trending</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex items-center bg-surface-container rounded-full px-4 py-2 w-64">
              <span className="material-symbols-outlined text-outline mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full" placeholder="Search products..." type="text" />
            </div>

            <button className="p-2 rounded-full hover:bg-surface-container-high dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-outline dark:text-gray-400">notifications</span>
            </button>

            <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
              <img
                alt="Merchant Profile Avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXMlv2sNT0Boe2l5e5pNrcwcngwy59ZdTwMxYKTMIi4ARZ_AA4PyLdVLnbcagYjBrPWQEkomrlSYiion_qgfhIz4NhoTTgHWcNxgYORlG5l3b4okxwswyNhSoZ1t4xDyURGz2WYS_ecbDa9DV30sFv_TSwQT50hYv4jh7AzNXMQyvA1Kd3bUOqKoMCg_ljrwjqmozv3MtU-lVnY0eNosfqHA9jWjk5-SRdcEyfVzYL9G7vVE4OxsI2kiYaqaMjZ3cZgqIvG3_PFLs"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto pb-20">
        <section className="relative">
          <div className="h-[320px] w-full overflow-hidden rounded-b-3xl">
            <img
              alt="Shop Cover"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCbEmOKkvOgUWB7FGkYWnjkMtK33N4IeObB09DJXqyKFlcTjxLuSBQZHN_ynP4uFA0t0FRywnZj1AR1ZEOFa9iHjtjuRfw0_BGRofQ3UWBBNbN07uHTyw21RAxgoxORF1jecLkOXn2Eab6DKGH0ZY5wsQ7GT_toDcxpdc7TD_0vYrbJmKTn-1UW19IwcYII29-GaoC4T_lidhGT9AvKm0H7E4OnxKS0m-6XJmmGsXA16SoAeZDjD-5lWIZVjLSMtNb6y5qWLwZb4s"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="px-8 -mt-20 relative z-10">
            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col md:flex-row justify-between items-end gap-6 border-none shadow-[0_12px_32px_-4px_rgba(0,77,52,0.08)]">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 w-full md:w-auto">
                <div className="w-32 h-32 rounded-2xl bg-white p-2 shadow-lg -mt-16 ring-4 ring-surface-container-lowest">
                  <img
                    alt="Shop Logo"
                    className="w-full h-full object-cover rounded-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD91K1BaQOvVGytBXrgLpEQezcz1GfHWgf3qpBtXtJm-tS35L8PoQDhkc_Qkd3aU1fou9mG-2l4WF0JxydS37i2XxU7L5zj_npYdsxkjy42l4_hgiqc8JHoDNb7V23TSwVQdP4rlaZxPDhBQldJ1ENF0T7oA9kZX_677Xe3Rjpw34fnQzJeKN8UEUB47y6axRfCpHfZc4V9-mqt7quSbixSdqbsoO75fLtn5y4ZqsvcKwx8P9H8Ig0I-Z7ITQKLHgG-hy8Q4eBTKTY"
                  />
                </div>

                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">Artisan Flagship</h1>
                    <span className="material-symbols-outlined text-primary-container text-2xl" data-icon="verified" style={{ fontVariationSettings: '"FILL" 1' }}>
                      verified
                    </span>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4 text-sm font-medium text-on-surface-variant">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-amber-500 text-lg" data-icon="star" style={{ fontVariationSettings: '"FILL" 1' }}>
                        star
                      </span>
                      <span className="text-on-surface font-bold">4.9</span>
                      <span className="text-outline-variant">(2.4k Reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">location_on</span>
                      <span>Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-6 h-14 rounded-xl border border-outline-variant text-primary font-bold hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">chat</span>
                  Message
                </button>
                <button className="flex-1 md:flex-none px-8 h-14 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">person_add</span>
                  Follow Shop
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 px-8">
          <nav className="flex gap-8 border-none pb-4 overflow-x-auto">
            <a className="whitespace-nowrap pb-2 border-b-4 border-transparent text-outline hover:text-on-surface font-medium text-lg transition-colors" href="#">All Products</a>
            <a className="whitespace-nowrap pb-2 border-b-4 border-primary text-primary font-bold text-lg" href="#">About Shop</a>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 mt-10">
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="bg-surface-container-low p-6 rounded-2xl sticky top-24">
                <h2 className="text-xl font-bold mb-6">Shop Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-outline mb-1 block">Location</label>
                    <p className="text-on-surface font-medium">Dhaka, Bangladesh</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-outline mb-1 block">Member Since</label>
                    <p className="text-on-surface font-medium">October 2021</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-outline mb-1 block">Merchant Status</label>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed text-[10px] font-black uppercase tracking-widest rounded-full">Top Rated</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 h-12 rounded-xl bg-primary text-on-primary font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-all">
                    <span className="material-symbols-outlined">mail</span>
                    Contact Artisan
                  </button>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="space-y-12">
                {/* Shop Story */}
                <section>
                  <h2 className="text-2xl font-black text-on-surface mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">auto_stories</span>
                    </span>
                    Our Story &amp; Mission
                  </h2>
                  <div className="prose prose-emerald max-w-none text-on-surface-variant leading-relaxed space-y-4">
                    <p>Welcome to Artisan Flagship, a haven for those who appreciate the soul behind the object. Founded on the bustling streets of Dhaka, our shop was born from a desire to bridge the gap between traditional craftsmanship and the modern home.</p>
                    <p>Every item in our collection is hand-selected and often hand-crafted by master artisans who have spent decades honing their craft. From the precise weave of our textiles to the rustic glaze of our pottery, we celebrate the "perfect imperfections" that only human hands can create.</p>
                    <p>Our mission is simple: to sustain local artisan communities while providing you with high-quality, ethically made goods that tell a story. When you purchase from us, you aren't just buying a product; you're supporting a legacy of skill and heritage.</p>
                  </div>
                </section>

                {/* Shop Policies */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
                  <div>
                    <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">local_shipping</span>
                      Shipping Information
                    </h3>
                    <ul className="space-y-3 text-sm text-on-surface-variant">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Standard delivery within 3-5 business days.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>International shipping available (10-15 business days).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Secure eco-friendly packaging for all fragile items.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">assignment_return</span>
                      Returns &amp; Exchanges
                    </h3>
                    <ul className="space-y-3 text-sm text-on-surface-variant">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>14-day return policy for unused items.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Exchanges offered for items damaged during transit.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Contact us directly for custom order inquiries.</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-12 mt-auto border-t border-surface-container-high bg-surface dark:border-gray-800 dark:bg-gray-950">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-primary text-xl">Dokan Digital Artisan</span>
            <p className="text-xs text-on-surface-variant text-center md:text-left max-w-xs">
              Connecting local craftsmen with global consumers through curated digital experiences.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-xs text-on-surface-variant hover:text-on-surface transition-all hover:underline" href="#">Privacy Policy</a>
            <a className="text-xs text-on-surface-variant hover:text-on-surface transition-all hover:underline" href="#">Terms of Service</a>
            <a className="text-xs text-on-surface-variant hover:text-on-surface transition-all hover:underline text-primary underline" href="#">Merchant Agreement</a>
            <a className="text-xs text-on-surface-variant hover:text-on-surface transition-all hover:underline" href="#">Contact Support</a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-xs text-on-surface-variant">© 2024 Dokan Digital Artisan. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">social_leaderboard</span>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">retweet</span>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">retweet</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
