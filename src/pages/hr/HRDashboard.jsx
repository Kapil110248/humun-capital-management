import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  BadgeCheck, 
  TrendingUp, 
  Plus, 
  Download, 
  Search, 
  MoreVertical, 
  ExternalLink,
  Video,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  BarChart3,
  PieChart as PieIcon,
  ChevronRight,
  UserPlus,
  Send,
  CalendarCheck
} from 'lucide-react';
import { cn } from '../../utils/cn';

const HRDashboard = () => {
  const stats = [
    { label: 'Open Jobs', value: '18', trend: '+4 new this week', icon: Briefcase, color: 'blue', bg: 'bg-blue-50', iconColor: 'text-blue-600', trendColor: 'text-blue-500' },
    { label: 'New Applicants', value: '126', trend: '+22 since yesterday', icon: Users, color: 'purple', bg: 'bg-purple-50', iconColor: 'text-purple-600', trendColor: 'text-purple-500' },
    { label: 'Interviews Today', value: '9', trend: '3 starting in 1 hour', icon: CalendarCheck, color: 'green', bg: 'bg-emerald-50', iconColor: 'text-emerald-600', trendColor: 'text-emerald-500' },
    { label: 'Hires This Month', value: '7', trend: '+2 vs last month', icon: BadgeCheck, color: 'orange', bg: 'bg-orange-50', iconColor: 'text-orange-600', trendColor: 'text-orange-500' },
  ];

  const funnelSteps = [
    { label: 'Applied', count: 420 },
    { label: 'Screening', count: 184 },
    { label: 'Shortlisted', count: 86 },
    { label: 'Interview', count: 32 },
    { label: 'Offer', count: 12 },
    { label: 'Hired', count: 7 },
  ];

  const recentApplicants = [
    { name: 'Alice Cooper', role: 'Product Designer', exp: '4 Years', match: 94, status: 'Interview', img: 'https://i.pravatar.cc/150?u=alice' },
    { name: 'Bob Marley', role: 'Software Engineer', exp: '6 Years', match: 88, status: 'Screening', img: 'https://i.pravatar.cc/150?u=bob' },
    { name: 'Charlie Put', role: 'DevOps Lead', exp: '8 Years', match: 91, status: 'Shortlisted', img: 'https://i.pravatar.cc/150?u=charlie' },
    { name: 'Diana Ross', role: 'Marketing Mgr', exp: '5 Years', match: 82, status: 'Applied', img: 'https://i.pravatar.cc/150?u=diana' },
  ];

  const todaysInterviews = [
    { name: 'John Wick', role: 'Security Analyst', time: '10:30 AM', interviewer: 'Sarah Connor', img: 'https://i.pravatar.cc/150?u=john' },
    { name: 'Lara Croft', role: 'Archaeology Lead', time: '02:00 PM', interviewer: 'Indy Jones', img: 'https://i.pravatar.cc/150?u=lara' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in flex flex-col min-h-screen lg:min-h-0 lg:h-auto overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">HR Dashboard</h1>
          <p className="text-slate-500 font-medium">Monitor recruitment pipeline and hiring performance</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span>Export Report</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Create Job Post</span>
          </button>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="card p-6 bg-white border border-slate-100 shadow-soft group transition-all"
          >
            <div className="flex items-center justify-between mb-4">
               <div className={cn("p-3 rounded-2xl transition-colors", stat.bg, stat.iconColor)}>
                  <stat.icon size={26} />
               </div>
               <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-lg text-[10px] font-bold">
                  <TrendingUp size={12} />
                  <span>12%</span>
               </div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{stat.label}</p>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">{stat.value}</h3>
              <p className={cn("text-xs font-bold", stat.trendColor)}>{stat.trend}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Focus: Hiring Pipeline & Recent Applicants */}
        <div className="lg:col-span-8 space-y-8">
           
           {/* Hiring Pipeline Funnel */}
           <div className="card p-8 border-none bg-white shadow-soft">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Filter className="text-primary-600" size={20} />
                    Hiring Pipeline
                 </h3>
                 <button className="text-xs font-bold text-primary-600 hover:underline flex items-center gap-1">
                    <span>Full Funnel</span>
                    <ChevronRight size={14} />
                 </button>
              </div>
              
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-4">
                 {funnelSteps.map((step, i) => (
                    <React.Fragment key={i}>
                       <div className="flex-1 min-w-[120px] p-4 bg-slate-50/50 rounded-2xl border border-slate-100 text-center group hover:bg-primary-50 hover:border-primary-100 transition-all cursor-default">
                          <p className="text-xs font-bold tracking-widest text-slate-400 group-hover:text-primary-600 uppercase mb-2">{step.label}</p>
                          <h4 className="text-2xl font-extrabold text-slate-900">{step.count}</h4>
                       </div>
                       {i < funnelSteps.length - 1 && (
                          <div className="hidden lg:block text-slate-200">
                             <ChevronRight size={20} />
                          </div>
                       )}
                    </React.Fragment>
                 ))}
              </div>
           </div>

           {/* Recent Applicants Table */}
           <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-50">
                 <h3 className="text-lg font-bold text-slate-900">Recent Applicants</h3>
                 <div className="relative">
                    <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                    <input type="text" placeholder="Search..." className="bg-slate-50 border-none rounded-xl pl-10 pr-4 py-2 text-sm font-medium w-48 focus:ring-2 focus:ring-primary-100 transition-all" />
                 </div>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="bg-slate-50/50">
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Candidate</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Job Role</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">AI Match</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                       {recentApplicants.map((app, i) => (
                          <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                             <td className="px-6 py-5">
                                <div className="flex items-center gap-4">
                                   <img src={app.img} alt={app.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm" />
                                   <div>
                                      <p className="text-sm font-bold text-slate-900">{app.name}</p>
                                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{app.exp} Exp</p>
                                   </div>
                                </div>
                             </td>
                             <td className="px-6 py-5">
                                <p className="text-sm font-bold text-slate-700">{app.role}</p>
                             </td>
                             <td className="px-6 py-5">
                                <div className="flex flex-col items-center gap-1.5">
                                   <span className={cn(
                                      "text-xs font-extrabold",
                                      app.match > 90 ? "text-emerald-500" : "text-amber-500"
                                   )}>{app.match}%</span>
                                   <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                      <div className={cn("h-full rounded-full", app.match > 90 ? "bg-emerald-500" : "bg-amber-500")} style={{ width: `${app.match}%` }} />
                                   </div>
                                </div>
                             </td>
                             <td className="px-6 py-5">
                                <span className={cn(
                                   "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                   app.status === 'Interview' ? "bg-purple-50 text-purple-600" :
                                   app.status === 'Shortlisted' ? "bg-blue-50 text-blue-600" :
                                   app.status === 'Screening' ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-600"
                                )}>
                                   {app.status}
                                </span>
                             </td>
                             <td className="px-6 py-5 text-right">
                                <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all">
                                   <MoreVertical size={18} />
                                </button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="p-4 bg-slate-50/50 border-t border-slate-50 text-center">
                 <button className="text-xs font-bold text-primary-600 hover:underline">View All Candidates</button>
              </div>
           </div>
        </div>

        {/* Right Content: Interviews & Quick Actions */}
        <div className="lg:col-span-4 space-y-8">
           
           {/* Quick Actions Panel */}
           <div className="card p-6 border-none bg-slate-900 text-white shadow-soft relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                 <Sparkles size={100} />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-300 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                 {[
                    { label: 'Create Job', icon: Plus, bg: 'bg-primary-600' },
                    { label: 'Add Person', icon: UserPlus, bg: 'bg-white/10' },
                    { label: 'Schedule', icon: Calendar, bg: 'bg-white/10' },
                    { label: 'Send Offer', icon: Send, bg: 'bg-white/10' },
                 ].map((act, i) => (
                    <button key={i} className={cn("p-4 rounded-2xl flex flex-col items-center gap-3 transition-all hover:scale-105 active:scale-95", act.bg)}>
                       <act.icon size={20} />
                       <span className="text-[10px] font-bold uppercase tracking-widest">{act.label}</span>
                    </button>
                 ))}
              </div>
           </div>

           {/* Today's Interviews */}
           <div className="card p-6 border-none bg-white shadow-soft">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold text-slate-900">Today's Interviews</h3>
                 <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div className="space-y-4">
                 {todaysInterviews.map((int, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-100 transition-all group">
                       <div className="flex items-center gap-4 mb-4">
                          <img src={int.img} alt={int.name} className="w-12 h-12 rounded-xl object-cover" />
                          <div className="flex-1">
                             <p className="text-sm font-bold text-slate-900">{int.name}</p>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{int.role}</p>
                          </div>
                          <div className="text-right">
                             <p className="text-sm font-extrabold text-primary-600">{int.time}</p>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PST</p>
                          </div>
                       </div>
                       <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex flex-col">
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Interviewer</p>
                             <p className="text-xs font-bold text-slate-700">{int.interviewer}</p>
                          </div>
                          <button className="px-4 py-2 bg-white border border-slate-200 text-primary-600 rounded-xl text-[10px] font-bold hover:bg-primary-50 hover:border-primary-200 transition-all flex items-center gap-2">
                             <Video size={14} />
                             <span>Join Link</span>
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-6 py-3 bg-slate-50 text-slate-500 text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors">View All Schedule</button>
           </div>

           {/* Analytics Preview Card */}
           <div className="card p-6 border-none bg-gradient-to-br from-indigo-50 to-white shadow-soft group">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold text-slate-900">Weekly Highlights</h3>
                 <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
                    <BarChart3 size={18} />
                 </div>
              </div>
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between items-center mb-2">
                       <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Candidate Experience</p>
                       <p className="text-sm font-extrabold text-indigo-600">92%</p>
                    </div>
                    <div className="w-full h-2 bg-white rounded-full overflow-hidden shadow-inner border border-slate-100">
                       <div className="h-full bg-indigo-500 rounded-full" style={{ width: '92%' }} />
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between items-center mb-2">
                       <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Time to Hire</p>
                       <p className="text-sm font-extrabold text-indigo-600">18 Days</p>
                    </div>
                    <div className="w-full h-2 bg-white rounded-full overflow-hidden shadow-inner border border-slate-100">
                       <div className="h-full bg-primary-500 rounded-full" style={{ width: '65%' }} />
                    </div>
                 </div>
              </div>
              <div className="mt-8 pt-6 border-t border-indigo-100/30 flex items-center justify-between">
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Insights update every 24h</p>
                 <button className="p-1.5 hover:bg-white rounded-lg transition-all">
                    <ChevronRight size={16} className="text-indigo-600" />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
