import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShieldCheck, 
  Sun, 
  Wallet, 
  Download, 
  MessageSquare, 
  ChevronRight, 
  Plus, 
  ArrowUpRight, 
  Activity, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  FileText, 
  LifeBuoy,
  Stethoscope
} from 'lucide-react';
import { cn } from '../../utils/cn';

const EmployeeBenefits = () => {
  const stats = [
    { label: 'Active Benefits', value: '6', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Insurance Status', value: 'Active', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Leave Balance', value: '28', icon: Sun, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Claim Pending', value: '$240', icon: Wallet, color: 'text-primary-600', bg: 'bg-primary-50' },
  ];

  const categories = [
    {
      title: 'Health & Wellness',
      icon: Stethoscope,
      items: [
        { label: 'Provider', value: 'BlueCross Premium' },
        { label: 'Policy No.', value: 'BC-88220-45' },
        { label: 'Coverage', value: '$500,000' },
        { label: 'Dependents', value: '2 Covered' },
        { label: 'Expiry', value: 'Dec 31, 2026' }
      ]
    },
    {
      title: 'Savings & Retirement',
      icon: Wallet,
      items: [
        { label: 'Pension ID', value: 'PF-2024-884' },
        { label: 'Employer Cont.', value: '12%' },
        { label: 'Employee Cont.', value: '12%' },
        { label: 'Account Balance', value: '$24,850' },
        { label: 'Last Contribution', value: 'Oct 01, 2026' }
      ]
    }
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Employee Benefits</h1>
          <p className="text-slate-500 font-medium">Explore your health, wellness, and financial benefits</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Download size={18} />
            <span className="hidden sm:inline">Download Policy</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <MessageSquare size={18} />
             <span>Contact HR</span>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {categories.map((cat, idx) => (
            <div key={idx} className="card p-8 bg-white border-none shadow-soft flex flex-col">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-xl">
                        <cat.icon size={24} />
                     </div>
                     <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{cat.title}</h3>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors">
                     <ArrowUpRight size={20} />
                  </button>
               </div>
               
               <div className="space-y-6 flex-1">
                  {cat.items.map((item, i) => (
                     <div key={i} className="flex justify-between items-center py-1 border-b border-slate-50 last:border-none">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                        <span className="text-sm font-bold text-slate-700">{item.value}</span>
                     </div>
                  ))}
               </div>

               <div className="mt-10 p-4 bg-slate-50 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-600 shadow-sm">
                        <FileText size={18} />
                     </div>
                     <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Full Benefit Policy.pdf</span>
                  </div>
                  <Download size={18} className="text-slate-300 group-hover:text-primary-600" />
               </div>
            </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Recent Reimbursements */}
         <div className="lg:col-span-8 flex flex-col">
            <div className="card p-0 border-none bg-white shadow-soft flex-1 overflow-hidden">
               <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">Recent Reimbursements</h3>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary-700 transition-all shadow-lg active:scale-95">New Claim</button>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50/50 text-[10px] uppercase font-bold text-slate-400 tracking-[0.15em]">
                           <th className="px-8 py-5">Claim Type</th>
                           <th className="px-8 py-5">Amount</th>
                           <th className="px-8 py-5">Date</th>
                           <th className="px-8 py-5">Approval</th>
                           <th className="px-8 py-5 text-right">Payment</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50 text-sm">
                        {[
                           { type: 'Medical Checkup', amount: '$120.00', date: 'Oct 15, 2026', approval: 'Approved', payment: 'Settled', status: 'success' },
                           { type: 'Work Station', amount: '$240.00', date: 'Oct 10, 2026', approval: 'Pending', payment: 'Awaiting', status: 'pending' },
                           { type: 'Skill Course', amount: '$99.50', date: 'Sep 28, 2026', approval: 'Approved', payment: 'Settled', status: 'success' },
                        ].map((claim, i) => (
                           <tr key={i} className="group hover:bg-slate-50/20 transition-colors">
                              <td className="px-8 py-6 font-bold text-slate-700">{claim.type}</td>
                              <td className="px-8 py-6 font-bold text-slate-900">{claim.amount}</td>
                              <td className="px-8 py-6 text-slate-500 font-medium">{claim.date}</td>
                              <td className="px-8 py-6">
                                 <span className={cn(
                                    "px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border",
                                    claim.approval === 'Approved' ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"
                                 )}>
                                    {claim.approval}
                                 </span>
                              </td>
                              <td className="px-8 py-6 text-right">
                                 <p className={cn("text-xs font-bold", claim.status === 'success' ? "text-emerald-500" : "text-amber-500")}>{claim.payment}</p>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         {/* Other Perks Sidebar */}
         <div className="lg:col-span-4 space-y-8">
            <div className="card p-8 bg-indigo-600 text-white border-none shadow-soft relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
                  <LifeBuoy size={80} />
               </div>
               <h3 className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-6">Support & Help</h3>
               <p className="text-sm font-medium leading-relaxed mb-8">Need help understanding your coverage or submitting a claim? Our experts are here to assist.</p>
               <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-xl">
                  Connect with Benefits Team
               </button>
            </div>
            
            <div className="card p-8 bg-white border-none shadow-soft">
               <h3 className="text-lg font-bold text-slate-900 mb-6">Additional Perks</h3>
               <div className="space-y-4">
                  {[
                     { label: 'Gym Membership', val: 'Active', icon: Activity },
                     { label: 'Skill Subsidy', val: 'Available', icon: Briefcase },
                     { label: 'Mental Wellness', val: 'Active', icon: Heart }
                  ].map((perk, i) => (
                     <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-3">
                           <perk.icon size={18} className="text-slate-400" />
                           <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{perk.label}</span>
                        </div>
                        <CheckCircle2 size={16} className="text-emerald-500" />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default EmployeeBenefits;
