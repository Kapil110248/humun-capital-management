import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Coffee, 
  LogIn, 
  LogOut, 
  MapPin, 
  Monitor, 
  CalendarDays,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  Timer
} from 'lucide-react';
import { cn } from '../../utils/cn';

const EmployeeAttendance = () => {
  const [currentMonth, setCurrentMonth] = useState('October 2026');

  const stats = [
    { label: 'Present Days', value: '18', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Late Marking', value: '2', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Absent Days', value: '0', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Overtime (Hrs)', value: '12.5', icon: Timer, color: 'text-primary-600', bg: 'bg-primary-50' },
  ];

  const history = [
    { date: 'Oct 24, 2026', checkIn: '09:03 AM', checkOut: '06:12 PM', hours: '08:45', status: 'Present', mode: 'Office' },
    { date: 'Oct 23, 2026', checkIn: '09:15 AM', checkOut: '06:05 PM', hours: '08:50', status: 'Late', mode: 'Remote' },
    { date: 'Oct 22, 2026', checkIn: '08:55 AM', checkOut: '05:50 PM', hours: '08:55', status: 'Present', mode: 'Office' },
    { date: 'Oct 21, 2026', checkIn: '09:05 AM', checkOut: '06:15 PM', hours: '09:10', status: 'Present', mode: 'Office' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Attendance Tracking</h1>
          <p className="text-slate-500 font-medium tracking-tight">Monitor your daily working hours, breaks, and monthly consistency</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex-1 min-w-[140px] py-2.5 px-6 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all">
             <LogIn size={18} />
             <span>Clock In</span>
          </button>
          <button className="flex-1 min-w-[140px] py-2.5 px-6 bg-white border border-slate-200 text-slate-400 rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed opacity-50">
             <LogOut size={18} />
             <span>Clock Out</span>
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Live Controls & Summary */}
        <div className="lg:col-span-4 space-y-6">
           <div className="card p-8 bg-slate-900 text-white border-none shadow-soft relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                 <Clock size={120} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-400 mb-6 font-primary">Live Working Session</p>
              
              <div className="text-center mb-10 py-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl relative z-10">
                 <h4 className="text-5xl font-extrabold tracking-tighter mb-2">06 : 12 : 55</h4>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Active Time Today</p>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                 <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/5 hover:bg-white/15 transition-all group/btn">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white mb-1 group-hover/btn:animate-pulse">
                       <Coffee size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Take a Break</span>
                 </button>
                 <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/5 hover:bg-white/15 transition-all group/btn">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-1">
                       <MapPin size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Change Mode</span>
                 </button>
              </div>
           </div>

           <div className="card p-6 bg-white border-none shadow-soft">
              <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">Daily Log - Oct 24</h3>
              <div className="space-y-6 relative ml-4 px-8 border-l border-slate-100">
                 {[
                    { time: '09:03 AM', label: 'Clocked In', icon: Play, color: 'bg-primary-500' },
                    { time: '01:00 PM', label: 'Lunch Break (Start)', icon: Pause, color: 'bg-amber-500' },
                    { time: '01:45 PM', label: 'Lunch Break (End)', icon: Play, color: 'bg-primary-500' },
                    { time: 'Active', label: 'Working Session', icon: Timer, color: 'bg-emerald-500', isPulse: true },
                 ].map((log, i) => (
                    <div key={i} className="relative">
                       <div className={cn(
                          "absolute -left-[45px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white",
                          log.color,
                          log.isPulse && "animate-pulse"
                       )}>
                          <log.icon size={14} fill="currentColor" className="opacity-40" />
                       </div>
                       <div>
                          <p className="text-sm font-extrabold text-slate-900 leading-none">{log.time}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{log.label}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* History & Calendar Area */}
        <div className="lg:col-span-8 space-y-8">
           
           {/* Timeline Header Filters */}
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Recent Attendance History</h3>
              <div className="flex items-center gap-3 bg-white p-1 rounded-xl shadow-sm border border-slate-100">
                 <button className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors"><ChevronLeft size={18} /></button>
                 <span className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em] px-4">{currentMonth}</span>
                 <button className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors"><ChevronRight size={18} /></button>
              </div>
           </div>

           <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-slate-50/50">
                       <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">Date</th>
                       <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">Working Mode</th>
                       <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-[0.15em] text-center">In / Out</th>
                       <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-[0.15em] text-center">Status</th>
                       <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-[0.15em] text-right">Total Hours</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {history.map((item, i) => (
                       <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-6">
                             <p className="text-sm font-bold text-slate-900">{item.date}</p>
                          </td>
                          <td className="px-6 py-6">
                             <div className="flex items-center gap-2">
                                {item.mode === 'Office' ? <MapPin size={14} className="text-slate-300" /> : <Monitor size={14} className="text-slate-300" />}
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{item.mode}</span>
                             </div>
                          </td>
                          <td className="px-6 py-6 text-center">
                             <div className="flex items-center justify-center gap-4">
                                <div className="text-center">
                                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">In</p>
                                   <p className="text-xs font-bold text-slate-900">{item.checkIn}</p>
                                </div>
                                <div className="w-4 h-px bg-slate-100" />
                                <div className="text-center">
                                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">Out</p>
                                   <p className="text-xs font-bold text-slate-900">{item.checkOut}</p>
                                </div>
                             </div>
                          </td>
                          <td className="px-6 py-6 text-center">
                             <span className={cn(
                                "px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest border",
                                item.status === 'Present' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"
                             )}>
                                {item.status}
                             </span>
                          </td>
                          <td className="px-6 py-6 text-right">
                             <p className="text-sm font-extrabold text-slate-900">{item.hours} Hrs</p>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {/* Mobile Calendar Hint */}
           <div className="card p-8 bg-indigo-600 text-white border-none shadow-soft flex items-center justify-between">
              <div className="space-y-1">
                 <h4 className="text-lg font-bold">Monthly Calendar View</h4>
                 <p className="text-indigo-100 text-xs font-medium">Visual tracking for of all your attendance markings</p>
              </div>
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm shadow-xl hover:bg-slate-50 transition-all flex items-center gap-2">
                 <CalendarDays size={18} />
                 <span>Open Calendar</span>
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
