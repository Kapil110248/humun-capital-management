import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  FileText, 
  Cpu, 
  Search, 
  Plus, 
  RotateCcw, 
  Copy, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  TrendingUp, 
  Target, 
  Award,
  ChevronDown,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Type,
  Layout,
  Briefcase
} from 'lucide-react';
import { cn } from '../../utils/cn';

const AIResumeScore = () => {
  const [resumeUploaded, setResumeUploaded] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const atsScore = 82;

  const missingKeywords = [
    'Leadership', 'Project Management', 'Excel', 'CRM', 'Communication', 'Sales Strategy'
  ];

  const suggestions = [
    'Add measurable achievements',
    'Improve headline summary',
    'Use stronger action verbs',
    'Add relevant certifications',
    'Keep formatting consistent'
  ];

  const improvementTips = [
    { title: 'Keep resume under 2 pages', desc: 'Recruiters spend less than 10 seconds on their first pass.' },
    { title: 'Tailor resume to each role', desc: 'Customizing your summary for specific jobs increases match rate.' },
    { title: 'Highlight recent experience', desc: 'Focus on your accomplishments in the last 3-5 years.' },
    { title: 'Use keywords naturally', desc: 'Avoid keyword stuffing; ensure they flow within your sentences.' },
    { title: 'Remove outdated skills', desc: 'Clean up old technologies that are no longer industry standard.' }
  ];

  const sectionBreakdowns = [
    { label: 'Contact Info', score: 100, color: 'bg-emerald-500' },
    { label: 'Experience', score: 75, color: 'bg-primary-500' },
    { label: 'Skills', score: 60, color: 'bg-amber-500' },
    { label: 'Education', score: 90, color: 'bg-indigo-500' },
    { label: 'Formatting', score: 95, color: 'bg-purple-500' },
    { label: 'Keywords Match', score: 68, color: 'bg-accent-500' },
  ];

  if (!resumeUploaded) {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AI Resume Score</h1>
            <p className="text-slate-500 font-medium">Analyze your resume and improve your chances of getting hired</p>
          </div>
        </div>

        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-white border-2 border-dashed border-slate-200 rounded-3xl">
           <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
              <Sparkles size={48} />
           </div>
           <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Unlock Your Hiring Potential</h2>
           <p className="text-slate-500 font-medium mb-8 text-center max-w-sm">
             Upload your resume to get instant AI-powered feedback on your ATS score, missing keywords, and improvement tips.
           </p>
           <button 
            onClick={() => setResumeUploaded(true)}
            className="btn-primary h-14 px-8 text-lg font-bold flex items-center gap-3 shadow-2xl shadow-primary-200"
          >
             <Upload size={22} />
             <span>Upload Your Resume</span>
           </button>
           <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Support: PDF, DOCX (Max 5MB)</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AI Resume Score</h1>
          <p className="text-slate-500 font-medium">Analyze your resume and improve your chances of getting hired</p>
        </div>
        <button className="btn-secondary h-11 px-5 font-bold flex items-center justify-center gap-2">
          <Upload size={18} />
          <span>Upload New Resume</span>
        </button>
      </div>

      {/* Summary Section / Hero Card */}
      <div className="card bg-slate-900 text-white p-8 overflow-hidden relative border-none">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
           <Cpu size={180} />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary-400 shadow-xl border border-white/10">
              <FileText size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">Marketing_Lead_Resume_2026.pdf</h2>
              <p className="text-slate-400 font-medium mt-1">Last analyzed on Oct 24, 2026 • 10:42 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="px-6 h-12 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-all shadow-xl shadow-primary-600/20 active:scale-95 flex items-center gap-2"
            >
              <RotateCcw size={18} className={cn(isAnalyzing && "animate-spin")} />
              <span>{isAnalyzing ? "Analyzing..." : "Analyze Again"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* ATS Score Card */}
        <div className="card flex flex-col items-center justify-center py-12 relative">
          <h3 className="absolute top-6 left-6 text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
             <ShieldCheck size={18} className="text-primary-600" />
             ATS Score
          </h3>
          
          <div className="relative w-48 h-48 flex items-center justify-center mb-6 mt-4">
             {/* Circular Progress (Simplified SVG) */}
             <svg className="w-full h-full transform -rotate-90">
               <circle 
                cx="96" cy="96" r="88" 
                stroke="currentColor" strokeWidth="12" fill="transparent" 
                className="text-slate-100"
               />
               <circle 
                cx="96" cy="96" r="88" 
                stroke="currentColor" strokeWidth="12" fill="transparent" 
                strokeDasharray={552}
                strokeDashoffset={552 - (552 * atsScore) / 100}
                className="text-primary-600 transition-all duration-1000 ease-out"
               />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">{atsScore}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Out of 100</span>
             </div>
          </div>

          <div className="text-center">
             <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold mb-4">
                <CheckCircle2 size={14} />
                Excellent Optimization
             </div>
             <p className="text-slate-500 font-medium px-8 leading-relaxed">
               Your resume is well optimized but can improve further. Most candidate scores range between 40-60.
             </p>
          </div>
        </div>

        {/* Missing Keywords Card */}
        <div className="card">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Zap size={18} className="text-orange-500" />
              Missing Keywords
            </h3>
            <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-all">
              <Copy size={18} />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-3">
             {missingKeywords.map((keyword, i) => (
               <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-orange-50/50 border border-orange-100/50 text-orange-700 rounded-xl font-bold text-sm hover:bg-orange-50 transition-all cursor-default">
                  <Plus size={14} strokeWidth={3} />
                  {keyword}
               </div>
             ))}
          </div>
          
          <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
             <p className="text-xs text-slate-500 font-medium leading-relaxed">
               <span className="font-bold text-orange-600">Pro Tip:</span> These keywords are frequently found in job descriptions matching your profile. Adding them can boost your score by up to 15%.
             </p>
          </div>
        </div>

        {/* AI Suggestions Card */}
        <div className="card">
           <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-8">
              <Sparkles size={18} className="text-emerald-500" />
              AI Suggestions
           </h3>
           
           <div className="space-y-4">
              {suggestions.map((sug, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/50 group border border-transparent hover:border-emerald-100 hover:bg-emerald-50/20 transition-all">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-950 transition-colors">{sug}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Improvement Tips Card */}
        <div className="card">
           <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-8">
              <AlertCircle size={18} className="text-purple-500" />
              Improvement Tips
           </h3>
           
           <div className="space-y-6">
              {improvementTips.map((tip, i) => (
                <div key={i} className="relative pl-6">
                   <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 ring-4 ring-purple-100" />
                   <h4 className="text-sm font-bold text-slate-900 mb-1">{tip.title}</h4>
                   <p className="text-xs text-slate-500 font-medium leading-relaxed">{tip.desc}</p>
                </div>
              ))}
           </div>
           
           <button className="w-full mt-8 py-3 bg-slate-50 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
              <span>View All Tips</span>
              <ChevronDown size={16} />
           </button>
        </div>
      </div>

      {/* Section Score Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card">
          <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
             <Layout size={20} className="text-primary-600" />
             Section Score Breakdown
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
             {sectionBreakdowns.map((sec, i) => (
               <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                     <span className="text-sm font-bold text-slate-700">{sec.label}</span>
                     <span className="text-sm font-extrabold text-slate-900">{sec.score}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                     <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${sec.score}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={cn("h-full rounded-full shadow-lg h-full", sec.color)}
                     />
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Job Match Preview Card */}
        <div className="card bg-gradient-to-br from-indigo-600 to-primary-700 text-white overflow-hidden relative group">
           <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl">
              <Briefcase size={120} />
           </div>
           <h3 className="text-xs font-bold uppercase tracking-widest text-primary-200 mb-8">Job Match Analytics</h3>
           
           <div className="space-y-6 relative z-10">
              <div>
                 <p className="text-xs uppercase font-bold text-primary-300 tracking-tighter mb-1">Target Role</p>
                 <h4 className="text-2xl font-extrabold tracking-tight">Marketing Executive</h4>
              </div>
              
              <div className="flex items-center gap-6">
                 <div className="flex flex-col">
                    <span className="text-3xl font-extrabold">78%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-300">Match Score</span>
                 </div>
                 <div className="w-px h-10 bg-white/20" />
                 <div className="flex flex-col">
                    <span className="text-3xl font-extrabold">3</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-300">Improvements</span>
                 </div>
              </div>
              
              <div className="space-y-3 pt-4">
                 <button className="w-full py-3 bg-white text-primary-700 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                    <span>Apply to Matching Jobs</span>
                    <ArrowRight size={18} />
                 </button>
                 <p className="text-center text-[10px] font-bold text-primary-300 tracking-widest uppercase">AI recommendations updated 1h ago</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AIResumeScore;
