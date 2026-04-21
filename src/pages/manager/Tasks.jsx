import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  LayoutGrid, 
  List, 
  MoreVertical, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Calendar, 
  Paperclip, 
  MessageSquare, 
  Filter, 
  ChevronRight, 
  X, 
  Briefcase, 
  Zap, 
  ArrowUpRight,
  TrendingUp,
  Target
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Tasks = () => {
  const [viewMode, setViewMode] = useState('board');
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const stats = [
    { label: 'Total Tasks', value: '42', icon: Briefcase, color: 'text-primary-600', bg: 'bg-primary-50' },
    { label: 'In Progress', value: '18', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Completed', value: '21', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Overdue', value: '3', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  const columns = [
    { title: 'Pending', count: 8, color: 'text-slate-400' },
    { title: 'In Progress', count: 12, color: 'text-amber-500' },
    { title: 'Review', count: 5, color: 'text-indigo-500' },
    { title: 'Completed', count: 17, color: 'text-emerald-500' },
  ];

  const tasks = [
    { id: 1, title: 'Redesign Login Flow', user: 'Alice C.', priority: 'High', deadline: 'Oct 28', progress: 65, status: 'In Progress' },
    { id: 2, title: 'API Integration - Auth', user: 'Bob M.', priority: 'Urgent', deadline: 'Oct 25', progress: 90, status: 'Review' },
    { id: 3, title: 'Team Sync Call', user: 'Self', priority: 'Medium', deadline: 'Today', progress: 100, status: 'Completed' },
    { id: 4, title: 'Marketing Assets Review', user: 'Sarah J.', priority: 'Low', deadline: 'Oct 30', progress: 15, status: 'Pending' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Team Task Management</h1>
          <p className="text-slate-500 font-medium tracking-tight">Oversee work distribution, monitor progress and ensure deadlines are met</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setViewMode('board')}
              className={cn("p-2 rounded-lg transition-all", viewMode === 'board' ? "bg-white text-primary-600 shadow-sm" : "text-slate-400 hover:text-slate-600")}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('table')}
              className={cn("p-2 rounded-lg transition-all", viewMode === 'table' ? "bg-white text-primary-600 shadow-sm" : "text-slate-400 hover:text-slate-600")}
            >
              <List size={20} />
            </button>
          </div>
          <button 
            onClick={() => setIsTaskModalOpen(true)}
            className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200"
          >
             <Plus size={18} />
             <span>Create Task</span>
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

      {/* Main View Area */}
      {viewMode === 'board' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start auto-rows-max h-full">
           {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-5 h-full">
                 <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2.5">
                       <div className={cn("w-1.5 h-1.5 rounded-full", col.color.replace('text', 'bg'))} />
                       <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-widest">{col.title}</h3>
                    </div>
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-bold">{col.count}</span>
                 </div>

                 <div className="space-y-4">
                    {tasks.filter(t => t.status === col.title || (col.title === 'Pending' && t.status === 'Pending')).map((task) => (
                       <motion.div
                         key={task.id}
                         whileHover={{ y: -2, rotate: 0.5 }}
                         className="card p-5 bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-grab active:cursor-grabbing"
                       >
                          <div className="flex justify-between items-start mb-4">
                             <div className={cn(
                                "text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-widest border",
                                task.priority === 'Urgent' ? "bg-rose-50 text-rose-500 border-rose-100" :
                                task.priority === 'High' ? "bg-amber-50 text-amber-600 border-amber-100" :
                                "bg-primary-50 text-primary-600 border-primary-100"
                             )}>
                                {task.priority}
                             </div>
                             <button className="text-slate-300 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all"><MoreVertical size={16} /></button>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 mb-6 leading-relaxed group-hover:text-primary-600 transition-colors uppercase tracking-tight">{task.title}</h4>
                          
                          <div className="flex items-center justify-between mt-auto">
                             <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center text-[10px] text-white font-bold uppercase tracking-tighter">
                                   {task.user.split(' ')[0][0]}{task.user.split(' ')[1]?.[0]}
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{task.user}</span>
                             </div>
                             <div className="flex items-center gap-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                                <Calendar size={12} />
                                {task.deadline}
                             </div>
                          </div>
                       </motion.div>
                    ))}
                    <button className="w-full py-4 border-2 border-dashed border-slate-100 rounded-[1.5rem] text-[10px] font-extrabold text-slate-300 uppercase tracking-widest hover:border-primary-100 hover:text-primary-600 hover:bg-primary-50/20 transition-all flex items-center justify-center gap-2 group">
                       <Plus size={14} className="group-hover:rotate-90 transition-transform" />
                       Add Task
                    </button>
                 </div>
              </div>
           ))}
        </div>
      ) : (
        <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
           <table className="w-full text-left">
              <thead>
                 <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                    <th className="px-8 py-5">Task Detail</th>
                    <th className="px-8 py-5">Assignee</th>
                    <th className="px-8 py-5">Priority</th>
                    <th className="px-8 py-5 text-center">Progress</th>
                    <th className="px-8 py-5 text-right">Deadline</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                 {tasks.map((task) => (
                    <tr key={task.id} className="group hover:bg-slate-50/20 transition-colors">
                       <td className="px-8 py-6">
                          <div>
                             <p className="text-sm font-bold text-slate-900 mb-1">{task.title}</p>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{task.status}</p>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-2.5">
                             <div className="w-8 h-8 rounded-xl bg-slate-900 border-2 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold uppercase">
                                {task.user.split(' ')[0][0]}{task.user.split(' ')[1]?.[0]}
                             </div>
                             <span className="text-xs font-bold text-slate-600">{task.user}</span>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <span className={cn(
                             "px-2 px-1 rounded-lg text-[9px] font-extrabold uppercase tracking-widest border",
                             task.priority === 'Urgent' ? "bg-rose-50 text-rose-500 border-rose-100" : "bg-slate-100 text-slate-500 border-slate-200"
                          )}>{task.priority}</span>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex items-center justify-center gap-3">
                             <div className="flex-1 max-w-[80px] h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-50 p-[1px]">
                                <motion.div initial={{ width: 0 }} animate={{ width: `${task.progress}%` }} className="h-full bg-primary-600 rounded-full" />
                             </div>
                             <span className="text-[10px] font-extrabold text-slate-900 whitespace-nowrap">{task.progress}%</span>
                          </div>
                       </td>
                       <td className="px-8 py-6 text-right">
                          <p className="text-xs font-bold text-slate-500">{task.deadline} Oct</p>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      )}

      {/* Create Task Modal Drawer */}
      <AnimatePresence>
        {isTaskModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTaskModalOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-[120] flex flex-col"
            >
               <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-5">
                     <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center shadow-lg transform rotate-6">
                        <Target size={22} fill="currentColor" />
                     </div>
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">Create Mission</h2>
                        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em] mt-2 leading-none">Define new team milestones</p>
                     </div>
                  </div>
                  <button onClick={() => setIsTaskModalOpen(false)} className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 space-y-10">
                  <div className="space-y-8">
                     <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Task Title</label>
                        <input type="text" placeholder="e.g. Audit legacy backend schemas" className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700 hover:bg-slate-100 focus:bg-white transition-all uppercase tracking-tight" />
                     </div>

                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Assign Member</label>
                           <div className="relative">
                              <User className="absolute left-4 top-4 text-slate-300" size={18} />
                              <select className="input-field h-14 pl-12 bg-slate-50 border-transparent font-bold text-slate-700">
                                 <option>Alice Cooper</option>
                                 <option>Bob Marley</option>
                                 <option>John Wick</option>
                              </select>
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Priority</label>
                           <select className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700">
                              <option>Low</option>
                              <option>Medium</option>
                              <option>High</option>
                              <option>Urgent</option>
                           </select>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Start Date</label>
                           <input type="date" className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Deadline</label>
                           <input type="date" className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700 text-rose-500" />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Task Description</label>
                        <textarea className="input-field min-h-[140px] py-4 bg-slate-50 border-transparent resize-none text-sm font-medium" placeholder="Break down the goals and deliverables for this task..."></textarea>
                     </div>

                     <div className="p-8 bg-slate-50 border-2 border-dashed border-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center gap-3 group cursor-pointer hover:border-primary-100 hover:bg-white transition-all duration-300">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-300 group-hover:text-primary-500 shadow-sm transition-all group-hover:rotate-12">
                           <Paperclip size={22} />
                        </div>
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Drop Supporting Files</span>
                     </div>
                  </div>
               </div>
               
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex items-center gap-4 shrink-0">
                  <button onClick={() => setIsTaskModalOpen(false)} className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-sm">
                     Save Draft
                  </button>
                  <button className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 active:scale-95">
                     Deploy Task
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tasks;
