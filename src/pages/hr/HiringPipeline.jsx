import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  RotateCcw, 
  MoreVertical, 
  Download, 
  ChevronRight, 
  Users, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  X, 
  AlertCircle, 
  Star,
  MessageSquare,
  Grab,
  User,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../../utils/cn';

const HiringPipeline = () => {
  const [activeCandidate, setActiveCandidate] = useState(null);

  const stages = [
    { id: 'applied', label: 'Applied', count: 12, color: 'bg-slate-100 text-slate-600' },
    { id: 'screening', label: 'Screening', count: 8, color: 'bg-amber-50 text-amber-600' },
    { id: 'shortlisted', label: 'Shortlisted', count: 6, color: 'bg-blue-50 text-blue-600' },
    { id: 'interview', label: 'Interview', count: 14, color: 'bg-purple-50 text-purple-600' },
    { id: 'offer', label: 'Offer', count: 4, color: 'bg-emerald-50 text-emerald-600' },
    { id: 'hired', label: 'Hired', count: 2, color: 'bg-indigo-50 text-indigo-600' },
  ];

  const candidates = [
    { id: 1, name: 'Alice Cooper', role: 'Product Designer', stage: 'interview', match: 94, img: 'https://i.pravatar.cc/150?u=alice', exp: '5y' },
    { id: 2, name: 'Bob Marley', role: 'Frontend Lead', stage: 'shortlisted', match: 98, img: 'https://i.pravatar.cc/150?u=bob', exp: '12y' },
    { id: 3, name: 'Diana Ross', role: 'UX Researcher', stage: 'screening', match: 86, img: 'https://i.pravatar.cc/150?u=diana', exp: '3y' },
    { id: 4, name: 'John Wick', role: 'Security Ops', stage: 'offer', match: 100, img: 'https://i.pravatar.cc/150?u=john', exp: '15y' },
    { id: 5, name: 'Sarah Connor', role: 'Project Mgr', stage: 'interview', match: 88, img: 'https://i.pravatar.cc/150?u=sarah', exp: '8y' },
    { id: 6, name: 'Tony Stark', role: 'Tech Lead', stage: 'applied', match: 99, img: 'https://i.pravatar.cc/150?u=tony', exp: '10y' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in h-[calc(100vh-140px)] flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Hiring Pipeline</h1>
          <p className="text-slate-500 font-medium">Track and move candidates through each hiring stage</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Export Pipeline</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Plus size={18} />
             <span>Add Candidate</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="card p-4 border-none bg-white shadow-soft flex flex-col lg:flex-row items-center gap-4 shrink-0 overflow-visible">
        <div className="relative flex-1 w-full text-slate-400">
          <Search className="absolute left-3 top-3" size={18} />
          <input type="text" placeholder="Search candidate..." className="input-field pl-10 h-11" />
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <select className="input-field h-11 pr-10 w-full sm:w-40 font-bold text-slate-600">
            <option value="">All Roles</option>
            <option value="design">Design</option>
            <option value="engineering">Engineering</option>
          </select>
          <select className="input-field h-11 pr-10 w-full sm:w-32 font-bold text-slate-600">
            <option value="">90% + Match</option>
            <option value="75">75%+</option>
          </select>
          <button className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-slate-50 border border-slate-100 rounded-xl transition-all h-11 w-11 flex items-center justify-center shrink-0">
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-6 min-w-max h-full">
          {stages.map((stage) => (
            <div key={stage.id} className="w-80 flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between px-2">
                 <div className="flex items-center gap-2">
                    <span className={cn("px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest border", stage.color)}>
                       {stage.label}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{stage.count}</span>
                 </div>
                 <button className="p-1.5 text-slate-300 hover:text-slate-600 transition-colors">
                    <Plus size={18} />
                 </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 p-2 bg-slate-50/50 rounded-2xl border border-dashed border-slate-100 scrollbar-hide">
                 <AnimatePresence>
                   {candidates.filter(c => c.stage === stage.id).map((cand) => (
                      <motion.div
                        layout
                        key={cand.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ y: -5, shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                        onClick={() => setActiveCandidate(cand)}
                        className="card p-4 bg-white border border-slate-100 shadow-sm cursor-grab active:cursor-grabbing group"
                      >
                         <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                               <img src={cand.img} alt={cand.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-sm" />
                               <div>
                                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{cand.name}</h4>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{cand.role}</p>
                               </div>
                            </div>
                            <button className="p-1 text-slate-200 hover:text-slate-400 group-hover:opacity-100 md:opacity-0 transition-opacity">
                               <MoreHorizontal size={18} />
                            </button>
                         </div>

                         <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                            <div className="flex items-center gap-4">
                               <div className="flex flex-col">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Match</span>
                                  <span className={cn("text-xs font-extrabold", cand.match > 90 ? "text-emerald-500" : "text-amber-500")}>{cand.match}%</span>
                               </div>
                               <div className="flex flex-col border-l border-slate-100 pl-4">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Exp</span>
                                  <span className="text-xs font-bold text-slate-700">{cand.exp}</span>
                               </div>
                            </div>
                            <div className="flex -space-x-1.5 overflow-hidden">
                               {[1,2,3].map(i => (
                                  <div key={i} className="w-5 h-5 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[8px] font-extrabold text-slate-400">
                                     {i === 3 ? '+2' : <User size={10} />}
                                  </div>
                               ))}
                            </div>
                         </div>
                      </motion.div>
                   ))}
                 </AnimatePresence>
                 
                 <button className="w-full py-4 rounded-xl border-2 border-dashed border-slate-100 text-slate-300 hover:text-primary-400 hover:border-primary-100 hover:bg-white transition-all flex items-center justify-center gap-2 group">
                    <Plus size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Drop here</span>
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Candidate Details Drawer */}
      <AnimatePresence>
        {activeCandidate && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCandidate(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-[70] flex flex-col pt-16 lg:pt-0"
            >
               <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-4">
                     <img src={activeCandidate.img} alt={activeCandidate.name} className="w-12 h-12 rounded-2xl object-cover ring-4 ring-white shadow-xl" />
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">{activeCandidate.name}</h2>
                        <p className="text-sm font-bold text-primary-600 mt-1">{activeCandidate.role}</p>
                     </div>
                  </div>
                  <button onClick={() => setActiveCandidate(null)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-8 space-y-10 focus:outline-none">
                  {/* Pipeline Stepper */}
                  <div className="flex items-center justify-between px-2 overflow-x-auto pb-4 scrollbar-hide">
                     {stages.slice(0, 5).map((s, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 min-w-[70px]">
                           <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] transition-all",
                              s.id === activeCandidate.stage ? "bg-primary-600 text-white shadow-lg ring-4 ring-primary-50" : "bg-slate-100 text-slate-400"
                           )}>
                              {idx + 1}
                           </div>
                           <span className={cn("text-[9px] font-bold uppercase tracking-widest", s.id === activeCandidate.stage ? "text-primary-600" : "text-slate-400")}>{s.label}</span>
                        </div>
                     ))}
                  </div>

                  <section className="space-y-4">
                     <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Contact & Info</h3>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                           <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">AI Match</p>
                           <p className="text-2xl font-extrabold text-emerald-600">{activeCandidate.match}%</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                           <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                           <p className="text-2xl font-extrabold text-slate-900">{activeCandidate.exp}</p>
                        </div>
                     </div>
                  </section>

                  <section className="space-y-4">
                     <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Internal Communication</h3>
                     <div className="space-y-4">
                        <div className="p-4 bg-primary-50/30 rounded-2xl border border-primary-100 italic text-sm text-slate-600 relative">
                           "Strong technical background. Portfolio shows great attention to detail. Recommended for technical round."
                           <div className="flex items-center gap-2 mt-4 pt-4 border-t border-primary-100/30 not-italic">
                              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-[10px] text-white font-bold">SJ</div>
                              <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">Sarah Johnson • 2d ago</span>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>

               <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-4 shrink-0">
                  <button className="flex-1 py-3.5 bg-white border border-slate-200 text-rose-500 rounded-xl font-bold hover:bg-rose-50 hover:border-rose-100 transition-all shadow-sm">
                     Reject Candidate
                  </button>
                  <button className="flex-1 py-3.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg active:scale-95">
                     Move to Next Stage
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HiringPipeline;
