import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  UserCheck, 
  ClipboardCheck, 
  AlertTriangle, 
  TrendingUp, 
  Plus, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ArrowUpRight,
  Target,
  LayoutGrid,
  BarChart3,
  Search
} from 'lucide-react';
import { cn } from '../../utils/cn';

const ManagerDashboard = () => {
  const stats = [
    { label: 'Team Size', value: '18', icon: Users, trend: '+2 new members', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Present Today', value: '15', icon: UserCheck, trend: '3 on leave', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Pending Approvals', value: '6', icon: ClipboardCheck, trend: 'Needs review today', color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Performance Alerts', value: '3', icon: AlertTriangle, trend: 'Requires attention', color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  const pendingLeaves = [
    { name: 'Alice Cooper', type: 'Sick Leave', date: 'Oct 24-26', img: 'https://i.pravatar.cc/150?u=alice' },
    { name: 'John Wick', type: 'Annual Leave', date: 'Oct 28-31', img: 'https://i.pravatar.cc/150?u=john' },
    { name: 'Sarah Connor', type: 'Casual Leave', date: 'Nov 02', img: 'https://i.pravatar.cc/150?u=sarah' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in focus:outline-none">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Manager Dashboard</h1>
          <p className="text-slate-500 font-medium">Monitor team productivity, approvals and performance in real-time</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Export Report</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Add Task</span>
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
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{stat.trend}</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         {/* Team Attendance & Activity */}
         <div className="lg:col-span-8 space-y-8">
            <div className="card p-8 bg-white border-none shadow-soft h-[400px] flex flex-col">
               <div className="flex items-center justify-between mb-10">
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 tracking-tight">Team Attendance Overview</h3>
                     <p className="text-sm font-medium text-slate-400">Activity comparison across departments</p>
                  </div>
                  <div className="flex bg-slate-50 p-1 rounded-xl">
                     <button className="px-4 py-1.5 bg-white text-slate-900 text-[10px] font-extrabold uppercase tracking-widest rounded-lg shadow-sm">This Week</button>
                     <button className="px-4 py-1.5 text-slate-400 text-[10px] font-extrabold uppercase tracking-widest hover:text-slate-600 transition-colors">Previous</button>
                  </div>
               </div>
               
               <div className="flex-1 flex items-end justify-between gap-8 px-4 mb-4">
                  {[
                     { day: 'Mon', present: 18, total: 18 },
                     { day: 'Tue', present: 16, total: 18 },
                     { day: 'Wed', present: 14, total: 18 },
                     { day: 'Thu', present: 15, total: 18 },
                     { day: 'Fri', present: 17, total: 18 },
                     { day: 'Sat', present: 4, total: 6 },
                     { day: 'Sun', present: 0, total: 0 }
                  ].map((d, i) => (
                     <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                        <div className="w-full relative flex items-end justify-center">
                           <div className="w-full max-w-[20px] bg-slate-100 rounded-full h-40 relative overflow-hidden">
                              <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: d.total > 0 ? `${(d.present / d.total) * 100}%` : 0 }}
                                className="absolute bottom-0 inset-x-0 bg-primary-600 rounded-full shadow-lg shadow-primary-100" 
                              />
                           </div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{d.day}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Recent Goal Tracking */}
            <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
               <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                     <Target className="text-primary-600" size={24} />
                     Goal Progress Summary
                  </h3>
                  <button className="text-[10px] font-extrabold text-primary-600 uppercase tracking-widest hover:underline">View Performance</button>
               </div>
               <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                     { label: 'Q4 Product Launch', progress: 84, status: 'On Track', color: 'bg-emerald-500' },
                     { label: 'Customer Retention', progress: 62, status: 'At Risk', color: 'bg-amber-500' },
                     { label: 'Team Hiring Phase', progress: 30, status: 'Delayed', color: 'bg-rose-500' },
                     { label: 'UX Research Sprint', progress: 100, status: 'Completed', color: 'bg-indigo-500' },
                  ].map((goal, i) => (
                     <div key={i} className="space-y-3">
                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                           <span className="text-slate-600">{goal.label}</span>
                           <span className="text-slate-900">{goal.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-[1px]">
                           <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: `${goal.progress}%` }}
                             className={cn("h-full rounded-full transition-all duration-1000", goal.color)} 
                           />
                        </div>
                        <p className={cn("text-[10px] font-bold uppercase tracking-widest", goal.status === 'On Track' ? "text-emerald-500" : "text-slate-400")}>{goal.status}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Sidebar: Approvals & Analytics */}
         <div className="lg:col-span-4 space-y-8 flex flex-col">
            <div className="card p-8 bg-slate-900 text-white border-none shadow-soft flex-1 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                  <ClipboardCheck size={100} />
               </div>
               <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-8">Pending Appovals</h3>
               <div className="space-y-6">
                  {pendingLeaves.map((req, i) => (
                     <div key={i} className="group p-4 bg-white/5 border border-white/10 rounded-[1.5rem] hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                           <img src={req.img} alt={req.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-white/10" />
                           <div className="min-w-0 flex-1">
                              <p className="text-sm font-bold truncate">{req.name}</p>
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{req.type}</p>
                           </div>
                        </div>
                        <div className="flex items-center justify-between">
                           <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest flex items-center gap-1.5">
                              <Clock size={12} />
                              {req.date}
                           </span>
                           <button className="text-[10px] font-extrabold text-white uppercase tracking-widest flex items-center gap-1 px-3 py-1 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                              Review <ArrowUpRight size={12} />
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
               <button className="w-full mt-8 py-3.5 bg-white text-slate-900 rounded-xl text-[10px] font-extrabold uppercase tracking-widest shadow-xl hover:bg-slate-50 transition-all">Go to Requests</button>
            </div>

            <div className="card p-8 bg-white border-none shadow-soft">
               <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <BarChart3 size={18} className="text-primary-600" />
                  Performance Index
               </h3>
               <div className="space-y-6">
                  {[
                     { label: 'Engineering', score: 92, color: 'text-indigo-600' },
                     { label: 'Product & Design', score: 88, color: 'text-primary-600' },
                     { label: 'Sales & Ops', score: 74, color: 'text-amber-600' },
                  ].map((dept, i) => (
                     <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:scale-105 transition-transform cursor-pointer">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{dept.label}</span>
                        <span className={cn("text-xl font-extrabold", dept.color)}>{dept.score}%</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
