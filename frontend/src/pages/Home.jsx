import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Activity, Shield, Zap, UploadCloud, Microscope, FileCheck, BrainCircuit, HeartPulse, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen bg-gray-950 overflow-hidden relative" ref={containerRef}>
      
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_at_top_center,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />
      
      <HeroSection />

      {/* Features Bento Grid Section */}
      <section className="py-24 sm:py-32 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-purple-900/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 relative z-10"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 font-bold text-xs uppercase tracking-widest mb-6 border border-purple-500/30 ring-1 ring-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <BrainCircuit className="w-4 h-4" /> OsteoNet Engine
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Redefining <span className="font-serif italic text-purple-400 font-light">Radiomics.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Deep learning architectures analyzing intricate micro-details invisible to the human eye, accelerating clinical conclusions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6 relative z-10">
          {/* Main Large Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-[#0C061A]/80 backdrop-blur-3xl border border-purple-500/20 rounded-xl p-10 lg:p-14 group overflow-hidden relative flex flex-col shadow-[0_10px_40px_-10px_rgba(168,85,247,0.1)] hover:shadow-[0_10px_50px_-10px_rgba(168,85,247,0.3)] transition-all duration-500"
          >
            {/* Implied Glowing Nodes background */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_60%)] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] group-hover:bg-purple-500/40 transition-colors duration-700 pointer-events-none" />
            
            {/* Icon block */}
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-900/20 rounded-2xl flex items-center justify-center mb-10 border border-purple-500/30 shadow-[inset_0_0_20px_rgba(168,85,247,0.2)]">
              <Network className="w-8 h-8 text-purple-400" />
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10 tracking-tight">Neural Architecture Search</h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-12 relative z-10 max-w-lg">
              Adaptive CNN models that dynamically adjust mathematical filtering parameters based on individual scan resolution, ensuring perfectly robust predictions across all imaging equipment.
            </p>

            {/* Decorative HUD Element at bottom */}
            <div className="mt-auto relative z-10 w-full bg-[#05020B]/60 rounded-2xl p-6 border border-purple-500/10 flex items-center justify-between shadow-inner">
               <div className="flex gap-4 items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,1)] animate-pulse" />
                  <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">ResNet-152 Online</span>
               </div>
               <div className="flex gap-1.5 items-end h-8">
                  {/* Animated Bars mimicking processing load */}
                  <div className="w-1.5 bg-purple-500/40 rounded-t-full h-1/3 group-hover:h-2/3 transition-all duration-500 delay-100" />
                  <div className="w-1.5 bg-purple-500/60 rounded-t-full h-1/2 group-hover:h-full transition-all duration-500 delay-200" />
                  <div className="w-1.5 bg-purple-500 rounded-t-full h-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  <div className="w-1.5 bg-purple-500/80 rounded-t-full h-2/3 group-hover:h-full transition-all duration-500 delay-75" />
                  <div className="w-1.5 bg-purple-500/30 rounded-t-full h-1/4 group-hover:h-1/2 transition-all duration-500 delay-300" />
               </div>
            </div>
          </motion.div>

          {/* Side Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0C061A]/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-8 group relative overflow-hidden flex flex-col justify-between hover:border-purple-500/40 transition-all duration-500 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.05)] hover:shadow-[0_10px_50px_-10px_rgba(168,85,247,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20 shadow-inner">
                <Zap className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">Zero Latency</h4>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                Optimized TensorRT engines mathematically execute full-scan inferences in under 1.4 seconds.
              </p>
            </div>
          </motion.div>

          {/* Side Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0C061A]/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-8 group relative overflow-hidden flex flex-col justify-between hover:border-purple-500/40 transition-all duration-500 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.05)] hover:shadow-[0_10px_50px_-10px_rgba(168,85,247,0.2)]"
          >
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none group-hover:from-purple-600/15 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20 overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-400/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <Shield className="w-6 h-6 text-purple-400 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">HIPAA Safe</h4>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                Military-grade TLS 1.3 encryption executing with absolute zero retention of PHI data.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works visual timeline - Redesigned as a Neo-Glass Pipeline */}
      <section className="py-24 sm:py-32 bg-[#05020B] relative overflow-hidden border-y border-purple-900/30">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        
        {/* Deep background ambient neon */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Header Block */}
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 text-purple-400 font-bold text-xs uppercase tracking-widest mb-6 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                PIPELINE
              </div>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                Frictionless <br className="hidden lg:block"/> <span className="font-serif italic text-purple-400 font-light">Workflow.</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-10 mx-auto lg:mx-0 max-w-lg">
                Engineered explicitly for high-volume radiology arrays. Eliminate physical computational bottlenecks instantly.
              </p>
              <Link to="/upload" className="relative group overflow-hidden bg-white text-black px-8 py-4 rounded-xl font-extrabold text-lg inline-flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]">
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-white to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                 <span className="relative z-10 uppercase tracking-widest text-[14px]">Initialize Protocol</span> 
                 <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Interactive Glass Array */}
            <div className="w-full lg:w-2/3 relative">
              {/* Glowing Neural Pipeline Laser - Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-[-5%] right-0 h-[2px] bg-purple-900/30 z-0 -translate-y-1/2 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "200%" }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-[1px] shadow-[0_0_20px_rgba(168,85,247,1)]"
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-between relative z-10 w-full">
                {[
                  { step: "01", icon: <UploadCloud className="w-8 h-8" />, title: "Secure Upload", desc: "Drag & drop raw DICOM or JPEG datasets directly into the end-to-end TLS edge terminal." },
                  { step: "02", icon: <HeartPulse className="w-8 h-8" />, title: "Live Inference", desc: "Data streams via encrypted sockets to our TensorRT GPU cluster for massive parallel execution." },
                  { step: "03", icon: <FileCheck className="w-8 h-8" />, title: "Diagnostics", desc: "A highly deterministic, statistically detailed clinical AI report is compiled autonomously." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="flex-1 w-full"
                  >
                    {/* The Beautiful Glass Panel */}
                    <div className="bg-[#0C061A]/90 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-400/60 rounded-xl p-8 lg:p-10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] relative overflow-hidden group lg:hover:-translate-y-6 transition-all duration-500 w-full h-full flex flex-col items-start text-left">
                       
                       {/* Massive numeric watermark */}
                       <div className="absolute top-0 right-0 p-8 text-7xl font-bold text-white/[0.02] group-hover:text-purple-500/[0.05] transition-colors pointer-events-none -mt-4 -mr-2 font-serif italic select-none">
                         {item.step}
                       </div>
                       
                       {/* Holographic glowing icon box */}
                       <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 rounded-2xl flex justify-center items-center text-purple-400 mb-8 shadow-[inset_0_0_20px_rgba(168,85,247,0.1)] group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500 relative z-10">
                         {item.icon}
                       </div>
                       
                       <div className="text-purple-400 font-bold mb-3 font-mono tracking-widest text-xs uppercase relative z-10 group-hover:animate-pulse">Phase {item.step}</div>
                       <h4 className="text-2xl font-extrabold text-white mb-4 relative z-10 tracking-tight">{item.title}</h4>
                       <p className="text-gray-400 leading-relaxed relative z-10 text-[15px]">{item.desc}</p>
                       
                       {/* Bottom ambient lighting on hover */}
                       <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SaaS Grade CTA - Redesigned as a Hyper-Premium Supernova Core */}
      <section className="py-32 relative overflow-hidden bg-[#05020B] flex flex-col justify-center items-center px-4 sm:px-6 z-10">
        
        {/* Massive Ambient Core Lighting & Grid */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl w-full bg-[#0C061A]/40 border border-purple-500/20 rounded-xl p-12 lg:p-24 relative overflow-hidden shadow-[0_20px_80px_-20px_rgba(168,85,247,0.3)] backdrop-blur-2xl group flex flex-col items-center text-center"
        >
          {/* Card Internal Glow & Highlights */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />
          <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full group-hover:bg-purple-400/30 transition-colors duration-700 pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
            
            {/* Pulsing Core Icon */}
            <div className="w-20 h-20 bg-[#0C061A] border border-purple-500/40 rounded-2xl flex items-center justify-center mb-10 shadow-[inset_0_0_30px_rgba(168,85,247,0.2),0_0_40px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform duration-700 hover:border-purple-400">
              <Activity className="w-10 h-10 text-purple-400 animate-pulse" />
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1] w-full">
              Deploy predictive <br className="hidden md:block"/> 
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-purple-600 font-light drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">intelligence</span> today.
            </h2>
            
            <p className="text-xl text-gray-400 mb-14 max-w-2xl font-medium leading-relaxed drop-shadow-md">
              Stop relying solely on delayed centralized lab interpretations. Bring world-class GPU-accelerated AI directly to your clinical point of care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full z-20">
              {/* Primary Glowing Call to Action */}
              <Link to="/register" className="relative p-[1px] rounded-xl overflow-hidden group/btn w-full sm:w-auto shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-shadow duration-500 cursor-pointer">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,1)_360deg)] animate-[spin_2s_linear_infinite]" />
                <div className="relative bg-[#0C061A] hover:bg-[#150A2E] text-white px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 w-full transition-colors duration-300">
                  <span className="text-purple-100 group-hover/btn:text-white transition-colors">Start 14-Day Pilot</span>
                  <ArrowRight className="w-5 h-5 text-purple-400 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
                </div>
              </Link>
              
              {/* Secondary Ghost CTA */}
              <Link to="/contact" className="px-10 py-5 rounded-xl text-lg font-bold text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-md transition-all border border-purple-500/20 w-full sm:w-auto hover:-translate-y-1 hover:border-purple-500/50 cursor-pointer">
                Contact Enterprise
              </Link>
            </div>
            
            {/* Authenticity Footer */}
            <div className="mt-12 flex items-center justify-center gap-3">
               <Shield className="w-4 h-4 text-purple-500/60" />
               <p className="text-gray-500 text-sm font-medium uppercase tracking-widest bg-gradient-to-r from-transparent via-purple-500/10 to-transparent px-4 py-1">No credit card required</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
