import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, RotateCcw, ChevronRight, X, MoreVertical, Calendar, Briefcase, 
  MessageSquare, CheckCircle2, Clock, AlertCircle, FileText, TrendingUp, Trash2, 
  ExternalLink, ChevronDown, Download, ArrowRight, ShieldAlert, Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useNavigate } from 'react-router-dom';
import { useCandidate } from '../../context/CandidateContext';
import CenterModal from '../../components/layout/CenterModal';

const MyApplications = () => {
  const { applications, withdrawApplication, showToast } = useCandidate();
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);
  const [isWithdrawConfirmOpen, setIsWithdrawConfirmOpen] = useState(false);

  const stats = [
    { label: 'Active Applications', value: applications.length, icon: Briefcase, color: 'blue', bg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { label: 'Under Review', value: applications.filter(a => a.status === 'Applied' || a.status === 'Under Review').length, icon: Clock, color: 'amber', bg: 'bg-amber-50', iconColor: 'text-amber-600' },
    { label: 'Interviews Scheduled', value: applications.filter(a => a.status === 'Shortlisted' || a.status === 'Interview').length, icon: Calendar, color: 'purple', bg: 'bg-purple-50', iconColor: 'text-purple-600' },
    { label: 'Success Rate', value: '15%', icon: TrendingUp, color: 'green', bg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  ];

  const filteredApplications = useMemo(() => {
    return applications.filter(a => {
      const matchesSearch = a.role.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            a.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = !statusFilter || a.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [applications, searchTerm, statusFilter]);

  const handleWithdraw = () => {
    withdrawApplication(selectedApp.id);
    setIsWithdrawConfirmOpen(false);
    setSelectedApp(null);
  };

  const statusMap = {
    'Applied': { bg: 'bg-slate-50', text: 'text-slate-500', border: 'border-slate-100' },
    'Under Review': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
    'Shortlisted': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
    'Interview': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
    'Offer Received': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
    'Rejected': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' },
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-7xl mx-auto text-left">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">MY APPLICATIONS</h1>
          <p className="text-slate-500 font-bold tracking-tight uppercase text-xs mt-1">Track your job applications and hiring status</p>
        </div>
        <button 
          onClick={() => navigate('/candidate/jobs')}
          className="flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-slate-200 active:scale-95"
        >
          <Search size={18} />
          <span>Browse Jobs</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-soft transition-all group hover:border-primary-100"
          >
            <div className="flex items-center gap-5">
              <div className={cn("p-4 rounded-2xl shadow-sm", stat.bg, stat.iconColor)}>
                <stat.icon size={26} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-2">{stat.label}</p>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Control Panel */}
      <div className="card p-8 border-none bg-white shadow-soft flex flex-col md:flex-row items-center gap-6">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search applications..." 
            className="input-field pl-12 h-14 bg-slate-50 border-transparent font-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input-field h-14 px-6 bg-slate-50 border-transparent font-black appearance-none cursor-pointer w-full md:w-56"
          >
            <option value="">Filter by Status: All</option>
            <option value="Applied">Applied</option>
            <option value="Under Review">Under Review</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button 
            onClick={() => { setSearchTerm(''); setStatusFilter(''); }}
            className="p-4 text-slate-400 hover:text-primary-600 hover:bg-white bg-slate-50 border border-slate-50 rounded-2xl transition-all shadow-sm shrink-0"
          >
            <RotateCcw size={22} />
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="card border-none bg-white p-0 shadow-soft overflow-hidden">
        <div className="overflow-x-auto text-left">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Job Details</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Applied On</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Next Step</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredApplications.length > 0 ? filteredApplications.map((app) => (
                <tr key={app.id} className="group hover:bg-slate-50/50 transition-colors cursor-pointer" onClick={() => setSelectedApp(app)}>
                  <td className="px-8 py-7">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-sm italic shadow-xl group-hover:scale-110 transition-transform">
                        {app.company.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900 leading-none italic tracking-tight uppercase">{app.role}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{app.company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-7 text-center">
                    <p className="text-xs font-black text-slate-500 tabular-nums uppercase">{app.date}</p>
                  </td>
                  <td className="px-8 py-7 text-center">
                    <span className={cn(
                      "px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border italic whitespace-nowrap",
                      statusMap[app.status]?.bg || 'bg-slate-50',
                      statusMap[app.status]?.text || 'text-slate-400',
                      statusMap[app.status]?.border || 'border-slate-100'
                    )}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-8 py-7">
                    <div className="flex items-center gap-3 justify-center">
                      <Zap size={14} className={cn(app.status === 'Shortlisted' ? 'text-blue-500' : 'text-slate-200')} />
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Awaiting Response</p>
                    </div>
                  </td>
                  <td className="px-8 py-7 text-right">
                    <button className="p-3 bg-slate-50 text-slate-300 hover:text-primary-600 hover:bg-white border border-slate-50 rounded-2xl shadow-sm transition-all group-hover:scale-110 group-hover:border-transparent group-hover:shadow-xl">
                      <ExternalLink size={20} />
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                   <td colSpan="5" className="py-32 text-center flex flex-col items-center">
                      <Search size={48} className="text-slate-200 mb-6 animate-pulse" />
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">No applications found</p>
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Tracker Modal */}
      <CenterModal isOpen={!!selectedApp} onClose={() => setSelectedApp(null)} title="Application Details">
         {selectedApp && (
            <div className="p-10 space-y-12 text-left">
               <div className="flex items-start gap-8 border-b border-slate-50 pb-10">
                  <div className="w-20 h-20 rounded-[1.75rem] bg-slate-900 text-white flex items-center justify-center font-black text-3xl italic shadow-2xl">
                    {selectedApp.company.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic uppercase leading-none">{selectedApp.role}</h2>
                    <p className="text-sm font-black text-primary-600 mt-3 uppercase tracking-widest flex items-center gap-3">
                       {selectedApp.company} • ID: {selectedApp.id}
                    </p>
                    <div className="flex gap-4 mt-6">
                      <div className="px-4 py-1.5 bg-slate-50 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Applied {selectedApp.date}</div>
                    </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8 leading-none">Application Timeline</h3>
                  <div className="relative space-y-10 pl-10 border-l-2 border-slate-50 ml-4">
                     {['Applied', 'Under Review', 'Shortlisted', 'Interview', 'Offer'].map((step, idx) => {
                        const historyIndex = selectedApp.timeline.findIndex(t => t.status === step);
                        const isCompleted = historyIndex !== -1;
                        const isLatest = historyIndex === selectedApp.timeline.length - 1;
                        
                        return (
                           <div key={idx} className="relative">
                              <div className={cn(
                                 "absolute -left-[50px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500",
                                 isCompleted ? "bg-primary-600" : "bg-slate-100",
                                 isLatest && "scale-150 ring-4 ring-primary-50"
                              )} />
                              <div className={cn("transition-all duration-500", !isCompleted && "opacity-30")}>
                                 <p className="text-sm font-black text-slate-900 italic tracking-tight uppercase">{step}</p>
                                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                                    {isCompleted ? `Updated On: ${selectedApp.timeline[historyIndex].date}` : 'Not yet reached'}
                                 </p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>

               <div className="bg-slate-900 p-8 rounded-[2.5rem] text-left relative overflow-hidden shadow-premium">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                     <MessageSquare size={100} className="text-white" />
                  </div>
                  <h4 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.4em] mb-4 leading-none italic">Recruiter Feedback</h4>
                  <p className="text-sm font-bold text-white italic leading-relaxed relative z-10">
                     "Candidate's technical profile aligns with strategic core competencies. Digital footprint shows strong ecosystem engagement. Maintain in high-priority queue."
                  </p>
               </div>

               <div className="pt-8 flex gap-4 border-t border-slate-50">
                  <button 
                    onClick={() => { setIsWithdrawConfirmOpen(true); }}
                    className="flex-1 py-4 bg-rose-50 text-rose-600 border border-rose-100 rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] hover:bg-rose-100 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} /> Withdraw Application
                  </button>
                  <button 
                    onClick={() => showToast('Full report generated', 'info')}
                    className="flex-1 py-4 bg-slate-900 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] shadow-xl shadow-slate-200 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Download size={16} /> Download Summary
                  </button>
               </div>
            </div>
         )}
      </CenterModal>

      {/* Withdrawal Confirmation */}
      <CenterModal isOpen={isWithdrawConfirmOpen} onClose={() => setIsWithdrawConfirmOpen(false)} title="Confirm Action">
         <div className="p-10 text-center space-y-8">
            <div className="w-20 h-20 bg-rose-50 rounded-[2rem] flex items-center justify-center mx-auto text-rose-500 shadow-lg border border-rose-100 animate-pulse">
               <ShieldAlert size={36} />
            </div>
            <div>
               <h3 className="text-2xl font-black text-slate-900 italic tracking-tight mb-2">Confirm Withdrawal</h3>
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">This will permanently withdraw your application for the <span className="text-slate-900">{selectedApp?.role}</span> position at <span className="text-slate-900">{selectedApp?.company}</span>.</p>
            </div>
            <div className="flex gap-4">
               <button onClick={() => setIsWithdrawConfirmOpen(false)} className="flex-1 py-4 bg-slate-50 text-slate-400 rounded-2xl font-black uppercase tracking-widest text-[10px]">Cancel</button>
               <button onClick={handleWithdraw} className="flex-1 py-4 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-rose-200 active:scale-95">Withdraw Application</button>
            </div>
         </div>
      </CenterModal>
    </div>
  );
};

export default MyApplications;
