
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Bone, Play, Sparkles, Search, FileImage, HeartPulse, AlertTriangle, CheckCircle, Target, Brain, ActivitySquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-12 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Background Elements - Violet Heavy Bottom */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-purple-900/20 via-purple-900/5 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-purple-600/10 rounded-[100%] blur-[100px] pointer-events-none -z-10" />

      {/* Top Rating Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-2 mb-8"
      >
        <div className="flex items-center gap-[-8px]">
          <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center z-20">
            <Activity className="w-4 h-4 text-purple-400" />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center -ml-2 z-10">
            <Bone className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm font-bold text-white">
          4.9
          <div className="flex gap-0.5 text-yellow-400 ml-1">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
      </motion.div>

      {/* Leading Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg md:text-xl font-bold text-white mb-6 tracking-wide"
      >
        Leading AI Radiomics Engine
      </motion.p>

      {/* Massive Serif-Infused Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] font-bold text-white tracking-tight leading-[1.1] mb-10 max-w-5xl flex flex-col items-center"
      >
        <span>We <span className="font-serif italic font-light tracking-normal text-gray-200">Diagnose</span> Scans That</span>
        <span className="flex items-center justify-center gap-4 flex-wrap mt-2">
          Drive
          <motion.div 
            layout
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="flex items-center bg-gray-100 rounded-full p-2 translate-y-1 mx-2 cursor-pointer relative shadow-[0_0_20px_rgba(168,85,247,0.15)] overflow-hidden"
          >
            {/* Soft hover glow */}
            <motion.div
              layout
              variants={{ rest: { opacity: 0.3, scale: 0.9 }, hover: { opacity: 0.8, scale: 1.05 } }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl -z-10 pointer-events-none"
            />
            
            <motion.div 
              layout
              variants={{ rest: { rotate: 0 }, hover: { rotate: 180 } }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 relative border border-gray-100 shrink-0"
            >
              <Target className="w-6 h-6 text-purple-600" />
            </motion.div>
            
            <motion.div 
              layout
              variants={{ rest: { marginLeft: -16, scale: 1 }, hover: { marginLeft: 8, scale: 1.15 } }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-400 text-white flex items-center justify-center shadow-[0_4px_16px_rgba(168,85,247,0.4)] z-20 relative border border-purple-300/30 shrink-0"
            >
              <Brain className="w-6 h-6" />
            </motion.div>

            <motion.div 
              layout
              variants={{ rest: { marginLeft: -16, scale: 1 }, hover: { marginLeft: 8, scale: 1.1 } }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-12 h-12 rounded-full bg-gray-900 border-2 border-white text-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] z-30 relative font-serif italic text-lg font-bold shrink-0"
            >
              AI
            </motion.div>
          </motion.div>
          <span className="font-serif italic font-light tracking-normal text-gray-200">Results</span>
        </span>
      </motion.h1>

      {/* Country / Clinic Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gray-900/60 border border-purple-500/30 text-gray-300 text-sm md:text-base font-medium mb-12 shadow-[0_0_20px_rgba(168,85,247,0.15)] relative overflow-hidden backdrop-blur-md"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-[shimmer_2s_infinite]" />
        <span className="flex gap-1 text-lg">🇩🇪 🇫🇷 🇯🇵 🇮🇳</span>
        <span className="mx-1">Processing across 500+ clinics</span>
        <span className="flex gap-1 text-lg">🇮🇳 🇬🇧 🇦🇺 🇨🇦</span>
      </motion.div>

      {/* Central CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="z-10"
      >
        <Link
          to="/upload"
          className="btn-gradient inline-flex items-center justify-center gap-3 px-10 py-4 md:py-5 rounded-xl text-lg w-full sm:w-auto shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]"
        >
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-purple-600">
            <ActivitySquare className="w-4 h-4" />
          </div>
          <span className="relative z-10 font-bold">Start Diagnostic</span>
        </Link>
      </motion.div>

      {/* Trusted By Sub-section replacing mockups */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full mt-16 relative z-10 flex flex-col items-center"
      >
        <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm mb-12">The world's best hospitals trust OsteoGuard</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
          <div className="flex items-center gap-2 text-xl font-bold text-gray-300 font-serif"><HeartPulse className="w-6 h-6" /> MayoClinic</div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-300"><Activity className="w-6 h-6" /> Johns Hopkins</div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-300 font-mono"><Search className="w-6 h-6" /> Cleveland</div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-300"><Bone className="w-6 h-6" /> Mass General</div>
        </div>
      </motion.div>

    </section>
  );
}

