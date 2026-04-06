import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/reports')
      .then(res => res.json())
      .then(data => {
        if (data && data.status === 'success' && Array.isArray(data.data)) setReports(data.data);
      })
      .catch(e => console.error("Reports API Error:", e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white tracking-tight">Clinical Reports</h1>
        <p className="text-gray-400 mt-1">Download monthly Overviews, risk summaries, and calibration logs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-12 text-center text-gray-500">Loading available system reports...</div>
        ) : (!reports || reports.length === 0) ? (
          <div className="col-span-full py-12 text-center text-gray-500">No reports available.</div>
        ) : (
          reports.map((report, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-gradient rounded-3xl p-6 border border-gray-800 hover:border-gray-700 transition flex flex-col"
            >
              <div className="w-12 h-12 bg-purple-900/20 text-purple-400 rounded-xl flex items-center justify-center mb-4 border border-purple-900/50">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white mb-2">{report?.title}</h3>
              <div className="text-sm text-gray-400 flex flex-col gap-1 mb-6 mt-auto">
                <span>Date: {report?.date}</span>
                <span>Format: {report?.type} • {report?.size}</span>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 hover:border-gray-600 transition p-2 rounded-xl flex items-center justify-center gap-2 text-sm font-medium">
                <Download className="w-4 h-4" /> Download
              </button>
            </motion.div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
