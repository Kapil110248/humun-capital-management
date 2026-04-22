import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, ShieldCheck, Bell, Settings2, Lock, Smartphone, 
  Monitor, Key, Zap, Globe, Clock, ChevronRight, Save, RotateCcw, X, LogOut,
  Eye, EyeOff
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useCandidate } from '../../context/CandidateContext';
import { useNavigate } from 'react-router-dom';
import CenterModal from '../../components/layout/CenterModal';

const CandidateSettings = () => {
  const { profile, updateProfile, showToast } = useCandidate();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [formData, setFormData] = useState(profile.settings || {
    account: { name: profile.fullName, email: profile.email, phone: profile.phone, location: profile.location },
    security: { twoFactor: false, activeSessions: [] },
    notifications: { emailAlerts: true, interviewAlerts: true, offerAlerts: true, jobRecommendations: true, pushNotifications: false },
    preferences: { theme: 'light', language: 'English', timezone: 'UTC -5', defaultDashboard: 'Standard' }
  });
  const [isSignoutModalOpen, setIsSignoutModalOpen] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'security', label: 'Security', icon: ShieldCheck },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'preferences', label: 'Preferences', icon: Settings2 },
  ];

  const handleSave = () => {
    updateProfile({ settings: formData });
    showToast('Settings synchronized successfully');
  };

  const handleReset = () => {
    setFormData(profile.settings);
    showToast('Settings reverted to last sync');
  };

  const handleSignOut = () => {
    showToast('Terminating session...');
    setTimeout(() => navigate('/login'), 1000);
  };

  return (
    <div className="space-y-10 pb-12 animate-fade-in max-w-7xl mx-auto text-left">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-white p-10 rounded-[3.5rem] border border-slate-50 shadow-soft">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase leading-none mb-2">SETTINGS</h1>
          <p className="text-slate-400 font-bold tracking-tight uppercase text-xs">Manage your account and preferences</p>
        </div>
        <div className="flex items-center gap-4">
           <button onClick={handleReset} className="w-14 h-14 bg-slate-50 text-slate-400 border border-slate-100 hover:text-slate-900 rounded-2xl flex items-center justify-center transition-all shadow-sm group">
             <RotateCcw size={24} className="group-hover:rotate-[-45deg] transition-transform" />
           </button>
           <button 
             onClick={handleSave}
             className="h-14 px-10 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-slate-200 flex items-center gap-3 active:scale-95 transition-all"
           >
             <Save size={18} /> Sync System
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Navigation */}
        <div className="lg:col-span-3 space-y-8">
          <div className="card border-none bg-white p-4 shadow-soft rounded-[2.5rem] space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-5 p-5 rounded-[1.75rem] transition-all",
                  activeTab === tab.id 
                    ? "bg-slate-900 text-white shadow-premium scale-105" 
                    : "text-slate-300 hover:bg-slate-50 hover:text-slate-500"
                )}
              >
                <div className={cn("p-2 rounded-xl transition-all duration-700", activeTab === tab.id ? "bg-white/20 rotate-12" : "bg-slate-50")}>
                    <tab.icon size={20} className={cn(activeTab === tab.id ? "text-white" : "text-slate-200")} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{tab.label}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => setIsSignoutModalOpen(true)}
            className="w-full flex items-center justify-center gap-4 p-6 bg-white border border-slate-100 rounded-[2.5rem] text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] hover:bg-slate-50 hover:text-rose-500 transition-all shadow-soft group"
          >
             <LogOut size={20} className="group-hover:translate-x-1 transition-transform" /> Sign Out
          </button>
        </div>

        {/* Configuration Viewport */}
        <div className="lg:col-span-9">
          <div className="card min-h-[600px] border-none bg-white p-12 rounded-[4rem] shadow-soft relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {activeTab === 'account' && (
                  <div className="space-y-12">
                     <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                        <User className="text-primary-600" size={24} />
                        <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Account Details</h3>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                          { label: 'Full Name', key: 'name', type: 'text' },
                          { label: 'Email Address', key: 'email', type: 'email' },
                          { label: 'Phone Number', key: 'phone', type: 'text' },
                          { label: 'Location', key: 'location', type: 'text' },
                        ].map(field => (
                          <div key={field.key} className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1 italic">{field.label}</label>
                            <input 
                              type={field.type}
                              value={formData.account[field.key]}
                              onChange={(e) => setFormData({
                                ...formData, 
                                account: { ...formData.account, [field.key]: e.target.value } 
                              })}
                              className="input-field h-14 bg-slate-50 border-transparent font-black shadow-inner"
                            />
                          </div>
                        ))}
                     </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-12">
                     <section className="space-y-8">
                        <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                           <Key className="text-primary-600" size={24} />
                           <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Update Password</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-3 relative">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1 italic">New Password</label>
                              <div className="relative">
                                <input type={showPasswords ? "text" : "password"} placeholder="••••••••••••" className="input-field h-14 bg-slate-50 border-transparent font-black shadow-inner pr-14" />
                                <button 
                                  type="button"
                                  onClick={() => setShowPasswords(!showPasswords)}
                                  className="absolute right-4 top-4 text-slate-300 hover:text-slate-600 transition-colors"
                                >
                                  {showPasswords ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                              </div>
                           </div>
                           <div className="space-y-3 relative">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1 italic">Confirm Password</label>
                              <div className="relative">
                                <input type={showPasswords ? "text" : "password"} placeholder="••••••••••••" className="input-field h-14 bg-slate-50 border-transparent font-black shadow-inner pr-14" />
                                <button 
                                  type="button"
                                  onClick={() => setShowPasswords(!showPasswords)}
                                  className="absolute right-4 top-4 text-slate-300 hover:text-slate-600 transition-colors"
                                >
                                  {showPasswords ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center justify-between p-8 bg-slate-900 rounded-3xl shadow-premium">
                           <div>
                              <p className="text-sm font-black text-white italic tracking-tight">Multi-Factor Authentication</p>
                              <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mt-1">Secondary signal verification</p>
                           </div>
                           <button 
                              onClick={() => setFormData({...formData, security: {...formData.security, twoFactor: !formData.security.twoFactor}})}
                              className={cn("w-14 h-8 rounded-full p-1 transition-all", formData.security.twoFactor ? "bg-primary-600" : "bg-white/10")}
                           >
                              <div className={cn("w-6 h-6 rounded-full bg-white shadow-xl transition-all", formData.security.twoFactor ? "translate-x-6" : "translate-x-0")} />
                           </button>
                        </div>
                     </section>

                     <section className="space-y-8">
                        <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                           <Smartphone className="text-primary-600" size={24} />
                           <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Active Sessions</h3>
                        </div>
                        <div className="space-y-4">
                           {formData.security.activeSessions.map((session) => (
                              <div key={session.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-50 group hover:bg-white hover:shadow-xl transition-all">
                                 <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-200 group-hover:text-primary-600 shadow-inner">
                                       <Monitor size={20} />
                                    </div>
                                    <div className="text-left">
                                       <p className="text-sm font-black text-slate-900 italic uppercase">{session.device}</p>
                                       <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-1">{session.location} • {session.ip}</p>
                                    </div>
                                 </div>
                                 <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest italic">{session.status}</span>
                              </div>
                           ))}
                        </div>
                     </section>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div className="space-y-12">
                     <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                        <Bell className="text-primary-600" size={24} />
                        <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Notification Settings</h3>
                     </div>
                     <div className="space-y-6">
                        {[
                          { label: 'Email Notifications', key: 'emailAlerts', sub: 'Receive updates via email' },
                          { label: 'Interview Reminders', key: 'interviewAlerts', sub: 'Get notified about upcoming interviews' },
                          { label: 'Career Offer Dispatches', key: 'offerAlerts', sub: 'Direct reward signals' },
                          { label: 'Strategic Job Intelligence', key: 'jobRecommendations', sub: 'AI-filtered opportunities' },
                          { label: 'Mobile Push Frequency', key: 'pushNotifications', sub: 'Real-time device alerts' },
                        ].map(notif => (
                          <div key={notif.key} className="flex items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] border border-slate-50 hover:bg-white hover:shadow-xl transition-all group">
                             <div className="text-left">
                                <p className="text-sm font-black text-slate-900 italic tracking-tight uppercase group-hover:text-primary-600 transition-colors">{notif.label}</p>
                                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-1 italic">{notif.sub}</p>
                             </div>
                             <button 
                                onClick={() => setFormData({
                                  ...formData, 
                                  notifications: { ...formData.notifications, [notif.key]: !formData.notifications[notif.key] } 
                                })}
                                className={cn("w-14 h-8 rounded-full p-1 transition-all", formData.notifications[notif.key] ? "bg-slate-900" : "bg-slate-200")}
                             >
                                <div className={cn("w-6 h-6 rounded-full bg-white shadow-xl transition-all", formData.notifications[notif.key] ? "translate-x-6" : "translate-x-0")} />
                             </button>
                          </div>
                        ))}
                     </div>
                  </div>
                )}

                {activeTab === 'preferences' && (
                  <div className="space-y-12">
                     <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                        <Settings2 className="text-primary-600" size={24} />
                        <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Preferences</h3>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                          { label: 'Theme Preference', key: 'theme', options: ['Light Mode', 'Dark Mode', 'System Default'] },
                          { label: 'Language Selection', key: 'language', options: ['English', 'Spanish', 'French'] },
                          { label: 'Timezone', key: 'timezone', options: ['UTC -5 (Eastern)', 'UTC -8 (Pacific)', 'UTC +0 (GMT)'] },
                          { label: 'Default Dashboard', key: 'defaultDashboard', options: ['Overview', 'List View', 'Compact'] },
                        ].map(pref => (
                          <div key={pref.key} className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1 italic">{pref.label}</label>
                            <select 
                              value={formData.preferences[pref.key]}
                              onChange={(e) => setFormData({
                                ...formData, 
                                preferences: { ...formData.preferences, [pref.key]: e.target.value } 
                              })}
                              className="input-field h-16 px-6 bg-slate-50 border-transparent font-black shadow-inner appearance-none cursor-pointer italic"
                            >
                              {pref.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                          </div>
                        ))}
                     </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Sign Out Confirmation */}
      <CenterModal isOpen={isSignoutModalOpen} onClose={() => setIsSignoutModalOpen(false)} title="Sign Out">
         <div className="p-12 text-center space-y-10">
            <div className="w-24 h-24 bg-slate-50 rounded-[3rem] flex items-center justify-center mx-auto text-slate-900 shadow-2xl border border-slate-100 italic font-black text-4xl">
               HCM
            </div>
            <div>
               <h3 className="text-3xl font-black text-slate-900 italic tracking-tight mb-4 uppercase">Terminate Session?</h3>
               <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.1em] leading-relaxed max-w-sm mx-auto">Your current operational state will be saved before connection termination.</p>
            </div>
            <div className="flex gap-4 pt-4">
               <button onClick={() => setIsSignoutModalOpen(false)} className="flex-1 py-5 bg-slate-50 text-slate-400 rounded-3xl font-black uppercase tracking-widest text-[10px]">Stay Connected</button>
               <button onClick={handleSignOut} className="flex-1 py-5 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-slate-200 active:scale-95">Sign Out</button>
            </div>
         </div>
      </CenterModal>
    </div>
  );
};

export default CandidateSettings;
