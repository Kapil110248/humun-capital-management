import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Upload, 
  FileText, 
  Link as LinkIcon, 
  MapPin, 
  DollarSign, 
  Calendar, 
  Globe,
  Plus,
  X,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  ChevronDown
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resume, setResume] = useState(null);
  const [skills, setSkills] = useState(['React', 'Tailwind CSS']);
  const [skillInput, setSkillInput] = useState('');

  const jobInfo = {
    title: 'Senior Product Designer',
    department: 'Design & Creative',
    location: 'Remote, US',
    salary: '$120k - $160k',
    type: 'Full Time',
    deadline: 'Nov 15, 2026'
  };

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
      }
      setSkillInput('');
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-premium border border-slate-100"
        >
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Success!</h2>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            Your application for <span className="font-bold text-slate-800">{jobInfo.title}</span> has been submitted successfully. We'll be in touch soon.
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => navigate('/candidate/applications')}
              className="btn-primary w-full h-12 font-bold"
            >
              View My Applications
            </button>
            <button 
              onClick={() => navigate('/candidate/jobs')}
              className="btn-secondary w-full h-12 font-bold"
            >
              Browse More Jobs
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-primary-600 transition-all hover:border-primary-100 shadow-sm"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Job Application</h1>
            <p className="text-slate-500 font-medium">Complete your application for {jobInfo.title}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Main Form Area */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="card bg-white p-8 lg:p-10 border-none shadow-soft space-y-10">
            
            {/* Personal Information */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                  <User size={18} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name <span className="text-rose-500">*</span></label>
                  <div className="relative group">
                    <User className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                    <input type="text" required placeholder="John Doe" className="input-field pl-11" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address <span className="text-rose-500">*</span></label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                    <input type="email" required placeholder="john@example.com" className="input-field pl-11" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number <span className="text-rose-500">*</span></label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                    <input type="tel" required placeholder="+1 (555) 000-0000" className="input-field pl-11" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Current Location</label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                    <input type="text" placeholder="San Francisco, CA" className="input-field pl-11" />
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-50" />

            {/* Resume & Professional Info */}
            <section className="space-y-6">
               <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center">
                  <Briefcase size={18} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Professional Profile</h3>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Upload Resume <span className="text-rose-500">*</span></label>
                <div 
                  className={cn(
                    "relative group cursor-pointer border-2 border-dashed rounded-2xl p-10 text-center transition-all",
                    resume ? "border-emerald-200 bg-emerald-50/20" : "border-slate-200 hover:border-primary-300 hover:bg-slate-50/50"
                  )}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    setResume(e.dataTransfer.files[0]);
                  }}
                  onClick={() => document.getElementById('resume-upload').click()}
                >
                  <input 
                    id="resume-upload" 
                    type="file" 
                    className="hidden" 
                    accept=".pdf,.doc,.docx" 
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                  {resume ? (
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                        <CheckCircle2 size={32} />
                      </div>
                      <p className="text-slate-900 font-bold">{resume.name}</p>
                      <p className="text-xs text-slate-400 mt-1 uppercase font-bold">{(resume.size / 1024 / 1024).toFixed(2)} MB • Ready to upload</p>
                      <button 
                        type="button" 
                        onClick={(e) => { e.stopPropagation(); setResume(null); }}
                        className="mt-4 text-xs font-bold text-rose-500 hover:text-rose-600"
                      >
                        Remove file
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-4 group-hover:bg-primary-50 group-hover:text-primary-500 transition-all">
                        <Upload size={32} />
                      </div>
                      <p className="text-slate-900 font-bold text-lg mb-1">Click or drag & drop to upload</p>
                      <p className="text-slate-500 font-medium">Support: PDF, DOC, DOCX (Max 5MB)</p>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Total Experience <span className="text-rose-500">*</span></label>
                  <div className="relative group">
                    <select required className="input-field appearance-none pl-4 pr-10">
                      <option value="">Select years</option>
                      <option value="fresher">Fresher</option>
                      <option value="1-2">1-2 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5+">5+ Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-3 text-slate-400 pointer-events-none" size={18} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Expected Salary</label>
                  <div className="relative group">
                    <DollarSign className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                    <input type="text" placeholder="$120,000" className="input-field pl-11" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Skills & Expertise <span className="text-rose-500">*</span></label>
                <div className="input-field min-h-[50px] p-2 flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="flex items-center gap-1.5 px-2.5 py-1 bg-primary-50 text-primary-600 rounded-lg text-xs font-bold ring-1 ring-primary-100">
                      {skill}
                      <button type="button" onClick={() => removeSkill(skill)}><X size={12} /></button>
                    </span>
                  ))}
                  <input 
                    type="text" 
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={handleAddSkill}
                    placeholder={skills.length === 0 ? "e.g. React, Figma, UI Design" : "Add more..."}
                    className="flex-1 bg-transparent border-none outline-none text-sm font-medium min-w-[120px]"
                  />
                </div>
              </div>
            </section>

            <hr className="border-slate-50" />

            {/* Links and Additional Info */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Globe size={18} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Social & Portfolio</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">LinkedIn Profile</label>
                  <div className="relative group">
                    <Globe className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                    <input type="url" placeholder="https://linkedin.com/in/username" className="input-field pl-11" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Portfolio / Website</label>
                  <div className="relative group">
                    <LinkIcon className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                    <input type="url" placeholder="https://portfolio.com" className="input-field pl-11" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Notice Period</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-3 text-slate-400 pointer-events-none" size={18} />
                  <select className="input-field appearance-none pl-11 pr-10">
                    <option value="immediate">Immediate</option>
                    <option value="15">15 Days</option>
                    <option value="30">30 Days</option>
                    <option value="60">60 Days</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-700">Cover Letter</label>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Recommended</span>
                </div>
                <textarea 
                  rows={5} 
                  placeholder="Tell us why you're a great fit for this role..." 
                  className="input-field py-4 resize-none"
                ></textarea>
                <div className="flex justify-end mt-2">
                  <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">0 / 2000 Characters</span>
                </div>
              </div>
            </section>

            <div className="pt-6 flex flex-col md:flex-row gap-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 btn-primary h-14 text-lg font-bold flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-2xl"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Plus size={22} />
                  </>
                )}
              </button>
              <button 
                type="button" 
                className="btn-secondary h-14 px-8 font-bold text-slate-600 hover:text-primary-600 shadow-sm"
              >
                Save Draft
              </button>
               <button 
                type="button" 
                onClick={() => navigate(-1)}
                className="h-14 px-8 font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Right Sticky Column: Summary & Tips */}
        <div className="lg:sticky lg:top-24 space-y-6">
          <div className="card border-none bg-slate-900 text-white p-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-6">Job Snapshot</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold leading-tight">{jobInfo.title}</h4>
                <p className="text-sm font-medium text-slate-400 mt-1">{jobInfo.department}</p>
              </div>
              
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: jobInfo.location },
                  { icon: DollarSign, text: jobInfo.salary },
                  { icon: Clock, text: jobInfo.type },
                  { icon: Calendar, text: `Apply by: ${jobInfo.deadline}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400">
                    <item.icon size={16} className="text-slate-500" />
                    <span className="text-sm font-medium leading-none">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-white/10">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Recruitment Stage</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                        <CheckCircle2 size={20} className="text-white" />
                      </div>
                      <span className="text-sm font-bold">Actively Hiring</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="card bg-white p-6 border-none shadow-soft">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertCircle className="text-amber-500" size={20} />
               Submission Tips
            </h3>
            <ul className="space-y-4">
              {[
                { title: 'Resume Quality', desc: 'Ensure your resume is updated and reflects your latest achievements.' },
                { title: 'Relevant Skills', desc: 'Adding 5+ top skills improves your ranking across AI screenings.' },
                { title: 'Cover Letter', desc: 'Personalized cover letters increase engagement by 40%.' }
              ].map((tip, i) => (
                <li key={i} className="space-y-1">
                  <p className="text-sm font-bold text-slate-800">{tip.title}</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{tip.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
