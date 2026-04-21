import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  CalendarDays, 
  Wallet, 
  CheckSquare, 
  TrendingUp, 
  Plus, 
  ArrowRight, 
  Bell, 
  Calendar, 
  Briefcase, 
  ChevronRight, 
  ArrowUpRight,
  MapPin,
  Coffee,
  Sun,
  FileText
} from 'lucide-react';
import { cn } from '../../utils/cn';

const EmployeeDashboard = () => {
  const stats = [
    { label: 'Today Attendance', value: 'Present', trend: 'Checked in at 09:03 AM', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Pending Leaves', value: '2', trend: 'Awaiting approval', icon: CalendarDays, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Salary Status', value: 'Processed', trend: 'Salary credited this month', icon: Wallet, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Tasks', value: '5', trend: '2 due today', icon: CheckSquare, color: 'text-primary-600', bg: 'bg-primary-50' },
  ];

  const announcements = [
    { id: 1, title: 'Annual Team Building Retreat', date: 'Oct 28', category: 'Events', priority: 'high' },
    { id: 2, title: 'New Health Insurance Policy', date: 'Oct 22', category: 'Updates', priority: 'medium' },
    { id: 3, title: 'Work From Home Policy Update', date: 'Oct 15', category: 'HR', priority: 'low' },
  ];

  const tasks = [
    { id: 1, title: 'Submit Monthly Report', due: 'Today', status: 'pending' },
    { id: 2, title: 'Complete Compliance Training', due: 'Tomorrow', status: 'pending' },
    { id: 3, title: 'Update Profile Photo', due: 'Next Week', status: 'completed' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back, John!</h1>
          <p className="text-slate-500 font-medium text-lg">Manage your daily work, attendance and payroll in one place</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <FileText size={18} />
            <span className="hidden sm:inline">View Payslip</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Request Leave</span>
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
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.trend}</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Side: Attendance & Activity */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* Attendance & Time Tracker */}
           <div className="card p-8 bg-white border-none shadow-soft flex flex-col md:flex-row items-center gap-10">
              <div className="flex flex-col items-center text-center">
                 <div className="relative w-40 h-40 mb-4">
                    {/* SVG Progress Circle */}
                    <svg className="w-full h-full transform -rotate-90">
                       <circle cx="80" cy="80" r="70" className="stroke-slate-100 fill-none" strokeWidth="8" />
                       <motion.circle 
                         cx="80" cy="80" r="70" 
                         className="stroke-primary-600 fill-none" 
                         strokeWidth="8" 
                         strokeDasharray={440}
                         strokeDashoffset={440 - (440 * 0.75)}
                         strokeLinecap="round"
                         initial={{ strokeDashoffset: 440 }}
                         animate={{ strokeDashoffset: 440 - (440 * 0.75) }}
                         transition={{ duration: 1.5, ease: "easeOut" }}
                       />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <h4 className="text-3xl font-extrabold text-slate-900 leading-none">06:12</h4>
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Worked Today</span>
                    </div>
                 </div>
                 <button className="px-8 py-3 bg-rose-600 text-white rounded-xl font-bold shadow-lg shadow-rose-100 hover:bg-rose-700 active:scale-95 transition-all">Clock Out</button>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-8 w-full border-l lg:border-slate-50 lg:pl-10">
                 <div className="space-y-4">
                    <div className="space-y-1">
                       <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">Clock In</p>
                       <p className="text-lg font-bold text-slate-800">09:03 AM</p>
                    </div>
                    <div className="space-y-1 text-emerald-500">
                       <p className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Break Time</p>
                       <p className="text-lg font-bold">00:45 Mins</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="space-y-1">
                       <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">Rem. Hours</p>
                       <p className="text-lg font-bold text-slate-800">01:48 Hrs</p>
                    </div>
                    <div className="space-y-1 text-primary-600 underline cursor-pointer">
                       <p className="text-[10px] font-extrabold uppercase tracking-[0.2em]">View History</p>
                       <p className="text-lg font-bold">Details</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Performance / Task List */}
           <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
              <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                 <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="text-primary-600" size={20} />
                    Active Tasks
                 </h3>
                 <button className="text-xs font-bold text-primary-600 hover:underline">Manage All</button>
              </div>
              <div className="divide-y divide-slate-50">
                 {tasks.map((task) => (
                    <div key={task.id} className="p-6 flex items-center justify-between group hover:bg-slate-50/30 transition-colors">
                       <div className="flex items-center gap-4">
                          <button className={cn(
                             "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                             task.status === 'completed' ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-200 hover:border-primary-500"
                          )}>
                             {task.status === 'completed' && <CheckSquare size={12} />}
                          </button>
                          <span className={cn("text-sm font-bold", task.status === 'completed' ? "text-slate-400 line-through" : "text-slate-700")}>{task.title}</span>
                       </div>
                       <span className={cn(
                          "px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                          task.due === 'Today' ? "bg-rose-50 text-rose-500" : "bg-slate-100 text-slate-500"
                       )}>
                          {task.due}
                       </span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right Side: Announcements & Quick Actions */}
        <div className="space-y-8 h-full">
           
           {/* Quick Actions Panel */}
           <div className="card p-8 bg-slate-900 text-white border-none shadow-soft relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                 <Bell size={100} />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-300 mb-8">Announcements</h3>
              <div className="space-y-6">
                 {announcements.map((ann, i) => (
                    <div key={i} className="flex gap-4 group/item cursor-pointer">
                       <div className="flex flex-col items-center">
                          <div className={cn(
                             "w-2 h-2 rounded-full",
                             ann.priority === 'high' ? "bg-rose-500 shadow-lg shadow-rose-500/20" : ann.priority === 'medium' ? "bg-amber-500" : "bg-primary-500"
                          )} />
                          <div className="flex-1 w-px bg-slate-800 my-2" />
                       </div>
                       <div className="flex-1 pb-6 border-b border-white/5 last:border-none">
                          <p className="text-xs font-bold text-white group-hover/item:text-primary-400 transition-colors">{ann.title}</p>
                          <div className="flex items-center gap-3 mt-1.5">
                             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{ann.date}</span>
                             <span className="text-[10px] font-extrabold text-primary-500 uppercase tracking-widest">{ann.category}</span>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all">View All Board</button>
           </div>

           {/* Upcoming Holidays Card */}
           <div className="card p-6 border-none bg-gradient-to-br from-indigo-50 to-white shadow-soft">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold text-slate-900">Upcoming Holiday</h3>
                 <Calendar className="text-indigo-600" size={20} />
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-2xl bg-white border border-indigo-100 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-[10px] font-extrabold text-indigo-600 uppercase">Oct</span>
                    <span className="text-xl font-extrabold text-slate-900 leading-none mt-0.5">31</span>
                 </div>
                 <div>
                    <p className="text-sm font-bold text-slate-900">Halloween Celebration</p>
                    <p className="text-xs font-medium text-slate-500">Friday • Optional Holiday</p>
                 </div>
              </div>
              <div className="mt-8 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                 <span>Next in 7 Days</span>
                 <ArrowUpRight size={14} className="text-indigo-400" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
