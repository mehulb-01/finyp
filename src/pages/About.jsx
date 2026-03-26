import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10 text-center mb-20">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Mission is to <br className="hidden md:block"/>
            <span className="text-gradient">Eradicate Silent Bone Disease</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            By leveraging state-of-the-art computer vision models, we provide radiologists and primary care physicians with an accessible, rapid, and highly accurate tool to assess osteoporosis risk from standard X-Ray and DEXA scans.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full mb-32">
        {[
          { icon: <Target className="w-8 h-8 text-blue-600" />, title: "Precision First", desc: "Our models have been trained on over 500,000 annotated image pairs, minimizing false negatives and enhancing diagnostic confidence." },
          { icon: <Zap className="w-8 h-8 text-blue-600" />, title: "Hyper-Fast Detection", desc: "An optimized backend pipeline allows for real-time inference, returning actionable results in mere seconds." },
          { icon: <Shield className="w-8 h-8 text-blue-600" />, title: "Privacy Guaranteed", desc: "All scans are processed ephemerally using edge-compatible AI workflows to ensure zero patient data retention." }
        ].map((feat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="card-gradient p-8 rounded-3xl"
          >
            <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 border border-blue-800/50">
              {feat.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{feat.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-gray-900 rounded-[2rem] p-12 overflow-hidden relative shadow-2xl text-center z-10 w-full">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2SDAvdjYwaDMydi0zMmgyOHYtMmgtdjMyaDI4di0zMkgzNnYtMmgyOHYtMjhIMzZ2MjhoMjh2MjhIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Built for Hackathons, Designed for Production</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            This project was rapidly prototyped combining modern frontend frameworks and powerful machine learning architectures to conceptualize the future of medical diagnostic UI.
          </p>
          <Link to="/upload" className="btn-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-xl">
            Try the App <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
