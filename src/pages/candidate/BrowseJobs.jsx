import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  Filter, 
  RotateCcw, 
  Bookmark, 
  ChevronRight, 
  X, 
  Users, 
  GraduationCap,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../../utils/cn';

const BrowseJobs = () => {
  const navigate = useNavigate();
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'HCM.ai Global',
      department: 'Design',
      location: 'Remote, US',
      experience: '5-8 years',
      salary: '$120k - $160k',
      type: 'Full Time',
      postedDate: '2 days ago',
      positions: 2,
      skills: ['Figma', 'UX Research', 'Design Systems'],
      summary: 'We are looking for a Senior Product Designer to lead our core HCM platform redesign and improve candidate flows.',
      description: 'As a Senior Product Designer at HCM.ai, you will be responsible for defining the visual and interaction patterns of our AI-driven platform. You will work closely with product managers and engineers to deliver world-class user experiences.',
      responsibilities: [
        'Lead the design process for major features from discovery to delivery.',
        'Conduct user research and translate insights into actionable design improvements.',
        'Maintain and evolve our design system.',
        'Mentor junior designers and contribute to our design culture.'
      ],
      requirements: [
        '5+ years of experience in product design for complex SaaS applications.',
        'Strong portfolio demonstrating UX/UI excellence.',
        'Experience with Figma and collaborative design tools.',
        'Excellent communication and stakeholders management skills.'
      ],
      benefits: ['Remote Work', 'Unlimited PTO', 'Health Insurance', 'Equity Options']
    },
    {
      id: 2,
      title: 'Frontend Engineer (React)',
      company: 'TechFlow',
      department: 'Engineering',
      location: 'San Francisco, CA',
      experience: '3-5 years',
      salary: '$140k - $180k',
      type: 'Hybrid',
      postedDate: 'Today',
      positions: 1,
      skills: ['React', 'TypeScript', 'Tailwind'],
      summary: 'Join our frontend team to build high-performance dashboard components using the latest React features.',
      description: 'TechFlow is looking for a talented Frontend Engineer who loves React and performance optimization.',
      responsibilities: [
        'Develop new features for our real-time analytics dashboard.',
        'Optimize application performance and ensure scalability.',
        'Stay up-to-date with the latest frontend technologies.'
      ],
      requirements: [
        'Strong proficiency in React and its core principles.',
        'Experience with TypeScript and modern CSS (Tailwind/PostCSS).',
        'Familiarity with state management libraries like Redux or Zustand.'
      ],
      benefits: ['Competitive Salary', 'Daily Meals', 'Gym Membership']
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      company: 'GrowthLoop',
      department: 'Marketing',
      location: 'New York, NY',
      experience: '2-4 years',
      salary: '$80k - $110k',
      type: 'Full Time',
      postedDate: '1 week ago',
      positions: 3,
      skills: ['SEO', 'Content Strategy', 'Analytics'],
      summary: 'Help us scale our customer acquisition channels through creative content and data-driven marketing.',
      description: 'Marketing is the heart of GrowthLoop. We need someone who can blend creativity with numbers.',
      responsibilities: [
        'Create and manage content across all social media platforms.',
        'Analyze campaign performance and report key metrics.',
        'Collaborate with the sales team on lead generation.'
      ],
      requirements: [
        '2+ years of experience in digital marketing.',
        'Strong writing and communication skills.',
        'Data-driven mindset with experience in Google Analytics.'
      ],
      benefits: ['Training budget', 'Performance bonuses', 'Pet-friendly office']
    },
    {
      id: 4,
      title: 'Backend Developer (Node.js)',
      company: 'SecureNet',
      department: 'Engineering',
      location: 'Remote, Europe',
      experience: '4-6 years',
      experience_level: 'Mid-Senior',
      salary: '€60k - €90k',
      type: 'Remote',
      postedDate: '3 days ago',
      positions: 2,
      skills: ['Node.js', 'PostgreSQL', 'AWS'],
      summary: 'Build secure and scalable API services for our global infrastructure monitoring platform.',
      description: 'SecureNet provides enterprise-grade monitoring. We need a backend pro to join our infra team.',
      responsibilities: [
        'Design and implement microservices in Node.js.',
        'Optimize database queries and schema designs.',
        'Ensure security best practices are followed.'
      ],
      requirements: [
        'Strong Node.js background with TypeScript.',
        'Deep understanding of relational databases.',
        'Experience with cloud providers like AWS.'
      ],
      benefits: ['Remote First', 'Learning Stipend', 'Health & Wellness']
    }
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Browse Jobs</h1>
          <p className="text-slate-500 font-medium">Discover opportunities that match your skills and career goals</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-95">
          <Clock size={18} />
          <span>My Applications</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="card p-6 border-none bg-white shadow-soft">
         <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-slate-800 font-bold">
              <Filter size={18} className="text-primary-600" />
              <span>Search Filters</span>
            </div>
            <button className="text-sm font-bold text-slate-400 hover:text-primary-600 flex items-center gap-1.5 transition-colors">
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Job title or keywords..." 
                className="input-field pl-10 h-11"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <Layers className="absolute left-3 top-3 text-slate-400 pointer-events-none" size={18} />
              <select className="input-field pl-10 h-11 appearance-none bg-white">
                <option value="">All Departments</option>
                <option value="eng">Engineering</option>
                <option value="des">Design</option>
                <option value="mkt">Marketing</option>
              </select>
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-slate-400 pointer-events-none" size={18} />
              <select className="input-field pl-10 h-11 appearance-none bg-white">
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="us">United States</option>
                <option value="eu">Europe</option>
              </select>
            </div>
            <div className="relative">
               <Briefcase className="absolute left-3 top-3 text-slate-400 pointer-events-none" size={18} />
               <select className="input-field pl-10 h-11 appearance-none bg-white">
                <option value="">Employment Type</option>
                <option value="ft">Full Time</option>
                <option value="pt">Part Time</option>
                <option value="rm">Remote</option>
              </select>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 items-end">
            <div className="relative">
               <GraduationCap className="absolute left-3 top-3 text-slate-400 pointer-events-none" size={18} />
               <select className="input-field pl-10 h-11 appearance-none bg-white font-medium text-slate-600">
                <option value="">Experience Level</option>
                <option value="jr">Junior</option>
                <option value="md">Mid-Level</option>
                <option value="sr">Senior</option>
              </select>
            </div>
            <div className="relative">
               <DollarSign className="absolute left-3 top-3 text-slate-400 pointer-events-none" size={18} />
               <select className="input-field pl-10 h-11 appearance-none bg-white font-medium text-slate-600">
                <option value="">Salary Range</option>
                <option value="50">Under $50k</option>
                <option value="100">$50k - $100k</option>
                <option value="150">$100k - $150k</option>
                <option value="150+">$150k+</option>
              </select>
            </div>
            <div className="lg:col-span-2 flex gap-3">
              <button className="btn-primary flex-1 h-11 font-bold">Apply Filters</button>
            </div>
         </div>
      </div>

      {/* Job Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="group card border-slate-100 hover:border-primary-100 hover:shadow-premium transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-lg shrink-0">
                  {job.company[0]}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-primary-600 transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm font-bold text-slate-500">{job.company}</p>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <p className="text-xs font-medium text-slate-400">{job.postedDate}</p>
                  </div>
                </div>
              </div>
              <button className="p-2 text-slate-300 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all">
                <Bookmark size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
              {[
                { icon: Layers, text: job.department },
                { icon: MapPin, text: job.location },
                { icon: Briefcase, text: job.experience },
                { icon: DollarSign, text: job.salary },
                { icon: Clock, text: job.type },
                { icon: Users, text: `${job.positions} Openings` },
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500">
                  <info.icon size={16} className="text-slate-400 shrink-0" />
                  <span className="text-xs font-bold truncate">{info.text}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-600 mb-6 font-medium leading-relaxed line-clamp-2">
              {job.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {job.skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSelectedJob(job)}
                className="flex-1 btn-secondary h-11 text-sm font-bold"
              >
                View Details
              </button>
              <button 
                onClick={() => navigate('/candidate/jobs/apply')}
                className="flex-1 btn-primary h-11 text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex items-center justify-center mt-12 gap-2">
         <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg disabled:opacity-30" disabled>
            <X className="rotate-45" size={18} />
         </button>
         <button className="w-10 h-10 rounded-xl bg-primary-600 text-white font-bold shadow-lg shadow-primary-100">1</button>
         <button className="w-10 h-10 rounded-xl hover:bg-white border border-slate-200 text-slate-600 font-bold">2</button>
         <button className="w-10 h-10 rounded-xl hover:bg-white border border-slate-200 text-slate-600 font-bold">3</button>
         <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg">
            <ChevronRight size={20} />
         </button>
      </div>

      {/* Job Details Modal/Drawer */}
      <AnimatePresence>
        {selectedJob && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-2xl bg-white shadow-2xl z-[70] overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="p-2 text-slate-400 hover:bg-slate-100 rounded-xl transition-all"
                >
                  <X size={24} />
                </button>
                <div className="flex gap-3">
                  <button className="p-2.5 text-slate-400 hover:bg-slate-50 border border-slate-200 rounded-xl transition-all">
                    <Bookmark size={20} />
                  </button>
                  <button 
                    onClick={() => navigate('/candidate/jobs/apply')}
                    className="px-6 py-2.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg active:scale-95"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-slate-900 text-white flex items-center justify-center font-bold text-3xl shadow-xl shrink-0">
                    {selectedJob.company[0]}
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{selectedJob.title}</h2>
                    <p className="text-lg font-bold text-primary-600 mt-1">{selectedJob.company}</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-1.5 text-slate-500 font-bold text-sm">
                        <MapPin size={16} className="text-slate-400" />
                        {selectedJob.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 font-bold text-sm">
                        <DollarSign size={16} className="text-slate-400" />
                        {selectedJob.salary}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 font-bold text-sm">
                        <Calendar size={16} className="text-slate-400" />
                        {selectedJob.postedDate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                   {[
                     { label: 'Type', val: selectedJob.type, icon: Clock },
                     { label: 'Role', val: selectedJob.department, icon: Layers },
                     { label: 'Exp', val: selectedJob.experience, icon: Briefcase },
                     { label: 'Quota', val: selectedJob.positions, icon: Users },
                   ].map((item, i) => (
                     <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <item.icon size={18} className="text-primary-500 mb-2" />
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                        <p className="text-sm font-extrabold text-slate-800 mt-0.5">{item.val}</p>
                     </div>
                   ))}
                </div>

                <div className="space-y-10">
                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <CheckCircle2 size={24} className="text-primary-600" />
                       Description
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{selectedJob.description}</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Responsibilities</h3>
                    <ul className="space-y-3">
                      {selectedJob.responsibilities.map((res, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 font-medium">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400 mt-2" />
                          {res}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Requirements</h3>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 font-medium">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400 mt-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="bg-primary-50/50 p-6 rounded-3xl border border-primary-100">
                    <h3 className="text-xl font-bold text-primary-900 mb-4">Benefits & Perks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedJob.benefits.map((ben, i) => (
                        <div key={i} className="flex items-center gap-2 text-primary-700 font-bold text-sm">
                          <CheckCircle2 size={16} />
                          {ben}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-100 bg-white shrink-0">
                <button 
                  onClick={() => navigate('/candidate/jobs/apply')}
                  className="w-full h-14 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl active:scale-95 text-lg"
                >
                  Submit Application
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrowseJobs;
