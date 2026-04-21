import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  BarChart3, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Search, 
  Download, 
  ChevronRight, 
  MoreVertical, 
  Star, 
  Zap, 
  ArrowUpRight, 
  X, 
  Calendar, 
  LayoutGrid,
  TrendingDown,
  User,
  Activity
} from 'lucide-react';
import { cn } from '../../utils/cn';

const KPITracking = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const stats = [
    { label: 'Active Goals', value: '24', icon: Target, color: 'text-primary-600', bg: 'bg-primary-50' },
    { label: 'Completed', value: '142', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Overdue', value: '3', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Avg Performance', value: '88%', icon: BarChart3, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const goals = [
    { id: 1, name: 'Alice Cooper', title: 'Redesign HR Dashboard', category: 'Design', progress: 85, deadline: 'Oct 31, 2026', priority: 'High', status: 'On Track', img: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'Bob Marley', title: 'Implement Design System', category: 'Engineering', progress: 40, deadline: 'Nov 15, 2026', priority: 'Medium', status: 'At Risk', img: 'https://i.pravatar.cc/150?u=bob' },
    { id: 3, name: 'Diana Ross', title: 'UX Research Sprint', category: 'UX Research', progress: 100, deadline: 'Oct 20, 2026', priority: 'Medium', status: 'Completed', img: 'https://i.pravatar.cc/150?u=diana' },
    { id: 4, name: 'John Wick', title: 'Security Audit - Phase 2', category: 'DevOps', progress: 15, deadline: 'Dec 01, 2026', priority: 'High', status: 'Delayed', img: 'https://i.pravatar.cc/150?u=john' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">KPI Tracking & Goals</h1>
          <p className="text-slate-500 font-medium tracking-tight">Track employee objectives, progress and team performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Export KPI</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Add New Goal</span>
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

      {/* Goals Filter & List */}
      <div className="space-y-6">
         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
               {['Active Tracking', 'Recently Completed', 'At Risk'].map((cat, i) => (
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
            <div className="relative w-full lg:w-80 text-slate-400">
               <Search className="absolute left-3 top-3 text-slate-400" size={18} />
               <input type="text" placeholder="Search by goal or employee..." className="input-field pl-10 h-11" />
            </div>
         </div>

         <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-slate-50/50">
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Goal / Objective</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Assigned To</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Progress %</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Deadline</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Status</th>
                        <th className="px-8 py-5 text-right text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Action</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-sm">
                     {goals.map((goal) => (
                        <tr key={goal.id} className="group hover:bg-slate-50/20 transition-colors">
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary-600 transition-colors">
                                    <Target size={20} />
                                 </div>
                                 <div>
                                    <p className="font-bold text-slate-900 leading-none">{goal.title}</p>
                                    <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">{goal.category}</p>
                                 </div>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                 <img src={goal.img} alt={goal.name} className="w-8 h-8 rounded-lg object-cover shadow-sm ring-2 ring-white" />
                                 <p className="font-bold text-slate-700">{goal.name}</p>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                 <span className="text-[10px] font-extrabold text-slate-900 tracking-widest">{goal.progress}%</span>
                                 <div className="w-20 h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      animate={{ width: `${goal.progress}%` }}
                                      className={cn(
                                         "h-full rounded-full transition-all",
                                         goal.status === 'Completed' ? "bg-emerald-500" : goal.status === 'At Risk' ? "bg-amber-500" : "bg-primary-500"
                                      )} 
                                    />
                                 </div>
                              </div>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <p className="text-xs font-bold text-slate-500">{goal.deadline}</p>
                           </td>
                           <td className="px-8 py-6 text-center uppercase tracking-widest text-[9px] font-extrabold">
                              <span className={cn(
                                 "px-2 py-1 rounded-lg border",
                                 goal.status === 'On Track' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                 goal.status === 'At Risk' ? "bg-amber-50 text-amber-600 border-amber-100" :
                                 goal.status === 'Completed' ? "bg-indigo-50 text-indigo-600 border-indigo-100" :
                                 "bg-rose-50 text-rose-500 border-rose-100"
                              )}>
                                 {goal.status}
                              </span>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <button onClick={() => setSelectedGoal(goal)} className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all">
                                 <ChevronRight size={20} />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>

      <AnimatePresence>
        {selectedGoal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGoal(null)}
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
                     <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg transform rotate-12">
                        <Zap size={22} fill="currentColor" />
                     </div>
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">Goal Details</h2>
                        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em] mt-2 leading-none">Category: {selectedGoal.category}</p>
                     </div>
                  </div>
                  <button onClick={() => setSelectedGoal(null)} className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 space-y-12">
                  {/* Progress Visualization */}
                  <div className="card p-10 bg-slate-900 text-white border-none shadow-soft relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent pointer-events-none" />
                     <div className="relative z-10 text-center space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-400">Current Progress</p>
                        <h3 className="text-7xl font-extrabold tracking-tighter text-white">{selectedGoal.progress}%</h3>
                        <div className="w-full max-w-[200px] mx-auto h-2 bg-white/10 rounded-full overflow-hidden mt-8 border border-white/5">
                           <motion.div 
                             initial={{ width: 0 }} 
                             animate={{ width: `${selectedGoal.progress}%` }} 
                             className="h-full bg-primary-500 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)] shadow-primary-500" 
                           />
                        </div>
                     </div>
                  </div>

                  <div className="space-y-8">
                     <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                        <img src={selectedGoal.img} alt={selectedGoal.name} className="w-14 h-14 rounded-2xl object-cover shadow-xl ring-4 ring-white" />
                        <div>
                           <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Objective Assigned To</p>
                           <p className="text-lg font-extrabold text-slate-900">{selectedGoal.name}</p>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-1.5 focus-within:transform focus-within:translate-x-1 transition-all">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Priority</label>
                           <div className="flex items-center gap-2 px-4 py-3 bg-rose-50 border border-rose-100 rounded-2xl">
                              <Star size={14} className="text-rose-500 fill-rose-500" />
                              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">{selectedGoal.priority}</span>
                           </div>
                        </div>
                        <div className="space-y-1.5 focus-within:transform focus-within:translate-x-1 transition-all text-center">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Weightage</label>
                           <p className="text-sm font-bold p-3 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700">25% (Total 100%)</p>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Update Goal Progress</label>
                        <div className="relative group">
                           <input type="range" min="0" max="100" defaultValue={selectedGoal.progress} className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary-600" />
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                           <span>0% STARTED</span>
                           <span>100% COMPLETE</span>
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Feedback & Milestone Notes</label>
                        <textarea className="input-field min-h-[120px] bg-slate-50 border-transparent py-4 text-sm font-medium" placeholder="Describe recent milestones or feedback for the employee..."></textarea>
                     </div>
                  </div>
               </div>
               
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex items-center gap-4 shrink-0">
                  <button onClick={() => setSelectedGoal(null)} className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-sm">
                     Cancel
                  </button>
                  <button className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 active:scale-95 flex items-center justify-center gap-2">
                     <CheckCircle2 size={18} />
                     <span>Update Performance</span>
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KPITracking;
