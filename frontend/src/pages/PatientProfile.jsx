import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Calendar, Activity, Bone, Edit3, Save, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardLayout from '../layouts/DashboardLayout';

export default function PatientProfile() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', age: '', gender: '' });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:5001/api/v1/patients/${id}`);
        const data = await res.json();
        if (data.status === 'success') {
          setPatient(data.data);
          setEditForm({ name: data.data.name, age: data.data.age, gender: data.data.gender });
        }
      } catch (err) {
        console.error('Error fetching patient:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPatient();
  }, [id]);

  if (loading) return (
    <DashboardLayout>
      <div className="flex justify-center items-center h-64 text-white">Loading profile...</div>
    </DashboardLayout>
  );

  if (!patient) return (
    <DashboardLayout>
      <div className="flex justify-center items-center h-64 text-white">Patient not found.</div>
    </DashboardLayout>
  );

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`http://127.0.0.1:5001/api/v1/patients/${patient.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      });
      const data = await res.json();
      if (data.status === 'success') {
        setPatient(prev => ({ ...prev, name: data.data.name, age: data.data.age, gender: data.data.gender }));
        setIsEditing(false);
      }
    } catch (e) {
      console.error("Failed to update record", e);
      alert("Error saving patient details.");
    } finally {
      setIsSaving(false);
    }
  };

  // Format data for Recharts (T-Score progression)
  const chartData = (patient.scans || []).map((scan, index) => ({
    name: `Scan ${index + 1}`,
    date: new Date(scan.date).toLocaleDateString(),
    tScore: parseFloat(scan.tScore),
  }));

  const getStatusBg = (level) => {
    switch(level) {
      case 'Normal': return 'bg-green-900/30 border border-green-800 text-green-400';
      case 'Moderate': return 'bg-yellow-900/30 border border-yellow-800 text-yellow-400';
      case 'High Risk': return 'bg-red-900/30 border border-red-800 text-red-400';
      default: return 'bg-blue-900/30 border border-blue-800 text-blue-400';
    }
  };

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
      <Link to="/dashboard" className="inline-flex items-center text-gray-400 hover:text-white mb-6 font-medium transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Patient Detail Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-1 space-y-6"
        >
          <div className="card-gradient rounded-3xl p-6 text-center border-b border-gray-800 pb-8 relative overflow-hidden">
            <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-gray-500 mb-4 border-2 border-gray-700">
               <User className="w-10 h-10" />
            </div>
            {isEditing ? (
              <input 
                type="text" 
                className="bg-gray-900 border border-blue-500 rounded-lg px-3 py-1.5 text-white font-bold text-xl text-center w-full mb-1 focus:outline-none" 
                value={editForm.name} 
                onChange={e => setEditForm({...editForm, name: e.target.value})} 
                placeholder="Patient Full Name"
              />
            ) : (
              <h2 className="text-2xl font-bold text-white tracking-tight">{patient.name}</h2>
            )}
            <p className="text-sm text-gray-400 mb-4">ID: {patient.id}</p>
            <span className={`px-4 py-1.5 rounded-full font-bold text-xs ${getStatusBg(patient.status)}`}>
               {patient.status}
            </span>
          </div>

          <div className="card-gradient rounded-3xl p-6">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2 mb-4">
              <h3 className="font-semibold text-white">Medical Profile</h3>
              {!isEditing ? (
                <button onClick={() => setIsEditing(true)} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-xs font-semibold px-2 py-1 bg-blue-900/20 rounded-lg border border-blue-900/50 transition">
                  <Edit3 className="w-3 h-3" /> Edit
                </button>
              ) : (
                <div className="flex gap-2">
                  <button onClick={() => { setIsEditing(false); setEditForm({name: patient.name, age: patient.age, gender: patient.gender}); }} className="p-1.5 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition" title="Cancel">
                    <X className="w-3 h-3" />
                  </button>
                  <button onClick={handleSave} disabled={isSaving} className="p-1.5 text-green-400 hover:text-white bg-green-900/20 hover:bg-green-600 rounded-lg border border-green-900/50 transition" title="Save Changes">
                    <Save className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Age</span>
                {isEditing ? (
                  <input type="number" className="bg-gray-900 border border-blue-500 rounded px-2 py-1 text-white w-20 text-sm text-right focus:outline-none" value={editForm.age} onChange={e => setEditForm({...editForm, age: e.target.value})} />
                ) : (
                  <span className="text-white font-medium">{patient.age}</span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Gender</span>
                {isEditing ? (
                  <select className="bg-gray-900 border border-blue-500 rounded px-2 py-1 text-white w-24 text-sm focus:outline-none" value={editForm.gender} onChange={e => setEditForm({...editForm, gender: e.target.value})}>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                ) : (
                  <span className="text-white font-medium">{patient.gender}</span>
                )}
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Total Scans</span>
                <span className="text-white font-medium">{patient.scans ? patient.scans.length : 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm flex items-center gap-1"><Calendar className="w-3 h-3" /> Last Visit</span>
                <span className="text-white font-medium">{patient.lastVisit}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Graphs and Analysis */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 space-y-8"
        >
          {/* T-Score Graph */}
          <div className="card-gradient rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400" /> T-Score Progression Over Time
              </h3>
            </div>
            <div className="h-72 w-full">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis dataKey="date" stroke="#9CA3AF" tick={{fill: '#9CA3AF', fontSize: 12}} />
                    <YAxis stroke="#9CA3AF" tick={{fill: '#9CA3AF', fontSize: 12}} domain={[-4, 2]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff', borderRadius: '8px' }}
                      itemStyle={{ color: '#60A5FA' }}
                    />
                    <Line type="monotone" dataKey="tScore" stroke="#60A5FA" strokeWidth={3} dot={{ r: 6, fill: '#1E3A8A', strokeWidth: 2, stroke: '#60A5FA' }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-gray-500">No scan data available</div>
              )}
            </div>
          </div>

          {/* Historical Scan Logs */}
          <div className="card-gradient rounded-3xl p-6">
            <h3 className="font-bold text-white flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
              <Bone className="w-5 h-5 text-purple-400" /> Complete Scan History
            </h3>
            <div className="space-y-3">
              {(patient.scans || []).map((scan, i) => (
                <div key={i} className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 flex justify-between items-center transition-colors hover:bg-gray-800">
                  <div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                      <span className="text-white font-medium">{scan.scanType}</span>
                      <span className="text-xs text-gray-500 hidden sm:inline">•</span>
                      <span className="text-sm text-gray-400">{new Date(scan.date).toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-blue-400 mt-1">AI Confidence: {scan.confidence}% • ID: {scan.id}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">T-Score</div>
                      <div className="text-white font-mono font-bold leading-none">{scan.tScore}</div>
                    </div>
                    <div>{getStatusBadge(scan.status)}</div>
                  </div>
                </div>
              ))}
              {(patient.scans || []).length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">No scans on record.</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
