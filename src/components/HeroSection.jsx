import { motion } from 'framer-motion';
import { ArrowRight, Activity, Bone, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle Header Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center justify-center font-bold tracking-[0.2em] text-xs uppercase text-emerald-500 mb-8 border-b-2 border-emerald-500/20 pb-1"
      >
        OSTEOGUARD SOLUTION FOR RADIOMICS
      </motion.div>

      {/* Main Typography Nexa Style */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl sm:text-6xl md:text-[5rem] font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl"
      >
        Save time and diagnose <br className="hidden md:block" />
        better with <span className="bg-emerald-600 text-white px-5 pb-2 pt-1 pb rounded-[2rem] inline-flex items-center -ml-2 -rotate-2 transform hover:rotate-0 hover:scale-105 transition-all cursor-pointer shadow-[0_10px_30px_rgba(16,185,129,0.4)]">OsteoGuard</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-medium"
      >
        Gain unparalleled insights into your patients' bone density data with our robust AI analytics suite.
      </motion.p>

      {/* Two Pill Buttons Nexa Style */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center w-full sm:w-auto z-10"
      >
        <Link 
          to="/upload" 
          className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 transition-all px-8 py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2 shadow-xl"
        >
          Get Started for free
        </Link>
        <Link 
          to="/dashboard" 
          className="bg-gray-100 hover:bg-white text-gray-900 border border-transparent transition-all shadow-[0_2px_20px_rgba(255,255,255,0.1)] px-8 py-3.5 rounded-full font-bold text-[15px] flex items-center justify-center gap-2"
        >
          Discover OsteoGuard
        </Link>
      </motion.div>

      {/* Nexa Mockup Presentation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-[1100px] mx-auto mt-24 relative z-10"
      >
        {/* Mockup Outer Rim like Nexa */}
        <div className="bg-gray-900/60 backdrop-blur-xl p-4 sm:p-5 rounded-t-[3rem] border-t border-x border-gray-800/80 shadow-[0_-20px_50px_-15px_rgba(16,185,129,0.15)] mx-4 sm:mx-10 relative mt-10">
          <div className="bg-[#0A0A10] rounded-t-[2.2rem] overflow-hidden border-t border-x border-gray-800 relative aspect-[16/9] flex flex-col pt-10 shadow-inner">
            
            {/* Nexa Style Mock Header inside the inner box */}
            <div className="absolute top-4 left-6 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/50 shadow-sm shadow-emerald-500/30">
                <Activity className="w-4 h-4" />
              </div>
              <div className="w-64 h-10 bg-gray-900 rounded-full border border-gray-800 flex items-center px-4 text-gray-500 text-sm hidden md:flex">
                <Search className="w-4 h-4 mr-2" /> Search patient scans...
              </div>
            </div>

            <div className="absolute top-4 right-6 flex items-center gap-4 hidden md:flex">
               <div className="w-10 h-10 bg-gray-900 rounded-full border border-gray-800 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
               </div>
               <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-full pl-2 pr-4 py-1">
                 <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">DR</div>
                 <div className="flex flex-col">
                   <span className="text-sm font-bold text-white leading-none">Dr. Jane Rose</span>
                   <span className="text-[10px] text-gray-500 leading-none mt-1">Lead Radiologist</span>
                 </div>
               </div>
            </div>

            {/* Fake Dashboard Layout Nexa Style */}
            <div className="flex-1 flex text-left p-8 pt-10 gap-6">
              {/* Left Sidebar Mock */}
              <div className="w-1/4 space-y-6 hidden lg:block border-r border-gray-800/50 pr-6">
                <div className="text-gray-400 font-bold text-xs uppercase tracking-widest pl-2 mb-4">Workspaces</div>
                <div className="bg-gray-800/50 text-white rounded-xl px-4 py-3 font-semibold border-l-2 border-emerald-500 flex items-center gap-3 shadow-md">
                  <Activity className="w-4 h-4 text-emerald-500" /> Dashboard
                </div>
                <div className="text-gray-500 font-semibold px-4 py-3 flex items-center gap-3">
                  <FileImage className="w-4 h-4" /> Patient Files
                </div>
                <div className="text-gray-500 font-semibold px-4 py-3 flex items-center gap-3">
                  <HeartPulse className="w-4 h-4" /> Reports
                </div>
              </div>

              {/* Main Content Area Mock */}
              <div className="flex-1 w-full space-y-6">
                {/* Horizontal Stat Cards */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                     { label: "Total Scans processed", val: "1,280", icon: <FileImage className="w-4 h-4 text-blue-500" />, cl: "bg-blue-500/20" },
                     { label: "High Risk Anomalies", val: "342", icon: <AlertTriangle className="w-4 h-4 text-red-500" />, cl: "bg-red-500/20" },
                     { label: "Average Precision", val: "98.7%", icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, cl: "bg-emerald-500/20" }
                  ].map((x, i) => (
                    <div key={i} className="bg-gray-900/80 rounded-2xl border border-gray-800 p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${x.cl}`}>{x.icon}</div>
                        <span className="text-xs font-semibold text-gray-400">{x.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">{x.val}</div>
                      <div className="text-xs text-blue-400 bg-blue-900/20 inline-flex px-2 py-1 rounded-full font-medium">
                        +4.00% vs last month
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Simulated Chart Area */}
                <div className="w-full bg-gray-900/80 rounded-3xl border border-gray-800 h-64 p-6 shadow-sm">
                   <div className="flex justify-between items-center mb-6">
                     <h4 className="font-bold text-white">Detection over time</h4>
                     <div className="bg-gray-800 rounded-lg px-3 py-1.5 text-xs text-gray-300 font-semibold border border-gray-700">Yearly</div>
                   </div>
                   <div className="w-full h-full flex items-end gap-2 px-2 pb-6">
                     {[30, 40, 20, 60, 45, 80, 55, 30, 40, 60, 75, 40, 90, 60].map((h, i) => (
                       <div key={i} className="flex-1 bg-gradient-to-t from-emerald-900/50 to-emerald-500/80 rounded-t-sm" style={{ height: `${h}%` }} />
                     ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Gradient Fade to obscure the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A10] to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
