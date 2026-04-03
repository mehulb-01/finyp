import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            Interested in implementing OsteoGuard AI in your clinical trials or hospital network? Reach out to our technical integration team.
          </p>

          <div className="space-y-8">
            {[
              { icon: <Mail className="w-6 h-6 text-primary" />, title: "Email Us", info: "partnerships@osteoguard.ai", subtitle: "We typically respond within 24 hours." },
              { icon: <Phone className="w-6 h-6 text-primary" />, title: "Call Us", info: "+1 (800) 123-4567", subtitle: "Mon-Fri from 9am to 6pm EST." },
              { icon: <MapPin className="w-6 h-6 text-primary" />, title: "Office", info: "Tech Hub, Silicon Valley, CA", subtitle: "100 Innovation Drive, Suite 300." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-800/50 shadow-sm mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-primary font-medium">{item.info}</p>
                  <p className="text-sm text-gray-400 mt-1">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-950/80 border border-blue-900/50 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl backdrop-blur-sm">
            <MessageSquare className="absolute -right-8 -bottom-8 w-40 h-40 text-blue-900 opacity-50" />
            <h4 className="text-xl font-bold mb-3 relative z-10">Technical Support</h4>
            <p className="text-blue-200 text-sm mb-6 relative z-10 max-w-sm">Having issues integrating our API endpoints into your PACS system? View our docs.</p>
            <button className="bg-gray-900 text-white border border-gray-800 px-6 py-2.5 rounded-lg font-bold text-sm relative z-10 shadow-md hover:bg-gray-800 transition-colors">
              Developer Docs
            </button>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-gradient rounded-[2.5rem] p-10 relative"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full opacity-60 pointer-events-none" />

          <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send us a message</h3>
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">First Name</label>
                <input type="text" className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-600" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Last Name</label>
                <input type="text" className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-600" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Email Address</label>
              <input type="email" className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-600" placeholder="john@hospital.org" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Organization</label>
              <input type="text" className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-600" placeholder="General Hospital" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Message</label>
              <textarea rows="4" className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder-gray-600" placeholder="Tell us about your requirements..."></textarea>
            </div>

            <button type="submit" className="btn-gradient w-full py-4 rounded-xl flex items-center justify-center gap-2 group">
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
