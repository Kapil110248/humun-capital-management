import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LifeBuoy, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  MessageSquare, 
  User, 
  Paperclip, 
  Send, 
  ChevronRight, 
  ShieldCheck, 
  Monitor, 
  CreditCard, 
  Zap, 
  Calendar,
  MessageCircle,
  Hash
} from 'lucide-react';
import { cn } from '../../utils/cn';

const EmployeeHelpDesk = () => {
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);

  const stats = [
    { label: 'Open Tickets', value: '3', icon: MessageSquare, color: 'text-primary-600', bg: 'bg-primary-50' },
    { label: 'In Progress', value: '1', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Resolved', value: '24', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Urgent Ops', value: '1', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  const tickets = [
    { id: 'TKT-88220', subject: 'MacBook M3 Charging Issue', category: 'IT Support', priority: 'High', date: 'Oct 24, 2026', status: 'In Progress' },
    { id: 'TKT-88195', subject: 'Tax Declaration Clarification', category: 'Payroll', priority: 'Medium', date: 'Oct 22, 2026', status: 'Open' },
    { id: 'TKT-87950', subject: 'Software License Request - Figma', category: 'IT Support', priority: 'Low', date: 'Oct 15, 2026', status: 'Resolved' },
    { id: 'TKT-87820', subject: 'Policy on Remote Working Abroad', category: 'HR Query', priority: 'High', date: 'Oct 10, 2026', status: 'Resolved' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Support Help Desk</h1>
          <p className="text-slate-500 font-medium tracking-tight">Need assistance? Raise a ticket and track its resolution progress</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsNewTicketModalOpen(true)}
            className="btn-primary px-8 py-3 font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-100 active:scale-95 transition-all"
          >
             <Plus size={18} />
             <span>Create New Ticket</span>
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

      {/* Ticket List Area */}
      <div className="space-y-6">
         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
               {['All Tickets', 'Open', 'In Progress', 'Resolved'].map((cat, i) => (
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
               <input type="text" placeholder="Search by ticket ID or subject..." className="input-field pl-10 h-11" />
            </div>
         </div>

         <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-slate-50/50">
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Ticket Info</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Category</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Priority</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Status</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                     {tickets.map((t) => (
                        <tr key={t.id} className="group hover:bg-slate-50/20 transition-colors">
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-xl bg-slate-100 flex flex-col items-center justify-center text-slate-400 group-hover:text-primary-600 transition-colors">
                                    <Hash size={14} className="opacity-40" />
                                    <span className="text-[10px] font-extrabold leading-none mt-0.5">{t.id.split('-')[1]}</span>
                                 </div>
                                 <div className="min-w-0 max-w-sm">
                                    <p className="text-sm font-bold text-slate-900 leading-none truncate">{t.subject}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{t.date}</p>
                                 </div>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.category}</span>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <span className={cn(
                                 "px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest border",
                                 t.priority === 'High' ? "bg-rose-50 text-rose-500 border-rose-100" :
                                 t.priority === 'Medium' ? "bg-amber-50 text-amber-600 border-amber-100" :
                                 "bg-primary-50 text-primary-600 border-primary-100"
                              )}>
                                 {t.priority}
                              </span>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <span className={cn(
                                 "px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest border",
                                 t.status === 'Resolved' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                 t.status === 'In Progress' ? "bg-amber-50 text-amber-600 border-amber-100" :
                                 "bg-slate-100 text-slate-500 border-slate-200"
                              )}>
                                 {t.status}
                              </span>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all" title="View Discussion"><MessageCircle size={18} /></button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>

      {/* New Ticket Modal Drawer */}
      <AnimatePresence>
        {isNewTicketModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNewTicketModalOpen(false)}
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
                     <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center shadow-lg">
                        <LifeBuoy size={24} />
                     </div>
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">New Support Request</h2>
                        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em] mt-2 leading-none">Average response time: 2 Hours</p>
                     </div>
                  </div>
                  <button onClick={() => setIsNewTicketModalOpen(false)} className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 space-y-10">
                  <div className="grid grid-cols-1 gap-8">
                     <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Support Category</label>
                        <div className="grid grid-cols-2 gap-4">
                           {[
                              { label: 'IT Support', icon: Monitor },
                              { label: 'HR Query', icon: User },
                              { label: 'Payroll', icon: CreditCard },
                              { label: 'Access', icon: ShieldCheck }
                           ].map((c, i) => (
                              <button key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-left flex flex-col gap-3 group hover:border-primary-200 hover:bg-white transition-all">
                                 <c.icon size={20} className="text-slate-300 group-hover:text-primary-600 transition-colors" />
                                 <span className="text-xs font-bold text-slate-700">{c.label}</span>
                              </button>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Issue Subject</label>
                        <input type="text" placeholder="e.g. Cannot access Figma Premium" className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700" />
                     </div>

                     <div className="space-y-1.5 focus-within:transform focus-within:translate-x-1 transition-all">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Priority Level</label>
                        <div className="flex gap-4">
                           {['Low', 'Medium', 'High'].map(p => (
                              <button key={p} className={cn(
                                 "flex-1 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all",
                                 p === 'Medium' ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-400 border-slate-100 hover:border-slate-300"
                              )}>
                                 {p}
                              </button>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Detailed Description</label>
                        <textarea className="input-field min-h-[140px] bg-slate-50 border-transparent py-4 text-sm font-medium" placeholder="Describe your issue or question in detail..."></textarea>
                     </div>

                     <div className="p-6 bg-slate-50 border border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-3 group cursor-pointer hover:bg-white hover:border-primary-100 transition-all">
                        <Paperclip size={20} className="text-slate-300 group-hover:text-primary-600" />
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Attach screenshot (Optional)</span>
                     </div>
                  </div>
               </div>
               
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex items-center gap-4 shrink-0">
                  <button onClick={() => setIsNewTicketModalOpen(false)} className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-sm">
                     Cancel
                  </button>
                  <button className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 active:scale-95 flex items-center justify-center gap-2">
                     <Send size={18} />
                     <span>Submit Ticket</span>
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployeeHelpDesk;
