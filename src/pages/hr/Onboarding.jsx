import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MoreVertical, 
  Download, 
  X, 
  Briefcase, 
  Monitor, 
  FileText, 
  ChevronRight, 
  Users, 
  Settings,
  ArrowUpRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Onboarding = () => {
  const [selectedHire, setSelectedHire] = useState(null);

  const stats = [
    { label: 'New Joiners', value: '8', icon: Users, bg: 'bg-blue-50', color: 'text-blue-600' },
    { label: 'Pending Docs', value: '3', icon: FileText, bg: 'bg-amber-50', color: 'text-amber-600' },
    { label: 'In Progress', value: '12', icon: Clock, bg: 'bg-purple-50', color: 'text-purple-600' },
    { label: 'Ready to Start', value: '5', icon: CheckCircle2, bg: 'bg-emerald-50', color: 'text-emerald-600' },
  ];

  const onboards = [
    {
      id: 1,
      name: 'Michael Scott',
      role: 'Regional Manager',
      department: 'Sales',
      joiningDate: 'Nov 1, 2026',
      manager: 'Jan Levinson',
      status: 'In Progress',
      progress: 65,
      img: 'https://i.pravatar.cc/150?u=michael'
    },
    {
      id: 2,
      name: 'Jim Halpert',
      role: 'Head of Sales',
      department: 'Sales',
      joiningDate: 'Nov 5, 2026',
      manager: 'Michael Scott',
      status: 'Ready',
      progress: 92,
      img: 'https://i.pravatar.cc/150?u=jim'
    },
    {
      id: 3,
      name: 'Pam Beesly',
      role: 'Receptionist',
      department: 'Admin',
      joiningDate: 'Nov 10, 2026',
      manager: 'Michael Scott',
      status: 'Awaiting Documents',
      progress: 25,
      img: 'https://i.pravatar.cc/150?u=pam'
    },
    {
      id: 4,
      name: 'Dwight Schrute',
      role: 'Assistant Regional Manager',
      department: 'Sales',
      joiningDate: 'Oct 28, 2026',
      manager: 'Michael Scott',
      status: 'Completed',
      progress: 100,
      img: 'https://i.pravatar.cc/150?u=dwight'
    }
  ];

  const steps = [
    { id: 1, label: 'Offer Accepted' },
    { id: 2, label: 'Docs Submitted' },
    { id: 3, label: 'Account Created' },
    { id: 4, label: 'Laptop Assigned' },
    { id: 5, label: 'Orientation' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Onboarding</h1>
          <p className="text-slate-500 font-medium">Coordinate the transition and preparation for your new hires</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Send size={18} />
            <span className="hidden sm:inline">Send Welcome Email</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Add New Hire</span>
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

      {/* Main Table */}
      <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
         <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between gap-4 items-center">
            <div className="relative flex-1 w-full max-w-sm">
               <Search className="absolute left-3 top-3 text-slate-400" size={18} />
               <input type="text" placeholder="Search new hire..." className="input-field pl-10 h-11" />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:inline">Filter:</span>
               <select className="input-field h-11 w-full sm:w-36 font-bold text-slate-600">
                  <option>All Status</option>
                  <option>In Progress</option>
                  <option>Completed</option>
               </select>
            </div>
         </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                <th className="px-6 py-4">New Employee</th>
                <th className="px-6 py-4">Position / Dept</th>
                <th className="px-6 py-4">Manager</th>
                <th className="px-6 py-4">Joining Date</th>
                <th className="px-6 py-4">Onboarding Progress</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {onboards.map((hire) => (
                <tr key={hire.id} className="group hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <img src={hire.img} alt={hire.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm" />
                      <p className="font-bold text-slate-900">{hire.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-bold text-slate-700">{hire.role}</p>
                    <p className="text-xs font-medium text-slate-400">{hire.department}</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-bold text-slate-700">{hire.manager}</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                       <Calendar size={14} className="opacity-40" />
                       {hire.joiningDate}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1.5 min-w-[140px]">
                       <div className="flex justify-between items-center px-0.5">
                          <span className={cn(
                             "text-[10px] font-bold uppercase tracking-widest",
                             hire.progress === 100 ? "text-emerald-500" : "text-primary-600"
                          )}>
                             {hire.status}
                          </span>
                          <span className="text-xs font-extrabold text-slate-900">{hire.progress}%</span>
                       </div>
                       <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${hire.progress}%` }}
                            className={cn(
                               "h-full rounded-full transition-all duration-1000",
                               hire.progress === 100 ? "bg-emerald-500" : "bg-primary-600"
                            )} 
                          />
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button 
                      onClick={() => setSelectedHire(hire)}
                      className="p-2 text-slate-300 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Drawer */}
      <AnimatePresence>
        {selectedHire && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHire(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-[70] flex flex-col"
            >
               <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-4">
                     <img src={selectedHire.img} alt={selectedHire.name} className="w-12 h-12 rounded-2xl object-cover ring-4 ring-white shadow-xl" />
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">{selectedHire.name}</h2>
                        <p className="text-sm font-bold text-primary-600 mt-1">{selectedHire.role}</p>
                     </div>
                  </div>
                  <button onClick={() => setSelectedHire(null)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-8 space-y-10">
                  <section>
                     <h3 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-emerald-500" />
                        Onboarding Checklist
                     </h3>
                     <div className="space-y-4">
                        {steps.map((step, idx) => {
                           const isDone = idx * 20 < selectedHire.progress;
                           const isNext = !isDone && (idx - 1) * 20 < selectedHire.progress;
                           
                           return (
                              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
                                 <div className="flex items-center gap-4">
                                    <div className={cn(
                                       "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all",
                                       isDone ? "bg-emerald-500 text-white shadow-lg" : isNext ? "bg-primary-600 text-white ring-4 ring-primary-50" : "bg-white text-slate-300 border border-slate-200"
                                    )}>
                                       {isDone ? <CheckCircle2 size={18} /> : idx + 1}
                                    </div>
                                    <span className={cn("text-sm font-bold", isDone ? "text-slate-400 line-through" : "text-slate-700")}>{step.label}</span>
                                 </div>
                                 <button className={cn(
                                    "px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all",
                                    isDone ? "text-slate-400 hover:text-rose-500" : "text-primary-600 hover:bg-primary-100"
                                 )}>
                                    {isDone ? "Reopen" : "Complete"}
                                 </button>
                              </div>
                           );
                        })}
                     </div>
                  </section>

                  <section className="p-6 bg-slate-900 rounded-2xl text-white relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
                        <Monitor size={80} />
                     </div>
                     <h3 className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-6">Equipment & IT Setup</h3>
                     <div className="space-y-4">
                        <div className="flex justify-between items-center">
                           <span className="text-sm font-medium text-slate-300">Workstation Laptop</span>
                           <span className="text-xs font-bold px-2 py-0.5 bg-white/10 rounded uppercase">MacBook Pro 14"</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-sm font-medium text-slate-300">Slack Account</span>
                           <span className="text-xs font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded uppercase">Active</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-sm font-medium text-slate-300">Access Key Card</span>
                           <span className="text-xs font-bold px-2 py-0.5 bg-rose-500/20 text-rose-400 rounded uppercase">Pending</span>
                        </div>
                     </div>
                  </section>
               </div>
               
               <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center gap-3 shrink-0">
                  <button className="flex-1 py-3.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-sm flex items-center justify-center gap-2">
                     <Mail size={18} />
                     <span>Remind Manager</span>
                  </button>
                  <button className="flex-1 py-3.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                     <ArrowUpRight size={18} />
                     <span>Complete Step</span>
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
