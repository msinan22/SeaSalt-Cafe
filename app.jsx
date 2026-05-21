const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold text-brand-accent tracking-wider">SeaSalt Café</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#menu" className="text-brand-text hover:text-brand-accent transition-colors font-medium">Menu</a>
            <a href="#story" className="text-brand-text hover:text-brand-accent transition-colors font-medium">Our Story</a>
            <a href="#contact" className="text-brand-text hover:text-brand-accent transition-colors font-medium">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-accent hover:text-brand-accent/80 transition-colors">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-bg border-b border-brand-accent/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-text hover:text-brand-accent hover:bg-brand-accent/5 rounded-md font-medium">Menu</a>
            <a href="#story" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-text hover:text-brand-accent hover:bg-brand-accent/5 rounded-md font-medium">Our Story</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-brand-text hover:text-brand-accent hover:bg-brand-accent/5 rounded-md font-medium">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-screen">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 text-brand-accent/5 w-48 h-48 pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z" /></svg>
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 text-brand-accent/5 w-64 h-64 pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" /></svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-64 h-64 md:w-96 md:h-96 mx-auto mb-12 rounded-full overflow-hidden border-8 border-brand-accent/20 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative transform hover:scale-105 transition-transform duration-700">
            <img src="hero_bowl.png" alt="Healthy Organic Bowl" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-accent mb-6 leading-tight">
            <span className="sr-only">SeaSalt Café in Kozhikode: </span>
            Fresh. Healthy. <span className="italic font-light text-white">Organic.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-text mb-12 font-light max-w-2xl mx-auto opacity-80">
            Nourishing Kozhikode with nature's finest ingredients, served with love on Beach Road.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#menu"
            className="inline-block bg-brand-accent text-brand-bg px-10 py-4 rounded-full text-lg font-semibold hover:bg-brand-accent/90 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Explore Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const BestSellers = () => {
  const items = [
    {
      name: "Avocado Toast",
      desc: "Artisanal sourdough, smashed avocado, microgreens, chili flakes.",
      price: "₹250",
      img: "avocado_toast.png",
      badge: "Best Seller"
    },
    {
      name: "Green Smoothie Bowl",
      desc: "Kiwi, spinach, coconut flakes, chia seeds, fresh berries.",
      price: "₹300",
      img: "green_smoothie.png",
      badge: "Vegan"
    }
  ];

  return (
    <section className="py-24 bg-brand-surface" id="best-sellers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl text-brand-accent mb-4">Our Best Sellers</h2>
          <div className="w-24 h-1 bg-brand-accent/30 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-brand-accent/10 transition-all duration-500 bg-brand-bg border border-brand-accent/10"
            >
              <div className="h-80 lg:h-96 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" />
                <div className="absolute top-6 right-6 bg-brand-accent text-brand-bg px-5 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm bg-brand-accent/90">
                  {item.badge}
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-3xl font-bold text-brand-accent">{item.name}</h3>
                  <span className="text-2xl font-medium text-brand-text/90">{item.price}</span>
                </div>
                <p className="text-lg text-brand-text/70 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InteractiveMenu = () => {
  const [activeTab, setActiveTab] = useState('Breakfast');

  const menuData = {
    'Breakfast': [
      { name: 'Oatmeal Porridge', desc: 'With caramelized bananas and walnuts.', price: '₹180' },
      { name: 'Pancakes', desc: 'Fluffy vegan pancakes with maple syrup.', price: '₹220' },
      { name: 'Fruit Bowl', desc: 'Seasonal fresh fruits with honey drizzle.', price: '₹150' },
      { name: 'Granola Parfait', desc: 'Greek yogurt layered with house-made granola.', price: '₹200' },
    ],
    'Lunch': [
      { name: 'Quinoa Salad', desc: 'Mixed greens, cherry tomatoes, cucumber, lemon vinaigrette.', price: '₹280' },
      { name: 'Veggie Wrap', desc: 'Hummus, roasted vegetables in a whole wheat wrap.', price: '₹250' },
      { name: 'Mushroom Risotto', desc: 'Creamy arborio rice with wild mushrooms and parmesan.', price: '₹350' },
      { name: 'Lentil Soup', desc: 'Hearty spiced lentil soup served with toasted sourdough.', price: '₹190' },
    ],
    'Beverages': [
      { name: 'Matcha Latte', desc: 'Ceremonial grade matcha with oat milk.', price: '₹220' },
      { name: 'Cold Brew', desc: '24-hour steeped single-origin coffee.', price: '₹180' },
      { name: 'Kombucha', desc: 'Locally brewed, ask for today\'s flavor.', price: '₹200' },
      { name: 'Fresh Juice', desc: 'Cold-pressed orange, carrot, or beetroot.', price: '₹150' },
    ]
  };

  return (
    <section className="py-24 bg-brand-bg relative" id="menu">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl text-brand-accent mb-4">Explore Our Menu</h2>
          <div className="w-24 h-1 bg-brand-accent/30 mx-auto mb-12"></div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Breakfast', 'Lunch', 'Beverages'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === tab
                  ? 'bg-brand-accent text-brand-bg shadow-[0_0_15px_rgba(212,175,55,0.4)] transform scale-105'
                  : 'bg-brand-surface text-brand-accent hover:bg-brand-accent/10 border border-brand-accent/20'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            className="bg-brand-surface rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-brand-accent/10"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {menuData[activeTab].map((item, index) => (
                <div key={index} className="border-b border-brand-accent/10 pb-6 last:border-0 md:last:border-b md:nth-last-child(-n+2):border-0">
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="font-serif text-2xl font-bold text-brand-accent">{item.name}</h3>
                    <span className="text-xl font-semibold text-brand-text/80">{item.price}</span>
                  </div>
                  <p className="text-brand-text/60 font-light text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const StoryValues = () => {
  return (
    <section className="py-32 bg-brand-accent text-brand-bg relative overflow-hidden" id="story">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.83-2.69 2.69-.83-.83 2.69-2.69zM28.06 0l.83.83-2.69 2.69-.83-.83 2.69-2.69zM1.492 0l.83.83-2.69 2.69-.83-.83 2.69-2.69z\\' fill=\\'%230B0F19\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight font-bold">A little corner of <span className="italic font-light">Kozhikode</span></h2>
            <p className="text-xl font-medium mb-8 opacity-90 leading-relaxed">
              Born from a passion for mindful eating and a love for our coastal town, SeaSalt Café is your sanctuary on Beach Road. We believe that food should not only taste incredible but also nourish the soul and respect the earth.
            </p>
            <p className="text-xl font-medium opacity-90 leading-relaxed">
              Every dish is thoughtfully crafted using locally sourced, organic ingredients, bringing you the freshest flavors Kerala has to offer, combined with modern culinary artistry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-bg/5 p-10 rounded-3xl backdrop-blur-md border border-brand-bg/10 text-center hover:bg-brand-bg/10 transition-colors duration-300 shadow-xl"
            >
              <div className="w-20 h-20 mx-auto bg-brand-bg text-brand-accent rounded-full flex items-center justify-center mb-8 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">Locally Organic</h3>
              <p className="text-lg font-medium opacity-80 leading-relaxed">Sourced directly from farmers within a 50km radius of Kozhikode.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-brand-bg/5 p-10 rounded-3xl backdrop-blur-md border border-brand-bg/10 text-center hover:bg-brand-bg/10 transition-colors duration-300 shadow-xl"
            >
              <div className="w-20 h-20 mx-auto bg-brand-bg text-brand-accent rounded-full flex items-center justify-center mb-8 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">Plant-Powered</h3>
              <p className="text-lg font-medium opacity-80 leading-relaxed">100% vegetarian menu with abundant vegan and gluten-free options.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLocation = () => {
  return (
    <section className="py-32 bg-brand-surface" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-brand-accent mb-6">Visit Us</h2>
          <div className="w-24 h-1 bg-brand-accent/30 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-0 bg-brand-bg rounded-[2.5rem] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-brand-accent/10"
        >
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-accent mb-10">Get in Touch</h3>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text/80 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border border-brand-accent/20 bg-brand-surface focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-lg text-brand-text placeholder-brand-text/30" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text/80 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-brand-accent/20 bg-brand-surface focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-lg text-brand-text placeholder-brand-text/30" placeholder="your@email.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text/80 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-5 py-4 rounded-xl border border-brand-accent/20 bg-brand-surface focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none text-lg text-brand-text placeholder-brand-text/30" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-accent text-brand-bg text-lg font-bold py-4 rounded-xl hover:bg-brand-accent/90 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] mt-4">
                Send Message
              </button>
            </form>

            <div className="mt-16 pt-10 border-t border-brand-accent/10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-brand-accent text-lg mb-3">Location</h4>
                <p className="text-brand-text/70 leading-relaxed">Beach Road,<br />Kozhikode, Kerala 673032</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-accent text-lg mb-3">Hours</h4>
                <p className="text-brand-text/70 leading-relaxed">Mon-Sun: 8am - 10pm</p>
              </div>
            </div>
          </div>

          <div className="h-96 lg:h-auto min-h-[500px] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.13524950005!2d75.76016140810793!3d11.277341814674176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593f6c8d7b37%3A0xc0fb1d7645167db!2sBeach%20Rd%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1683000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-bg text-brand-text py-16 border-t border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="font-serif text-3xl font-bold tracking-wider mb-3 text-brand-accent">SeaSalt Café</div>
          <p className="text-brand-text/60 text-base">© {new Date().getFullYear()} SeaSalt Café. All rights reserved.</p>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="text-brand-text/60 hover:text-brand-accent transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-brand-text/60 hover:text-brand-accent transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BestSellers />
        <InteractiveMenu />
        <StoryValues />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);