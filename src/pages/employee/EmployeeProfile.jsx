import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  ShieldCheck, 
  Calendar, 
  Award, 
  FolderLock, 
  MoreVertical, 
  Edit2, 
  Save, 
  X, 
  Building2, 
  CheckCircle2, 
  Star,
  Camera,
  Plus
} from 'lucide-react';
import { cn } from '../../utils/cn';

const EmployeeProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'work', label: 'Work Details', icon: Briefcase },
    { id: 'emergency', label: 'Emergency Contacts', icon: ShieldCheck },
    { id: 'documents', label: 'Documents', icon: FolderLock },
  ];

  const profileData = {
    name: 'John Doe',
    role: 'Senior Product Designer',
    department: 'Design & UX',
    empId: 'HCM-2024-085',
    email: 'john.doe@company.com',
    phone: '+1 (555) 789-0123',
    manager: 'Sarah Johnson',
    joiningDate: 'Jan 15, 2024',
    location: 'San Francisco, CA',
    skills: ['Figma', 'UI/UX Design', 'React', 'Design Systems', 'User Research'],
    bloodGroup: 'O+',
    gender: 'Male',
    dob: 'May 12, 1992'
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-in relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Profile</h1>
          <p className="text-slate-500 font-medium">View and update your personal and professional profile</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary px-5 py-2.5 font-bold flex items-center gap-2">
            <Edit2 size={18} />
            <span className="hidden sm:inline">Edit Profile</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Profile Sidebar */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
           
           {/* Profile Photo & Summary */}
           <div className="card p-8 bg-white border-none shadow-soft text-center group">
              <div className="relative inline-block mb-6">
                 <div className="w-40 h-40 rounded-[2.5rem] bg-slate-100 p-2 border-4 border-white shadow-2xl overflow-hidden relative group-hover:scale-105 transition-all duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-[2rem]" 
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <button className="p-3 bg-white text-slate-900 rounded-2xl shadow-xl transform scale-90 group-hover:scale-100 transition-all">
                          <Camera size={20} />
                       </button>
                    </div>
                 </div>
                 <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 text-white rounded-2xl flex items-center justify-center border-4 border-white shadow-xl">
                    <CheckCircle2 size={20} />
                 </div>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 leading-none">{profileData.name}</h3>
              <p className="text-primary-600 font-bold mt-2">{profileData.role}</p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                 <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-extrabold uppercase tracking-widest rounded-full">{profileData.department}</span>
                 <span className="px-3 py-1 bg-primary-50 text-primary-600 text-[10px] font-extrabold uppercase tracking-widest rounded-full">{profileData.empId}</span>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-50 space-y-4">
                 <div className="flex items-center gap-3 text-slate-500">
                    <Mail size={16} className="text-slate-300" />
                    <span className="text-sm font-medium">{profileData.email}</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-500">
                    <MapPin size={16} className="text-slate-300" />
                    <span className="text-sm font-medium">{profileData.location}</span>
                 </div>
              </div>
           </div>

           {/* Skills Card */}
           <div className="card p-8 bg-white border-none shadow-soft">
              <div className="flex items-center justify-between mb-6">
                 <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Core Expertise</h4>
                 <Star size={18} className="text-amber-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                 {profileData.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded-xl border border-slate-100 transition-colors hover:border-primary-200 cursor-default">
                       {skill}
                    </span>
                 ))}
                 <button className="px-3 py-2 border border-dashed border-slate-200 text-slate-400 text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-1.5">
                    <Plus size={14} />
                    Add New
                 </button>
              </div>
           </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 flex flex-col gap-8">
           
           {/* Section Tabs */}
           <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-soft border border-slate-50">
              {tabs.map((tab) => (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={cn(
                      "flex-1 flex items-center justify-center gap-2.5 py-3 text-sm font-bold rounded-xl transition-all",
                      activeTab === tab.id 
                        ? "bg-slate-900 text-white shadow-xl shadow-slate-200 translate-y-[-2px]" 
                        : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                   )}
                 >
                    <tab.icon size={18} />
                    <span className="hidden sm:inline">{tab.label}</span>
                 </button>
              ))}
           </div>

           {/* Details Panel */}
           <div className="card min-h-[600px] bg-white border-none shadow-soft p-10 focus:outline-none overflow-hidden relative">
              <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                 >
                    {activeTab === 'personal' && (
                       <div className="space-y-12">
                          <div>
                             <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-50 pb-4">Personal Information</h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                {[
                                   { label: 'Full Name', value: profileData.name, icon: User },
                                   { label: 'Email Address', value: profileData.email, icon: Mail },
                                   { label: 'Phone Number', value: profileData.phone, icon: Phone },
                                   { label: 'Date of Birth', value: profileData.dob, icon: Calendar },
                                   { label: 'Gender', value: profileData.gender, icon: User },
                                   { label: 'Blood Group', value: profileData.bloodGroup, icon: Star },
                                ].map((field, i) => (
                                   <div key={i} className="space-y-1.5 focus-within:transform focus-within:translate-x-1 transition-all">
                                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{field.label}</label>
                                      <div className="flex items-center gap-3 py-2 border-b border-transparent focus-within:border-primary-100">
                                         <field.icon size={16} className="text-slate-300" />
                                         <span className="text-slate-700 font-bold">{field.value}</span>
                                      </div>
                                   </div>
                                ))}
                             </div>
                          </div>
                          
                          <div>
                             <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-50 pb-4">Residential Address</h3>
                             <div className="grid grid-cols-1 gap-8">
                                <div className="space-y-1.5">
                                   <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Main Address</label>
                                   <div className="flex items-start gap-3 py-2">
                                      <MapPin size={16} className="text-slate-300 mt-1" />
                                      <span className="text-slate-700 font-bold">123 Market St, Suite 400, San Francisco, CA, 94103</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    )}

                    {activeTab === 'work' && (
                       <div className="space-y-12">
                          <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-50 pb-4">Employment Details</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col justify-between">
                                <div className="space-y-6">
                                   <div>
                                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Position</p>
                                      <p className="text-lg font-bold text-primary-600">{profileData.role}</p>
                                   </div>
                                   <div>
                                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Department</p>
                                      <p className="text-lg font-bold text-slate-900">{profileData.department}</p>
                                   </div>
                                </div>
                                <div className="mt-10 flex items-center gap-3 pt-6 border-t border-slate-200">
                                   <Building2 className="text-slate-300" size={20} />
                                   <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">HCM Office • Block B</span>
                                </div>
                             </div>
                             
                             <div className="space-y-8">
                                <div className="flex items-center gap-6 p-6 border border-slate-100 rounded-3xl hover:bg-slate-50/50 transition-all">
                                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-primary-600">
                                      <Award size={24} />
                                   </div>
                                   <div>
                                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Reports To</p>
                                      <p className="text-sm font-bold text-slate-900">{profileData.manager}</p>
                                   </div>
                                </div>
                                <div className="flex items-center gap-6 p-6 border border-slate-100 rounded-3xl hover:bg-slate-50/50 transition-all">
                                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-indigo-600">
                                      <Calendar size={24} />
                                   </div>
                                   <div>
                                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Joining Date</p>
                                      <p className="text-sm font-bold text-slate-900">{profileData.joiningDate}</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    )}

                    {/* Placeholder for other tabs */}
                    {!['personal', 'work'].includes(activeTab) && (
                       <div className="h-full flex flex-col items-center justify-center text-center py-24">
                          <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 mb-8 overflow-hidden relative">
                             {React.createElement(tabs.find(t => t.id === activeTab)?.icon || User, { size: 48, className: "animate-pulse" })}
                             <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/50 to-transparent" />
                          </div>
                          <h4 className="text-2xl font-extrabold text-slate-900 mb-2">{tabs.find(t => t.id === activeTab)?.label}</h4>
                          <p className="text-slate-500 font-medium max-w-xs mx-auto">This section is currently under development. Please check back later.</p>
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

export default EmployeeProfile;
