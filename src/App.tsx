import React from 'react';

const DispatcherHeader: React.FC = () => (
  <header className="absolute top-6 left-0 right-0 z-50">
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-emerald-900/95 backdrop-blur-md rounded-full border border-emerald-700/50 shadow-2xl h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <h1 className="text-white font-bold text-lg tracking-tight uppercase">Apex Landscaping</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-emerald-100">
          <a href="#services" className="hover:text-white transition-colors">Design</a>
          <a href="#maintenance" className="hover:text-white transition-colors">Maintenance</a>
          <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
        </nav>

        <div>
          <a href="#consultation" className="bg-stone-100 hover:bg-white text-emerald-900 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95">
            Book Design
          </a>
        </div>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&w=1600&q=80" alt="Premium Landscaped Garden" className="w-full h-full object-cover origin-center" />
      <div className="absolute inset-0 bg-emerald-950/60 mix-blend-multiply"></div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-stone-50 to-transparent"></div>
    </div>

    <div className="max-w-4xl mx-auto text-center relative z-10 mt-12">
      <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-400/30 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide mb-8">
        Award-Winning Landscape Architecture
      </div>
      <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
        Nature, <br /><span className="text-emerald-300 font-serif italic">Perfectly Engineered.</span>
      </h2>
      <p className="text-xl text-emerald-50 max-w-2xl mx-auto mb-12 drop-shadow-md">
        We design, build, and maintain breathtaking outdoor living spaces, blending natural stonework with elite horticulture.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#consultation" className="w-full sm:w-auto text-center bg-stone-800 text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-widest hover:bg-stone-700 transition-colors shadow-xl">
          Start Your Project
        </a>
      </div>
    </div>
  </section>
);

const ConversionBlock: React.FC = () => (
  <section id="consultation" className="py-24 px-4 bg-stone-50">
    <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-stone-100">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-extrabold text-stone-900 tracking-tight mb-4 font-serif">Request a Priority Consultation</h3>
        <p className="text-stone-500 text-lg max-w-xl mx-auto">Transform your property into an elite outdoor living space. Share your vision with our senior architects.</p>
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Full Name</label>
          <input type="text" className="bg-stone-50 border-0 border-b-2 border-stone-200 p-3 text-stone-900 focus:border-emerald-600 focus:ring-0 outline-none transition-all rounded-t-md" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Property Address</label>
          <input type="text" className="bg-stone-50 border-0 border-b-2 border-stone-200 p-3 text-stone-900 focus:border-emerald-600 focus:ring-0 outline-none transition-all rounded-t-md" required />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Project Vision</label>
          <textarea rows={4} className="bg-stone-50 border-0 border-b-2 border-stone-200 p-3 text-stone-900 focus:border-emerald-600 focus:ring-0 outline-none transition-all resize-none rounded-t-md" required></textarea>
        </div>
        <div className="sm:col-span-2 mt-4 text-center">
          <button className="bg-emerald-800 hover:bg-emerald-700 text-white px-12 py-5 rounded-full font-bold text-base uppercase tracking-widest shadow-xl transition-transform hover:-translate-y-1">
            Submit Vision
          </button>
        </div>
      </form>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
      <DispatcherHeader />
      <main className="flex-1">
        <Hero />

        {/* Core Capabilities */}
        <section id="services" className="py-24 px-4 bg-stone-50 relative z-10 -mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Hardscaping & Stone', desc: 'Custom patios, retaining walls, and architectural stonework designed to last.' },
                { title: 'Premium Plantings', desc: 'Expertly curated garden installations that thrive in Ontario’s specific climate.' },
                { title: 'Estate Maintenance', desc: 'Year-round care ensuring pristine grounds for discerning property owners.' }
              ].map((service, i) => (
                <div key={i} className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-stone-100">
                  <div className="text-emerald-800 mb-6 bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300">
                    <span className="text-2xl font-serif italic">0{i + 1}</span>
                  </div>
                  <h4 className="text-stone-900 font-bold text-2xl mb-4 font-serif">{service.title}</h4>
                  <p className="text-stone-600 text-base leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ConversionBlock />
      </main>

      <footer className="py-16 px-4 bg-emerald-950 text-emerald-100 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h5 className="text-white font-serif text-2xl mb-4 italic">Apex Landscaping</h5>
          <p className="text-emerald-400/60 text-sm mb-8 max-w-md">Elevating outdoor spaces with uncompromising quality and architectural precision.</p>
          <div className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">© {new Date().getFullYear()} Apex Landscaping Architecture. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
