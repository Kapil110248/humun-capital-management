import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Target, 
  Award, 
  TrendingUp, 
  Star, 
  ChevronRight, 
  Calendar, 
  ExternalLink, 
  Download, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  User,
  LayoutGrid
} from 'lucide-react';
import { cn } from '../../utils/cn';

const EmployeePerformance = () => {
  const stats = [
    { label: 'Overall Rating', value: '4.8', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Goals Complete', value: '12', icon: Target, color: 'text-primary-600', bg: 'bg-primary-50' },
    { label: 'Active Projects', value: '4', icon: Zap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Growth Progress', value: '86%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  const goals = [
    { name: 'Redesign HR Dashboard', lead: 'Sarah J.', deadline: 'Oct 31, 2026', progress: 85, status: 'On Track' },
    { name: 'Implement Design System', lead: 'Mike R.', deadline: 'Nov 15, 2026', progress: 40, status: 'Delayed' },
    { name: 'Onboard 5 New Designers', lead: 'Self', deadline: 'Dec 01, 2026', progress: 100, status: 'Completed' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in focus:outline-none">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Performance & Growth</h1>
          <p className="text-slate-500 font-medium tracking-tight">Track your professional goals, review history, and skill development</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
             <Download size={18} />
             <span className="hidden sm:inline">Download Report</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <LayoutGrid size={18} />
             <span>View All Reviews</span>
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
         
         {/* Main Goals Section */}
         <div className="lg:col-span-8 space-y-8">
            <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
               <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                     <Target className="text-primary-600" size={24} />
                     Active Goals & KPIs
                  </h3>
                  <button className="text-xs font-bold text-primary-600 hover:underline">Full Strategy</button>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                           <th className="px-8 py-5">Goal / KPI</th>
                           <th className="px-8 py-5 text-center">Deadline</th>
                           <th className="px-8 py-5 text-center">Progress</th>
                           <th className="px-8 py-5 text-right">Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50 text-sm">
                        {goals.map((goal, i) => (
                           <tr key={i} className="group hover:bg-slate-50/20 transition-colors">
                              <td className="px-8 py-6">
                                 <p className="font-bold text-slate-900 mb-1">{goal.name}</p>
                                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lead: {goal.lead}</p>
                              </td>
                              <td className="px-8 py-6 text-center">
                                 <div className="flex items-center justify-center gap-2 text-slate-500 font-medium">
                                    <Clock size={14} className="opacity-40" />
                                    {goal.deadline}
                                 </div>
                              </td>
                              <td className="px-8 py-6">
                                 <div className="flex flex-col gap-1.5 min-w-[120px]">
                                    <div className="flex justify-between items-center px-1">
                                       <span className="text-xs font-extrabold text-slate-900">{goal.progress}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-50 shadow-inner p-[1px]">
                                       <motion.div 
                                         initial={{ width: 0 }}
                                         animate={{ width: `${goal.progress}%` }}
                                         className={cn(
                                            "h-full rounded-full transition-all",
                                            goal.progress === 100 ? "bg-emerald-500" : goal.status === 'Delayed' ? "bg-rose-500" : "bg-primary-500"
                                         )} 
                                       />
                                    </div>
                                 </div>
                              </td>
                              <td className="px-8 py-6 text-right">
                                 <span className={cn(
                                    "px-3 py-1 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border",
                                    goal.status === 'Completed' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                    goal.status === 'Delayed' ? "bg-rose-50 text-rose-500 border-rose-100" :
                                    "bg-primary-50 text-primary-600 border-primary-100"
                                 )}>
                                    {goal.status}
                                 </span>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Assessment History */}
            <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
               <div className="p-8 border-b border-slate-50">
                  <h3 className="text-xl font-bold text-slate-900">Quarterly Review History</h3>
               </div>
               <div className="p-8 space-y-6">
                  {[
                     { period: 'Q3 2026', reviewer: 'Sarah Johnson', rating: '4.8/5.0', comment: 'Exceptional ownership on the design system rollout. Strong collaborator.' },
                     { period: 'Q2 2026', reviewer: 'Sarah Johnson', rating: '4.5/5.0', comment: 'Quality of work is very high. Focus on mentoring juniors for next quarter.' }
                  ].map((review, i) => (
                     <div key={i} className="group p-6 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-center mb-4">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary-600 shadow-sm">
                                 <BarChart3 size={24} />
                              </div>
                              <div>
                                 <p className="text-lg font-extrabold text-slate-800">{review.period}</p>
                                 <p className="text-xs font-bold text-primary-500 uppercase tracking-widest">Reviewer: {review.reviewer}</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-2xl font-extrabold text-slate-900 leading-none">{review.rating}</p>
                              <div className="flex gap-0.5 mt-1">
                                 {[1,2,3,4,5].map(s => <Star key={s} size={10} className={cn(s <= 4 ? "text-amber-400 fill-amber-400" : "text-slate-200")} />)}
                              </div>
                           </div>
                        </div>
                        <p className="text-sm font-medium text-slate-500 leading-relaxed italic">"{review.comment}"</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Right Sidebar: Skills & Growth */}
         <div className="lg:col-span-4 space-y-8">
            <div className="card p-8 bg-slate-900 text-white border-none shadow-soft relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
                  <Award size={80} />
               </div>
               <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-400 mb-8">Skills Matrix</h3>
               <div className="space-y-6">
                  {[
                     { name: 'Visual Design', level: 92 },
                     { name: 'Frontend Arch.', level: 75 },
                     { name: 'Team Strategy', level: 84 },
                     { name: 'Prototyping', level: 98 },
                  ].map((skill, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest">
                           <span className="text-slate-400">{skill.name}</span>
                           <span className="text-primary-400">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: `${skill.level}%` }}
                             className="h-full bg-primary-500 rounded-full" 
                           />
                        </div>
                     </div>
                  ))}
               </div>
               <button className="w-full mt-10 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-extrabold uppercase tracking-[0.2em] hover:bg-white/10 transition-all">Submit Skill Audit</button>
            </div>

            <div className="card p-8 bg-white border-none shadow-soft">
               <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Zap size={18} className="text-amber-500" />
                  Growth Insights
               </h3>
               <div className="space-y-4">
                  {[
                     { title: 'Project Management Cert.', type: 'Coursera', time: '12h Left' },
                     { title: 'Advanced React Patterns', type: 'FrontendMasters', time: 'Completed' },
                     { title: 'Leadership Workshop', type: 'HR Workshop', time: 'Nov 02' },
                  ].map((course, i) => (
                     <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group cursor-pointer hover:bg-white hover:shadow-lg hover:border-transparent transition-all">
                        <p className="text-xs font-bold text-slate-800 leading-tight group-hover:text-primary-600 transition-colors">{course.title}</p>
                        <div className="flex items-center justify-between mt-2">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{course.type}</span>
                           <span className={cn(
                              "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-widest",
                              course.time === 'Completed' ? "bg-emerald-50 text-emerald-500" : "bg-primary-50 text-primary-600"
                           )}>{course.time}</span>
                        </div>
                     </div>
                  ))}
               </div>
               <button className="w-full mt-6 py-3 border border-dashed border-slate-200 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-all">Browse Internal Academy</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default EmployeePerformance;
