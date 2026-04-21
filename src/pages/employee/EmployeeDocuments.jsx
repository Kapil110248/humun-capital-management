import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Search, 
  Plus, 
  Download, 
  MoreVertical, 
  Eye, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Upload, 
  X, 
  File, 
  Image as ImageIcon, 
  FileJson, 
  Filter,
  Trash2,
  Share2,
  Calendar,
  CloudUpload
} from 'lucide-react';
import { cn } from '../../utils/cn';

const EmployeeDocuments = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const stats = [
    { label: 'Total Docs', value: '14', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Pending', value: '2', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Verified', value: '12', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Expiring Soon', value: '1', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  const documents = [
    { id: 1, name: 'National ID Card', category: 'ID Proof', date: 'Oct 15, 2026', expiry: 'Jan 2030', status: 'Verified', type: 'PDF' },
    { id: 2, name: 'Current Address Proof', category: 'Address Proof', date: 'Oct 20, 2026', expiry: 'No Expiry', status: 'Pending', type: 'JPG' },
    { id: 3, name: 'Latest Offer Letter', category: 'Contract', date: 'Jan 10, 2026', expiry: 'No Expiry', status: 'Verified', type: 'PDF' },
    { id: 4, name: 'Undergraduate Certificate', category: 'Education', date: 'Jan 05, 2026', expiry: 'No Expiry', status: 'Verified', type: 'PDF' },
    { id: 5, name: 'Health Policy Card', category: 'Benefits', date: 'Feb 12, 2026', expiry: 'Dec 2026', status: 'Expiring', type: 'PDF' },
  ];

  const categories = ['All Docs', 'ID Proof', 'Contracts', 'Education', 'Benefits', 'Medical'];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Documents Repository</h1>
          <p className="text-slate-500 font-medium tracking-tight">Access and manage all your verified professional and legal documents</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Download All</span>
          </button>
          <button 
            onClick={() => setIsUploadModalOpen(true)}
            className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-100"
          >
             <CloudUpload size={18} />
             <span>Upload Document</span>
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

      {/* Filtering & Listing */}
      <div className="space-y-6">
         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
               {categories.map((cat, i) => (
                  <button 
                    key={i} 
                    className={cn(
                       "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                       i === 0 ? "bg-slate-900 text-white shadow-xl shadow-slate-200" : "bg-white text-slate-400 border border-slate-100 hover:border-slate-300"
                    )}
                  >
                     {cat}
                  </button>
               ))}
            </div>
            <div className="relative w-full lg:w-80">
               <Search className="absolute left-3 top-3 text-slate-400" size={18} />
               <input type="text" placeholder="Search by name..." className="input-field pl-10 h-11" />
            </div>
         </div>

         <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-slate-50/50">
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Document Detail</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">Category</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Status</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-center">Dates</th>
                        <th className="px-8 py-5 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em] text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                     {documents.map((doc) => (
                        <tr key={doc.id} className="group hover:bg-slate-50/20 transition-colors">
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                 <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md",
                                    doc.type === 'PDF' ? "bg-rose-500" : "bg-primary-500"
                                 )}>
                                    <File size={20} />
                                 </div>
                                 <div>
                                    <p className="text-sm font-bold text-slate-900 leading-none">{doc.name}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{doc.type} Document</p>
                                 </div>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{doc.category}</span>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <span className={cn(
                                 "px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest border",
                                 doc.status === 'Verified' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                 doc.status === 'Pending' ? "bg-amber-50 text-amber-600 border-amber-100" :
                                 "bg-rose-50 text-rose-500 border-rose-100"
                              )}>
                                 {doc.status}
                              </span>
                           </td>
                           <td className="px-8 py-6 text-center">
                              <div className="space-y-1">
                                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Added: {doc.date}</p>
                                 <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">Exp: {doc.expiry}</p>
                              </div>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <div className="flex justify-end gap-1">
                                 <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all" title="View"><Eye size={18} /></button>
                                 <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all" title="Download"><Download size={18} /></button>
                                 <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all" title="Delete"><Trash2 size={18} /></button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>

      {/* Upload Modal Drawer */}
      <AnimatePresence>
        {isUploadModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsUploadModalOpen(false)}
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
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
                        <Upload size={24} />
                     </div>
                     <div>
                        <h2 className="text-xl font-extrabold text-slate-900 leading-none">Upload Document</h2>
                        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em] mt-2 leading-none">Select files up to 25MB</p>
                     </div>
                  </div>
                  <button onClick={() => setIsUploadModalOpen(false)} className="p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-400">
                     <X size={24} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 space-y-10">
                  <div className="space-y-8">
                     {/* Custom Drag & Drop Area */}
                     <div className="div-drop p-10 border-2 border-dashed border-slate-100 rounded-[2.5rem] bg-slate-50/50 text-center space-y-4 group hover:border-primary-200 hover:bg-primary-50/10 transition-all cursor-pointer">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm text-slate-300 group-hover:text-primary-500 transform group-hover:rotate-12 transition-all duration-500">
                           <CloudUpload size={32} />
                        </div>
                        <div>
                           <p className="text-sm font-bold text-slate-900">Drag files here to upload</p>
                           <p className="text-xs font-medium text-slate-400 mt-1">Supports PDF, JPG, PNG, DOCX</p>
                        </div>
                        <button className="px-6 py-2 bg-white text-slate-900 text-[10px] font-extrabold uppercase tracking-widest rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">Browse Files</button>
                     </div>

                     <div className="space-y-4">
                        <div className="space-y-1.5 focus-within:transform focus-within:translate-x-1 transition-all">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Document Name</label>
                           <input type="text" placeholder="e.g. Health Declaration Form" className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700" />
                        </div>
                        <div className="space-y-1.5 focus-within:transform focus-within:translate-x-1 transition-all">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Select Category</label>
                           <select className="input-field h-14 bg-slate-50 border-transparent font-bold text-slate-700">
                              <option>ID Proof</option>
                              <option>Address Proof</option>
                              <option>Certificates</option>
                              <option>Medical Records</option>
                           </select>
                        </div>
                        <div className="space-y-1.5 focus-within:transform focus-within:translate-x-1 transition-all">
                           <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Expiry Date (Optional)</label>
                           <div className="relative">
                              <Calendar className="absolute left-4 top-4 text-slate-300" size={18} />
                              <input type="date" className="input-field h-14 pl-12 bg-slate-50 border-transparent font-bold text-slate-700" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="p-8 border-t border-slate-100 bg-slate-50 flex items-center gap-4 shrink-0">
                  <button onClick={() => setIsUploadModalOpen(false)} className="flex-1 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-sm">
                     Cancel
                  </button>
                  <button className="flex-1 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 active:scale-95">
                     Initiate Upload
                  </button>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployeeDocuments;
