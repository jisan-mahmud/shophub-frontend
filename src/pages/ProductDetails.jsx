import React, { useState } from 'react'

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState('Small')
  const [selectedColor, setSelectedColor] = useState('primary')
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const sizes = ['Small', 'Medium', 'Large', 'X-Large']
  const colors = [
    { name: 'primary', displayName: 'Sage Green', hex: '#004d34' },
    { name: 'brown', displayName: 'Brown', hex: '#8b4513' },
    { name: 'beige', displayName: 'Beige', hex: '#f5f5dc' }
  ]

  const productImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArqwUIWNjKk3iqpl8YNAAawUFOJHX3ALDXui_OCCKW7zRPJbWGvvlokgonwNU9URr0Gl27s-ORMSd9Mx8Dnd4p79YIM6DRmHmH49ZVEXqrCsKfPqU1sC24HkcHJvQ5GzQ0AqVdEEVxcwYwtUNJgnbi1nKEBoZ1OPFqiSdITiIot2cieca7zk8zU72dWkVFDaROlxX46oTzGZ_msjuxSxQ9wVNP6uaAall3sQ2Qmqn8ulEwhhN_41maL3xpql_DGk7RWcyv9p9KH6Y",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDaMvPRsC9PisDrjb8-dsayKFKguwFXjt0_LEsgbHR5T90xyONmbfOc7nTzqSw84FejAVFkIWt8s1o9VlfFZtA9MsI_9BIXBTi_YcwEr0ckbgJ_QthDW2ZQYoSeS1Bx4K09D0_I3VnKfigJ53OdzX8tqlf-KvYpbUVE5qBrBZZbxWYzz3ZXH1Gxm8MRs-AJtX0Gr8pAQSDvN_SV0AzZ-MNQHJOeaju1AGMKVlramsbGBtw8uVE7-4wnfDyitlAeS5veNDR3iLU8p_8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDuCyACK8F9RiY-RWgn2-S7ehcQE7GQQWE-AN6yVQl5dy9Rsn3UlAhiSo76bJcjv6IY4W4n40oHb1ihfeWd6EQz19gkdwwPybGeqpe3A2jEdVsFtKMZkcK80g9HxlfFI5WUpKG1-VDm-XHjLc8qlKS6HweOk-0sO626yOeOh9ceDIpCFtESSTm07k9IsB4IvDBv4N-foILynZBPfNyPSQV6T_oPqiXPnRYfM5849nKtKMoZPW2oGGRY234nm-zRdrc8BHa8uFHuquk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzuqqO88LWitaXnMF6PRaNJrckZ3zTJU6ewx9g7LH58M_tq-7ywnzNAYnx61K2o-pGYLBur_XAcmXc7d4dL9Onse9jR-9irJKG26Od6ZWj_C8iaxxfMDken-YR7T1H4o86pYOvDxXte7zDq8zlEv8se-onfEASXclR3kqmc66ChhIJXAK-3ucQJ1t3ZgkMyM9pVjxOCPxxn__3kgkJ0HLQXULUviWmnDka0NB53UCoKd8cOaz7xvDA4RVoLt9gp07secTJHIUfKCU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBazZ-PgZUHq-9e2bV2RO5z3ma1_a9iWnCy3SbwA5IeK3okP8UV5t-7mrBqAXxmmsESFqzAM0BjqT9BJvfxdpy0JjmGGv0ljkPnpdeVrnTYXiwccEjjLD9c9yOnyu0YrgMCljfeKeMAQwlagLxFRq7PYVJ5bIjYyzP3OxSINaaXWo5wuRW86H8lFSmq9jS1rZA-l6spsvexvXK0BUu2ZaBlosVZkH-R413sQz6JHxO01-Cq1na38kMXQdIODh5UfXL1ZZDgXvdrKtE"
  ]

  const handleSizeSelect = (size) => setSelectedSize(size)
  const handleColorSelect = (colorName) => setSelectedColor(colorName)
  const handleQuantityChange = (change) => setQuantity(prev => Math.max(1, prev + change))

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href)
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}`,
    }
    window.open(urls[platform], '_blank')
  }

  const handleCheckout = () => {
    const selectedColorDisplay = colors.find(c => c.name === selectedColor)?.displayName || selectedColor
    alert(`Checkout Summary:\nSize: ${selectedSize}\nColor: ${selectedColorDisplay}\nQuantity: ${quantity}\n\nTotal: ৳ ${(4850 * quantity).toLocaleString()}`)
  }

  return (
    <div className="bg-surface text-on-surface">
      <nav className="h-16 w-full sticky top-0 z-40 bg-surface border-none">
        <div className="flex justify-between items-center px-6 max-w-[1280px] mx-auto w-full h-full">
          <div className="flex items-center gap-8">
            <span className="text-xl font-black text-primary font-display">Dokan</span>
            <div className="hidden md:flex gap-6">
              <a className="text-primary font-bold border-b-2 border-primary tracking-tight" href="#">Explore</a>
              <a className="text-outline font-medium tracking-tight hover:bg-surface-container-high transition-colors" href="#">Categories</a>
              <a className="text-outline font-medium tracking-tight hover:bg-surface-container-high transition-colors" href="#">New Arrivals</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-surface-container rounded-full px-4 py-1.5 gap-2">
              <span className="material-symbols-outlined text-outline">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-64" placeholder="Search artisan products..." type="text" />
            </div>
            <button className="p-2 hover:bg-surface-container-high rounded-full transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 hover:bg-surface-container-high rounded-full transition-all">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img alt="Merchant Profile Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCicD1Q1p8Qt9wqmL9TPCFepwa5-VYKI3GOX0N_TZo5IwUcJ-hzapyGcKxTLiQ7tymZh7g-pWItSEAFFeO7uZ96iDvynkTfERJ3Rlwhpg4jMFPlXpNuTcS846uAOKgZRP1G3qqrWi7-6GpFzxv_WTnGnFI4TvW7CygAIJv7LD_3MTDX8ScQn4rEazTItrPUEHZ6JJe3a1IXfuwsDVTyq0okjTdnswwOUTKrRpeN-IiYGe5ZP_1JPTUwunri3APCP6qsyRTPCGFABrk" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Product Visuals */}
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low">
              <img alt="Main Product Image" className="w-full h-full object-cover" src={productImages[selectedImageIndex]} />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedImageIndex === index
                      ? 'border-2 border-primary'
                      : 'border-2 border-transparent hover:opacity-80'
                  }`}
                >
                  <img className="w-full h-full object-cover" src={image} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-sm font-semibold tracking-widest text-primary uppercase">Artisan Flagship</span>
            </div>
            <h1 className="text-4xl font-bold text-on-surface mb-4 leading-tight">Hand-Woven Organic Linen Artisan Shirt</h1>
            <div className="flex items-end gap-3 mb-8">
              <span className="text-4xl font-black text-primary">৳ 4,850</span>
              <span className="text-lg text-outline line-through mb-1">৳ 5,500</span>
            </div>

            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-sm font-bold text-on-surface mb-4">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                        selectedSize === size
                          ? 'border border-primary bg-primary text-on-primary'
                          : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-on-surface mb-4">Color</h3>
                <div className="flex gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => handleColorSelect(color.name)}
                      className={`w-10 h-10 rounded-full transition-all ${
                        selectedColor === color.name ? 'ring-2 ring-primary ring-offset-2' : ''
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-on-surface mb-4">Quantity</h3>
                <div className="flex items-center bg-surface-container-highest rounded-xl p-1 w-fit">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-lg transition-colors"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-high rounded-lg transition-colors"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-lg p-4 mb-6">
              <h4 className="text-sm font-bold text-on-surface mb-2">Your Selection</h4>
              <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant">
                <span><strong>Size:</strong> {selectedSize}</span>
                <span><strong>Color:</strong> {colors.find(c => c.name === selectedColor)?.displayName || selectedColor}</span>
                <span><strong>Quantity:</strong> {quantity}</span>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <button
                onClick={handleCheckout}
                className="w-full h-[60px] rounded-xl bg-primary-container text-on-primary-container font-black text-xl flex items-center justify-center gap-3 shadow-md hover:brightness-95 transition-all"
              >
                Check Out
              </button>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-6 mb-8 border border-outline-variant/15">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                  <img alt="Merchant Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWN3GCRjfo6SJWtzcQnUktKtQvszHUXqrwTVekbMQM_BSq0erREdLLxdq7Jw5vRUqY6ThYhkCClMRjU9WcySQUWrlg5KwwJXx_hHms4NjtIqj5kgkziP-hGGmo0MNkLKtwuPmKxx_oyhAJ8U7h_kcVQBgn7wjsNyOD0ASwo-iV8mMMvXwp1nLnJfa0X5MZvIsq6c5gad5BuDpvmFnSi9nnyE8OVg5cVZNORhIbb3v2Opchs2iHMfVUqxS0tg16RS1Ih7hQpajfMpg" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Artisan Flagship Store</h4>
                  <p className="text-xs text-outline font-medium">Verified Merchant • Dhaka, BD</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-surface-container-high">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                    <p className="text-sm font-medium text-on-surface">
                      <span className="font-bold">Location:</span> Dhaka, Bangladesh
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                    <p className="text-sm font-medium text-on-surface">
                      <span className="font-bold">Response Time:</span> Under 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <div>
                  <p className="text-sm font-bold">Delivery Estimate</p>
                  <p className="text-xs text-outline">2-3 Business Days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">share</span>
                <div>
                  <p className="text-sm font-bold">Share Product</p>
                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-6 h-6 rounded bg-secondary-container hover:opacity-80 transition-colors flex items-center justify-center"
                      title="Share on Facebook"
                    >
                      <span className="material-symbols-outlined text-on-secondary-container text-xs">facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-6 h-6 rounded bg-primary-container hover:opacity-80 transition-colors flex items-center justify-center"
                      title="Share on Twitter"
                    >
                      <span className="material-symbols-outlined text-on-primary-container text-xs">twitter</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 space-y-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-12 max-w-4xl">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary-fixed w-max pb-2">Craftsmanship &amp; Details</h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>Our Artisan Linen Shirt is a testament to sustainable luxury. Hand-loomed in the heart of Sylhet, every piece utilizes 100% organic European-flax certified linen. This breathable fabric is pre-washed for a signature soft feel that only gets better with time.</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Relaxed silhouette for maximum comfort</li>
                  <li>Sourced from eco-certified fair-trade cooperatives</li>
                  <li>Natural shell buttons for a timeless finish</li>
                  <li>Reinforced double-stitching for heirloom durability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-12 mt-auto border-t border-surface-container-high bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-primary text-lg font-display">Dokan</span>
            <p className="font-sans text-xs text-outline">© 2024 Dokan Digital Artisan. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-outline hover:text-on-surface font-sans text-xs transition-all hover:underline" href="#">Privacy Policy</a>
            <a className="text-outline hover:text-on-surface font-sans text-xs transition-all hover:underline" href="#">Terms of Service</a>
            <a className="text-outline hover:text-on-surface font-sans text-xs transition-all hover:underline" href="#">Merchant Agreement</a>
            <a className="text-outline hover:text-on-surface font-sans text-xs transition-all hover:underline" href="#">Contact Support</a>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-outline">language</span>
            <span className="font-sans text-xs text-outline">Bangladesh (EN)</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
