import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  TrendingUp, 
  ArrowDownRight, 
  Download, 
  FileText, 
  ChevronRight, 
  Calendar, 
  CheckCircle2, 
  DollarSign, 
  PieChart, 
  BarChart3, 
  ShieldCheck, 
  Info,
  CreditCard,
  Building2,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { cn } from '../../utils/cn';

const EmployeePayroll = () => {
  const stats = [
    { label: 'Next Pay Date', value: 'Oct 31', icon: Calendar, color: 'text-primary-600', bg: 'bg-primary-50' },
    { label: 'Net Salary', value: '$8,450', icon: Wallet, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Deductions', value: '$1,280', icon: ArrowDownRight, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Taxes (YTD)', value: '$12,450', icon: ShieldCheck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const breakdown = [
    { label: 'Basic Salary', value: '$5,000', type: 'earning' },
    { label: 'HRA (House Rent Allowance)', value: '$1,500', type: 'earning' },
    { label: 'Special Allowance', value: '$800', type: 'earning' },
    { label: 'Conveyance Allowance', value: '$400', type: 'earning' },
    { label: 'Project Bonus', value: '$1,200', type: 'earning' },
    { label: 'Provident Fund (PF)', value: '-$350', type: 'deduction' },
    { label: 'Professional Tax', value: '-$50', type: 'deduction' },
    { label: 'Income Tax (TDS)', value: '-$880', type: 'deduction' },
  ];

  const history = [
    { month: 'September 2026', gross: '$9,850', deductions: '$1,280', net: '$8,570', status: 'Paid', date: 'Oct 01, 2026' },
    { month: 'August 2026', gross: '$9,850', deductions: '$1,280', net: '$8,570', status: 'Paid', date: 'Sep 01, 2026' },
    { month: 'July 2026', gross: '$9,400', deductions: '$1,150', net: '$8,250', status: 'Paid', date: 'Aug 01, 2026' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Payroll & Earnings</h1>
          <p className="text-slate-500 font-medium tracking-tight">Manage your compensation, view breakdowns and download tax documents</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <FileText size={18} />
            <span className="hidden sm:inline">Tax Summary</span>
          </button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Download size={18} />
             <span>Latest Payslip</span>
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         {/* Salary Breakdown Area */}
         <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            <div className="card p-0 border-none bg-white shadow-soft overflow-hidden">
               <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                  <div>
                     <h3 className="text-xl font-bold text-slate-900">Current Salary Period</h3>
                     <p className="text-sm font-medium text-slate-400">Oct 01 — Oct 31, 2026</p>
                  </div>
                  <div className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border border-emerald-100">
                     Processing
                  </div>
               </div>
               
               <div className="p-8 lg:p-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     {/* Earnings Side */}
                     <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                           <TrendingUp size={14} className="text-emerald-500" />
                           Earnings & Allowances
                        </h4>
                        <div className="space-y-4">
                           {breakdown.filter(i => i.type === 'earning').map((item, i) => (
                              <div key={i} className="flex justify-between items-center group">
                                 <span className="text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">{item.label}</span>
                                 <span className="text-sm font-bold text-slate-900">{item.value}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Deductions Side */}
                     <div className="space-y-6">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                           <ArrowDownRight size={14} className="text-rose-500" />
                           Deductions & Taxes
                        </h4>
                        <div className="space-y-4">
                           {breakdown.filter(i => i.type === 'deduction').map((item, i) => (
                              <div key={i} className="flex justify-between items-center group">
                                 <span className="text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">{item.label}</span>
                                 <span className="text-sm font-bold text-rose-500">{item.value}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden group">
                     {/* Background Pattern */}
                     <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                           <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                           </pattern>
                           <rect width="100" height="100" fill="url(#grid)" />
                        </svg>
                     </div>
                     
                     <div className="relative z-10">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary-400 mb-1">Net Pay Amount</p>
                        <h4 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tighter">$8,450.00</h4>
                     </div>
                     
                     <div className="relative z-10 flex flex-col items-end text-right">
                        <div className="flex items-center gap-3 mb-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
                           <CreditCard className="text-primary-400" size={18} />
                           <span className="text-xs font-bold text-white uppercase tracking-widest">Bank: JP Morgan • **** 8245</span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Estimated Crediting: Oct 31, 2026</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Sidebar: Payslip History */}
         <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <div className="card p-8 bg-white border-none shadow-soft h-full flex flex-col">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-slate-900">Payslip History</h3>
                  <button className="text-xs font-bold text-primary-600 hover:underline">View All</button>
               </div>
               
               <div className="flex-1 space-y-6">
                  {history.map((record, i) => (
                     <div key={i} className="group p-6 rounded-3xl border border-slate-50 hover:bg-slate-50 transition-all flex items-center justify-between">
                        <div className="flex items-center gap-5">
                           <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm text-slate-400 group-hover:text-primary-600 transition-colors">
                              <FileText size={24} />
                           </div>
                           <div>
                              <p className="text-sm font-bold text-slate-900">{record.month}</p>
                              <div className="flex items-center gap-3 mt-1">
                                 <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{record.status}</span>
                                 <span className="text-[10px] font-bold text-slate-400 tracking-widest">• {record.date}</span>
                              </div>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-sm font-extrabold text-slate-900 mb-2">{record.net}</p>
                           <button className="p-2 bg-white border border-slate-100 rounded-xl hover:text-primary-600 hover:border-primary-100 shadow-sm transition-all">
                              <Download size={16} />
                           </button>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mt-10 p-6 bg-primary-50 rounded-3xl border border-primary-100/50 flex flex-col items-center text-center">
                  <PieChart className="text-primary-600 mb-4" size={32} />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Financial Insights</h4>
                  <p className="text-xs font-medium text-slate-500 max-w-[200px]">You have received <span className="text-primary-600 font-bold">$125,480</span> in total compensation this fiscal year.</p>
                  <button className="mt-4 flex items-center gap-2 text-[10px] font-extrabold text-primary-600 uppercase tracking-[0.2em] hover:gap-3 transition-all">
                     View Breakdown <ArrowRight size={12} />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default EmployeePayroll;
