import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Search, MapPin, Briefcase, DollarSign, Clock, Filter, RotateCcw, Bookmark, 
  ChevronRight, X, Users, GraduationCap, Calendar, Layers, ArrowRight, CheckCircle2,
  BookmarkCheck, Info, Send, FileText, Globe, Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useCandidate } from '../../context/CandidateContext';
import CenterModal from '../../components/layout/CenterModal';

const BrowseJobs = () => {
  const { jobs, saveJob, applyForJob, showToast } = useCandidate();
  const { savedIndices } = jobs;
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    location: '',
    type: '',
    experience: '',
    salary: ''
  });
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Newest');

  const filteredJobs = useMemo(() => {
    return jobs.allJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = !filters.department || job.department === filters.department;
      const matchesLocation = !filters.location || job.location.includes(filters.location);
      const matchesType = !filters.type || job.type === filters.type;
      
      return matchesSearch && matchesDept && matchesLocation && matchesType;
    }).sort((a, b) => {
      if (sortBy === 'Salary (High)') return parseInt(b.salary.replace(/\D/g, '')) - parseInt(a.salary.replace(/\D/g, ''));
      return 0; // Default Newest (mocked by array order)
    });
  }, [jobs.allJobs, searchTerm, filters, sortBy]);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    applyForJob(selectedJob.id, {
      expectedSalary: formData.get('expectedSalary'),
      availability: formData.get('availability'),
      coverLetter: formData.get('coverLetter')
    });
    setIsApplyModalOpen(false);
    setSelectedJob(null);
    showToast(`Application for ${selectedJob.title} sent!`);
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-7xl mx-auto text-left">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic">MARKET RADAR</h1>
          <p className="text-slate-500 font-bold tracking-tight uppercase text-xs mt-1">Discover strategic roles across the ecosystem</p>
        </div>
        <div className="flex items-center gap-3">
           <button 
             onClick={() => navigate('/candidate/applications')}
             className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-95"
           >
             <Clock size={16} />
             <span>Active Logs</span>
           </button>
        </div>
      </div>

      {/* Strategic Filter Engine */}
      <div className="card p-8 border-none bg-white shadow-soft">
         <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary-50 text-primary-600 rounded-xl">
                 <Filter size={20} />
              </div>
              <h3 className="text-xl font-black text-slate-900 italic tracking-tight leading-none">Filter Engine</h3>
            </div>
            <button 
              onClick={() => { setSearchTerm(''); setFilters({ department: '', location: '', type: '', experience: '', salary: '' }); }}
              className="text-[10px] font-black text-slate-400 hover:text-primary-600 flex items-center gap-2 uppercase tracking-widest transition-all"
            >
              <RotateCcw size={14} />
              <span>Reset Signal</span>
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Query positions..." 
                className="input-field pl-12 h-14 bg-slate-50 border-transparent font-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Layers className="absolute left-4 top-3.5 text-slate-400 pointer-events-none" size={18} />
              <select 
                className="input-field pl-12 h-14 bg-slate-50 border-transparent font-black appearance-none cursor-pointer"
                value={filters.department}
                onChange={(e) => setFilters({...filters, department: e.target.value})}
              >
                <option value="">All Vectors</option>
                <option value="Design">Design</option>
                <option value="Engineering">Engineering</option>
                <option value="Product">Product</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
            <div className="relative">
              <Globe className="absolute left-4 top-3.5 text-slate-400 pointer-events-none" size={18} />
              <select 
                className="input-field pl-12 h-14 bg-slate-50 border-transparent font-black appearance-none cursor-pointer"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              >
                <option value="">Global Coverage</option>
                <option value="Remote">Remote Operations</option>
                <option value="New York">New York Hub</option>
                <option value="San Francisco">San Francisco Hub</option>
                <option value="London">London Hub</option>
              </select>
            </div>
            <div className="relative">
               <Zap className="absolute left-4 top-3.5 text-slate-400 pointer-events-none" size={18} />
               <select 
                 className="input-field pl-12 h-14 bg-slate-50 border-transparent font-black appearance-none cursor-pointer"
                 value={filters.type}
                 onChange={(e) => setFilters({...filters, type: e.target.value})}
               >
                <option value="">Employment Mode</option>
                <option value="Full-time">Strategic Perm</option>
                <option value="Contract">Task Force (Contract)</option>
                <option value="Hybrid">Hybrid Mode</option>
              </select>
            </div>
         </div>
         
         <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-50">
            <div className="flex items-center gap-6">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Signals: <span className="text-slate-900">{filteredJobs.length} Positions</span></span>
               <div className="h-4 w-px bg-slate-200"></div>
               <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sequence:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-[10px] font-black text-primary-600 uppercase tracking-widest bg-transparent border-none outline-none cursor-pointer"
                  >
                     <option>Newest</option>
                     <option>Salary (High)</option>
                     <option>Relevance</option>
                  </select>
               </div>
            </div>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] italic">Updated 2 minutes ago</p>
         </div>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredJobs.length > 0 ? filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
              className="group card border-none bg-white p-8 hover:shadow-premium transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-24 h-24 bg-primary-50 rounded-full -mr-12 -mt-12 flex items-center justify-center">
                    <ChevronRight className="text-primary-600 ml-[-40px] mt-[40px]" size={32} />
                 </div>
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-slate-900 text-white flex items-center justify-center font-black text-2xl italic shadow-2xl group-hover:rotate-6 transition-transform">
                    {job.company[0]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight italic leading-none group-hover:text-primary-600 transition-colors uppercase">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{job.company}</p>
                      <span className="w-1 h-1 bg-slate-200 rounded-full" />
                      <p className="text-[10px] font-black text-primary-500 uppercase tracking-widest italic">{job.posted}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); saveJob(job.id); showToast(savedIndices.includes(job.id) ? 'Position Unsaved' : 'Position Saved to Radar', 'info'); }}
                  className={cn(
                    "p-3 rounded-2xl transition-all shadow-sm active:scale-90 border",
                    savedIndices.includes(job.id) ? "bg-primary-600 border-primary-600 text-white" : "bg-slate-50 border-slate-100 text-slate-300 hover:text-primary-600"
                  )}
                >
                  {savedIndices.includes(job.id) ? <BookmarkCheck size={22} /> : <Bookmark size={22} />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 relative z-10">
                {[
                  { icon: MapPin, text: job.location },
                  { icon: DollarSign, text: job.salary },
                  { icon: Clock, text: job.type },
                  { icon: Users, text: job.department },
                ].map((info, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-500 bg-slate-50/50 p-2.5 rounded-xl border border-slate-50 group-hover:bg-white transition-colors">
                    <info.icon size={16} className="text-slate-400 shrink-0" />
                    <span className="text-[10px] font-black uppercase tracking-widest truncate">{info.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm font-bold text-slate-600 mb-8 leading-relaxed line-clamp-2 italic">
                "{job.desc}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <button 
                  onClick={() => setSelectedJob(job)}
                  className="flex-1 py-4 bg-slate-50 text-slate-400 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-primary-600 hover:border-primary-100 transition-all active:scale-95 shadow-sm"
                >
                  Log Details
                </button>
                <button 
                  onClick={() => { setSelectedJob(job); setIsApplyModalOpen(true); }}
                  className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black transition-all active:scale-95 shadow-xl shadow-slate-200 flex items-center justify-center gap-3"
                >
                  Apply Phase <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )) : (
            <div className="col-span-full py-40 flex flex-col items-center justify-center card border-dashed border-2 bg-slate-50/50 text-slate-300">
               <Search size={64} className="mb-6 opacity-40 animate-pulse" />
               <p className="text-xl font-black uppercase tracking-[0.3em]">No Signal Detected</p>
               <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Adjust your filter parameters to find matches</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Job Record Detail Modal */}
      <CenterModal isOpen={!!selectedJob && !isApplyModalOpen} onClose={() => setSelectedJob(null)} title="Position Strategic Log">
         {selectedJob && (
            <div className="p-10 space-y-12 text-left">
               <div className="flex items-start gap-8 border-b border-slate-50 pb-10">
                  <div className="w-24 h-24 rounded-[2rem] bg-slate-900 text-white flex items-center justify-center font-black text-4xl italic shadow-2xl">
                    {selectedJob.company[0]}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic italic uppercase leading-none">{selectedJob.title}</h2>
                    <p className="text-lg font-black text-primary-600 mt-4 uppercase tracking-widest flex items-center gap-3">
                       {selectedJob.company} <Globe size={18} />
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="px-4 py-1.5 bg-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">{selectedJob.location}</div>
                      <div className="px-4 py-1.5 bg-primary-50 rounded-xl text-[10px] font-black uppercase tracking-widest text-primary-600 whitespace-nowrap">{selectedJob.salary}</div>
                      <div className="px-4 py-1.5 bg-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap">{selectedJob.type}</div>
                    </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                  <div className="md:col-span-8 space-y-12">
                     <section>
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                           <Info size={16} className="text-primary-600" /> Objective
                        </h3>
                        <p className="text-base font-bold text-slate-600 leading-relaxed italic">{selectedJob.desc}</p>
                     </section>

                     <section>
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6">Strategic Requirements</h3>
                        <div className="grid grid-cols-1 gap-4">
                           {selectedJob.requirements.map((req, i) => (
                              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-5 group hover:bg-white hover:shadow-lg transition-all">
                                 <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary-600 shadow-sm font-black italic">{i+1}</div>
                                 <p className="text-sm font-black text-slate-700 tracking-tight">{req}</p>
                              </div>
                           ))}
                        </div>
                     </section>
                  </div>

                  <div className="md:col-span-4 space-y-8">
                     <div className="card p-8 bg-slate-900 border-none shadow-premium relative overflow-hidden group">
                        <div className="absolute -right-5 -top-5 opacity-10 rotate-12 group-hover:scale-125 transition-transform duration-1000">
                           <Zap size={150} className="text-white" />
                        </div>
                        <h3 className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] mb-8 leading-none">Ecosystem Perks</h3>
                        <div className="space-y-4 relative z-10">
                           {selectedJob.benefits.map((ben, i) => (
                              <div key={i} className="flex items-center gap-3 text-white font-black text-[9px] uppercase tracking-widest opacity-80">
                                 <CheckCircle2 size={12} className="text-primary-400" />
                                 {ben}
                              </div>
                           ))}
                        </div>
                        <button 
                           onClick={() => { setIsApplyModalOpen(true); }}
                           className="w-full mt-10 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-primary-50 transition-all"
                        >
                           Submit Dossier
                        </button>
                     </div>
                     
                     <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Talent Lead</p>
                        <div className="flex items-center gap-4">
                           <img src="https://i.pravatar.cc/100?img=12" className="w-12 h-12 rounded-2xl border-2 border-white shadow-lg" alt="" />
                           <div>
                              <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Sarah Jenks</p>
                              <p className="text-[8px] font-black text-primary-600 uppercase tracking-widest mt-1">Hiring Strategy Lead</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </CenterModal>

      {/* Application Submision Modal */}
      <CenterModal isOpen={isApplyModalOpen} onClose={() => {setIsApplyModalOpen(false); setSelectedJob(null);}} title="Submit Application Dossier">
         {selectedJob && (
            <form onSubmit={handleApplySubmit} className="p-10 space-y-8 text-left">
               <div className="flex items-center gap-6 p-6 bg-slate-900 rounded-[2rem] text-white italic">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center font-black text-2xl uppercase">
                    {selectedJob.company[0]}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-primary-400 uppercase tracking-widest leading-none mb-2 italic">Target Vector</p>
                    <p className="text-xl font-black leading-none">{selectedJob.title}</p>
                    <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mt-2">{selectedJob.company}</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 italic">Internal Artifact (Resume)</label>
                     <select className="input-field h-14 bg-slate-50 border-transparent font-black appearance-none cursor-pointer">
                        <option>Current_Master_CV_2026.pdf</option>
                        <option>Product_Design_Specific.pdf</option>
                        <option>Upload New Registry...</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 italic">Deployment Window</label>
                     <select name="availability" className="input-field h-14 bg-slate-50 border-transparent font-black appearance-none cursor-pointer">
                        <option>Immediate Activation</option>
                        <option>15 Day Transition</option>
                        <option>30 Day Transition</option>
                        <option>Negotiable Window</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 italic">Comp Expectations (Annual)</label>
                     <input name="expectedSalary" type="text" placeholder="e.g. $165,000" className="input-field h-14 bg-slate-50 border-transparent font-black" required />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 italic">Portfolio Evidence (URL)</label>
                     <input type="url" placeholder="https://registry.design/..." className="input-field h-14 bg-slate-50 border-transparent font-black" />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1 italic">Engagement Narrative (Cover Message)</label>
                  <textarea name="coverLetter" rows="5" required className="input-field py-5 bg-slate-50 border-transparent font-black resize-none" placeholder="Provide strategic context for your application..."></textarea>
               </div>

               <div className="pt-4 flex gap-4">
                  <button type="button" onClick={() => setIsApplyModalOpen(false)} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest text-[10px]">Abort</button>
                  <button type="submit" className="flex-2 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-slate-200 active:scale-95 flex items-center justify-center gap-3">
                     Finalize Deployment <Send size={16} />
                  </button>
               </div>
            </form>
         )}
      </CenterModal>
    </div>
  );
};

export default BrowseJobs;
