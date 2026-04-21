import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Monitor, 
  Search, 
  Download, 
  Plus, 
  Filter, 
  MoreVertical, 
  ChevronRight, 
  X, 
  Calendar, 
  AlertCircle, 
  TrendingUp, 
  Timer,
  PieChart,
  BarChart3,
  CalendarDays
} from 'lucide-react';
import { cn } from '../../utils/cn';

const AttendanceReview = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  const stats = [
    { label: 'Present Today', value: '15/18', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Late Arrivals', value: '2', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'On Leave', value: '3', icon: CalendarDays, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Avg Hours', value: '7.8h', icon: Timer, color: 'text-primary-600', bg: 'bg-primary-50' },
  ];

  const records = [
    { id: 1, name: 'Alice Cooper', role: 'Product Designer', date: 'Oct 24, 2026', checkIn: '09:03 AM', checkOut: '06:12 PM', hours: '08:45', marks: 0, status: 'Present', mode: 'Office', img: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'Bob Marley', role: 'Frontend Lead', date: 'Oct 24, 2026', checkIn: '09:45 AM', checkOut: '06:05 PM', hours: '07:50', marks: 1, status: 'Late', mode: 'Remote', img: 'https://i.pravatar.cc/150?u=bob' },
    { id: 3, name: 'Sarah Connor', role: 'Project Mgr', date: 'Oct 24, 2026', checkIn: '-', checkOut: '-', hours: '00:00', marks: 0, status: 'Leave', mode: '-', img: 'https://i.pravatar.cc/150?u=sarah' },
    { id: 4, name: 'John Wick', role: 'DevOps Ops', date: 'Oct 24, 2026', checkIn: '08:55 AM', checkOut: '06:30 PM', hours: '09:35', marks: 0, status: 'Present', mode: 'Office', img: 'https://i.pravatar.cc/150?u=john' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Attendance Review</h1>
          <p className="text-slate-500 font-medium tracking-tight">Monitor team punctuality, working hours and overall presence</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Export Attendance</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Manual Entry</span>
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

      {/* Filter Bar */}
      <div className="card p-6 border-none bg-white shadow-soft flex flex-col lg:flex-row items-center gap-4">
         <div className="relative flex-1 w-full text-slate-400">
            <Search className="absolute left-3 top-3" size={18} />
            <input type="text" placeholder="Search by employee name..." className="input-field pl-10 h-11" />
         </div>
         <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 sm:pb-0">
            <input type="date" className="input-field h-11 px-4 font-bold text-slate-600" defaultValue="2026-10-24" />
            <select className="input-field h-11 pr-10 min-w-[140px] font-bold text-slate-600">
               <option>All Status</option>
               <option>Present</option>
               <option>Late</option>
               <option>Leave</option>
            </select>
            <button className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-slate-50 border border-slate-100 rounded-xl transition-all h-11 w-11 flex items-center justify-center shrink-0">
               <Filter size={18} />
            </button>
         </div>
      </div>

      {/* Main Table */}
      <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-slate-50/50">
                     <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Employee</th>
                     <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Work Mode</th>
                     <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">In / Out</th>
                     <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Total Hours</th>
                     <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Status</th>
                     <th className="px-8 py-5 text-right text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Action</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50 text-sm">
                  {records.map((user) => (
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
                           <div className="flex items-center justify-center gap-2">
                              {user.mode === 'Office' ? <MapPin size={14} className="text-slate-300" /> : user.mode === 'Remote' ? <Monitor size={14} className="text-slate-300" /> : null}
                              <span className="text-xs font-bold text-slate-600">{user.mode}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                           <div className="flex flex-col items-center gap-0.5">
                              <span className="text-xs font-bold text-slate-900">{user.checkIn} — {user.checkOut}</span>
                              {user.marks > 0 && <span className="text-[9px] font-bold text-rose-500 uppercase tracking-widest">Late Mark</span>}
                           </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                           <p className="font-extrabold text-slate-900">{user.hours}</p>
                        </td>
                        <td className="px-8 py-6 text-center">
                           <span className={cn(
                              "px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest border",
                              user.status === 'Present' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                              user.status === 'Late' ? "bg-amber-50 text-amber-600 border-amber-100" :
                              user.status === 'Leave' ? "bg-indigo-50 text-indigo-600 border-indigo-100" :
                              "bg-rose-50 text-rose-500 border-rose-100"
                           )}>
                              {user.status}
                           </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                           <button onClick={() => setSelectedEntry(user)} className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all">
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
        {selectedEntry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEntry(null)}
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
                     <img src={selectedEntry.img} alt={selectedEntry.name} className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white shadow-xl" />
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">{selectedEntry.name}</h2>
                        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mt-2">{selectedEntry.role}</p>
                     </div>
                  </div>
                  <button onClick={() => setSelectedEntry(null)} className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 space-y-12">
                  {/* Monthly Summary */}
                  <div className="grid grid-cols-2 gap-6">
                     <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center">
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Consistency Index</p>
                        <h4 className="text-4xl font-extrabold text-slate-900">92%</h4>
                        <div className="flex justify-center gap-0.5 mt-4">
                           {[1,1,1,1,1,1,1,0,1,1].map((p, i) => (
                              <div key={i} className={cn("w-1.5 h-6 rounded-full", p ? "bg-emerald-500" : "bg-rose-500")} title={i+1} />
                           ))}
                        </div>
                     </div>
                     <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center">
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Late History</p>
                        <h4 className="text-4xl font-extrabold text-rose-500">{selectedEntry.marks + 2}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Days this month</p>
                     </div>
                  </div>

                  <section className="space-y-6">
                     <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-4">Activity Log - Oct 24</h3>
                     <div className="space-y-6 relative ml-6 pl-8 border-l border-slate-100">
                        {[
                           { time: selectedEntry.checkIn, label: 'Clock In', icon: Clock, color: 'bg-emerald-500' },
                           { time: '01:05 PM', label: 'Break Start', icon: Timer, color: 'bg-amber-500' },
                           { time: '01:50 PM', label: 'Break End', icon: Timer, color: 'bg-emerald-500' },
                           { time: selectedEntry.checkOut, label: 'Clock Out', icon: Clock, color: 'bg-slate-900' },
                        ].map((log, i) => (
                           <div key={i} className="relative group/log">
                              <div className={cn("absolute -left-[44px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white text-[10px]", log.color)}>
                                 <log.icon size={10} />
                              </div>
                              <div className="flex items-center justify-between group-hover/log:translate-x-1 transition-transform">
                                 <div>
                                    <p className="text-sm font-bold text-slate-900 leading-none">{log.time}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{log.label}</p>
                                 </div>
                                 <AlertCircle size={14} className="text-slate-100 group-hover:text-amber-400 transition-colors cursor-help" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </section>
               </div>
               
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex items-center gap-4 shrink-0">
                  <button className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-sm">
                     Add Adjustment
                  </button>
                  <button className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl active:scale-95">
                     Approve Record
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AttendanceReview;
