import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Download, 
  Filter, 
  RotateCcw, 
  MoreVertical, 
  Users, 
  Briefcase, 
  Calendar, 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  X, 
  FileText,
  ChevronRight,
  Eye,
  Edit2,
  Copy,
  Archive
} from 'lucide-react';
import { cn } from '../../utils/cn';

const JobPosts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const stats = [
    { label: 'Total Jobs', value: '24', icon: Briefcase, bg: 'bg-blue-50', color: 'text-blue-600' },
    { label: 'Published', value: '18', icon: CheckCircle2, bg: 'bg-emerald-50', color: 'text-emerald-600' },
    { label: 'Drafts', value: '4', icon: FileText, bg: 'bg-amber-50', color: 'text-amber-600' },
    { label: 'Closed', value: '2', icon: Archive, bg: 'bg-slate-50', color: 'text-slate-600' },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Product Designer',
      department: 'Design',
      openings: 2,
      salary: '$120k - $160k',
      type: 'Full Time',
      skills: ['Figma', 'UI/UX', 'Prototyping'],
      status: 'Published',
      applicants: 42,
      date: 'Oct 20, 2026'
    },
    {
      id: 2,
      title: 'Lead Frontend Developer',
      department: 'Engineering',
      openings: 1,
      salary: '$140k - $190k',
      type: 'Full Time',
      skills: ['React', 'TypeScript', 'Node.js'],
      status: 'Published',
      applicants: 126,
      date: 'Oct 18, 2026'
    },
    {
      id: 3,
      title: 'Marketing Manager',
      department: 'Marketing',
      openings: 1,
      salary: '$80k - $110k',
      type: 'Remote',
      skills: ['SEO', 'Content Strategy'],
      status: 'Draft',
      applicants: 0,
      date: 'Oct 24, 2026'
    },
    {
      id: 4,
      title: 'HR Executive',
      department: 'Human Resources',
      openings: 3,
      salary: '$60k - $85k',
      type: 'Full Time',
      skills: ['Recruitment', 'Operations'],
      status: 'Closed',
      applicants: 89,
      date: 'Sep 15, 2026'
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Published': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Draft': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Closed': return 'bg-slate-100 text-slate-500 border-slate-200';
      default: return 'bg-slate-100 text-slate-600';
    }
  }

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Job Posts</h1>
          <p className="text-slate-500 font-medium">Create, manage and publish hiring opportunities</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Export Jobs</span>
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200"
          >
             <Plus size={18} />
             <span>Create New Job</span>
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
               <div className={cn("p-3 rounded-2xl transition-colors", stat.bg, stat.color)}>
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

      {/* Filter Bar */}
      <div className="card p-6 border-none bg-white shadow-soft flex flex-col lg:flex-row items-center gap-4 overflow-visible">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input type="text" placeholder="Search job title or keyword..." className="input-field pl-10 h-11" />
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <select className="input-field h-11 appearance-none pr-10 w-full sm:w-40 font-bold text-slate-600">
            <option value="">Department</option>
            <option value="design">Design</option>
            <option value="engineering">Engineering</option>
          </select>
          <select className="input-field h-11 appearance-none pr-10 w-full sm:w-40 font-bold text-slate-600">
            <option value="">Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
          <button className="p-2.5 text-slate-400 hover:text-primary-600 hover:bg-slate-50 border border-slate-100 rounded-xl transition-all h-11 w-11 flex items-center justify-center shrink-0">
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Job Title & Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Department</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Type / Openings</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Applicants</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {jobs.map((job) => (
                <tr key={job.id} className="group hover:bg-slate-50/10 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary-600 font-bold">
                        {job.title[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-none">{job.title}</p>
                        <p className="text-[10px] font-bold text-slate-400 mt-1.5 uppercase tracking-widest">Posted on {job.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-slate-600 tracking-tight">{job.department}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-slate-700">{job.type}</p>
                      <p className="text-xs font-medium text-slate-400">{job.openings} positions</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                      getStatusStyle(job.status)
                    )}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                       <Users size={14} className="text-slate-300" />
                       <span className="text-sm font-bold text-slate-700">{job.applicants}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all" title="View"><Eye size={18} /></button>
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit"><Edit2 size={18} /></button>
                      <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all" title="Archive"><Archive size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Job Modal (Simplified Overlay) */}
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
                   <h2 className="text-xl font-extrabold text-slate-900">Create New Job Post</h2>
                   <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                      <X size={24} />
                   </button>
                </div>
                <div className="p-8 max-h-[70vh] overflow-y-auto space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Job Title</label>
                         <input type="text" placeholder="e.g. Senior Product Designer" className="input-field h-12" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Department</label>
                         <select className="input-field h-12 appearance-none">
                            <option>Design</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Salary Range</label>
                         <div className="relative">
                            <DollarSign className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            <input type="text" placeholder="e.g. $120k - $160k" className="input-field h-12 pl-10" />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Job Type</label>
                         <select className="input-field h-12 appearance-none">
                            <option>Full Time</option>
                            <option>Remote</option>
                            <option>Contract</option>
                         </select>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Job Description</label>
                      <textarea rows={6} className="input-field py-4 resize-none" placeholder="Enter detailed job requirements and responsibilities..."></textarea>
                   </div>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50/30 flex items-center justify-end gap-3">
                   <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 text-slate-500 font-bold hover:bg-white rounded-xl transition-all">Cancel</button>
                   <button className="px-8 py-2.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">Publish Job</button>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobPosts;
