import { CircleUser, CheckCircle, CreditCard, Check, Smartphone, MessageSquare, Headphones, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-outline-variant/20 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <div className="text-2xl font-serif font-black text-primary">Dokan</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 font-serif text-base" href="#features">Features</a>
            <a className="text-on-surface-variant hover:text-primary transition-all duration-300 font-serif text-base" href="#pricing">Pricing</a>
            <a className="text-on-surface-variant hover:text-primary transition-all duration-300 font-serif text-base" href="#success">Success Stories</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold hover:shadow-lg transition-all duration-200">
              Create Shop
            </button>
            <button className="hidden md:block p-2 hover:bg-surface-container rounded-lg transition-colors">
              <CircleUser className="w-6 h-6 text-on-surface-variant" />
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-surface-container rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-on-surface" />
              ) : (
                <Menu className="w-6 h-6 text-on-surface" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-outline-variant/20 bg-surface">
            <div className="flex flex-col gap-4 px-6 py-4">
              <a href="#features" className="text-primary font-bold py-2">Features</a>
              <a href="#pricing" className="text-on-surface-variant hover:text-primary py-2">Pricing</a>
              <a href="#success" className="text-on-surface-variant hover:text-primary py-2">Success Stories</a>
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold mt-2">
                Create Shop
              </button>
            </div>
          </div>
        )}
      </nav>
      <main className="pt-24 w-full">
        <section className="relative px-6 md:px-12 py-12 md:py-24 max-w-7xl mx-auto w-full" id="features">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full font-bold text-xs md:text-sm mb-6 tracking-wide">
                Digital Platform for Everyone
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-on-background leading-tight mb-6 md:mb-8">
                Start Your Online Shop Today
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant mb-8 md:mb-10 max-w-lg leading-relaxed">
                Create your own e-commerce website with bKash payments in just a few minutes. Grow your business sky-high without any technical knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl text-base md:text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 active:scale-95">
                  Open Free Shop
                </button>
                <button className="px-8 md:px-10 py-4 md:py-5 bg-surface-container-lowest text-primary rounded-xl text-base md:text-lg font-bold border-2 border-primary/20 hover:bg-surface-container-low transition-colors duration-300">
                  How it works?
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 md:w-64 h-48 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-48 md:w-64 h-48 md:h-64 bg-secondary/5 rounded-full blur-3xl"></div>
              <img 
                className="rounded-xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5] md:aspect-square" 
                alt="cheerful Bangladeshi shop owner smiling and holding a mobile phone in a modern boutique setting with warm afternoon sunlight" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxoLeFTafzvhqcWWaoZCgLc1hEvBfGNm_SZR2zNdBl7Qp_v7r9ThN08_F5RDSZgXWMx23DF858rWsdnf5ouWSBcY-e9FDCSQGu7g3k6-46l_F03t3xnZcVwYHaSNkScOVjhp2JUxgqjXh5g3gqN89kECO1KmJsUf055V4L2oehzs7gE38eiqlO86MKfuE5IO0fsy6cBgNpGd8FAtSl7oW2G-w0zTQvJzcTI9_eCZzx57ku8h7AYbWbEuqmQtkHacqQc6lWEpPMKEg"
              />
              <div className="absolute bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-xl shadow-xl z-20 hidden md:block border border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Latest Order</p>
                    <p className="text-lg font-serif font-bold">৳ 450.00 Received</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">Start Your Business in 3 Simple Steps</h2>
              <p className="text-on-surface-variant text-base md:text-lg">Step into the digital world without any hassle</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-16 h-16 bg-primary text-on-primary rounded-xl flex items-center justify-center text-3xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Add Products</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Take photos of your products, set prices, and upload them to our easy-to-use dashboard.</p>
              </div>

              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-16 h-16 bg-secondary text-on-primary rounded-xl flex items-center justify-center text-3xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Share Links</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Share your unique shop link with customers on Facebook, Instagram, or WhatsApp.</p>
              </div>

              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md hover:translate-y-[-4px] transition-all duration-300">
                <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center text-3xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Get Paid</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Receive payments instantly directly into your account through bKash or Nagad.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto w-full" id="pricing">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-12 md:mb-16 text-center">Why use Dokan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-primary/5 rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
              <div className="flex-1">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-on-primary mb-6">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Instant bKash Payment</h3>
                <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">The days of waiting are over. Money from every sale will be deposited directly into your bKash merchant or personal account without any extra charges.</p>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <img className="rounded-lg shadow-lg w-full object-cover max-w-xs md:max-w-md" alt="close up of a mobile phone screen displaying a successful digital payment confirmation with a green checkmark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3fJfLFzvd2OPEDdxaHz3tPSeVkRQlkZq9-S_KddT_x8x4qLcqB51D_25oBrNsA6c4Dqb39kesoz4BkriRydfAim7VDJmb1XMJsTyB-NfMzPHegnTSmc8iTu3_eH9BUzQ_9EihqdCH5EqSzv4cjN4D4pB_1u67Yy8WK3Xq2oVEBAAitttWzObv8IcE6CBX7649egYC_MiGVP4vKYi7LMjruVD_ff0T80tzxLMR114qWfH_OW9LgbesS4C7vAVjxW685u1FrqK1pTA"/>
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-container p-6 md:p-8 rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-on-primary mb-6">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Zero Setup Fee</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">No subscription or setup fees. Start today completely for free.</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-container-high p-6 md:p-8 rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-on-surface-variant rounded-lg flex items-center justify-center text-white mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Mobile Management</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Manage your shop right from your phone. From order tracking to inventory management—everything at your fingertips.</p>
              </div>
            </div>

            <div className="md:col-span-8 bg-surface-container-low rounded-xl p-6 md:p-12 border border-outline-variant/20 flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Local Customer Support</h3>
                <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">Our team is by your side for any issues. Get 24/7 support in both Bengali and English.</p>
              </div>
              <div className="flex-1 w-full flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-surface w-full">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-12 md:mb-16 text-center" id="success">Success Stories of Merchants</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover shrink-0 grayscale hover:grayscale-0 transition-all duration-500" alt="portrait of a young Bangladeshi entrepreneur in a clean workspace looking confident" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoujIGQnxOkDRojkYmO7LAEGV3FdZci58X-i74DYlHGYXK-Lp6GhbWcBYGMkbovTUXWA7Va0z5tewR0n_yy9tqUn-IlM1hR7H7_-5ESZkdWxOnmQMs9bmCxoa2MrsGZsnhGDh81ov1mb1RtE5BLTWCl5ceziHAD_JCpQFPWbJCPYRUBvacnd-t_mLnN26uR09uz8ad-Tsh036RKoA6lNdM9coKJdmRfJN8UJLjSUWBLeFMehlQMrsNR-N53f-hzyji-siPU4WqiqA"/>
                <div>
                  <span className="text-secondary font-bold text-xs md:text-sm uppercase tracking-widest">Arif Handicrafts</span>
                  <h3 className="text-lg md:text-2xl font-serif font-bold mt-2 mb-4 italic">"Dokan has given my business a new shape. Now I get more orders on my website than on Facebook."</h3>
                  <p className="text-on-surface-variant text-sm md:text-base">— Ariful Islam, Proprietor</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover shrink-0 grayscale hover:grayscale-0 transition-all duration-500" alt="portrait of a female boutique owner smiling in her store" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGaJaf_vWVm2I3yYIUfraerO4KOOnXD5q7iVPCuiZp3jhk8naOPbvi2FSK-nARDSN5CKGmUu6ZTUzVzPF_xxLG2sA0B8ViYEchJ1nzgSs_klLEAOahIy7namUXjUSdQpMn1l62O51N1c0DJ0lDuWuiJvtF17XnZFHwhhP7rVGN7sDTaOIwe1EyOek7-oqiqeMI7EnGETimlyfOP_5-JVLhk4GHzBOWv2lljxAYfkyKaCsbrUn1kU-T3J6mTLVPQLH2ng3DeD4aSGk"/>
                <div>
                  <span className="text-secondary font-bold text-xs md:text-sm uppercase tracking-widest">Fashion Diary</span>
                  <h3 className="text-lg md:text-2xl font-serif font-bold mt-2 mb-4 italic">"I didn't think setting up bKash payment gateway would be so easy. Customers now shop with trust."</h3>
                  <p className="text-on-surface-variant text-sm md:text-base">— Sumaiya Akhter, CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-6 w-full">
          <div className="max-w-5xl mx-auto bg-primary-container text-on-primary-container rounded-2xl md:rounded-3xl p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-surface-bright/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-on-surface/10 rounded-full -ml-32 -mb-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight">Join thousands of Bangladeshi merchants</h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 max-w-2xl mx-auto">
                Join the crowd of thousands of entrepreneurs and start your digital journey today. Register your shop for free today.
              </p>
              <button className="px-8 md:px-12 py-4 md:py-6 bg-surface-container-lowest text-primary text-lg md:text-2xl font-black rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                Open Free Shop
              </button>
              <p className="mt-6 md:mt-8 text-xs md:text-sm opacity-75 font-medium uppercase tracking-widest">No credit card required • Instant Activation</p>
            </div>
          </div>
        </section>

        <footer className="bg-surface-container py-8 md:py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="text-2xl font-serif font-black text-primary">Dokan</div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-sans text-xs uppercase tracking-wider font-bold" href="#terms">Terms of Service</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-sans text-xs uppercase tracking-wider font-bold" href="#privacy">Privacy Policy</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-sans text-xs uppercase tracking-wider font-bold" href="#agreement">Merchant Agreement</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-sans text-xs uppercase tracking-wider font-bold" href="#contact">Contact Us</a>
            </div>
            <p className="text-on-surface-variant font-sans text-xs uppercase tracking-wider">
              © 2024 Dokan. Built with local pride.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
