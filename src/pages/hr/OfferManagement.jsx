import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  DollarSign, 
  FileText, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle2, 
  X, 
  Eye, 
  Download, 
  ChevronRight, 
  AlertCircle, 
  Mail, 
  TrendingUp,
  RotateCcw,
  BadgeCheck,
  FileSearch,
  MoreVertical
} from 'lucide-react';
import { cn } from '../../utils/cn';

const OfferManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: 'Draft Offers', value: '4', icon: FileText, bg: 'bg-blue-50', color: 'text-blue-600' },
    { label: 'Sent Offers', value: '12', icon: Send, bg: 'bg-amber-50', color: 'text-amber-600' },
    { label: 'Accepted', value: '7', icon: CheckCircle2, bg: 'bg-emerald-50', color: 'text-emerald-600' },
    { label: 'Declined', value: '2', icon: X, bg: 'bg-rose-50', color: 'text-rose-500' },
  ];

  const offers = [
    {
      id: 1,
      candidate: 'John Wick',
      role: 'Senior Product Designer',
      salary: '$140k',
      joiningDate: 'Nov 15, 2026',
      sentDate: 'Oct 20, 2026',
      status: 'Accepted',
      letter: 'offer_john_wick.pdf'
    },
    {
      id: 2,
      candidate: 'Lara Croft',
      role: 'Project Manager',
      salary: '$110k',
      joiningDate: 'Dec 1, 2026',
      sentDate: 'Oct 23, 2026',
      status: 'Sent',
      letter: 'offer_lara_croft.pdf'
    },
    {
      id: 3,
      candidate: 'Alice Cooper',
      role: 'UX Researcher',
      salary: '$95k',
      joiningDate: 'Nov 20, 2026',
      sentDate: 'Oct 15, 2026',
      status: 'Viewed',
      letter: 'offer_alice_c.pdf'
    },
    {
      id: 4,
      candidate: 'Bob Marley',
      role: 'Frontend Lead',
      salary: '$160k',
      joiningDate: 'Jan 15, 2027',
      sentDate: 'Sep 30, 2026',
      status: 'Declined',
      letter: 'offer_bob_m.pdf'
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Accepted': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Sent': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'Viewed': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Declined': return 'bg-rose-50 text-rose-500 border-rose-100';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Offer Management</h1>
          <p className="text-slate-500 font-medium">Send and track offers for your top-selected candidates</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <RotateCcw size={18} />
            <span className="hidden sm:inline">Refresh Tracking</span>
          </button>
          <button 
           onClick={() => setIsModalOpen(true)}
           className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200"
          >
             <Plus size={18} />
             <span>Create New Offer</span>
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

      {/* Main Table */}
      <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between gap-4">
           <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-3 text-slate-400" size={18} />
              <input type="text" placeholder="Search by name or job role..." className="input-field pl-10 h-11" />
           </div>
           <div className="flex items-center gap-2">
              <select className="input-field h-11 appearance-none pr-10 w-40 font-bold text-slate-600">
                <option value="">Status</option>
                <option value="sent">Sent</option>
                <option value="accepted">Accepted</option>
              </select>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Candidate</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Salary / Benefits</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Joining Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {offers.map((offer) => (
                <tr key={offer.id} className="group hover:bg-slate-50/10 transition-colors">
                  <td className="px-6 py-6">
                     <p className="text-sm font-bold text-slate-900 leading-none">{offer.candidate}</p>
                     <p className="text-[10px] font-bold text-slate-400 mt-1.5 uppercase tracking-widest italic">Sent: {offer.sentDate}</p>
                  </td>
                  <td className="px-6 py-6 text-sm font-bold text-slate-600">
                     {offer.role}
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2 text-indigo-600">
                       <DollarSign size={14} className="opacity-50" />
                       <span className="text-sm font-extrabold">{offer.salary}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2 text-slate-500">
                       <Calendar size={14} className="opacity-50" />
                       <span className="text-xs font-bold">{offer.joiningDate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                      getStatusStyle(offer.status)
                    )}>
                      {offer.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all" title="View"><FileSearch size={18} /></button>
                      <button className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all" title="Resend"><Send size={18} /></button>
                      <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"><MoreVertical size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

       {/* Create Offer Modal */}
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
                   <h2 className="text-xl font-extrabold text-slate-900">Create Candidate Offer</h2>
                   <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                      <X size={24} />
                   </button>
                </div>
                <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 lg:col-span-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Candidate Name</label>
                         <select className="input-field h-12 appearance-none">
                            <option>Alice Cooper (Senior Product Designer)</option>
                            <option>Bob Marley (Lead Engineer)</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Proposed Salary (Annual)</label>
                         <div className="relative">
                            <DollarSign className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            <input type="text" placeholder="e.g. $140,000" className="input-field h-12 pl-10" />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Joining Date</label>
                         <input type="date" className="input-field h-12" />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Offer Letter Template</label>
                      <div className="border-2 border-dashed border-slate-100 rounded-2xl p-6 text-center hover:bg-slate-50 transition-all cursor-pointer">
                         <FileText size={32} className="text-slate-300 mx-auto mb-2" />
                         <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Select PDF Offer Letter</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4 pt-4">
                      {['Sign-on Bonus', 'Medical Insurance', 'Stock Options', 'Relocation'].map((ben, i) => (
                         <label key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer hover:border-primary-200">
                            <input type="checkbox" className="w-5 h-5 rounded accent-primary-600" />
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{ben}</span>
                         </label>
                      ))}
                   </div>
                </div>
                <div className="p-6 border-t border-slate-100 bg-slate-50/30 flex items-center justify-end gap-3">
                   <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 font-bold hover:bg-white rounded-xl transition-all">Save as Draft</button>
                   <button className="px-8 py-2.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg active:scale-95 flex items-center gap-2">
                      <Send size={18} />
                      <span>Send Offer</span>
                   </button>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OfferManagement;
