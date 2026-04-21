import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Plus, 
  Trash2, 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  Eye, 
  Save, 
  Languages, 
  Award, 
  Settings2,
  FileText,
  CheckCircle2,
  Image as ImageIcon,
  Type,
  Palette,
  MapPin,
  Mail,
  Phone,
  Link as LinkIcon,
  PlusCircle,
  XCircle,
  Layout,
  MousePointer2,
  Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

const ResumeBuilder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      linkedin: '',
      portfolio: '',
      summary: ''
    },
    experience: [{ id: 1, title: '', company: '', location: '', start: '', end: '', current: false, description: '', achievements: '' }],
    education: [{ id: 1, degree: '', institution: '', field: '', startYear: '', endYear: '', gpa: '', description: '' }],
    skills: [{ id: 1, name: '', level: 'Intermediate', category: 'Technical' }],
    extras: {
      certifications: [{ id: 1, name: '', issuedBy: '', date: '', url: '' }],
      languages: [{ id: 1, language: '', proficiency: 'Fluent' }],
      projects: [{ id: 1, name: '', description: '', url: '' }]
    },
    template: {
      id: 'modern',
      primaryColor: '#4f46e5',
      font: 'Inter',
      fontSize: 'medium',
      spacing: 'compact'
    }
  });

  const steps = [
    { title: 'Personal', icon: User, helper: 'Basic contact information' },
    { title: 'Experience', icon: Briefcase, helper: 'Professional work history' },
    { title: 'Education', icon: GraduationCap, helper: 'Academic background' },
    { title: 'Skills', icon: Sparkles, helper: 'Core competencies' },
    { title: 'Extras', icon: Award, helper: 'Certs, languages, projects' },
    { title: 'Template', icon: Settings2, helper: 'Design and layout selection' },
  ];

  const handleNext = () => setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep(prev => Math.max(prev - 1, 0));

  const updatePersonal = (field, value) => {
    setResumeData(prev => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
  };

  const addArrayItem = (section, subSection = null) => {
    const newItem = { id: Date.now() };
    if (subSection) {
      setResumeData(prev => ({
        ...prev,
        extras: { ...prev.extras, [subSection]: [...prev.extras[subSection], newItem] }
      }));
    } else {
      setResumeData(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
    }
  };

  const removeArrayItem = (section, id, subSection = null) => {
    if (subSection) {
      setResumeData(prev => ({
        ...prev,
        extras: { ...prev.extras, [subSection]: prev.extras[subSection].filter(i => i.id !== id) }
      }));
    } else {
      setResumeData(prev => ({ ...prev, [section]: prev[section].filter(i => i.id !== id) }));
    }
  };

  const updateArrayItem = (section, id, field, value, subSection = null) => {
    if (subSection) {
      setResumeData(prev => ({
        ...prev,
        extras: {
          ...prev.extras,
          [subSection]: prev.extras[subSection].map(i => i.id === id ? { ...i, [field]: value } : i)
        }
      }));
    } else {
      setResumeData(prev => ({
        ...prev,
        [section]: prev[section].map(i => i.id === id ? { ...i, [field]: value } : i)
      }));
    }
  };

  // --------------------------------------------------------------------------
  // STEP RENDERERS
  // --------------------------------------------------------------------------

  const renderPersonal = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
        <div className="group relative">
          <div className="w-32 h-32 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/20 transition-all cursor-pointer overflow-hidden group">
            <ImageIcon size={40} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest mt-2">Upload Photo</span>
          </div>
          <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white dark:bg-slate-800 text-primary-600 rounded-full flex items-center justify-center shadow-lg border border-slate-100 dark:border-slate-700 hover:scale-110 transition-transform">
            <Plus size={20} />
          </button>
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Identity & Contacts</h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">Let employers know who you are and how to reach you.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'Full Name', key: 'fullName', type: 'text', placeholder: 'e.g. Johnathan Doe' },
          { label: 'Professional Title', key: 'title', type: 'text', placeholder: 'e.g. Senior Software Architect' },
          { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@example.com' },
          { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
          { label: 'Address', key: 'address', type: 'text', placeholder: '123 Tech Lane' },
          { label: 'City & State', key: 'city', type: 'text', placeholder: 'San Francisco, CA' },
          { label: 'LinkedIn URL', key: 'linkedin', type: 'text', placeholder: 'linkedin.com/in/username' },
          { label: 'Portfolio URL', key: 'portfolio', type: 'text', placeholder: 'github.com/username' },
        ].map(field => (
          <div key={field.key} className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">{field.label}</label>
            <input 
              type={field.type} 
              value={resumeData.personal[field.key]}
              onChange={(e) => updatePersonal(field.key, e.target.value)}
              placeholder={field.placeholder} 
              className="input-field h-14 font-bold text-slate-700 dark:text-slate-200" 
            />
          </div>
        ))}
        <div className="md:col-span-2 space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Professional Summary</label>
          <textarea 
            rows={5}
            value={resumeData.personal.summary}
            onChange={(e) => updatePersonal('summary', e.target.value)}
            className="input-field py-4 resize-none font-medium leading-relaxed dark:text-slate-200" 
            placeholder="Summarize your professional career in 3-4 sentences..."
          />
        </div>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-10 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Work Experience</h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Chronicle your professional achievements and career growth.</p>
        </div>
        <button 
          onClick={() => addArrayItem('experience')}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all active:scale-95"
        >
          <Plus size={16} /> <span>Add Role</span>
        </button>
      </div>

      <div className="space-y-8">
        {resumeData.experience.map((exp, idx) => (
          <div key={exp.id} className="card p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-soft relative group hover:border-primary-200 dark:hover:border-primary-900 transition-all">
            <button 
              onClick={() => removeArrayItem('experience', exp.id)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white dark:bg-slate-800 text-rose-500 rounded-full flex items-center justify-center shadow-md border border-slate-100 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <Trash2 size={16} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Job Title</label>
                <input 
                  type="text" 
                  value={exp.title}
                  onChange={(e) => updateArrayItem('experience', exp.id, 'title', e.target.value)}
                  placeholder="e.g. Frontend Developer" 
                  className="input-field h-12 bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Company Name</label>
                <input 
                  type="text" 
                  value={exp.company}
                  onChange={(e) => updateArrayItem('experience', exp.id, 'company', e.target.value)}
                  placeholder="e.g. Acme Corp" 
                  className="input-field h-12 bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4 md:col-span-2">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Start Date</label>
                  <input 
                    type="month" 
                    value={exp.start}
                    onChange={(e) => updateArrayItem('experience', exp.id, 'start', e.target.value)}
                    className="input-field h-12 bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">End Date</label>
                  <input 
                    type="month" 
                    disabled={exp.current}
                    value={exp.end}
                    onChange={(e) => updateArrayItem('experience', exp.id, 'end', e.target.value)}
                    className="input-field h-12 bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white disabled:opacity-30" 
                  />
                </div>
              </div>
              <div className="md:col-span-2 flex items-center gap-3 py-2">
                <input 
                  type="checkbox" 
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onChange={(e) => updateArrayItem('experience', exp.id, 'current', e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" 
                />
                <label htmlFor={`current-${exp.id}`} className="text-sm font-bold text-slate-600 dark:text-slate-400">I currently work here</label>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Responsibilities & Actions</label>
                <textarea 
                  rows={4} 
                  value={exp.description}
                  onChange={(e) => updateArrayItem('experience', exp.id, 'description', e.target.value)}
                  className="input-field py-4 resize-none bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white" 
                  placeholder="Describe your role and impact..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-10 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Academic History</h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">List your degrees, certifications, and educational milestones.</p>
        </div>
        <button 
          onClick={() => addArrayItem('education')}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all active:scale-95"
        >
          <Plus size={16} /> <span>Add Education</span>
        </button>
      </div>

      <div className="space-y-8">
        {resumeData.education.map((edu, idx) => (
          <div key={edu.id} className="card p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-soft relative group hover:border-primary-100 dark:hover:border-primary-900 transition-all">
            <button 
              onClick={() => removeArrayItem('education', edu.id)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white dark:bg-slate-800 text-rose-500 rounded-full flex items-center justify-center shadow-md border border-slate-100 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <Trash2 size={16} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Degree / Qualification</label>
                <input 
                  type="text" 
                  value={edu.degree}
                  onChange={(e) => updateArrayItem('education', edu.id, 'degree', e.target.value)}
                  placeholder="e.g. Master of Science" 
                  className="input-field h-12 bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Institution Name</label>
                <input 
                  type="text" 
                  value={edu.institution}
                  onChange={(e) => updateArrayItem('education', edu.id, 'institution', e.target.value)}
                  placeholder="e.g. Stanford University" 
                  className="input-field h-12 bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Field of Study</label>
                <input 
                  type="text" 
                  value={edu.field}
                  onChange={(e) => updateArrayItem('education', edu.id, 'field', e.target.value)}
                  placeholder="e.g. Computing Information Systems" 
                  className="input-field h-12 bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">GPA / Grade</label>
                    <input 
                      type="text" 
                      value={edu.gpa}
                      onChange={(e) => updateArrayItem('education', edu.id, 'gpa', e.target.value)}
                      placeholder="e.g. 3.9/4.0" 
                      className="input-field h-12 bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">End Year</label>
                    <input 
                      type="text" 
                      value={edu.endYear}
                      onChange={(e) => updateArrayItem('education', edu.id, 'endYear', e.target.value)}
                      placeholder="2024" 
                      className="input-field h-12 bg-slate-50/50 dark:bg-slate-900/50 border-transparent dark:text-white" 
                    />
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-10 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Skills & Proficiencies</h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Add technical stack, soft skills, and industry knowledge.</p>
        </div>
        <button 
          onClick={() => addArrayItem('skills')}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary-200 hover:bg-primary-700 transition-all active:scale-95"
        >
          <Plus size={16} /> <span>Add Skill</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.skills.map((skill, idx) => (
          <div key={skill.id} className="card p-6 bg-slate-50 dark:bg-slate-800/50 border-transparent dark:border-slate-800 flex items-center gap-4 group">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                 <input 
                  type="text" 
                  value={skill.name}
                  onChange={(e) => updateArrayItem('skills', skill.id, 'name', e.target.value)}
                  placeholder="e.g. React.js" 
                  className="w-full bg-transparent border-none text-sm font-bold text-slate-800 dark:text-white focus:ring-0 p-0" 
                />
                 <select 
                  value={skill.level}
                  onChange={(e) => updateArrayItem('skills', skill.id, 'level', e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg text-[10px] font-black uppercase tracking-widest px-2 py-1 outline-none dark:text-slate-400"
                >
                   <option>Beginner</option>
                   <option>Intermediate</option>
                   <option>Advanced</option>
                   <option>Expert</option>
                 </select>
              </div>
              <div className="flex items-center gap-1">
                 {[1,2,3,4,5].map(d => (
                    <div 
                      key={d} 
                      className={cn(
                        "h-1.5 flex-1 rounded-full",
                        d <= (skill.level === 'Beginner' ? 1 : skill.level === 'Intermediate' ? 3 : skill.level === 'Advanced' ? 4 : 5) 
                          ? "bg-primary-500" 
                          : "bg-slate-200 dark:bg-slate-700"
                      )} 
                    />
                 ))}
              </div>
            </div>
            <button 
              onClick={() => removeArrayItem('skills', skill.id)}
              className="text-slate-300 hover:text-rose-500 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="pt-10 border-t border-slate-50 dark:border-slate-800">
         <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Popular Skills Suggestions</p>
         <div className="flex flex-wrap gap-2">
            {['TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Zustand', 'Prisma', 'REST API', 'GraphQL', 'AWS'].map(chip => (
               <button key={chip} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 transition-all border border-slate-100 dark:border-slate-700">
                  + {chip}
               </button>
            ))}
         </div>
      </div>
    </div>
  );

  const renderExtras = () => (
    <div className="space-y-12 animate-fade-in">
       {/* Certifications */}
       <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
               <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg"><Award size={20} /></div>
               Certifications
            </h4>
            <button onClick={() => addArrayItem('extras', 'certifications')} className="text-xs font-black uppercase tracking-widest text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline">
               <Plus size={14} /> Add Certification
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {resumeData.extras.certifications.map(cert => (
               <div key={cert.id} className="p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl relative group">
                  <button onClick={() => removeArrayItem('extras', cert.id, 'certifications')} className="absolute top-2 right-2 text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  <input 
                    type="text" 
                    value={cert.name}
                    onChange={(e) => updateArrayItem('extras', cert.id, 'name', e.target.value, 'certifications')}
                    placeholder="Certification Name" 
                    className="w-full bg-transparent border-none font-bold text-sm text-slate-800 dark:text-white p-0 mb-3 focus:ring-0" 
                  />
                  <input 
                    type="text" 
                    value={cert.issuedBy}
                    onChange={(e) => updateArrayItem('extras', cert.id, 'issuedBy', e.target.value, 'certifications')}
                    placeholder="Issued By (e.g. Google, AWS)" 
                    className="w-full bg-transparent border-none text-[11px] text-slate-400 p-0 focus:ring-0" 
                  />
               </div>
             ))}
          </div>
       </div>

       {/* Languages */}
       <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
               <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg"><Languages size={20} /></div>
               Languages
            </h4>
            <button onClick={() => addArrayItem('extras', 'languages')} className="text-xs font-black uppercase tracking-widest text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline">
               <Plus size={14} /> Add Language
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
             {resumeData.extras.languages.map(lang => (
               <div key={lang.id} className="px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl flex items-center gap-4 group">
                  <input 
                    type="text" 
                    value={lang.language}
                    onChange={(e) => updateArrayItem('extras', lang.id, 'language', e.target.value, 'languages')}
                    placeholder="Language" 
                    className="w-24 bg-transparent border-none font-bold text-sm text-slate-700 dark:text-white p-0 focus:ring-0" 
                  />
                  <select 
                    value={lang.proficiency}
                    onChange={(e) => updateArrayItem('extras', lang.id, 'proficiency', e.target.value, 'languages')}
                    className="bg-white dark:bg-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md border-none outline-none dark:text-slate-400"
                  >
                     <option>Native</option>
                     <option>Fluent</option>
                     <option>Intermediate</option>
                     <option>Basic</option>
                  </select>
                  <button onClick={() => removeArrayItem('extras', lang.id, 'languages')} className="text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={14} /></button>
               </div>
             ))}
          </div>
       </div>

       {/* Projects */}
       <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
               <div className="p-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-lg"><FileText size={20} /></div>
               Personal Projects
            </h4>
            <button onClick={() => addArrayItem('extras', 'projects')} className="text-xs font-black uppercase tracking-widest text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline">
               <Plus size={14} /> Add Project
            </button>
          </div>
          <div className="space-y-4">
             {resumeData.extras.projects.map(proj => (
               <div key={proj.id} className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl group relative hover:border-primary-100 transition-all">
                  <button onClick={() => removeArrayItem('extras', proj.id, 'projects')} className="absolute top-4 right-4 text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100"><Trash2 size={18} /></button>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="md:col-span-1 space-y-4">
                        <input 
                          type="text" 
                          value={proj.name}
                          onChange={(e) => updateArrayItem('extras', proj.id, 'name', e.target.value, 'projects')}
                          placeholder="Project Name" 
                          className="w-full bg-slate-50 dark:bg-slate-900 px-4 py-3 rounded-xl border-none font-bold text-sm dark:text-white" 
                        />
                        <input 
                          type="text" 
                          value={proj.url}
                          onChange={(e) => updateArrayItem('extras', proj.id, 'url', e.target.value, 'projects')}
                          placeholder="Project URL" 
                          className="w-full bg-slate-50 dark:bg-slate-900 px-4 py-3 rounded-xl border-none text-xs font-medium dark:text-slate-400" 
                        />
                     </div>
                     <div className="md:col-span-2">
                        <textarea 
                          rows={3} 
                          value={proj.description}
                          onChange={(e) => updateArrayItem('extras', proj.id, 'description', e.target.value, 'projects')}
                          className="w-full bg-slate-50 dark:bg-slate-900 px-4 py-4 rounded-xl border-none resize-none font-medium text-sm leading-relaxed dark:text-slate-300" 
                          placeholder="Briefly describe the project, tech stack used and your role..."
                        />
                     </div>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );

  const renderTemplate = () => (
    <div className="space-y-12 animate-fade-in">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Customization Options */}
          <div className="col-span-1 space-y-10">
             <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Branding Color</p>
                <div className="grid grid-cols-4 gap-3">
                   {['#4f46e5', '#3b82f6', '#10b981', '#f43f5e', '#8b5cf6', '#f59e0b', '#06b6d4', '#18181b'].map(color => (
                      <button 
                         key={color} 
                         onClick={() => setResumeData(prev => ({ ...prev, template: { ...prev.template, primaryColor: color } }))}
                         style={{ backgroundColor: color }}
                         className={cn(
                           "w-10 h-10 rounded-full border-2 transition-all",
                           resumeData.template.primaryColor === color ? "border-slate-900 dark:border-white scale-110 shadow-lg" : "border-transparent"
                         )}
                      />
                   ))}
                </div>
             </div>

             <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Typography</p>
                <div className="space-y-4 text-left">
                   {['Inter', 'Roboto', 'Outfit', 'Merriweather'].map(font => (
                      <button 
                        key={font}
                        onClick={() => setResumeData(prev => ({ ...prev, template: { ...prev.template, font: font } }))}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border text-sm font-bold transition-all flex items-center justify-between",
                          resumeData.template.font === font 
                            ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-xl" 
                            : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-700"
                        )}
                        style={{ fontFamily: font }}
                      >
                         {font}
                         {resumeData.template.font === font && <CheckCircle2 size={16} />}
                      </button>
                   ))}
                </div>
             </div>

             <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Configuration</p>
                <div className="space-y-3">
                   <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Spacing</span>
                      <button onClick={() => setResumeData(prev => ({ ...prev, template: { ...prev.template, spacing: prev.template.spacing === 'compact' ? 'relaxed' : 'compact' } }))} className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative p-1 transition-all">
                         <div className={cn("w-4 h-4 bg-white rounded-full shadow-sm transition-all", resumeData.template.spacing === 'relaxed' ? "translate-x-4" : "translate-x-0")} />
                      </button>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Font Size</span>
                       <div className="flex gap-1">
                          {['S', 'M', 'L'].map(size => (
                             <button key={size} className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 text-[10px] font-black border border-slate-100 dark:border-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-all">{size}</button>
                          ))}
                       </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Template Gallery */}
          <div className="col-span-3 space-y-10">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                   { id: 'modern', name: 'Modern Professional', desc: 'Minimalist with dynamic header', img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80' },
                   { id: 'executive', name: 'Executive Premium', desc: 'Structured and bold typography', img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=500&q=80' },
                   { id: 'creative', name: 'Creative Portfolio', desc: 'Grid based content layout', img: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500&q=80' },
                   { id: 'minimal', name: 'Minimalist Clean', desc: 'Classic single column list', img: 'https://images.unsplash.com/photo-1506784919141-177b442721dc?w=500&q=80' },
                ].map((tpl) => (
                   <div 
                      key={tpl.id} 
                      onClick={() => setResumeData(prev => ({ ...prev, template: { ...prev.template, id: tpl.id } }))}
                      className={cn(
                        "group cursor-pointer space-y-4 rounded-3xl overflow-hidden p-3 transition-all",
                        resumeData.template.id === tpl.id ? "bg-primary-50 dark:bg-primary-950/20 ring-2 ring-primary-500" : "hover:bg-slate-50 dark:hover:bg-slate-800"
                      )}
                   >
                      <div className="aspect-[4/5] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden relative border border-slate-100 dark:border-slate-800 shadow-soft group-hover:shadow-xl transition-all">
                         <img src={tpl.img} alt={tpl.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                         <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                            <button className="px-6 py-2 bg-white text-slate-900 rounded-full text-xs font-black opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all">Select</button>
                         </div>
                         {resumeData.template.id === tpl.id && (
                            <div className="absolute top-4 right-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg"><CheckCircle2 size={16} /></div>
                         )}
                      </div>
                      <div className="px-2 pb-2">
                         <h5 className="font-bold text-slate-800 dark:text-white leading-none mb-1">{tpl.name}</h5>
                         <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{tpl.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );

  return (
    <div className="space-y-8 pb-12 animate-fade-in flex flex-col min-h-screen lg:min-h-0 lg:h-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">AI Resume Builder</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium tracking-tight">Step <span className="text-primary-600 font-black">{activeStep + 1}</span> of 6 • {steps[activeStep].title}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 text-xs font-black uppercase tracking-widest flex items-center gap-2">
            <Eye size={16} />
            <span className="hidden sm:inline">Live Preview</span>
          </button>
          <button className="btn-secondary px-5 py-2.5 text-xs font-black uppercase tracking-widest flex items-center gap-2">
            <Save size={16} />
            <span className="hidden sm:inline">Save Draft</span>
          </button>
          <button className="btn-primary px-6 py-3 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl shadow-primary-200">
            <Download size={18} />
            <span>Export CV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 items-start">
        {/* Left: Navigation Steps */}
        <div className="lg:col-span-3 sticky top-24 space-y-6">
           <div className="card border-none bg-white dark:bg-slate-900 p-4 shadow-soft">
              <nav className="space-y-2 relative">
                {/* Vertical Progress Line */}
                <div className="absolute left-[31px] top-6 bottom-6 w-0.5 bg-slate-100 dark:bg-slate-800" />
                
                {steps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={cn(
                      "w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative z-10",
                      activeStep === idx 
                        ? "bg-primary-600 text-white shadow-xl shadow-primary-200 dark:shadow-primary-900/20" 
                        : activeStep > idx 
                          ? "text-primary-600 dark:text-primary-400 bg-white dark:bg-slate-900 opacity-100"
                          : "text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                      activeStep === idx 
                        ? "bg-white/20 rotate-0" 
                        : activeStep > idx 
                          ? "bg-primary-50 dark:bg-primary-900/20 rotate-0"
                          : "bg-slate-50 dark:bg-slate-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10"
                    )}>
                      {activeStep > idx ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
                    </div>
                    <div className="text-left flex-1">
                      <span className="font-black text-xs uppercase tracking-widest block">{step.title}</span>
                    </div>
                    {activeStep === idx && (
                       <motion.div layoutId="pointer" className="w-1.5 h-6 bg-white rounded-full ml-auto" />
                    )}
                  </button>
                ))}
              </nav>
           </div>
           
           <div className="card bg-slate-900 text-white p-8 overflow-hidden relative border-none shadow-2xl group">
              <div className="absolute -top-6 -right-6 p-4 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
                 <Zap size={140} fill="currentColor" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg animate-pulse">
                      <Sparkles size={20} />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-400">AI Enhancement</span>
                </div>
                <h4 className="text-xl font-black tracking-tight leading-tight">Generate Summary with AI Writer</h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">Let our proprietary AI models craft a compelling professional narrative based on your unique experiences.</p>
                <button className="w-full py-4 bg-primary-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary-700 transition-all shadow-xl active:scale-95 group/btn overflow-hidden relative">
                   <span className="relative z-10">Use AI Writer</span>
                   <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                </button>
              </div>
           </div>
        </div>

        {/* Right: Form Content */}
        <div className="lg:col-span-9 space-y-8">
           <div className="card min-h-[700px] flex flex-col p-8 lg:p-12 border-none bg-white dark:bg-slate-900 shadow-soft relative transition-colors duration-300">
              {/* Progress Indicator */}
              <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 dark:bg-slate-800 rounded-t-2xl overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                   className="h-full bg-primary-600 shadow-[0_0_20px_rgba(79,70,229,0.5)]" 
                 />
              </div>

              {/* Step Header */}
              <div className="mb-12">
                 <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">{steps[activeStep].title}</h2>
                 <p className="text-slate-400 font-medium">{steps[activeStep].helper}</p>
              </div>

              <div className="flex-1 overflow-x-hidden">
                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeStep}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="h-full"
                   >
                     {activeStep === 0 && renderPersonal()}
                     {activeStep === 1 && renderExperience()}
                     {activeStep === 2 && renderEducation()}
                     {activeStep === 3 && renderSkills()}
                     {activeStep === 4 && renderExtras()}
                     {activeStep === 5 && renderTemplate()}
                   </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation Actions */}
              <div className="pt-12 border-t border-slate-50 dark:border-slate-800 mt-12 flex items-center justify-between">
                 <button 
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  className="flex items-center gap-3 px-8 py-4 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all disabled:opacity-0"
                >
                    <ChevronLeft size={20} />
                    <span>Previous</span>
                 </button>

                 <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-full animate-fade-in">
                       <CheckCircle2 size={14} />
                       <span className="text-[10px] font-black uppercase tracking-widest">Autosaving...</span>
                    </div>

                    <button 
                      onClick={handleNext}
                      className="flex items-center gap-3 px-10 py-4 bg-primary-600 text-white rounded-[1.5rem] text-xs font-black uppercase tracking-[0.2em] hover:bg-primary-700 transition-all shadow-2xl shadow-primary-200 dark:shadow-primary-900/30 active:scale-95 group"
                    >
                        <span>{activeStep === steps.length - 1 ? 'Finish & Download' : 'Next Step'}</span>
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
