import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  MessageSquare, 
  Check, 
  X, 
  FileText, 
  Calendar, 
  History, 
  ChevronRight, 
  Download, 
  CalendarDays,
  Zap,
  Info,
  MoreVertical
} from 'lucide-react';
import { cn } from '../../utils/cn';

const LeaveApproval = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const stats = [
    { label: 'Pending Requests', value: '12', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Approved', value: '48', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Rejected', value: '4', icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'This Month Leaves', value: '18', icon: CalendarDays, color: 'text-primary-600', bg: 'bg-primary-50' },
  ];

  const requests = [
    { id: 1, name: 'Alice Cooper', type: 'Sick Leave', from: 'Oct 24', to: 'Oct 26', days: 3, reason: 'Flu symptoms and medical rest.', img: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'John Wick', type: 'Annual Leave', from: 'Oct 28', to: 'Oct 31', days: 4, reason: 'Personal travel and family event.', img: 'https://i.pravatar.cc/150?u=john' },
    { id: 3, name: 'Sarah Connor', type: 'Casual Leave', from: 'Nov 02', to: 'Nov 02', days: 1, reason: 'Home renovation matters.', img: 'https://i.pravatar.cc/150?u=sarah' },
    { id: 4, name: 'Bob Marley', type: 'Sick Leave', from: 'Oct 25', to: 'Oct 25', days: 1, reason: 'Dental appointment.', img: 'https://i.pravatar.cc/150?u=bob' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Leave Approval</h1>
          <p className="text-slate-500 font-medium tracking-tight">Review, manage and approve your team's leave requests</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Export History</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Info size={18} />
             <span>Leave Policy</span>
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

      {/* Main Listing Area */}
      <div className="space-y-6">
         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
               {['All Pending', 'Approved', 'Rejected'].map((cat, i) => (
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
            <div className="relative w-full lg:w-80">
               <Search className="absolute left-3 top-3 text-slate-400" size={18} />
               <input type="text" placeholder="Search by name..." className="input-field pl-10 h-11" />
            </div>
         </div>

         <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-slate-50/50">
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Employee</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Leave Type</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Duration</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Days</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-right">Reason</th>
                        <th className="px-8 py-5 text-right text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Action</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-sm">
                     {requests.map((req) => (
                        <tr key={req.id} className="group hover:bg-slate-50/20 transition-colors">
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                 <img src={req.img} alt={req.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm" />
                                 <p className="font-bold text-slate-900 leading-none">{req.name}</p>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{req.type}</span>
                           </td>
                           <td className="px-8 py-6 text-center whitespace-nowrap">
                              <p className="text-xs font-bold text-slate-700">{req.from} — {req.to}</p>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <p className="text-sm font-extrabold text-slate-900">{req.days}</p>
                           </td>
                           <td className="px-8 py-6 text-right max-w-xs">
                              <p className="text-xs font-medium text-slate-400 truncate italic">"{req.reason}"</p>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <div className="flex justify-end items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                 <button onClick={() => setSelectedRequest(req)} className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all" title="View Details">
                                    <ChevronRight size={18} />
                                 </button>
                                 <button className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all" title="Approve"><Check size={18} /></button>
                                 <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-all" title="Reject"><X size={18} /></button>
                              </div>
                              <button className="p-2 text-slate-400 group-hover:hidden transition-all"><MoreVertical size={18} /></button>
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
        {selectedRequest && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRequest(null)}
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
                     <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
                        <FileText size={20} />
                     </div>
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">Review Request</h2>
                        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em] mt-2 leading-none">Ref ID: LR-{selectedRequest.id}820</p>
                     </div>
                  </div>
                  <button onClick={() => setSelectedRequest(null)} className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 space-y-12">
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
                     {/* Background Pattern */}
                     <div className="flex items-center gap-5 relative z-10">
                        <img src={selectedRequest.img} alt={selectedRequest.name} className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white shadow-xl" />
                        <div>
                           <h3 className="text-xl font-bold text-slate-900">{selectedRequest.name}</h3>
                           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Lead Designer • Team A</p>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-1.5 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Leave Type</label>
                        <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                           <Zap size={14} className="text-indigo-600" />
                           {selectedRequest.type}
                        </p>
                     </div>
                     <div className="space-y-1.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Total Days</label>
                        <p className="text-sm font-bold text-slate-800">{selectedRequest.days} Days</p>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <MessageSquare size={14} /> Application Reason
                     </label>
                     <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed font-medium">
                        "{selectedRequest.reason}"
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Admin Comment (Optional)</label>
                     <textarea className="input-field min-h-[140px] py-4 bg-slate-50 border-transparent resize-none text-sm font-medium" placeholder="Add a comment or notes regarding the approval/rejection..."></textarea>
                  </div>
               </div>
               
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex items-center gap-4 shrink-0">
                  <button onClick={() => setSelectedRequest(null)} className="flex-1 py-4 bg-white border border-slate-200 text-rose-500 rounded-2xl font-bold hover:bg-rose-50 hover:border-rose-100 transition-all shadow-sm flex items-center justify-center gap-2">
                     <XCircle size={20} />
                     <span>Reject Request</span>
                  </button>
                  <button className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 active:scale-95 flex items-center justify-center gap-2">
                     <CheckCircle2 size={20} />
                     <span>Approve Request</span>
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeaveApproval;
