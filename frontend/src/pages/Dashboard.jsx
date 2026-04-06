import { motion } from 'framer-motion';
import { Activity, Users, FileText, Bone, TrendingUp, TrendingDown, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

export default function Dashboard() {
  const [totalScans, setTotalScans] = useState(0);
  const [activePatients, setActivePatients] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [recentHistory, setRecentHistory] = useState([]);
  const [highRiskCount, setHighRiskCount] = useState(0);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await fetch('/api/v1/overview');
        const data = await res.json();
        if (data.status === 'success') {
          setTotalScans(data.data.recentScans);
          setActivePatients(data.data.totalPatients);
          setConfidence(parseFloat(data.data.averageConfidence));
          setHighRiskCount(data.data.criticalAlerts);
          
          const history = data.data.recentHistory.map(scan => ({
            id: scan.id,
            patient: scan.patientName,
            date: new Date(scan.date).toLocaleString(),
            status: scan.status,
            score: scan.tScore
          }));
          setRecentHistory(history);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };
    
    fetchOverview();
    const interval = setInterval(fetchOverview, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Total Scans Analyzed", value: totalScans.toLocaleString(), change: "+12.5%", isPositive: true, icon: <Activity /> },
    { label: "High Risk Detected", value: highRiskCount.toLocaleString(), change: "+4.1%", isPositive: false, icon: <Bone /> },
    { label: "Active Patients", value: activePatients.toLocaleString(), change: "+8.2%", isPositive: true, icon: <Users /> },
    { label: "Avg. Confidence", value: confidence.toFixed(1) + "%", change: "+0.3%", isPositive: true, icon: <FileText /> }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Normal': return <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-900/30 text-green-400 border border-green-800 whitespace-nowrap">Normal</span>;
      case 'Moderate': return <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-900/30 text-yellow-400 border border-yellow-800 whitespace-nowrap">Moderate</span>;
      case 'High Risk': return <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-900/30 text-red-400 border border-red-800 whitespace-nowrap">High Risk</span>;
      default: return <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-800 text-gray-400 border border-gray-700 whitespace-nowrap">{status}</span>;
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white tracking-tight">Overview Dashboard</h1>
        <p className="text-gray-400 mt-1">Welcome back, Dr. Chen. Here's a summary of clinic activity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card-gradient rounded-2xl p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-900/30 text-blue-400 border border-blue-800/50 rounded-xl flex items-center justify-center">
                {stat.icon}
              </div>
              <span className={`inline-flex items-center gap-1 text-sm font-semibold rounded-full px-2 py-1 border ${stat.isPositive ? 'bg-green-900/20 text-green-400 border-green-800/50' : 'bg-red-900/20 text-red-400 border-red-800/50'}`}>
                {stat.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-extrabold text-white">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 card-gradient rounded-3xl overflow-hidden"
        >
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-500" /> Recent Scans
            </h3>
            <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900/50 text-gray-400 text-xs uppercase tracking-wider relative">
                  <th className="px-6 py-4 font-medium border-y border-gray-800">Scan ID</th>
                  <th className="px-6 py-4 font-medium border-y border-gray-800">Patient</th>
                  <th className="px-6 py-4 font-medium border-y border-gray-800">Date</th>
                  <th className="px-6 py-4 font-medium border-y border-gray-800">T-Score</th>
                  <th className="px-6 py-4 font-medium border-y border-gray-800">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-sm">
                {recentHistory.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-200">{row.id}</td>
                    <td className="px-6 py-4 text-gray-400">{row.patient}</td>
                    <td className="px-6 py-4 text-gray-500">{row.date}</td>
                    <td className="px-6 py-4 font-mono font-medium text-gray-300">{row.score}</td>
                    <td className="px-6 py-4">{getStatusBadge(row.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-gradient rounded-3xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none -mr-10 -mt-20"></div>
          <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-blue-500 mb-6 border border-gray-700 shadow-md relative z-10">
            <Activity className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 relative z-10">AI Diagnostic Engine</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed relative z-10">System is active. Models are synchronized and ready to process new DEXA/X-Ray imagery.</p>
          <button className="btn-gradient w-full py-3.5 rounded-xl flex items-center justify-center gap-2 relative z-10">
            Run New Prediction
          </button>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
