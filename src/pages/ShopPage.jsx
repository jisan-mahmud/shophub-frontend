import React from "react";

export default function ShopPage() {
  return (
    <div>
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
          <div className="max-w-[1280px] mx-auto w-full">
            <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col md:flex-row justify-between items-end gap-6 border-none shadow-ambient">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 w-full md:w-auto">
                <div className="w-32 h-32 rounded-2xl bg-surface-container-lowest p-2 shadow-lg -mt-16 ring-4 ring-surface-container-lowest">
                  <img
                    alt="Shop Logo"
                    className="w-full h-full object-cover rounded-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD91K1BaQOvVGytBXrgLpEQezcz1GfHWgf3qpBtXtJm-tS35L8PoQDhkc_Qkd3aU1fou9mG-2l4WF0JxydS37i2XxU7L5zj_npYdsxkjy42l4_hgiqc8JHoDNb7V23TSwVQdP4rlaZxPDhBQldJ1ENF0T7oA9kZX_677Xe3Rjpw34fnQzJeKN8UEUB47y6axRfCpHfZc4V9-mqt7quSbixSdqbsoO75fLtn5y4ZqsvcKwx8P9H8Ig0I-Z7ITQKLHgG-hy8Q4eBTKTY"
                  />
                </div>

                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">
                      Artisan Flagship
                    </h1>
                    <span
                      className="material-symbols-outlined text-primary-container text-2xl"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      verified
                    </span>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4 text-sm font-medium text-on-surface-variant">
                    <div className="flex items-center gap-1">
                      <span
                        className="material-symbols-outlined text-secondary text-lg"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        star
                      </span>
                      <span className="text-on-surface font-bold">4.9</span>
                      <span className="text-outline-variant">
                        (2.4k Reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">
                        location_on
                      </span>
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
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto w-full mt-12 px-8">
        <nav className="flex gap-8 border-none pb-4 overflow-x-auto">
          <a
            className="whitespace-nowrap pb-2 border-b-4 border-primary text-primary font-bold text-lg"
            href="#"
          >
            All Products
          </a>
          <a
            className="whitespace-nowrap pb-2 border-b-4 border-transparent text-outline hover:text-on-surface font-medium text-lg transition-colors"
            href="#"
          >
            About Shop
          </a>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 mt-10">
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-surface-container-low p-6 rounded-2xl sticky top-24">
              <h2 className="text-xl font-bold mb-6">Filter By</h2>
              <div className="mb-8">
                <label className="text-xs font-bold uppercase tracking-wider text-outline mb-4 block">
                  Category
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">
                      Hand-woven Textiles
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      defaultChecked
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">
                      Ceramic Pottery
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">
                      Organic Oils
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">
                      Leather Goods
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-on-surface-variant font-medium">
                Showing <span className="text-on-surface font-bold">128</span>{" "}
                products
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-outline uppercase">
                  Sort:
                </span>
                <select className="bg-transparent border-none font-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                {
                  title: "Indigo Artisan Scarf",
                  price: "৳ 3,450",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCKKRtaRLkzm47vxrd8_dO6G6EkaOsjjpyKwX6auj94Y0wNwzkJmOlfNGsxrBE7G1infDlyqQqcqdUBPRaLpn9vM3YkEc1hDAPYyemQglAh33plFzIiK0KcLainHF4ZRhziOy_Ea3n4Agyjk58ovTiE4cvQBj1AHfDLEm6ZS3yyx831yFRw2ku3jTTT3iug8sceZFSdv4SJJThbcoUfvJ-JQ6kmmSgauMVDkQLPWizzasCvP9Vx8Vc8GQRC7zesy6UCRKEnyPn4UnI",
                  badge: "New Arrival",
                  badgeClass: "bg-primary-fixed text-on-primary-fixed",
                },
                {
                  title: "Rustic Speckled Bowl",
                  price: "৳ 1,800",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAyp6QzDJozPNVhkhRdw0N7yu-qkDcb39SBMvqR68pPfNK9b5_ZTeiPZLW-t5IQruAeaTlTLAAuR3Q5QlZUusLj1hMbm_unX7oXz211NSQ2nJ9a0puePiMJJPJYKH7cUybRJBz9UZVFGNup_JoNtaM76nt9V6hN7L9isfm0fBtrnJfpjrPIfDPb4bZXHKoXyGfHNK2IQs-Pf6ARR__Q_opk2QxfCmCTVuWW3ACmatVUIR4JFpamSKW26PyhPKA2AkWFuJ4cBSs5V_E",
                },
                {
                  title: "Cognac Leather Slimfold",
                  price: "৳ 2,900",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDyY89NPcX_xcgaxz-tER_mIyzhuhtPhwciWmzYR6j2Ffub3TMG8JWZ1cB969tbccLA_zwdEylLVztOyKC6-MppeobcaRZczUgeGBBGi1uHAYZq78FC5lKWLe5EnzNaUnUn-09Vy-RUl-WuDnTXEsbcF2NN-ExTTc0_MQydd08pnT_5XOpdla1BiTI847a_ZsDNpQ62wAFFSqYXRuevB-IoCa0sG9dR1hajQ9vngNasi-SwxD4SwBPw1tHByD0RhUazHQ0hAObiz8",
                },
                {
                  title: "Sandalwood Soy Candle",
                  price: "৳ 1,250",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_by3xxG4d_9yFb-xsguZaTzj_OQ8Gs_Cyagk7slQheg_oKXUwFnAbhFAgDqPSj4ohh1y0qxggFhL2riqY6Hs6h52LAN1emygHqw0Wx5bw61C4etj6PFe8G58CtDxHkPFuwpAfgIKKIasM5ygLZpSTIWQHCmgwcOT9CcuJzKMmcmNlwOEAD7SFvANh44k0vjTh__SsyVs2MWOKg4DJkR-Uas4RAB4jfus7s29CE5wvLJGgl4ci-n0wKqD4IMm-WG15Zje9PY9l0Cs",
                },
                {
                  title: "Artisan Camera Satchel",
                  price: "৳ 5,600",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDI9Sf8og9izEJ7Z5V_Wtp6dznGgFm3BPjG0AkDif1Ejw6IuOd257XjXPVpIuposNYIenYzII2zYcENA0jE2dZiD6Ctq8WrYDT2GZq5QivF3fNRL23O7ixVWOaSdiK_R7W90785n6bgd-7E7Kbl_TUokmrqYhia5JMvlRd6aSLhkaXvPKAszOMsujGIy0Xk6zT3atj03n1-8dXTCpGfVh0RSHc6qgt3XrSOK4Ss3LSUn-1yHu5YeRSkrosn-zlGlwpCU93Ba9mx7lY",
                  badge: "Only 2 Left",
                  badgeClass: "bg-tertiary-container text-on-surface",
                },
                {
                  title: "Carved Walnut Spoon Set",
                  price: "৳ 950",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBDh8iTvQLFLUeQVk5SumUh4gCP1ziyGZxJo4BKc4QIuDc1CpK8URhWzfUtiD8T0W_SN95D4FgVvWQcbZs6RGDryDuciUzinSfaj6-Fw8GO7CS4dljBZMetNLigDq3YJkzrGqtTmI7FOJdEhzVYPwSjUaLi4oqyTJjyuSNAErkztwxvKe123OWhMSW7_ipaut6YwmWazHcWvYjtAaWRfunVZ-z5mXhj_X3Qiz9I3daZ3pfQYaPnqR5QSkXjPzCU1nD3GXEPQHVxdHs",
                },
              ].map((product) => (
                <div
                  key={product.title}
                  className="bg-surface-container-lowest rounded-2xl group cursor-pointer transition-all hover:-translate-y-1"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden relative mb-4">
                    <img
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={product.image}
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </button>
                    {product.badge ? (
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`px-3 py-1 ${product.badgeClass} text-[10px] font-black uppercase tracking-widest rounded-full`}
                        >
                          {product.badge}
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <div className="px-2 pb-4">
                    <h3 className="font-bold text-lg text-on-surface mb-1 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-primary text-xl font-black mb-3">
                      {product.price}
                    </p>
                    <button className="w-full h-12 rounded-xl bg-surface-container-low text-on-surface font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined text-xl">
                        shopping_cart
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button className="px-12 h-14 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
