import { motion } from 'framer-motion';
import { ArrowLeft, Download, AlertTriangle, ShieldCheck, Activity, Info } from 'lucide-react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';

export default function Result() {
  const location = useLocation();
  
  const fallbackResult = {
    prediction: "Osteopenia Detected",
    patientId: "P-0000",
    confidence: 89.4,
    riskLevel: "Moderate",
    tScore: -1.8,
    suggestions: [
      "Schedule a follow-up DEXA scan in 12 months",
      "Discuss Vitamin D and Calcium supplementation with PCP",
      "Implement weight-bearing exercises 3x a week",
      "Review potential secondary causes of bone loss"
    ]
  };

  const result = location.state || fallbackResult;

  const getStatusColor = (level) => {
    switch(level) {
      case 'Normal': return 'text-green-500';
      case 'Moderate': return 'text-yellow-500';
      case 'High': return 'text-red-500';
      default: return 'text-blue-500';
    }
  };

  const getStatusBg = (level) => {
    switch(level) {
      case 'Normal': return 'bg-green-900/30 border border-green-800 text-green-400';
      case 'Moderate': return 'bg-yellow-900/30 border border-yellow-800 text-yellow-400';
      case 'High': return 'bg-red-900/30 border border-red-800 text-red-400';
      default: return 'bg-blue-900/30 border border-blue-800 text-blue-400';
    }
  };

  const generateProfessionalReport = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(33, 37, 41);
    doc.text("OsteoGuard AI", 20, 20);
    doc.setFontSize(14);
    doc.setTextColor(108, 117, 125);
    doc.text("Clinical Diagnostic Report", 20, 28);
    
    // Line Separator
    doc.setLineWidth(0.5);
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 32, 190, 32);

    // Patient & Scan Metadata
    doc.setFontSize(12);
    doc.setTextColor(33, 37, 41);
    doc.text(`Date of Analysis: ${new Date().toLocaleDateString()}`, 20, 44);
    doc.text(`Scan Modality: DEXA AP Spine / X-Ray`, 20, 52);
    doc.text(`Analysis Engine: OsteoNet-v3 (ResNet-50 Backend)`, 20, 60);

    // AI Prediction Section
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("AI Diagnostic Findings", 20, 78);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Primary Diagnosis: ${result.riskLevel === 'Normal' ? 'Normal Bone Density' : result.riskLevel === 'Moderate' ? 'Osteopenia Detected' : 'Osteoporosis Detected'}`, 20, 88);
    doc.text(`Risk Category: ${result.riskLevel} Risk`, 20, 96);
    doc.text(`Calculated T-Score Equivalent: ${result.tScore}`, 20, 104);
    doc.text(`AI Confidence: ${result.confidence}%`, 20, 112);

    // Suggestions Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Clinical Recommendations", 20, 130);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    let startY = 140;
    result.suggestions.forEach((suggestion) => {
      doc.text(`• ${suggestion}`, 25, startY);
      startY += 8;
    });

    // Disclaimer footer
    doc.setLineWidth(0.5);
    doc.line(20, 260, 190, 260);
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    const disclaimer = "Disclaimer: This AI-generated prediction is for informational purposes only and does not constitute a formal medical diagnosis. Always consult with a licensed healthcare provider to confirm findings and determine appropriate treatment.";
    const splitDisclaimer = doc.splitTextToSize(disclaimer, 170);
    doc.text(splitDisclaimer, 20, 266);

    // Save
    doc.save("OsteoGuard_Diagnostic_Report.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/upload" className="inline-flex items-center text-gray-400 hover:text-white mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Upload
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Result Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="card-gradient rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400" />
              <div className="flex justify-between items-start mb-6 pt-5">
                <div>
                  <h2 className="text-xl text-gray-400 font-semibold mb-1">AI Prediction Result</h2>
                  <h3 className="text-3xl font-extrabold text-white">{result.prediction}</h3>
                </div>
                <div className={`px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-1 ${getStatusBg(result.riskLevel)}`}>
                   <AlertTriangle className="w-4 h-4" /> {result.riskLevel} Risk
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-gray-400">Model Confidence</span>
                  <span className={`${getStatusColor(result.riskLevel)} font-bold`}>{result.confidence}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${result.confidence}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-yellow-400 h-3 rounded-full"
                  />
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-400" /> Key Findings & Suggestions
                </h4>
                <ul className="space-y-3">
                  {result.suggestions.map((s, i) => (
                    <li key={i} className="flex font-medium text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-900/20 rounded-2xl p-5 border border-blue-800/50 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-blue-300 text-sm mb-1">Clinical Disclaimer</h5>
                <p className="text-blue-200/80 text-xs leading-relaxed">
                  This AI-generated prediction is for informational purposes only and does not constitute a formal medical diagnosis. Always consult with a licensed radiologist or healthcare provider to confirm findings and determine appropriate treatment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar / Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 space-y-6"
          >
            <div className="card-gradient rounded-3xl p-6">
              <h4 className="font-bold text-white mb-4">Patient Metrics</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 flex justify-between items-center">
                  <span className="text-sm text-gray-400 font-medium">Patient ID</span>
                  <span className="text-lg font-bold text-blue-400">{result.patientId}</span>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 flex justify-between items-center">
                  <span className="text-sm text-gray-400 font-medium">Est. T-Score</span>
                  <span className="text-lg font-bold text-white">{result.tScore}</span>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 flex justify-between items-center">
                  <span className="text-sm text-gray-400 font-medium">Scan Type</span>
                  <span className="text-sm font-bold text-white">DEXA AP Spine</span>
                </div>
              </div>

              <button 
                onClick={generateProfessionalReport} 
                className="btn-gradient w-full mt-6 py-3 border-none flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download PDF Report
              </button>
            </div>
            
            <div className="card-gradient-dark rounded-3xl p-6 text-white relative overflow-hidden">
              <Activity className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 pointer-events-none" />
              <h4 className="font-bold mb-2">Model Info</h4>
              <p className="text-sm text-gray-400 mb-4">Inferred using OsteoNet-v3</p>
              <div className="text-xs text-gray-300 space-y-2 font-mono">
                <div className="flex justify-between border-b border-gray-700 pb-1"><span>Latency</span><span>1.24s</span></div>
                <div className="flex justify-between border-b border-gray-700 pb-1"><span>Resolution</span><span>1024x1024</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
