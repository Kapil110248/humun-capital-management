import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Award, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle2, 
  Plus, 
  Download, 
  Search, 
  MoreVertical, 
  Eye, 
  ChevronRight, 
  X, 
  User, 
  Target, 
  BarChart3, 
  Zap,
  Info,
  Edit3,
  Calendar,
  Clock,
  CalendarDays
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const stats = [
    { label: 'Pending Reviews', value: '8', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Completed', value: '32', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Avg team Score', value: '4.6', icon: Star, color: 'text-primary-600', bg: 'bg-primary-50' },
    { label: 'Growth Tracks', value: '12', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const reviews = [
    { id: 1, name: 'Alice Cooper', role: 'Product Designer', period: 'Q3 2026', rating: '4.8', status: 'Submitted', strengths: 'UI/UX Design, Figma', improvement: 'Mentorship', img: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'Bob Marley', role: 'Frontend Lead', period: 'Q3 2026', rating: '4.5', status: 'Draft', strengths: 'React, Architecture', improvement: 'Communication', img: 'https://i.pravatar.cc/150?u=bob' },
    { id: 3, name: 'John Wick', role: 'DevOps Ops', period: 'Q2 2026', rating: '5.0', status: 'Acknowledged', strengths: 'Security, Cloud', improvement: 'None', img: 'https://i.pravatar.cc/150?u=john' },
    { id: 4, name: 'Sarah Connor', role: 'Project Mgr', period: 'Q2 2026', rating: '3.9', status: 'Closed', strengths: 'Planning', improvement: 'Stakeholders', img: 'https://i.pravatar.cc/150?u=sarah' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Performance Reviews</h1>
          <p className="text-slate-500 font-medium tracking-tight">Evaluate your team members, record feedback and track professional growth</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Export History</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Initiate Review</span>
          </button>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="card p-6 bg-white border border-slate-100 shadow-soft"
          >
            <div className="flex items-center gap-4">
               <div className={cn("p-3 rounded-2xl", stat.bg, stat.color)}>
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

      {/* Reviews List Area */}
      <div className="space-y-6">
         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
               {['All Periods', 'Q3 2026', 'Q2 2026', 'Drafts'].map((cat, i) => (
                  <button 
                    key={i} 
                    className={cn(
                       "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                       i === 0 ? "bg-slate-900 text-white shadow-xl shadow-slate-200" : "bg-white text-slate-400 border border-slate-100 hover:border-slate-300"
                    )}
                  >
                     {cat}
                  </button>
               ))}
            </div>
            <div className="group relative w-full lg:w-80">
               <Search className="absolute left-3 top-3 text-slate-400" size={18} />
               <input type="text" placeholder="Search by name or rating..." className="input-field pl-10 h-11" />
            </div>
         </div>

         <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-slate-50/50">
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Employee Info</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Period</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Avg Rating</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Strengths</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Status</th>
                        <th className="px-8 py-5 text-right text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Action</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-sm">
                     {reviews.map((user) => (
                        <tr key={user.id} className="group hover:bg-slate-50/20 transition-colors">
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                 <img src={user.img} alt={user.name} className="w-10 h-10 rounded-xl object-cover shadow-sm ring-2 ring-white" />
                                 <div>
                                    <p className="font-bold text-slate-900 leading-none">{user.name}</p>
                                    <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">{user.role}</p>
                                 </div>
                              </div>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <span className="text-xs font-bold text-slate-600">{user.period}</span>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                 <Star size={14} className="text-amber-400 fill-amber-400" />
                                 <span className="font-extrabold text-slate-900">{user.rating}</span>
                              </div>
                           </td>
                           <td className="px-8 py-6 text-center max-w-[200px]">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">{user.strengths}</p>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <span className={cn(
                                 "px-2.5 py-1 rounded-lg text-[9px] font-extrabold uppercase tracking-widest border",
                                 user.status === 'Submitted' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                 user.status === 'Draft' ? "bg-amber-50 text-amber-600 border-amber-100" :
                                 user.status === 'Acknowledged' ? "bg-indigo-50 text-indigo-600 border-indigo-100" :
                                 "bg-slate-50 text-slate-400 border-slate-100"
                              )}>
                                 {user.status}
                              </span>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <button onClick={() => setSelectedReview(user)} className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all">
                                 <Edit3 size={18} />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>

      {/* Review Modal Drawer */}
      <AnimatePresence>
        {selectedReview && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReview(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-[120] flex flex-col"
            >
               <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-5">
                     <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                        <Award size={24} />
                     </div>
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">Employee Review</h2>
                        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em] mt-2 leading-none">Process: {selectedReview.period} Cycle</p>
                     </div>
                  </div>
                  <button onClick={() => setSelectedReview(null)} className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 space-y-10">
                  {/* Summary Profile */}
                  <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center gap-6">
                     <img src={selectedReview.img} alt={selectedReview.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-xl" />
                     <div>
                        <h3 className="text-xl font-extrabold text-slate-900 leading-none">{selectedReview.name}</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">{selectedReview.role}</p>
                     </div>
                     <div className="ml-auto text-right">
                        <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">Status</p>
                        <span className="text-xl font-black text-slate-900">{selectedReview.status}</span>
                     </div>
                  </div>

                  <div className="space-y-8">
                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Key Strengths</label>
                           <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center font-bold text-slate-700 text-xs">
                              {selectedReview.strengths}
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Growth Areas</label>
                           <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center font-bold text-slate-700 text-xs text-indigo-600">
                              {selectedReview.improvement}
                           </div>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Manager Assessment</label>
                        <textarea className="input-field min-h-[160px] py-4 bg-slate-50 border-transparent resize-none text-sm font-medium leading-relaxed" placeholder="Summarize the employee's performance, achievements and areas of growth..."></textarea>
                     </div>

                     <div className="space-y-6">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Final Performance Rating</label>
                        <div className="flex justify-between items-center bg-slate-900 p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent pointer-events-none" />
                           <div className="relative z-10 flex gap-2">
                              {[1,2,3,4,5].map(s => (
                                 <button key={s} className={cn("p-1 transition-all transform hover:scale-125", s <= 4 ? "text-amber-400" : "text-white/10")}>
                                    <Star size={32} fill={s <= 4 ? "currentColor" : "none"} />
                                 </button>
                              ))}
                           </div>
                           <div className="relative z-10 text-right">
                              <p className="text-4xl font-extrabold text-white tracking-tighter">4.0</p>
                              <p className="text-[9px] font-bold text-primary-400 uppercase tracking-[0.2em] mt-1">Exceeds Exp.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex items-center gap-4 shrink-0">
                  <button onClick={() => setSelectedReview(null)} className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-sm">
                     Save Draft
                  </button>
                  <button className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                     <CheckCircle2 size={20} />
                     <span>Finalize Review</span>
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reviews;
