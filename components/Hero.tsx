
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6 border border-blue-100 uppercase tracking-widest">
          The Future is Autonomous
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
          Automate Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Infrastructure.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
          From heavy-duty construction sites to precision agriculture and the classrooms of tomorrow. 
          RoboNexus delivers the world's most advanced robotic solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
            Browse Catalog
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 transition-all border border-slate-200">
            Request Demo
          </button>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
          <div className="font-display font-bold text-xl">CONSTRUCTO</div>
          <div className="font-display font-bold text-xl">AGRIGUARD</div>
          <div className="font-display font-bold text-xl">ARDU-TECH</div>
          <div className="font-display font-bold text-xl">ROBOLABS</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
