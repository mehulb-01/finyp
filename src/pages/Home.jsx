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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/30 text-blue-400 font-bold text-xs uppercase tracking-widest mb-4 border border-blue-800/50">
            <BrainCircuit className="w-4 h-4" /> OsteoNet Engine
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Redefining Radiomics.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Our deep learning architectures analyze intricate microarchitectural details invisible to the human eye, accelerating clinical decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 relative">
          {/* Main Large Feature */}
          <motion.div 
            className="md:col-span-2 md:row-span-2 card-gradient rounded-[2rem] p-10 lg:p-14 group overflow-hidden relative flex flex-col"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500" />
            <div className="w-16 h-16 bg-gray-900/80 shadow-xl rounded-2xl flex items-center justify-center mb-8 border border-gray-800 z-10 font-bold backdrop-blur-md">
               <Network className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-4 z-10">Neural Architecture Search (NAS)</h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 z-10 max-w-md">
              Adaptive CNN models that dynamically adjust filtering parameters based on scan resolution, ensuring robust predictions across diverse imaging equipment.
            </p>
            <div className="mt-auto pt-8 border-t border-gray-800 flex items-center gap-4 z-10">
              <span className="text-sm font-bold text-gray-500">ResNet-152 Backbone</span>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span className="text-sm font-bold text-gray-500">Attention Mechanisms</span>
            </div>
          </motion.div>

          {/* Side Feature 1 */}
          <motion.div className="bg-[#051511] border border-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] rounded-[2rem] p-8 group relative overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-950/50 rounded-xl flex items-center justify-center mb-6 border border-emerald-800/50">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Zero Latency</h4>
              <p className="text-emerald-100/60 leading-relaxed text-sm">
                Optimized TensorRT engines execute inferences in under 1.4 seconds.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />
          </motion.div>

          {/* Side Feature 2 */}
          <motion.div className="bg-[#12051E] border border-purple-500/80 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] rounded-[2rem] p-8 group relative overflow-hidden flex flex-col justify-between transition-all duration-300">
            <div className="w-12 h-12 bg-purple-950/50 rounded-xl flex items-center justify-center mb-6 border border-purple-800/50">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">HIPAA Compliant</h4>
              <p className="text-purple-100/60 leading-relaxed text-sm">
                End-to-end TLS 1.3 encryption with zero retention of PHI data.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-colors" />
          </motion.div>
        </div>
      </section>

      {/* How it works visual timeline */}
      <section className="py-24 sm:py-32 bg-[#0B0F19] relative overflow-hidden border-y border-gray-800/50">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="w-full md:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/30 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-800/50">
                Process
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Frictionless Workflow</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Designed explicitly for high-volume radiology clinics. Eliminate bottlenecks with a streamlined AI pipeline.
              </p>
              <Link to="/upload" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 group">
                View Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-full md:w-2/3 relative h-full">
              {/* Connecting Line Desktop */}
              <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gray-800 rounded-full z-0 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                />
              </div>
              
              {/* Connecting Line Mobile */}
              <div className="md:hidden absolute left-[3.25rem] top-[10%] bottom-[10%] w-0.5 bg-gray-800 rounded-full z-0 overflow-hidden">
                <motion.div 
                  initial={{ y: "-100%" }}
                  whileInView={{ y: "100%" }}
                  viewport={{ once: false }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
                  className="w-full h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 justify-between relative z-10 w-full">
                {[
                  { step: "01", icon: <UploadCloud className="w-6 h-6" />, title: "Secure Upload", desc: "Drag & drop DICOM or JPEG scans directly into the edge terminal." },
                  { step: "02", icon: <HeartPulse className="w-6 h-6" />, title: "Live Inference", desc: "Data streams via encrypted sockets to our GPU cluster for parallel processing." },
                  { step: "03", icon: <FileCheck className="w-6 h-6" />, title: "Clinical Report", desc: "A highly detailed PDF report is generated outlining specific structural risks." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="flex md:flex-col items-center gap-6 md:gap-5 md:text-center w-full group cursor-default"
                  >
                    <div className="relative">
                      {/* Pulse ring */}
                      <div className="absolute inset-0 bg-blue-500 rounded-2xl animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                      
                      <div className="w-[6.5rem] h-[6.5rem] bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 shadow-xl text-blue-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 relative z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="relative z-10 bg-gray-800/80 w-14 h-14 rounded-xl flex items-center justify-center border border-gray-700/50 shadow-inner group-hover:bg-blue-900/30 transition-colors"
                        >
                          {item.icon}
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-center">
                      <div className="text-blue-500 font-bold mb-2 font-mono tracking-widest text-xs bg-blue-900/20 px-2 py-1 rounded inline-flex">STEP {item.step}</div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                      <p className="text-gray-400 text-sm max-w-[220px] leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* SaaS Grade CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-gray-950 flex justify-center items-center px-4">
        <motion.div 
          className="max-w-5xl w-full bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-blue-800/50 backdrop-blur-3xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Deploy predictive intelligence in your practice today.</h2>
            <p className="text-xl text-blue-200 mb-12 font-medium">Stop relying solely on delayed centralized lab interpretations. Bring world-class AI models directly to your point of care.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register" className="btn-gradient px-10 py-5 rounded-2xl text-lg w-full sm:w-auto shadow-2xl">
                Create Free Account
              </Link>
              <Link to="/contact" className="px-10 py-5 rounded-2xl text-lg font-bold text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all border border-white/10 w-full sm:w-auto">
                Contact Sales
              </Link>
            </div>
            
            <p className="text-gray-400 text-sm mt-8 font-medium">No credit card required • 14-day free pilot access</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
