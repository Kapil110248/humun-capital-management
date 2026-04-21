import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  ShieldCheck, 
  Bell, 
  FileText, 
  Trash2, 
  CheckCircle2, 
  ChevronRight, 
  Plus, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Clock, 
  Smartphone, 
  Monitor,
  Camera,
  LogOut,
  Save,
  AlertTriangle,
  Settings2
} from 'lucide-react';
import { cn } from '../../utils/cn';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'professional', label: 'Professional Info', icon: Briefcase },
    { id: 'security', label: 'Security', icon: ShieldCheck },
    { id: 'preferences', label: 'Preferences', icon: Bell },
    { id: 'documents', label: 'Documents', icon: FileText },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Profile Settings</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Manage your personal account, security, and document preferences</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold">Cancel</button>
          <button className="btn-primary px-6 py-2.5 font-bold flex items-center gap-2 shadow-lg shadow-primary-200">
             <Save size={18} />
             <span>Save Changes</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sidebar Tabs */}
        <div className="lg:col-span-3">
          <div className="card border-none bg-white dark:bg-slate-900 p-3 shadow-soft space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300",
                  activeTab === tab.id 
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl translate-x-1" 
                    : "text-slate-500 hover:text-primary-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                )}
              >
                <tab.icon size={18} />
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 bg-rose-50 dark:bg-rose-950/20 rounded-2xl space-y-4 border border-rose-100 dark:border-rose-900/30">
             <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400">
                <AlertTriangle size={20} />
                <h4 className="font-bold">Danger Zone</h4>
             </div>
             <p className="text-xs font-medium text-rose-500 dark:text-rose-400/80 leading-relaxed">Permanently delete your account and all associated data.</p>
             <button className="w-full py-2 bg-rose-600 text-white rounded-lg text-xs font-bold hover:bg-rose-700 transition-all shadow-lg active:scale-95">Delete Account</button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <div className="card min-h-[500px] border-none bg-white dark:bg-slate-900 p-8 lg:p-10 shadow-soft">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Personal Info Tab */}
                {activeTab === 'personal' && (
                  <div className="space-y-10">
                     <div className="flex items-center gap-8">
                        <div className="relative group">
                           <div className="w-32 h-32 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 border-4 border-white dark:border-slate-900 shadow-2xl overflow-hidden group-hover:opacity-90 transition-all">
                              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                 <Camera className="text-white" size={32} />
                              </div>
                           </div>
                           <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900 hover:scale-110 transition-transform">
                              <Plus size={20} />
                           </button>
                        </div>
                        <div>
                           <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">John Doe</h3>
                           <p className="text-slate-500 dark:text-slate-400 font-medium">Product Designer based in San Francisco</p>
                           <div className="flex items-center gap-3 mt-4">
                              <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-100 dark:border-emerald-900/30">Verified Email</span>
                              <span className="px-3 py-1 bg-primary-50 dark:bg-primary-950/20 text-primary-600 dark:text-primary-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary-100 dark:border-primary-900/30">Pro Badge</span>
                           </div>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                           <div className="relative group">
                              <User className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                              <input type="text" defaultValue="John Doe" className="input-field pl-11 h-12" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                           <div className="relative group">
                              <Mail className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                              <input type="email" defaultValue="john@example.com" className="input-field pl-11 h-12" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                           <div className="relative group">
                              <Phone className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                              <input type="tel" defaultValue="+1 (555) 000-0000" className="input-field pl-11 h-12" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Location</label>
                           <div className="relative group">
                              <MapPin className="absolute left-4 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
                              <input type="text" defaultValue="San Francisco, CA" className="input-field pl-11 h-12" />
                           </div>
                        </div>
                     </div>
                  </div>
                )}

                {/* Security Tab (Simplified) */}
                {activeTab === 'security' && (
                  <div className="space-y-12">
                     <section className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-50 dark:border-slate-800 pb-4">Change Password</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Current Password</label>
                              <input type="password" placeholder="••••••••" className="input-field h-12" />
                           </div>
                           <div className="md:col-start-1 space-y-2">
                              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">New Password</label>
                              <input type="password" placeholder="••••••••" className="input-field h-12" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Confirm New Password</label>
                              <input type="password" placeholder="••••••••" className="input-field h-12" />
                           </div>
                        </div>
                        <button className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl active:scale-95">Update Password</button>
                     </section>

                     <section className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-50 dark:border-slate-800 pb-4">Login Activity</h3>
                        <div className="space-y-4">
                           {[
                              { device: 'iPhone 15 Pro', date: 'Active Now', ip: '192.168.1.1', type: Smartphone },
                              { device: 'MacBook Pro 16"', date: '2 hours ago', ip: '192.168.1.5', type: Monitor },
                           ].map((login, idx) => (
                              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                 <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl text-slate-400 shadow-sm border border-slate-100 dark:border-slate-800">
                                       <login.type size={20} />
                                    </div>
                                    <div>
                                       <p className="text-sm font-bold text-slate-900 dark:text-white">{login.device}</p>
                                       <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{login.date} • {login.ip}</p>
                                    </div>
                                 </div>
                                 <button className="text-xs font-bold text-rose-500 hover:text-rose-600 px-4 py-2 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-lg transition-all">Sign Out</button>
                              </div>
                           ))}
                        </div>
                     </section>
                  </div>
                )}

                {/* Generic for other tabs */}
                {!['personal', 'security'].includes(activeTab) && (
                  <div className="py-24 text-center">
                    <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-200 dark:text-slate-700 mx-auto mb-6">
                      <Settings2 size={40} className="animate-spin-slow" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tabs.find(t => t.id === activeTab)?.label} Settings</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xs mx-auto mt-2">Configure your {activeTab} information and preferences here.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
