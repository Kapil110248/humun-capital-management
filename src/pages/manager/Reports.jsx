import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Download, 
  Calendar, 
  ChevronRight, 
  Users, 
  Timer, 
  Briefcase, 
  CheckCircle2, 
  Target, 
  ArrowUpRight, 
  Filter, 
  Search,
  LayoutGrid
} from 'lucide-react';
import { cn } from '../../utils/cn';

const ManagerReports = () => {
  const stats = [
    { label: 'Team Productivity', value: '94%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Attendance Rate', value: '98.2%', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Goal Completion', value: '86%', icon: Target, color: 'text-primary-600', bg: 'bg-primary-50' },
    { label: 'Avg Rating', value: '4.7', icon: BarChart3, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  const reportTypes = [
     { id: 1, name: 'Attendance Report', icon: Timer, color: 'text-indigo-600', bg: 'bg-indigo-50' },
     { id: 2, name: 'Task Completion', icon: Briefcase, color: 'text-primary-600', bg: 'bg-primary-50' },
     { id: 3, name: 'KPI Progress', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50' },
     { id: 4, name: 'Leave Summary', icon: Calendar, color: 'text-rose-600', bg: 'bg-rose-50' },
     { id: 5, name: 'Review Summary', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
     { id: 6, name: 'Productivity Trend', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const topPerformance = [
     { name: 'John Wick', attendance: '100%', tasks: 42, kpi: 98, rating: 5.0, img: 'https://i.pravatar.cc/150?u=john' },
     { name: 'Alice Cooper', attendance: '98%', tasks: 38, kpi: 94, rating: 4.8, img: 'https://i.pravatar.cc/150?u=alice' },
     { name: 'Bob Marley', attendance: '92%', tasks: 30, kpi: 88, rating: 4.5, img: 'https://i.pravatar.cc/150?u=bob' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in focus:outline-none">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Team Insights & Reports</h1>
          <p className="text-slate-500 font-medium tracking-tight">Generate deep analytics for attendance, tasks and performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline text-indigo-600">Export PDF</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <LayoutGrid size={18} />
             <span>Custom Report</span>
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

      {/* Main Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full">
         
         {/* Report Generation Center */}
         <div className="lg:col-span-8 space-y-8 h-full">
            <div className="card p-8 bg-white border-none shadow-soft flex flex-col">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-slate-900">Available Report Suites</h3>
                  <div className="flex items-center gap-2 text-slate-400">
                     <Search size={18} className="cursor-pointer hover:text-slate-900 transition-colors" />
                     <div className="w-px h-4 bg-slate-100 mx-2" />
                     <Filter size={18} className="cursor-pointer hover:text-slate-900 transition-colors" />
                  </div>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
                  {reportTypes.map((type) => (
                     <motion.div
                       key={type.id}
                       whileHover={{ y: -4, backgroundColor: '#f8fafc' }}
                       className="p-6 border border-slate-100 rounded-[2.5rem] flex flex-col gap-5 group cursor-pointer transition-all"
                     >
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-lg transition-all", type.bg, type.color)}>
                           <type.icon size={24} />
                        </div>
                        <div className="space-y-1">
                           <h4 className="text-sm font-extrabold text-slate-900 leading-none">{type.name}</h4>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-2">Generate Insights</p>
                        </div>
                        <div className="mt-2 flex items-center gap-1.5 text-xs font-extrabold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                           Configure <ArrowUpRight size={14} />
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* Performance Analytics Table Preview */}
            <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
               <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                     <BarChart3 className="text-amber-500" size={24} />
                     Team Efficiency Leaderboard
                  </h3>
                  <button className="text-[10px] font-extrabold text-primary-600 uppercase tracking-widest hover:underline">Full Analytics</button>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                           <th className="px-8 py-5">Team Member</th>
                           <th className="px-8 py-5 text-center">Attendance %</th>
                           <th className="px-8 py-5 text-center">Tasks Done</th>
                           <th className="px-8 py-5 text-center">KPI Score</th>
                           <th className="px-8 py-5 text-right">Final Rating</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50 text-sm">
                        {topPerformance.map((user, i) => (
                           <tr key={i} className="group hover:bg-slate-50/20 transition-colors">
                              <td className="px-8 py-6">
                                 <div className="flex items-center gap-4">
                                    <img src={user.img} alt={user.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm" />
                                    <p className="font-bold text-slate-900">{user.name}</p>
                                 </div>
                              </td>
                              <td className="px-8 py-6 text-center font-bold text-slate-700">{user.attendance}</td>
                              <td className="px-8 py-6 text-center">
                                 <span className="px-3 py-1 bg-slate-50 text-slate-900 rounded-lg font-bold">{user.tasks}</span>
                              </td>
                              <td className="px-8 py-6 text-center font-black text-indigo-600">{user.kpi}</td>
                              <td className="px-8 py-6 text-right">
                                 <div className="flex justify-end gap-1 items-center">
                                    <p className="font-extrabold text-slate-900">{user.rating}</p>
                                    <BarChart3 size={14} className="text-amber-400" />
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         {/* Sidebar: Distribution & Insights */}
         <div className="lg:col-span-4 space-y-8 h-full flex flex-col">
            <div className="card p-8 bg-slate-900 text-white border-none shadow-soft flex-1 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                  <PieChart size={120} />
               </div>
               <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-400 mb-8">Quick Distribution Preview</h3>
               
               <div className="space-y-10">
                  {/* Visual Representation of Leave Distribution (Mock Pie Chart Style) */}
                  <div className="flex items-center justify-center py-4">
                     <div className="relative w-40 h-40">
                        <svg className="w-full h-full transform -rotate-90">
                           <circle cx="80" cy="80" r="70" className="stroke-white/5 fill-none" strokeWidth="16" />
                           <motion.circle 
                             cx="80" cy="80" r="70" 
                             className="stroke-indigo-500 fill-none" 
                             strokeWidth="16" 
                             strokeDasharray={440}
                             strokeDashoffset={440 - (440 * 0.45)}
                             strokeLinecap="round"
                             initial={{ strokeDashoffset: 440 }}
                             animate={{ strokeDashoffset: 440 - (440 * 0.45) }}
                             transition={{ duration: 2 }}
                           />
                           <motion.circle 
                             cx="80" cy="80" r="70" 
                             className="stroke-primary-500 fill-none" 
                             strokeWidth="16" 
                             strokeDasharray={440}
                             strokeDashoffset={440 - (440 * 0.25)}
                             strokeLinecap="round"
                             style={{ strokeDashoffset: 440 - (440 * 0.15), rotate: '160deg', transformOrigin: 'center' }}
                           />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                           <p className="text-2xl font-black text-white leading-none">88%</p>
                           <p className="text-[8px] font-extrabold text-slate-500 uppercase tracking-widest mt-1">Uptime</p>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                     {[
                        { label: 'Work Attendance', count: '94%', color: 'bg-indigo-500' },
                        { label: 'Task Execution', count: '82%', color: 'bg-primary-500' },
                        { label: 'KPI Alignment', count: '76%', color: 'bg-amber-500' },
                     ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-2">
                           <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
                              <span className="text-slate-400">{item.label}</span>
                              <span className="text-white">{item.count}</span>
                           </div>
                           <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <div className={cn("h-full", item.color)} style={{ width: item.count }} />
                           </div>
                        </div>
                     ))}
                  </div>

                  <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-[10px] font-extrabold uppercase tracking-widest border border-white/10 transition-all">
                     Download Analytics Bundle
                  </button>
               </div>
            </div>

            {/* Scheduler Card */}
            <div className="card p-8 bg-indigo-600 text-white border-none shadow-soft">
               <h3 className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-6">Automated Reports</h3>
               <p className="text-sm font-medium leading-relaxed mb-8">Schedule recurring PDF/Excel reports to be sent directly to your email every Monday.</p>
               <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-xl">
                  Enable Scheduling
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ManagerReports;
