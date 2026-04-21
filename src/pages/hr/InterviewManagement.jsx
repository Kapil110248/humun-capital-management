import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Calendar, 
  Clock, 
  Video, 
  User, 
  VideoIcon, 
  Users, 
  ChevronRight, 
  MoreVertical, 
  CheckCircle2, 
  X, 
  ExternalLink,
  MapPin,
  AlertCircle,
  RotateCcw,
  Check,
  CalendarDays
} from 'lucide-react';
import { cn } from '../../utils/cn';

const InterviewManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState('list');

  const stats = [
    { label: "Today's Interviews", value: '9', icon: Calendar, bg: 'bg-primary-50', color: 'text-primary-600' },
    { label: 'Upcoming', value: '24', icon: Clock, bg: 'bg-amber-50', color: 'text-amber-600' },
    { label: 'Completed', value: '156', icon: CheckCircle2, bg: 'bg-emerald-50', color: 'text-emerald-600' },
    { label: 'Rescheduled', value: '3', icon: RotateCcw, bg: 'bg-purple-50', color: 'text-purple-600' },
  ];

  const interviews = [
    {
      id: 1,
      candidate: 'John Wick',
      role: 'Security Specialist',
      interviewer: 'Sarah Johnson',
      date: 'Today, Oct 24',
      time: '10:30 AM',
      round: 'Technical Round',
      status: 'Scheduled',
      link: 'https://zoom.us/j/123456789',
      img: 'https://i.pravatar.cc/150?u=john'
    },
    {
      id: 2,
      candidate: 'Lara Croft',
      role: 'Project Manager',
      interviewer: 'Indy Jones',
      date: 'Today, Oct 24',
      time: '02:00 PM',
      round: 'Final Interview',
      status: 'Scheduled',
      link: 'https://zoom.us/j/987654321',
      img: 'https://i.pravatar.cc/150?u=lara'
    },
    {
      id: 3,
      candidate: 'Alice Cooper',
      role: 'Senior UI/UX Designer',
      interviewer: 'David Chen',
      date: 'Oct 25, 2026',
      time: '11:00 AM',
      round: 'Portfolio Review',
      status: 'Scheduled',
      link: 'https://meet.google.com/abc-defg-hij',
      img: 'https://i.pravatar.cc/150?u=alice'
    },
    {
      id: 4,
      candidate: 'Bob Marley',
      role: 'Lead Developer',
      interviewer: 'Sam Smith',
      date: 'Oct 23, 2026',
      time: '04:00 PM',
      round: 'HR Screening',
      status: 'Completed',
      img: 'https://i.pravatar.cc/150?u=bob'
    }
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Interview Scheduling</h1>
          <p className="text-slate-500 font-medium">Manage interviews and coordinate hiring rounds across teams</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="bg-white border border-slate-200 p-1 rounded-xl flex shadow-sm">
              <button 
                onClick={() => setActiveView('list')}
                className={cn("px-4 py-2 text-sm font-bold rounded-lg transition-all", activeView === 'list' ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900")}
              >
                List
              </button>
              <button 
                onClick={() => setActiveView('calendar')}
                className={cn("px-4 py-2 text-sm font-bold rounded-lg transition-all", activeView === 'calendar' ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900")}
              >
                Calendar
              </button>
           </div>
           <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary px-6 py-3 text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary-200"
          >
             <Plus size={18} />
             <span>Schedule Interview</span>
           </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="card p-6 bg-white border border-slate-100 shadow-soft transition-all"
          >
            <div className="flex items-center justify-between mb-4">
               <div className={cn("p-3 rounded-2xl transition-colors", stat.bg, stat.color)}>
                  <stat.icon size={26} />
               </div>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Real-time</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{stat.label}</p>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {activeView === 'list' ? (
        <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Candidate & Role</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Interviewer</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date & Time</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Round</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {interviews.map((item) => (
                  <tr key={item.id} className="group hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <img src={item.img} alt={item.candidate} className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm" />
                        <div>
                          <p className="text-sm font-bold text-slate-900 leading-none">{item.candidate}</p>
                          <p className="text-[10px] font-bold text-primary-600 mt-1.5 uppercase tracking-widest">{item.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                         <User size={14} className="text-slate-400" />
                         <span className="text-sm font-bold text-slate-600">{item.interviewer}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-slate-700">{item.date}</p>
                        <p className="text-xs font-medium text-slate-400">{item.time}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2 text-slate-500">
                         <Video size={14} className="opacity-50" />
                         <span className="text-xs font-bold uppercase tracking-wider">{item.round}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        item.status === 'Scheduled' ? "bg-primary-50 text-primary-600" : "bg-emerald-50 text-emerald-600"
                      )}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-bold bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all shadow-md active:scale-95">Join</button>
                        <button className="p-2 text-slate-400 hover:text-slate-600"><MoreVertical size={18} /></button>
                      </div>
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
             <p className="text-slate-500 font-medium max-w-sm">Manage team availability and coordinate slots effortlessly with Google/Outlook calendar sync.</p>
             <button className="mt-8 px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-xl">Connect Calendar</button>
          </div>
      )}

      {/* Schedule Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsModalOpen(false)}
               className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
             />
             <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 20 }}
               className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
             >
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                   <h2 className="text-xl font-extrabold text-slate-900">Schedule New Interview</h2>
                   <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                      <X size={24} />
                   </button>
                </div>
                <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2 lg:col-span-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Candidate</label>
                         <div className="relative">
                            <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            <input type="text" placeholder="Search candidate by name or email..." className="input-field h-12 pl-10" />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Date</label>
                         <input type="date" className="input-field h-12" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Time</label>
                         <input type="time" className="input-field h-12" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Interview Round</label>
                         <select className="input-field h-12 appearance-none">
                            <option>Technical Round</option>
                            <option>Portfolio Review</option>
                            <option>Final Interview</option>
                            <option>HR Screening</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Interviewer</label>
                         <select className="input-field h-12 appearance-none">
                            <option>Sarah Johnson (Head of Design)</option>
                            <option>David Chen (Engineering Mgr)</option>
                         </select>
                      </div>
                      <div className="space-y-2 lg:col-span-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Meeting Link (Zoom/Meet)</label>
                         <input type="url" placeholder="https://zoom.us/j/..." className="input-field h-12" />
                      </div>
                   </div>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50/30 flex items-center justify-between text-slate-500">
                   <div className="flex items-center gap-2">
                      <input type="checkbox" id="invite" className="w-5 h-5 rounded accent-primary-600" />
                      <label htmlFor="invite" className="text-xs font-bold uppercase tracking-widest cursor-pointer">Send Calendar Invites</label>
                   </div>
                   <div className="flex items-center gap-3">
                      <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 font-bold hover:bg-white rounded-xl transition-all">Cancel</button>
                      <button className="px-8 py-2.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">Confirm Schedule</button>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InterviewManagement;
