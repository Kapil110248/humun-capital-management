import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  ChevronRight, 
  X, 
  MoreVertical, 
  Calendar, 
  Briefcase, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
  TrendingUp, 
  Trash2,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useNavigate } from 'react-router-dom';

const MyApplications = () => {
  const navigate = useNavigate();
  const [selectedApp, setSelectedApp] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Total Applications', value: '14', icon: Briefcase, color: 'blue', bg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { label: 'Under Review', value: '4', icon: Clock, color: 'amber', bg: 'bg-amber-50', iconColor: 'text-amber-600' },
    { label: 'Interviews Scheduled', value: '2', icon: Calendar, color: 'purple', bg: 'bg-purple-50', iconColor: 'text-purple-600' },
    { label: 'Offers Received', value: '1', icon: CheckCircle2, color: 'green', bg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  ];

  const applications = [
    {
      id: 1,
      role: 'Senior Product Designer',
      department: 'Design & Creative',
      company: 'HCM.ai Global',
      appliedDate: 'Oct 24, 2026',
      status: 'Interview Scheduled',
      feedback: 'Interview round cleared. Awaiting final review.',
      timeline: ['Applied', 'Under Review', 'Shortlisted', 'Interview Scheduled'],
      currentStep: 4,
      interviewDate: 'Nov 2, 2026',
      interviewTime: '10:30 AM',
      resume: 'john_doe_resume_v2.pdf'
    },
    {
      id: 2,
      role: 'Lead Frontend Developer',
      department: 'Engineering',
      company: 'TechFlow',
      appliedDate: 'Oct 20, 2026',
      status: 'Under Review',
      feedback: 'Resume shortlisted. Technical screening next.',
      timeline: ['Applied', 'Under Review'],
      currentStep: 2,
      resume: 'john_doe_resume_v2.pdf'
    },
    {
      id: 3,
      role: 'Product Manager',
      department: 'Product',
      company: 'Stripe',
      appliedDate: 'Oct 15, 2026',
      status: 'Under Review',
      feedback: 'Awaiting team review.',
      timeline: ['Applied', 'Under Review'],
      currentStep: 2,
      resume: 'john_doe_resume_v1.pdf'
    },
    {
      id: 4,
      role: 'Marketing Lead',
      department: 'Marketing',
      company: 'GrowthLoop',
      appliedDate: 'Sep 28, 2026',
      status: 'Rejected',
      feedback: 'Looking for someone with more SaaS experience.',
      timeline: ['Applied', 'Under Review', 'Rejected'],
      currentStep: 3,
      resume: 'john_doe_resume_v1.pdf'
    },
    {
      id: 5,
      role: 'UX Researcher',
      department: 'Design',
      company: 'Vercel',
      appliedDate: 'Sep 15, 2026',
      status: 'Offer Sent',
      feedback: 'Excellent technical fit. Offer terms sent.',
      timeline: ['Applied', 'Review', 'Shortlisted', 'Interview', 'Offer Sent'],
      currentStep: 5,
      resume: 'john_doe_resume_v2.pdf'
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Applied': return 'bg-slate-100 text-slate-600';
      case 'Under Review': return 'bg-amber-50 text-amber-600';
      case 'Shortlisted': return 'bg-blue-50 text-blue-600';
      case 'Interview Scheduled': return 'bg-purple-50 text-purple-600';
      case 'Rejected': return 'bg-rose-50 text-rose-600';
      case 'Offer Sent': return 'bg-emerald-50 text-emerald-600';
      case 'Hired': return 'bg-indigo-50 text-indigo-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const steps = ['Applied', 'Review', 'Shortlisted', 'Interview', 'Offer', 'Hired'];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Applications</h1>
          <p className="text-slate-500 font-medium">Track your job applications and hiring progress</p>
        </div>
        <button 
          onClick={() => navigate('/candidate/jobs')}
          className="btn-primary px-5 py-2.5 font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-200"
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
            className="p-6 rounded-2xl bg-white border border-slate-100 shadow-soft transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className={cn("p-3 rounded-xl", stat.bg, stat.iconColor)}>
                <stat.icon size={24} />
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
      <div className="card p-6 border-none bg-white shadow-soft flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by job role or company..." 
            className="input-field pl-10 h-11"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="input-field h-11 appearance-none pr-10 w-full md:w-40 font-bold text-slate-600">
            <option value="">All Statuses</option>
            <option value="review">Under Review</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
          </select>
          <select className="input-field h-11 appearance-none pr-10 w-full md:w-40 font-bold text-slate-600">
            <option value="">Sort By</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <button className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-slate-50 border border-slate-100 rounded-xl transition-all h-11 w-11 flex items-center justify-center shrink-0">
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="card border-none bg-white p-0 shadow-soft overflow-hidden">
        <div className="hidden md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Job Role & Company</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Applied Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">HR Feedback</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {applications.map((app) => (
                <tr key={app.id} className="group hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-5">
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none">{app.role}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-xs font-bold text-primary-600">{app.company}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono">{app.department}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={14} className="text-slate-400" />
                      <span className="text-sm font-medium">{app.appliedDate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      getStatusStyle(app.status)
                    )}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-start gap-2 max-w-[240px]">
                      <MessageSquare size={14} className="text-slate-300 mt-0.5 shrink-0" />
                      <p className="text-xs font-medium text-slate-500 italic">"{app.feedback}"</p>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                       <button 
                        onClick={() => setSelectedApp(app)}
                        className="px-3 py-1.5 text-xs font-bold text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                      >
                         View Details
                      </button>
                      <button className="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Stacked Cards */}
        <div className="md:hidden divide-y divide-slate-100">
          {applications.map((app) => (
            <div key={app.id} className="p-4 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">{app.role}</h3>
                  <p className="text-sm font-bold text-primary-600">{app.company}</p>
                </div>
                <button className="p-2 text-slate-400">
                  <MoreVertical size={18} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                  getStatusStyle(app.status)
                )}>
                  {app.status}
                </span>
                <span className="text-xs text-slate-400 font-medium">{app.appliedDate}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                 <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Latest Feedback</p>
                 <p className="text-xs text-slate-600 font-medium italic">"{app.feedback}"</p>
              </div>
              <button 
                onClick={() => setSelectedApp(app)}
                className="w-full py-2.5 bg-primary-600 text-white rounded-xl text-sm font-bold shadow-lg"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Details Side Drawer */}
      <AnimatePresence>
        {selectedApp && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApp(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-[70] overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <button onClick={() => setSelectedApp(null)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                  <X size={24} />
                </button>
                <div className="flex gap-2">
                   <button className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                    <Trash2 size={20} />
                  </button>
                  <button className="px-6 py-2 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg active:scale-95">
                    Contact HR
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="mb-10">
                   <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-xl">
                    {selectedApp.company[0]}
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{selectedApp.role}</h2>
                  <p className="text-lg font-bold text-primary-600 mt-1">{selectedApp.company}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{selectedApp.department}</span>
                    <span className="text-sm text-slate-300">•</span>
                    <span className="text-sm font-medium text-slate-500">Applied on {selectedApp.appliedDate}</span>
                  </div>
                </div>

                <div className="space-y-10">
                  {/* Hiring Pipeline Tracker */}
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Hiring Timeline</h3>
                    <div className="relative">
                       {/* Connection Line */}
                       <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100"></div>
                       
                       <div className="space-y-8">
                         {steps.map((step, idx) => {
                           const isCompleted = idx + 1 < selectedApp.currentStep;
                           const isCurrent = idx + 1 === selectedApp.currentStep;
                           const isFuture = idx + 1 > selectedApp.currentStep;
                           
                           return (
                             <div key={idx} className="relative flex items-center gap-6 group">
                               <div className={cn(
                                 "w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 z-10 transition-all",
                                 isCompleted ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200" :
                                 isCurrent ? "bg-primary-600 text-white shadow-lg shadow-primary-200 scale-110" :
                                 "bg-slate-100 text-slate-400"
                               )}>
                                 {isCompleted ? <CheckCircle2 size={18} /> : idx + 1}
                               </div>
                               <div>
                                 <p className={cn(
                                   "text-sm font-bold transition-all",
                                   isCompleted || isCurrent ? "text-slate-900" : "text-slate-400"
                                 )}>
                                   {step}
                                 </p>
                                 {isCurrent && <p className="text-xs text-primary-600 font-bold bg-primary-50 px-2 py-0.5 rounded-full mt-1 inline-block">Current Stage</p>}
                               </div>
                             </div>
                           );
                         })}
                       </div>
                    </div>
                  </section>

                  <section className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                      <MessageSquare size={80} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 mb-2">Detailed HR Feedback</h3>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                      "{selectedApp.feedback}"
                    </p>
                  </section>

                  {selectedApp.interviewDate && (
                    <section className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg text-purple-600 shadow-sm">
                          <Calendar size={18} />
                        </div>
                        <h3 className="font-bold text-purple-900">Next Interview</h3>
                      </div>
                      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-purple-50">
                        <div>
                           <p className="text-lg font-extrabold text-slate-900">{selectedApp.interviewTime}</p>
                           <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">{selectedApp.interviewDate}</p>
                        </div>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-xs font-bold hover:bg-purple-700 transition-all shadow-lg active:scale-95">
                          View Link
                        </button>
                      </div>
                    </section>
                  )}

                  <section className="p-6 border border-slate-200 rounded-2xl flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                          <FileText size={24} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{selectedApp.resume}</p>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Resume</p>
                        </div>
                     </div>
                     <button className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all">
                        <ExternalLink size={20} />
                     </button>
                  </section>
                </div>
              </div>
              
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-4 shrink-0">
                <button className="flex-1 h-12 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all shadow-sm">
                  Withdraw Application
                </button>
                 <button className="flex-1 h-12 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">
                  Update Resume
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyApplications;
