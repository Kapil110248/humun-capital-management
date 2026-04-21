import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Video, 
  User, 
  Clock, 
  ChevronRight, 
  ExternalLink, 
  Bell, 
  CheckCircle2, 
  AlertCircle,
  MoreVertical,
  Briefcase,
  ChevronLeft,
  CalendarDays,
  Plus
} from 'lucide-react';
import { cn } from '../../utils/cn';

const InterviewSchedule = () => {
  const [view, setView] = useState('list'); // 'list' or 'calendar'

  const stats = [
    { label: 'Upcoming', value: 2, icon: CalendarIcon, color: 'text-primary-600', bg: 'bg-primary-50' },
    { label: 'Completed', value: 12, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Rescheduled', value: 3, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Offers Pending', value: 1, icon: Video, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const interviews = [
    {
      id: 1,
      role: 'Senior Product Designer',
      company: 'HCM.ai Global',
      round: 'Technical Round',
      type: 'Video Call',
      date: 'Tomorrow, Oct 25',
      time: '10:30 AM',
      timezone: 'PST',
      interviewer: 'Sarah Johnson',
      interviewerRole: 'Head of Design',
      link: 'https://zoom.us/j/123456789',
      status: 'Scheduled',
      isNext: true
    },
    {
      id: 2,
      role: 'UX Designer',
      company: 'TechFlow',
      round: 'Portfolio Review',
      type: 'Google Meet',
      date: 'Wed, Oct 28',
      time: '02:00 PM',
      timezone: 'PST',
      interviewer: 'David Chen',
      interviewerRole: 'Design Manager',
      link: 'https://meet.google.com/abc-defg-hij',
      status: 'Scheduled'
    },
    {
      id: 3,
      role: 'UI Designer',
      company: 'Stripe',
      round: 'HR Interview',
      type: 'Microsoft Teams',
      date: 'Oct 15, 2026',
      time: '11:00 AM',
      status: 'Completed'
    },
    {
      id: 4,
      role: 'Creative Lead',
      company: 'Vercel',
      round: 'Final Discussion',
      type: 'Office Visit',
      date: 'Oct 12, 2026',
      time: '04:00 PM',
      status: 'Cancelled'
    }
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Interview Schedule</h1>
          <p className="text-slate-500 font-medium">Track upcoming sessions and view past performance</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="bg-white border border-slate-200 p-1 rounded-xl flex shadow-sm">
              <button 
                onClick={() => setView('list')}
                className={cn("px-4 py-2 text-sm font-bold rounded-lg transition-all", view === 'list' ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900")}
              >
                List View
              </button>
              <button 
                onClick={() => setView('calendar')}
                className={cn("px-4 py-2 text-sm font-bold rounded-lg transition-all", view === 'calendar' ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900")}
              >
                Calendar
              </button>
           </div>
           <button className="btn-primary px-5 py-3 text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Add to Calendar</span>
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
               <div className={cn("p-3 rounded-xl", stat.bg, stat.color)}>
                  <stat.icon size={24} />
               </div>
               <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{stat.label}</p>
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</h3>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left: Next Interview Focus */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
           {interviews.filter(i => i.isNext).map(next => (
              <div key={next.id} className="card bg-gradient-to-br from-indigo-600 to-primary-700 text-white border-none p-8 space-y-8 relative overflow-hidden group">
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                 <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                       <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                          Next Interview • 18h Left
                       </div>
                       <h3 className="text-3xl font-extrabold leading-tight mb-2">{next.role}</h3>
                       <p className="text-primary-100 font-bold text-lg">{next.company} <span className="opacity-40 ml-1">|</span> <span className="opacity-80 ml-1">{next.round}</span></p>
                    </div>

                    <div className="mt-10 space-y-4">
                       <div className="flex items-center gap-4 text-primary-50">
                          <Clock size={20} className="opacity-60" />
                          <div className="font-bold">
                             <p className="text-sm">{next.date}</p>
                             <p className="text-2xl">{next.time} <span className="opacity-50 text-base">{next.timezone}</span></p>
                          </div>
                       </div>
                       <div className="flex items-center gap-4 text-primary-50">
                          <User size={20} className="opacity-60" />
                          <div className="font-bold">
                             <p className="text-sm">Interviewer</p>
                             <p className="text-lg">{next.interviewer}</p>
                          </div>
                       </div>
                    </div>

                    <div className="mt-10 flex gap-3">
                       <button className="flex-1 py-3.5 bg-white text-primary-600 rounded-xl text-sm font-bold shadow-xl hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                          <Video size={18} />
                          <span>Join Video Call</span>
                       </button>
                       <button className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all">
                          <Bell size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           ))}

           <div className="card bg-white p-6 justify-between flex flex-col shadow-soft border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                 <AlertCircle className="text-amber-500" size={20} />
                 Preparation Tips
              </h3>
              <ul className="space-y-4">
                 {[
                   'Test your audio & video setup',
                   'Research company culture & recent news',
                   'Prepare 3-5 specific questions',
                   'Review the job requirements one last time'
                 ].map((tip, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium text-slate-600">
                       <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400 mt-2" />
                       {tip}
                    </li>
                 ))}
              </ul>
              <button className="w-full mt-6 py-2.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-colors">
                 Read Success Guide
              </button>
           </div>
        </div>

        {/* Right: Timeline/Table */}
        <div className="lg:col-span-2 space-y-6">
           {view === 'list' ? (
              <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
                 <div className="flex items-center justify-between p-6 border-b border-slate-50">
                    <h2 className="text-xl font-extrabold text-slate-900">Your Sessions</h2>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 py-0.5 bg-slate-50 rounded">Show: All</span>
                    </div>
                 </div>
                 
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="bg-slate-50/50">
                             <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Job/Company</th>
                             <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Schedule</th>
                             <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Round</th>
                             <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Status</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-50">
                          {interviews.map((item) => (
                             <tr key={item.id} className="group hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-6">
                                   <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-sm">
                                         {item.company[0]}
                                      </div>
                                      <div>
                                         <p className="text-sm font-bold text-slate-900 leading-none">{item.role}</p>
                                         <p className="text-xs font-medium text-primary-600 mt-1">{item.company}</p>
                                      </div>
                                   </div>
                                </td>
                                <td className="px-6 py-6">
                                   <p className="text-sm font-bold text-slate-700">{item.date}</p>
                                   <p className="text-xs font-medium text-slate-400 mt-0.5">{item.time}</p>
                                </td>
                                <td className="px-6 py-6">
                                   <div className="flex items-center gap-2 text-slate-600">
                                      {item.type.includes('Video') || item.type.includes('Meet') ? <Video size={14} className="opacity-50" /> : <MapPin size={14} className="opacity-50" />}
                                      <span className="text-xs font-bold">{item.round}</span>
                                   </div>
                                </td>
                                <td className="px-6 py-6 text-right">
                                   <span className={cn(
                                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm",
                                      item.status === 'Scheduled' ? "bg-primary-50 text-primary-600" :
                                      item.status === 'Completed' ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                                   )}>
                                      {item.status}
                                   </span>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           ) : (
              <div className="card min-h-[500px] border-none bg-white shadow-soft flex flex-col items-center justify-center text-center p-12">
                 <CalendarDays size={80} className="text-slate-100 mb-6" />
                 <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Calendar Integration</h3>
                 <p className="text-slate-500 font-medium max-w-sm">Connect your Google or Outlook calendar to view your interview schedule visually.</p>
                 <button className="mt-8 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-xl">Connect Calendar</button>
              </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default InterviewSchedule;
