import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Search, 
  Plus, 
  Download, 
  Filter, 
  RotateCcw, 
  MoreVertical, 
  Eye, 
  CheckCircle2, 
  Calendar, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  X, 
  Mail, 
  Phone, 
  Briefcase,
  Target,
  BarChart3,
  TrendingUp,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { cn } from '../../utils/cn';

const TeamMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    { id: 1, name: 'Alice Cooper', email: 'alice@company.com', role: 'Product Designer', dept: 'Design', attendance: 98, tasks: '12/15', rating: 4.8, status: 'Online', img: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'Bob Marley', email: 'bob@company.com', role: 'Frontend Lead', dept: 'Engineering', attendance: 85, tasks: '8/10', rating: 4.5, status: 'Online', img: 'https://i.pravatar.cc/150?u=bob' },
    { id: 3, name: 'Diana Ross', email: 'diana@company.com', role: 'UX Researcher', dept: 'Design', attendance: 92, tasks: '5/6', rating: 4.2, status: 'Away', img: 'https://i.pravatar.cc/150?u=diana' },
    { id: 4, name: 'John Wick', email: 'john@company.com', role: 'DevOps Ops', dept: 'Engineering', attendance: 100, tasks: '20/20', rating: 5.0, status: 'Online', img: 'https://i.pravatar.cc/150?u=john' },
    { id: 5, name: 'Sarah Connor', email: 'sarah@company.com', role: 'Project Mgr', dept: 'Product', attendance: 78, tasks: '4/8', rating: 3.8, status: 'Offline', img: 'https://i.pravatar.cc/150?u=sarah' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Team Members</h1>
          <p className="text-slate-500 font-medium">Manage your team's access, view performance and assign roles</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Export List</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Add Member</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="card p-6 border-none bg-white shadow-soft flex flex-col lg:flex-row items-center gap-4 overflow-visible">
        <div className="relative flex-1 w-full text-slate-400">
          <Search className="absolute left-3 top-3" size={18} />
          <input type="text" placeholder="Search by name, email or role..." className="input-field pl-10 h-11" />
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <select className="input-field h-11 pr-10 w-full sm:w-40 font-bold text-slate-600">
            <option value="">All Departments</option>
            <option value="design">Design</option>
            <option value="engineering">Engineering</option>
          </select>
          <select className="input-field h-11 pr-10 w-full sm:w-32 font-bold text-slate-600">
            <option value="">All Ratings</option>
            <option value="4.5">4.5+</option>
          </select>
          <button className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-slate-50 border border-slate-100 rounded-xl transition-all h-11 w-11 flex items-center justify-center shrink-0">
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Team Table */}
      <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Member Info</th>
                <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Position / Dept</th>
                <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Attendance %</th>
                <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Tasks</th>
                <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Avg Rating</th>
                <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {team.map((user) => (
                <tr key={user.id} className="group hover:bg-slate-50/20 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                         <img src={user.img} alt={user.name} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-white shadow-sm" />
                         <div className={cn(
                            "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm",
                            user.status === 'Online' ? 'bg-emerald-500' : user.status === 'Away' ? 'bg-amber-500' : 'bg-slate-300'
                         )} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 leading-none">{user.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="font-bold text-slate-700 leading-none">{user.role}</p>
                    <p className="text-xs font-medium text-slate-400 mt-1.5">{user.dept}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col items-center gap-1.5">
                       <span className={cn(
                          "text-[10px] font-extrabold uppercase tracking-widest leading-none",
                          user.attendance > 90 ? "text-emerald-500" : user.attendance > 80 ? "text-primary-600" : "text-amber-500"
                       )}>{user.attendance}%</span>
                       <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full", user.attendance > 90 ? "bg-emerald-500" : "bg-primary-500")} style={{ width: `${user.attendance}%` }} />
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <p className="font-extrabold text-slate-900">{user.tasks}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-center gap-1.5">
                       <Star size={14} className="text-amber-400 fill-amber-400" />
                       <span className="font-extrabold text-slate-900">{user.rating}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button 
                      onClick={() => setSelectedMember(user)}
                      className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
                    >
                       <Eye size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Drawer */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-[70] flex flex-col"
            >
               <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-5">
                     <img src={selectedMember.img} alt={selectedMember.name} className="w-16 h-16 rounded-[2rem] object-cover ring-4 ring-white shadow-xl" />
                     <div>
                        <h2 className="text-2xl font-extrabold text-slate-900 leading-none">{selectedMember.name}</h2>
                        <p className="text-sm font-bold text-primary-600 mt-2 uppercase tracking-widest">{selectedMember.role}</p>
                     </div>
                  </div>
                  <button onClick={() => setSelectedMember(null)} className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 space-y-12 focus:outline-none">
                  {/* Stats Overview */}
                  <div className="grid grid-cols-2 gap-6">
                     <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all h-40 flex flex-col justify-center">
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Avg Performance</p>
                        <div className="flex items-end justify-center gap-2">
                           <span className="text-4xl font-extrabold text-slate-900 transform group-hover:scale-110 transition-transform">{selectedMember.rating}</span>
                           <span className="text-amber-500 font-bold mb-1 flex items-center gap-1 text-xs px-2 py-0.5 bg-amber-50 rounded-lg"><Star size={12} fill="currentColor" /> Elite</span>
                        </div>
                     </div>
                     <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all h-40 flex flex-col justify-center">
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">Task Completion</p>
                        <div className="flex items-end justify-center gap-2">
                           <span className="text-4xl font-extrabold text-slate-900 transform group-hover:scale-110 transition-transform">92%</span>
                           <span className="text-emerald-500 font-bold mb-1 text-xs">+12%</span>
                        </div>
                     </div>
                  </div>

                  {/* Section: Professional Profile */}
                  <section className="space-y-6">
                     <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-4">Professional Profile</h3>
                     <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                        {[
                           { label: 'Work Email', value: selectedMember.email, icon: Mail },
                           { label: 'Department', value: selectedMember.dept, icon: Briefcase },
                           { label: 'Joining Date', value: 'Jan 12, 2024', icon: Calendar },
                           { label: 'Reporting To', value: 'Self', icon: ShieldCheck },
                        ].map((field, i) => (
                           <div key={i} className="space-y-1.5 group">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest group-hover:text-primary-600 transition-colors">{field.label}</label>
                              <div className="flex items-center gap-3">
                                 <field.icon size={16} className="text-slate-300" />
                                 <span className="text-sm font-bold text-slate-700">{field.value}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </section>

                  {/* Section: Attendance Trend */}
                  <section className="space-y-6">
                     <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Attendance Index</h3>
                        <span className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest py-1 px-3 bg-emerald-50 rounded-full">Consistent</span>
                     </div>
                     <div className="flex items-end justify-between h-24 gap-2 px-4">
                        {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                           <div key={i} className="flex-1 bg-primary-100 rounded-t-lg group relative cursor-pointer">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                className="w-full bg-primary-600 rounded-t-lg group-hover:bg-slate-900 transition-all"
                              />
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                 {h}%
                              </div>
                           </div>
                        ))}
                     </div>
                  </section>
               </div>

               <div className="p-8 border-t border-slate-100 bg-slate-50 flex gap-4 shrink-0">
                  <button className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-sm flex items-center justify-center gap-2">
                     <Target size={18} />
                     <span>Assign New Task</span>
                  </button>
                  <button className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                     <BarChart3 size={18} />
                     <span>Performance Review</span>
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamMembers;
