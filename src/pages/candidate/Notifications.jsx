import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  Search, 
  Trash2, 
  CheckCircle2, 
  Briefcase, 
  MessageSquare, 
  Calendar, 
  AlertCircle, 
  Zap, 
  Star,
  X, 
  ChevronRight,
  Filter,
  Check,
  CheckCheck
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Notifications' },
    { id: 'jobs', label: 'Job Progress' },
    { id: 'interviews', label: 'Interviews' },
    { id: 'offers', label: 'Offer Updates' },
    { id: 'system', label: 'System' },
  ];

  const notifications = [
    {
      id: 1,
      type: 'offers',
      title: 'New Offer Received!',
      message: 'Great news! You have received a job offer from TechFlow for the Lead Designer position.',
      time: '2 hours ago',
      isUnread: true,
      priority: 'high',
      icon: Zap,
      color: 'bg-emerald-50 text-emerald-600',
      action: 'View Offer'
    },
    {
      id: 2,
      type: 'interviews',
      title: 'Interview Reminder',
      message: 'Your interview withsarah Johnson starts in 1 hour. Get ready!',
      time: '1 hour ago',
      isUnread: true,
      priority: 'high',
      icon: Calendar,
      color: 'bg-purple-50 text-purple-600',
      action: 'Join Meeting'
    },
    {
      id: 3,
      type: 'jobs',
      title: 'Resume Shortlisted',
      message: 'Your application for Senior Product Designer at HCM.ai has been shortlisted.',
      time: 'Yesterday, 4:32 PM',
      isUnread: false,
      priority: 'medium',
      icon: Briefcase,
      color: 'bg-primary-50 text-primary-600',
      action: 'View Application'
    },
    {
      id: 4,
      type: 'system',
      title: 'Profile Strengh Low',
      message: 'Your profile completion is 65%. Fill in your education details to attract more recruiters.',
      time: 'Oct 22, 2026',
      isUnread: false,
      priority: 'low',
      icon: AlertCircle,
      color: 'bg-amber-50 text-amber-600',
      action: 'Complete Profile'
    },
    {
      id: 5,
      type: 'jobs',
      title: 'New Matching Job',
      message: 'A new UI Designer role was posted at Stripe that matches your skill set.',
      time: 'Oct 20, 2026',
      isUnread: false,
      priority: 'medium',
      icon: Star,
      color: 'bg-blue-50 text-blue-600',
      action: 'View Job'
    }
  ];

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === activeTab);

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Notifications</h1>
          <p className="text-slate-500 font-medium">Stay updated with your job applications and system alerts</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-bold text-slate-500 hover:text-primary-600 px-4 py-2 hover:bg-primary-50 rounded-xl transition-all flex items-center gap-2">
            <CheckCheck size={18} />
            <span>Mark All as Read</span>
          </button>
          <button className="text-sm font-bold text-rose-500 hover:bg-rose-50 px-4 py-2 rounded-xl transition-all flex items-center gap-2">
            <Trash2 size={18} />
            <span>Clear All</span>
          </button>
        </div>
      </div>

      {/* Tabs Filter */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap",
              activeTab === cat.id 
                ? "bg-slate-900 text-white shadow-lg" 
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4 max-w-4xl">
        <AnimatePresence mode="popLayout">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((note) => (
              <motion.div
                layout
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={cn(
                  "card p-0 border-none bg-white shadow-soft group relative overflow-hidden transition-all duration-300",
                  note.isUnread ? "ring-2 ring-primary-100" : ""
                )}
              >
                <div className="p-6 flex items-start gap-6">
                  {/* Icon */}
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", note.color)}>
                    <note.icon size={26} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                         <h3 className={cn("text-lg font-bold truncate", note.isUnread ? "text-slate-900" : "text-slate-600")}>
                           {note.title}
                         </h3>
                         {note.priority === 'high' && (
                           <span className="px-2 py-0.5 bg-rose-50 text-rose-500 text-[10px] font-extrabold uppercase rounded shadow-sm border border-rose-100">Urgent</span>
                         )}
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{note.time}</span>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed mb-4">{note.message}</p>
                    
                    <div className="flex items-center gap-4">
                      <button className="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1.5 active:scale-95 transition-all">
                        {note.action}
                        <ChevronRight size={16} />
                      </button>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <button className="text-xs font-bold text-slate-400 hover:text-slate-600">Dismiss</button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 items-center self-stretch justify-center pl-6 border-l border-slate-50">
                    {note.isUnread && (
                      <div className="w-2.5 h-2.5 bg-primary-600 rounded-full shadow-lg shadow-primary-200" />
                    )}
                    <button className="p-2 text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="py-24 text-center">
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 mx-auto mb-6">
                  <Bell size={40} />
               </div>
               <h3 className="text-xl font-bold text-slate-900">No notifications found</h3>
               <p className="text-slate-500 font-medium max-w-xs mx-auto mt-2">We'll let you know when something important happens in your hiring journey.</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Options Bar (Optional) */}
      <div className="hidden lg:block fixed right-12 bottom-12 space-y-4">
         <div className="card p-4 bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl space-y-4 text-white">
            <h4 className="text-sm font-bold opacity-60">Notification Stats</h4>
            <div className="flex gap-6">
               <div>
                  <p className="text-2xl font-extrabold">{notifications.filter(n => n.isUnread).length}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Unread</p>
               </div>
               <div>
                  <p className="text-2xl font-extrabold">{notifications.length}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Total</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Notifications;
