import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Calendar, 
  Search, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Trash2, 
  MoreVertical, 
  FileText, 
  Heart, 
  Sun, 
  Stethoscope, 
  Briefcase, 
  X, 
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

const EmployeeLeave = () => {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const balances = [
    { label: 'Casual Leave', value: 8, total: 12, icon: Sun, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Sick Leave', value: 5, total: 10, icon: Stethoscope, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Earned Leave', value: 15, total: 20, icon: Briefcase, color: 'text-primary-600', bg: 'bg-primary-50' },
    { label: 'Pending Request', value: 1, total: null, icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const history = [
    { type: 'Sick Leave', from: 'Oct 20, 2026', to: 'Oct 21, 2026', days: 2, status: 'Approved', manager: 'Sarah J.', note: 'Recovering from flu.' },
    { type: 'Casual Leave', from: 'Nov 04, 2026', to: 'Nov 04, 2026', days: 1, status: 'Pending', manager: 'Sarah J.', note: 'Family event.' },
    { type: 'Earned Leave', from: 'Sep 10, 2026', to: 'Sep 15, 2026', days: 5, status: 'Approved', manager: 'Sarah J.', note: 'Summer vacation.' },
    { type: 'Sick Leave', from: 'Aug 12, 2026', to: 'Aug 12, 2026', days: 0.5, status: 'Rejected', manager: 'Sarah J.', note: 'Half day rest.' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Leave Management</h1>
          <p className="text-slate-500 font-medium tracking-tight">Track your leave balances and request time off</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsRequestModalOpen(true)}
            className="btn-primary px-8 py-3 font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-100 active:scale-95 transition-all"
          >
             <Plus size={18} />
             <span>Request Time Off</span>
          </button>
        </div>
      </div>

      {/* Leave Balances */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {balances.map((bal, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="card p-6 bg-white border border-slate-100 shadow-soft overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-4">
               <div className={cn("p-3 rounded-2xl group-hover:scale-110 transition-transform", bal.bg, bal.color)}>
                  <bal.icon size={24} />
               </div>
               {bal.total && (
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 py-0.5 bg-slate-50 rounded-lg">
                     {bal.total} Total
                  </span>
               )}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{bal.label}</p>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{bal.value} <span className="text-sm font-medium text-slate-300">Days</span></h3>
            </div>
            {bal.total && (
              <div className="mt-6 w-full h-1.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-[1px]">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: `${(bal.value / bal.total) * 100}%` }}
                   className={cn("h-full rounded-full", bal.color.replace('text', 'bg'))} 
                 />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         {/* History Area */}
         <div className="lg:col-span-12 space-y-8">
            <div className="flex items-center justify-between">
               <h3 className="text-xl font-bold text-slate-900 tracking-tight">My Leave History</h3>
               <div className="relative w-full max-w-xs">
                  <Search className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input type="text" placeholder="Search requests..." className="input-field pl-10 h-11" />
               </div>
            </div>

            <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50/50">
                           <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Leave Type</th>
                           <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Duration</th>
                           <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Days</th>
                           <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Status</th>
                           <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-right">Reason / Manager</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50 text-sm">
                        {history.map((item, i) => (
                           <tr key={i} className="group hover:bg-slate-50/30 transition-colors">
                              <td className="px-8 py-6">
                                 <p className="font-bold text-slate-900 truncate max-w-[150px]">{item.type}</p>
                              </td>
                              <td className="px-8 py-6">
                                 <div className="flex items-center gap-3">
                                    <Calendar size={14} className="text-slate-300" />
                                    <p className="font-bold text-slate-600 whitespace-nowrap">{item.from} — {item.to}</p>
                                 </div>
                              </td>
                              <td className="px-8 py-6 text-center">
                                 <span className="font-extrabold text-slate-900">{item.days}</span>
                              </td>
                              <td className="px-8 py-6 text-center">
                                 <span className={cn(
                                    "px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border",
                                    item.status === 'Approved' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                    item.status === 'Pending' ? "bg-amber-50 text-amber-600 border-amber-100" :
                                    "bg-rose-50 text-rose-500 border-rose-100"
                                 )}>
                                    {item.status}
                                 </span>
                              </td>
                              <td className="px-8 py-6 text-right">
                                 <div className="space-y-1">
                                    <p className="text-xs font-bold text-slate-400 italic">"{item.note}"</p>
                                    <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">{item.manager}</p>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>

      {/* Leave Request Sidebar Drawer */}
      <AnimatePresence>
        {isRequestModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRequestModalOpen(false)}
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
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center text-white shadow-lg">
                        <Zap size={24} />
                     </div>
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">New Leave Request</h2>
                        <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mt-1.5 font-primary">Annual Quota Available</p>
                     </div>
                  </div>
                  <button onClick={() => setIsRequestModalOpen(false)} className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 space-y-10">
                  <div className="grid grid-cols-1 gap-8">
                     <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Select Leave Type</label>
                        <select className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700">
                           <option>Casual Leave (Balance: 8)</option>
                           <option>Sick Leave (Balance: 5)</option>
                           <option>Earned Leave (Balance: 15)</option>
                           <option>Emergency Leave</option>
                        </select>
                     </div>

                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">From Date</label>
                           <input type="date" className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">To Date</label>
                           <input type="date" className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700" />
                        </div>
                     </div>

                     <div className="flex items-center justify-between p-6 bg-primary-50/30 rounded-3xl border border-primary-50">
                        <div className="flex items-center gap-3">
                           <Clock className="text-primary-600" size={20} />
                           <div>
                              <p className="text-sm font-bold text-slate-900">Check as Half Day</p>
                              <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">Only for single day requests</p>
                           </div>
                        </div>
                        <button className="w-12 h-6 bg-slate-200 rounded-full relative transition-all group hover:bg-primary-500">
                           <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all group-hover:left-7" />
                        </button>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Reason for Leave</label>
                        <textarea className="input-field min-h-[120px] bg-slate-50 border-transparent py-4 text-sm font-medium" placeholder="Briefly describe why you are requesting this leave..."></textarea>
                     </div>
                  </div>
               </div>
               
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex items-center gap-4 shrink-0">
                  <button className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-sm">
                     Save as Draft
                  </button>
                  <button className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-100 active:scale-95">
                     Submit Request
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployeeLeave;
