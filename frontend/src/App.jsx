import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Result from './pages/Result';
import Dashboard from './pages/Dashboard';
import PatientProfile from './pages/PatientProfile';
import Scans from './pages/Scans';
import Patients from './pages/Patients';
import Reports from './pages/Reports';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/result" element={<Result />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/scans" element={<Scans />} />
            <Route path="/dashboard/patients" element={<Patients />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/patient/:id" element={<PatientProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
