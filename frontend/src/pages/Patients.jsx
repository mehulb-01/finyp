import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5001/api/v1/patients')
      .then(res => res.json())
      .then(data => {
        if (data && data.status === 'success' && Array.isArray(data.data)) {
          setPatients([...data.data].reverse());
        }
      })
      .catch(e => console.error("Patients API Error:", e))
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
          <h1 className="text-2xl font-bold text-white tracking-tight">Patient Records</h1>
          <p className="text-gray-400 mt-1">Manage all registered patients and clinical histories.</p>
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
                <th className="px-6 py-4 font-medium">Patient ID</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Age</th>
                <th className="px-6 py-4 font-medium">Gender</th>
                <th className="px-6 py-4 font-medium">Last Visit</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {loading ? (
                <tr><td colSpan="7" className="px-6 py-8 text-center text-gray-500">Loading patients...</td></tr>
              ) : !patients || patients.length === 0 ? (
                <tr><td colSpan="7" className="px-6 py-8 text-center text-gray-500">No patients found.</td></tr>
              ) : (
                patients.map((patient, i) => (
                  <tr key={i} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">{patient?.id}</td>
                    <td className="px-6 py-4 text-white font-medium">{patient?.name}</td>
                    <td className="px-6 py-4 text-gray-400">{patient?.age} years</td>
                    <td className="px-6 py-4 text-gray-400">{patient?.gender}</td>
                    <td className="px-6 py-4 text-gray-500">{patient?.lastVisit}</td>
                    <td className="px-6 py-4">{getStatusBadge(patient?.status)}</td>
                    <td className="px-6 py-4">
                      <Link to={`/patient/${patient?.id}`} className="text-blue-500 hover:text-blue-400 font-medium text-xs border border-blue-900/50 bg-blue-900/10 px-3 py-1.5 rounded-lg transition">View Profile</Link>
                    </td>
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
