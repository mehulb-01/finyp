import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Search, Filter } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';

export default function Scans() {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5001/api/v1/scans')
      .then(res => res.json())
      .then(data => {
        if (data && data.status === 'success' && Array.isArray(data.data)) {
          setScans([...data.data].reverse());
        }
      })
      .catch(e => console.error("Scans API Error:", e))
      .finally(() => setLoading(false));
  }, []);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Normal': return <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-900/30 text-green-400 border border-green-800">Normal</span>;
      case 'Moderate': return <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-900/30 text-yellow-400 border border-yellow-800">Moderate</span>;
      case 'High Risk': return <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-900/30 text-red-400 border border-red-800">High Risk</span>;
      default: return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Scans & Results</h1>
          <p className="text-gray-400 mt-1">Review all recent diagnostic imagery and AI analyses.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-gray-900 border border-gray-700 text-gray-300 px-4 py-2 rounded-xl text-sm font-medium hover:text-white transition">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-gradient rounded-3xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900/50 text-gray-400 text-xs uppercase tracking-wider relative border-b border-gray-800">
                <th className="px-6 py-4 font-medium">Scan ID</th>
                <th className="px-6 py-4 font-medium">Patient</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">AI Diagnosis</th>
                <th className="px-6 py-4 font-medium">Confidence</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {loading ? (
                <tr><td colSpan="7" className="px-6 py-8 text-center text-gray-500">Loading scans...</td></tr>
              ) : !scans || scans.length === 0 ? (
                <tr><td colSpan="7" className="px-6 py-8 text-center text-gray-500">No scans found in database.</td></tr>
              ) : (
                scans.map((scan, i) => (
                  <tr key={i} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-blue-400">{scan?.id}</td>
                    <td className="px-6 py-4 text-gray-200 font-medium">{scan?.patientName || `P-${scan?.patientId}`}</td>
                    <td className="px-6 py-4 text-gray-400">{scan?.scanType}</td>
                    <td className="px-6 py-4 text-gray-500">{scan?.date ? new Date(scan.date).toLocaleString() : 'N/A'}</td>
                    <td className="px-6 py-4 font-medium text-gray-300">{scan?.aiDiagnosis}</td>
                    <td className="px-6 py-4 text-gray-400">{scan?.confidence || 98.2}%</td>
                    <td className="px-6 py-4">{getStatusBadge(scan?.status)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
