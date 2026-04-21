import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  FileText, 
  Filter, 
  RotateCcw, 
  MoreVertical, 
  Download, 
  CheckCircle2, 
  Clock, 
  X, 
  Eye, 
  Mail, 
  Phone, 
  Calendar, 
  ArrowRight, 
  Briefcase, 
  Star,
  MapPin,
  ExternalLink,
  Trash2
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Candidates = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const stats = [
    { label: 'Total Candidates', value: '1,248', icon: FileText, bg: 'bg-blue-50', color: 'text-blue-600' },
    { label: 'Shortlisted', value: '184', icon: CheckCircle2, bg: 'bg-emerald-50', color: 'text-emerald-600' },
    { label: 'Interviewing', value: '42', icon: Clock, bg: 'bg-amber-50', color: 'text-amber-600' },
    { label: 'Hired', icon: Briefcase, value: '12', bg: 'bg-indigo-50', color: 'text-indigo-600' },
  ];

  const candidates = [
    {
      id: 1,
      name: 'Alice Cooper',
      email: 'alice@example.com',
      role: 'Senior Product Designer',
      exp: '5 Years',
      match: 94,
      status: 'Shortlisted',
      date: 'Oct 24, 2026',
      img: 'https://i.pravatar.cc/150?u=alice'
    },
    {
      id: 2,
      name: 'Bob Marley',
      email: 'bob@tech.com',
      role: 'Lead Frontend Engineer',
      exp: '12 Years',
      match: 98,
      status: 'Interview',
      date: 'Oct 23, 2026',
      img: 'https://i.pravatar.cc/150?u=bob'
    },
    {
      id: 3,
      name: 'Diana Ross',
      email: 'diana@corp.com',
      role: 'UX Researcher',
      exp: '3 Years',
      match: 76,
      status: 'Screening',
      date: 'Oct 22, 2026',
      img: 'https://i.pravatar.cc/150?u=diana'
    },
    {
      id: 4,
      name: 'John Wick',
      email: 'wick@assassin.com',
      role: 'Security Specialist',
      exp: '15 Years',
      match: 100,
      status: 'Hired',
      date: 'Sep 10, 2026',
      img: 'https://i.pravatar.cc/150?u=john'
    },
    {
      id: 5,
      name: 'Sarah Connor',
      email: 'sarah@resistance.org',
      role: 'Project Manager',
      exp: '8 Years',
      match: 88,
      status: 'Rejected',
      date: 'Oct 15, 2026',
      img: 'https://i.pravatar.cc/150?u=sarah'
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Shortlisted': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Interview': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'Screening': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Hired': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'Rejected': return 'bg-rose-50 text-rose-500 border-rose-100';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Candidates</h1>
          <p className="text-slate-500 font-medium">Review applicants and move top talent through the pipeline</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Bulk Export</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Add Candidate</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="card p-6 bg-white border border-slate-100 shadow-soft"
          >
            <div className="flex items-center gap-4">
               <div className={cn("p-3 rounded-2xl transition-colors", stat.bg, stat.color)}>
                  <stat.icon size={26} />
               </div>
               <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{stat.label}</p>
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</h3>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="card p-6 border-none bg-white shadow-soft flex flex-col lg:flex-row items-center gap-4 overflow-visible">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input type="text" placeholder="Search by name, email, or role..." className="input-field pl-10 h-11" />
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <select className="input-field h-11 appearance-none pr-10 w-full sm:w-48 font-bold text-slate-600">
            <option value="">AI Match Range</option>
            <option value="90">90% +</option>
            <option value="75">75% - 90%</option>
          </select>
          <select className="input-field h-11 appearance-none pr-10 w-full sm:w-40 font-bold text-slate-600">
            <option value="">Status</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="interview">Interview</option>
          </select>
          <button className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-slate-50 border border-slate-100 rounded-xl transition-all h-11 w-11 flex items-center justify-center shrink-0">
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Candidates Table */}
      <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Candidate Info</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Role Applied</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">AI Match</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Resume</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {candidates.map((cand) => (
                <tr key={cand.id} className="group hover:bg-slate-50/10 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <img src={cand.img} alt={cand.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm" />
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-none">{cand.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 mt-1.5">{cand.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-700">{cand.role}</p>
                      <p className="text-xs font-medium text-slate-400">{cand.exp} Exp</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-center gap-1.5">
                       <span className={cn(
                          "text-[10px] font-extrabold uppercase tracking-widest",
                          cand.match > 90 ? "text-emerald-500" : "text-amber-500"
                       )}>{cand.match}% Match</span>
                       <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          <div className={cn("h-full rounded-full transition-all", cand.match > 90 ? "bg-emerald-500" : "bg-amber-500")} style={{ width: `${cand.match}%` }} />
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                      getStatusStyle(cand.status)
                    )}>
                      {cand.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all flex items-center gap-2">
                       <FileText size={18} />
                       <span className="text-xs font-bold">View</span>
                    </button>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-1">
                      <button 
                        onClick={() => setSelectedCandidate(cand)}
                        className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                      >
                         <Eye size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Calendar size={18} /></button>
                      <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Candidate Profile Drawer */}
      <AnimatePresence>
        {selectedCandidate && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCandidate(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-2xl bg-white shadow-2xl z-[120] flex flex-col"
            >
               <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-4">
                     <img src={selectedCandidate.img} alt={selectedCandidate.name} className="w-12 h-12 rounded-2xl object-cover ring-4 ring-white shadow-xl" />
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">{selectedCandidate.name}</h2>
                        <p className="text-sm font-bold text-primary-600 mt-1">{selectedCandidate.role}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-xl transition-all">
                        <MoreVertical size={20} />
                     </button>
                     <button onClick={() => setSelectedCandidate(null)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                        <X size={24} />
                     </button>
                  </div>
               </div>

               <div className="flex-1 overflow-y-auto p-8 space-y-10">
                  <div className="grid grid-cols-2 gap-6">
                     <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">AI Match Score</p>
                        <div className="flex items-end gap-2">
                           <span className="text-3xl font-extrabold text-emerald-600">{selectedCandidate.match}%</span>
                           <span className="text-xs font-bold text-emerald-500 mb-1 flex items-center gap-0.5"><Sparkles size={12} /> Elite Match</span>
                        </div>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Status</p>
                        <div className="flex items-end gap-2">
                           <span className="text-xl font-extrabold text-slate-900">{selectedCandidate.status}</span>
                        </div>
                     </div>
                  </div>

                  <section className="space-y-4">
                     <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Contact Details</h3>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-slate-600 italic">
                           <Mail size={16} className="text-slate-300" />
                           <span className="text-sm font-medium">{selectedCandidate.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 italic">
                           <Phone size={16} className="text-slate-300" />
                           <span className="text-sm font-medium">+1 (555) 000-0000</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 italic">
                           <MapPin size={16} className="text-slate-300" />
                           <span className="text-sm font-medium">San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-3 text-primary-600">
                           <ExternalLink size={16} className="text-primary-300" />
                           <span className="text-sm font-bold">LinkedIn Profile</span>
                        </div>
                     </div>
                  </section>

                  <section className="space-y-4">
                     <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Quick Notes</h3>
                     <textarea className="input-field py-4 resize-none h-32" placeholder="Add a recruiter note for this candidate..."></textarea>
                  </section>
               </div>

               <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center gap-3">
                  <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-sm">
                     Reject Candidate
                  </button>
                  <button className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg active:scale-95">
                     Schedule Interview
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Candidates;
