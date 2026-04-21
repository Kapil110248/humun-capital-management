import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  Award, 
  UserCircle, 
  TrendingUp, 
  Search, 
  Plus, 
  ExternalLink, 
  ChevronRight,
  MoreHorizontal,
  Clock,
  Video,
  FileText,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../../utils/cn';

const CandidateDashboard = () => {
  const stats = [
    {
      title: 'Applied Jobs',
      value: '12',
      trend: '+3 this week',
      icon: Briefcase,
      color: 'blue',
      bg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100'
    },
    {
      title: 'Interviews Scheduled',
      value: '4',
      trend: 'Next: Tomorrow',
      icon: Calendar,
      color: 'purple',
      bg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-100'
    },
    {
      title: 'Offers Received',
      value: '2',
      trend: '+1 new offer',
      icon: Award,
      color: 'green',
      bg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-100'
    },
    {
      title: 'Profile Completion',
      value: '85%',
      trend: 'Complete to reach 100%',
      icon: UserCircle,
      color: 'orange',
      bg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-100',
      isProgress: true
    }
  ];

  const recentApplications = [
    { id: 1, title: 'Senior UX Designer', company: 'Google Inc.', date: 'Oct 24, 2026', status: 'Under Review', logo: 'G' },
    { id: 2, title: 'Product Manager', company: 'Stripe', date: 'Oct 22, 2026', status: 'Shortlisted', logo: 'S' },
    { id: 3, title: 'Frontend Developer', company: 'Vercel', date: 'Oct 20, 2026', status: 'Interview', logo: 'V' },
    { id: 4, title: 'Marketing Lead', company: 'Meta', date: 'Oct 18, 2026', status: 'Rejected', logo: 'M' },
  ];

  const upcomingInterviews = [
    { id: 1, company: 'Stripe', role: 'Product Manager', time: '10:30 AM', date: 'Tomorrow', type: 'Video Call' },
    { id: 2, company: 'Google Inc.', role: 'Senior UX Designer', time: '02:00 PM', date: 'Oct 28', type: 'Technical Round' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 font-medium">Welcome back, track your job journey and progress</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 active:scale-95">
          <Search size={18} />
          <span>Browse Jobs</span>
        </button>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className={cn(
              "p-6 rounded-2xl bg-white border border-slate-100 shadow-soft transition-all group hover:border-primary-100",
              stat.color === 'blue' && "hover:shadow-blue-100/50",
              stat.color === 'purple' && "hover:shadow-purple-100/50",
              stat.color === 'green' && "hover:shadow-emerald-100/50",
              stat.color === 'orange' && "hover:shadow-orange-100/50"
            )}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={cn("p-3 rounded-xl", stat.bg, stat.iconColor)}>
                <stat.icon size={22} />
              </div>
              <div className="p-1 px-2 rounded-lg bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {stat.isProgress ? "Progress" : "Stat"}
              </div>
            </div>
            
            <div>
              <p className="text-sm font-bold text-slate-500 mb-1">{stat.title}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</h3>
              </div>
              
              {stat.isProgress ? (
                <div className="mt-4">
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: stat.value }}
                      className="h-full bg-orange-500 rounded-full"
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <p className="text-xs font-medium text-slate-400 mt-2">{stat.trend}</p>
                </div>
              ) : (
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp size={12} className={cn(stat.iconColor)} />
                  <p className="text-xs font-bold text-slate-400">{stat.trend}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Recent Applications */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card border-none bg-white p-0">
            <div className="flex items-center justify-between p-6 border-b border-slate-50">
              <h2 className="text-xl font-extrabold text-slate-900">Recent Applications</h2>
              <button className="text-sm font-bold text-primary-600 hover:text-primary-700">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Department / Role</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date Applied</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentApplications.map((app) => (
                    <tr key={app.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                            {app.logo}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 leading-none">{app.title}</p>
                            <p className="text-xs text-slate-500 mt-1">{app.company}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-500">{app.date}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase",
                          app.status === 'Shortlisted' ? "bg-blue-50 text-blue-600" :
                          app.status === 'Interview' ? "bg-purple-50 text-purple-600" :
                          app.status === 'Under Review' ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"
                        )}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all">
                          <ExternalLink size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-gradient-to-br from-primary-600 to-indigo-700 text-white p-8 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Plus size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Build your AI-Resume</h3>
              <p className="text-primary-50 text-sm mb-6 opacity-80 leading-relaxed font-medium">Use our smart editor to generate an industry-ready resume in minutes.</p>
              <button className="px-4 py-2 bg-white text-primary-600 rounded-lg text-sm font-bold shadow-xl hover:bg-slate-50 transition-all active:scale-95">Start Building</button>
            </div>
            <div className="card bg-white p-6 justify-between flex flex-col">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Profile Insights</h3>
                <p className="text-slate-500 text-sm mb-4 font-medium">Your profile was viewed by <span className="text-primary-600 font-bold">14 recruiters</span> this week.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="recruiter" />
                    </div>
                  ))}
                </div>
                <button className="text-xs font-bold text-primary-600">See Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Sidebar content */}
        <div className="space-y-6">
          {/* Upcoming Interviews */}
          <div className="card">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Calendar className="text-primary-600" size={20} />
              Upcoming Interviews
            </h3>
            <div className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <div key={interview.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary-200 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-xs font-bold text-primary-600 uppercase tracking-widest leading-none mb-1">{interview.date} • {interview.time}</p>
                      <h4 className="font-bold text-slate-900">{interview.company}</h4>
                      <p className="text-xs text-slate-500 font-medium">{interview.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-primary-600 transition-colors">
                      <Video size={18} />
                    </div>
                  </div>
                  <button className="w-full py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all active:scale-95 shadow-sm">
                    Join Meeting
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm font-bold text-slate-400 hover:text-slate-600">
               View Schedule
            </button>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Plus className="text-primary-600" size={20} />
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Update Resume', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Complete Profile', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Job Preferences', icon: Search, color: 'text-purple-600', bg: 'bg-purple-50' },
              ].map((action, idx) => (
                <button key={idx} className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all group w-full text-left text-sm font-bold text-slate-600">
                  <div className={cn("p-2 rounded-lg", action.bg, action.color)}>
                    <action.icon size={16} />
                  </div>
                  <span>{action.label}</span>
                  <ChevronRight size={14} className="ml-auto text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Notifications Placeholder */}
          <div className="card bg-slate-50 border-dashed border-2 flex flex-col items-center justify-center py-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
              <Clock size={24} />
            </div>
            <p className="text-sm font-bold text-slate-900">Stay Tuned!</p>
            <p className="text-xs text-slate-500 font-medium mt-1">AI-powered job alerts coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;
