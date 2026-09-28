import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Wrench, 
  Settings, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Check, 
  X, 
  Phone, 
  MessageCircle, 
  Download, 
  TrendingUp, 
  Clock, 
  FileText, 
  Save, 
  Lock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Project, Service, EnquiryLead, LeadStatus, BusinessSettings } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onUpdateProjects: (projects: Project[]) => void;
  services: Service[];
  onUpdateServices: (services: Service[]) => void;
  leads: EnquiryLead[];
  onUpdateLeads: (leads: EnquiryLead[]) => void;
  settings: BusinessSettings;
  onUpdateSettings: (settings: BusinessSettings) => void;
  onDownloadZip: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  projects,
  onUpdateProjects,
  services,
  onUpdateServices,
  leads,
  onUpdateLeads,
  settings,
  onUpdateSettings,
  onDownloadZip
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'analytics' | 'leads' | 'projects' | 'services' | 'settings'>('analytics');
  
  // Auth Form State
  const [email, setEmail] = useState('admin@stylewelldyd.com');
  const [password, setPassword] = useState('admin123');
  const [authError, setAuthError] = useState('');

  // Lead Detail Modal
  const [selectedLead, setSelectedLead] = useState<EnquiryLead | null>(null);
  const [newNote, setNewNote] = useState('');

  // Project Editor State
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);

  // Status Filter for leads
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('All');

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle Admin Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@stylewelldyd.com' && password === 'admin123') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid credentials. Use demo: admin@stylewelldyd.com / admin123');
    }
  };

  // Status updates
  const handleUpdateLeadStatus = (leadId: string, newStatus: LeadStatus) => {
    const updated = leads.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l));
    onUpdateLeads(updated);
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  // Add internal lead note
  const handleAddNote = () => {
    if (!selectedLead || !newNote.trim()) return;
    const noteText = `${new Date().toLocaleDateString('en-IN')}: ${newNote.trim()}`;
    const updatedNotes = [...(selectedLead.notes || []), noteText];
    const updated = leads.map((l) => (l.id === selectedLead.id ? { ...l, notes: updatedNotes } : l));
    onUpdateLeads(updated);
    setSelectedLead({ ...selectedLead, notes: updatedNotes });
    setNewNote('');
  };

  // Toggle Project Featured
  const handleToggleProjectFeatured = (projectId: string) => {
    const updated = projects.map((p) => (p.id === projectId ? { ...p, featured: !p.featured } : p));
    onUpdateProjects(updated);
  };

  // Delete Project
  const handleDeleteProject = (projectId: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updated = projects.filter((p) => p.id !== projectId);
      onUpdateProjects(updated);
    }
  };

  // Save Project
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject || !editingProject.title) return;

    if (editingProject.id) {
      // update
      const updated = projects.map((p) => (p.id === editingProject.id ? ({ ...p, ...editingProject } as Project) : p));
      onUpdateProjects(updated);
    } else {
      // create new
      const newProj: Project = {
        id: 'proj-' + Date.now(),
        title: editingProject.title || 'Untitled Project',
        slug: (editingProject.title || 'project').toLowerCase().replace(/\s+/g, '-'),
        category: editingProject.category || 'Residential',
        style: editingProject.style || 'Modern Luxury',
        location: editingProject.location || 'Lucknow',
        description: editingProject.description || '',
        budgetRange: editingProject.budgetRange || '₹10–20 Lakh',
        completionDate: editingProject.completionDate || '2026',
        coverImage: editingProject.coverImage || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        galleryImages: [
          editingProject.coverImage || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
        ],
        materials: ['Veneer', 'Italian Marble', 'Acoustic Panels'],
        features: ['Bespoke furniture', 'Cove lighting'],
        status: 'published',
        featured: true
      };
      onUpdateProjects([newProj, ...projects]);
    }
    setEditingProject(null);
  };

  // Toggle Service Active
  const handleToggleService = (serviceId: string) => {
    const updated = services.map((s) => (s.id === serviceId ? { ...s, active: !s.active } : s));
    onUpdateServices(updated);
  };

  // Save Settings
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSettings(settings);
    alert('Business information updated successfully!');
  };

  // Analytics Calculation
  const totalLeads = leads.length;
  const newLeadsCount = leads.filter((l) => l.status === 'New').length;
  const convertedCount = leads.filter((l) => l.status === 'Converted').length;
  const totalProjectsCount = projects.length;

  // Filtered Leads
  const filteredLeads =
    leadStatusFilter === 'All' ? leads : leads.filter((l) => l.status === leadStatusFilter);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-7xl h-[92vh] bg-[#0e1014] border border-white/15 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#121418] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#c5a059] flex items-center justify-center bg-black">
              <span className="font-serif font-bold text-xs text-[#c5a059]">SWD</span>
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-wider text-white font-serif">
                STYLE WELL DYD — ADMIN CONSOLE
              </h2>
              <p className="text-[10px] font-mono text-[#c5a059]">
                Lucknow Studio · Management & CRM Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownloadZip}
              className="px-3.5 py-1.5 bg-[#181a20] hover:bg-[#22252c] border border-white/15 text-xs text-[#c5a059] flex items-center gap-1.5 font-medium cursor-pointer"
              title="Download standalone client/ and server/ zip package"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export Source ZIP</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Admin Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!isAuthenticated ? (
          /* Login Screen */
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-[#121418] border border-white/10 p-8 shadow-2xl space-y-6">
              <div className="text-center">
                <div className="w-12 h-12 border border-[#c5a059] text-[#c5a059] mx-auto flex items-center justify-center mb-3">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-white">Studio Admin Authentication</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Enter your credentials to access Lucknow inquiries, projects & settings.
                </p>
              </div>

              {authError && (
                <div className="p-3 bg-red-950/60 border border-red-500/30 text-red-200 text-xs">
                  {authError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest cursor-pointer transition-all"
                >
                  Sign In to Dashboard
                </button>

                <p className="text-[11px] text-center text-neutral-400">
                  Demo credentials: <span className="text-white font-mono">admin@stylewelldyd.com / admin123</span>
                </p>
              </form>
            </div>
          </div>
        ) : (
          /* Dashboard Layout */
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-56 bg-[#101216] border-r border-white/10 p-4 flex flex-col justify-between shrink-0 hidden sm:flex">
              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs uppercase tracking-wider font-medium text-left transition-colors ${
                    activeTab === 'analytics'
                      ? 'bg-[#c5a059] text-black font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Overview</span>
                </button>

                <button
                  onClick={() => setActiveTab('leads')}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-xs uppercase tracking-wider font-medium text-left transition-colors ${
                    activeTab === 'leads'
                      ? 'bg-[#c5a059] text-black font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4" />
                    <span>Leads CRM</span>
                  </div>
                  {newLeadsCount > 0 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 bg-red-500 text-white rounded">
                      {newLeadsCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs uppercase tracking-wider font-medium text-left transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-[#c5a059] text-black font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Projects</span>
                </button>

                <button
                  onClick={() => setActiveTab('services')}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs uppercase tracking-wider font-medium text-left transition-colors ${
                    activeTab === 'services'
                      ? 'bg-[#c5a059] text-black font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Wrench className="w-4 h-4" />
                  <span>Services</span>
                </button>

                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs uppercase tracking-wider font-medium text-left transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-[#c5a059] text-black font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  <span>Studio Info</span>
                </button>
              </div>

              {/* Bottom Sign Out */}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-neutral-400 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Mobile Horizontal Tabs */}
            <div className="flex sm:hidden overflow-x-auto bg-[#101216] border-b border-white/10 p-2 gap-2 shrink-0">
              {(['analytics', 'leads', 'projects', 'services', 'settings'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-xs capitalize whitespace-nowrap ${
                    activeTab === tab ? 'bg-[#c5a059] text-black font-bold' : 'text-neutral-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Main Tab Panels */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0b0c0e]">
              {/* TAB 1: ANALYTICS & OVERVIEW */}
              {activeTab === 'analytics' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-serif text-white">Dashboard Performance Overview</h3>
                    <p className="text-xs text-neutral-400">
                      Tracking client inquiries, project portfolio, and conversion velocity for Lucknow studio.
                    </p>
                  </div>

                  {/* Stat Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 bg-[#121418] border border-white/10">
                      <div className="flex items-center justify-between text-neutral-400 text-xs mb-2">
                        <span>Total Inquiries</span>
                        <Users className="w-4 h-4 text-[#c5a059]" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-white tabular-nums">
                        {totalLeads}
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-1">All-time website leads</p>
                    </div>

                    <div className="p-5 bg-[#121418] border border-white/10">
                      <div className="flex items-center justify-between text-neutral-400 text-xs mb-2">
                        <span>New Unread Inquiries</span>
                        <Clock className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                        {newLeadsCount}
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-1">Require initial call/WhatsApp</p>
                    </div>

                    <div className="p-5 bg-[#121418] border border-white/10">
                      <div className="flex items-center justify-between text-neutral-400 text-xs mb-2">
                        <span>Converted Projects</span>
                        <TrendingUp className="w-4 h-4 text-[#c5a059]" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-[#c5a059] tabular-nums">
                        {convertedCount}
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-1">Client agreements signed</p>
                    </div>

                    <div className="p-5 bg-[#121418] border border-white/10">
                      <div className="flex items-center justify-between text-neutral-400 text-xs mb-2">
                        <span>Published Projects</span>
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-2xl font-bold font-mono text-white tabular-nums">
                        {totalProjectsCount}
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-1">Live in architecture portfolio</p>
                    </div>
                  </div>

                  {/* Interactive Custom SVG Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Inquiry Trend Chart */}
                    <div className="p-6 bg-[#121418] border border-white/10 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-serif text-white">Monthly Inquiry Trend</h4>
                        <span className="text-[11px] font-mono text-[#c5a059]">Lucknow Leads 2026</span>
                      </div>

                      {/* SVG Bar Visualizer */}
                      <div className="h-44 flex items-end justify-between gap-3 pt-4 px-2 border-b border-white/10">
                        {[
                          { month: 'Oct', count: 12 },
                          { month: 'Nov', count: 18 },
                          { month: 'Dec', count: 24 },
                          { month: 'Jan', count: 29 },
                          { month: 'Feb', count: 38 },
                          { month: 'Mar', count: 46 }
                        ].map((bar) => {
                          const heightPct = Math.round((bar.count / 50) * 100);
                          return (
                            <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 group">
                              <span className="text-[10px] font-mono text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity">
                                {bar.count}
                              </span>
                              <div
                                style={{ height: `${heightPct}%` }}
                                className="w-full bg-[#181a20] group-hover:bg-[#c5a059] border border-[#c5a059]/40 transition-all duration-300"
                              />
                              <span className="text-[10px] font-mono text-neutral-400">{bar.month}</span>
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[11px] text-neutral-400">
                        +140% growth in qualified residential and commercial inquiries over the last 6 months.
                      </p>
                    </div>

                    {/* Inquiry by Category */}
                    <div className="p-6 bg-[#121418] border border-white/10 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-serif text-white">Project Category Distribution</h4>
                        <span className="text-[11px] font-mono text-neutral-400">By demand</span>
                      </div>

                      <div className="space-y-3 pt-2">
                        {[
                          { label: 'Turnkey Home Interior', pct: 45, color: '#c5a059' },
                          { label: 'Modular Kitchen Solutions', pct: 25, color: '#e0c58e' },
                          { label: 'Master Bedroom & Wardrobes', pct: 15, color: '#a38140' },
                          { label: 'Commercial & Office Fitout', pct: 15, color: '#685327' }
                        ].map((item) => (
                          <div key={item.label} className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-neutral-300">{item.label}</span>
                              <span className="font-mono text-white tabular-nums">{item.pct}%</span>
                            </div>
                            <div className="w-full h-2 bg-[#181a20] rounded-none overflow-hidden">
                              <div
                                style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                                className="h-full transition-all duration-500"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: LEADS CRM */}
              {activeTab === 'leads' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-serif text-white">Client Inquiry & CRM Pipeline</h3>
                      <p className="text-xs text-neutral-400">
                        Manage prospective client enquiries, schedule site visits, track proposal status, and add notes.
                      </p>
                    </div>

                    {/* Status filter tabs */}
                    <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
                      {['All', 'New', 'Contacted', 'Site Visit Scheduled', 'Proposal Sent', 'Converted', 'Closed'].map(
                        (st) => (
                          <button
                            key={st}
                            onClick={() => setLeadStatusFilter(st)}
                            className={`px-3 py-1 text-[11px] font-mono whitespace-nowrap border cursor-pointer ${
                              leadStatusFilter === st
                                ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold'
                                : 'bg-[#181a20] text-neutral-400 border-white/10 hover:text-white'
                            }`}
                          >
                            {st}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Leads Table */}
                  <div className="border border-white/10 overflow-x-auto bg-[#121418]">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#181a20] border-b border-white/10 text-neutral-400 font-mono uppercase text-[10px] tracking-wider">
                          <th className="p-3">Client</th>
                          <th className="p-3">Contact</th>
                          <th className="p-3">Project / Property</th>
                          <th className="p-3">Budget</th>
                          <th className="p-3">Location</th>
                          <th className="p-3">Status</th>
                          <th className="p-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                            <td className="p-3">
                              <p className="font-semibold text-white">{lead.name}</p>
                              <span className="text-[10px] text-neutral-400 font-mono">
                                {new Date(lead.createdAt).toLocaleDateString('en-IN')}
                              </span>
                            </td>
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                <a
                                  href={`tel:${lead.phone}`}
                                  className="text-[#c5a059] hover:underline font-mono"
                                  title="Call"
                                >
                                  {lead.phone}
                                </a>
                                <a
                                  href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-400"
                                  title="WhatsApp"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                </a>
                              </div>
                              <p className="text-[10px] text-neutral-400">{lead.email}</p>
                            </td>
                            <td className="p-3">
                              <p className="text-white">{lead.projectType}</p>
                              <p className="text-[10px] text-neutral-400">{lead.propertyType}</p>
                            </td>
                            <td className="p-3 font-mono text-[#c5a059]">
                              {lead.approxBudget}
                            </td>
                            <td className="p-3 text-neutral-300">
                              {lead.location}
                            </td>
                            <td className="p-3">
                              <select
                                value={lead.status}
                                onChange={(e) =>
                                  handleUpdateLeadStatus(lead.id, e.target.value as LeadStatus)
                                }
                                className={`text-[10px] font-mono px-2 py-1 bg-[#181a20] border focus:outline-none ${
                                  lead.status === 'New'
                                    ? 'border-emerald-500 text-emerald-400'
                                    : lead.status === 'Converted'
                                    ? 'border-[#c5a059] text-[#c5a059]'
                                    : 'border-white/20 text-neutral-300'
                                }`}
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Site Visit Scheduled">Site Visit Scheduled</option>
                                <option value="Proposal Sent">Proposal Sent</option>
                                <option value="In Discussion">In Discussion</option>
                                <option value="Converted">Converted</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => setSelectedLead(lead)}
                                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-[11px] cursor-pointer"
                              >
                                View / Notes
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {filteredLeads.length === 0 && (
                      <div className="p-8 text-center text-neutral-400 text-xs">
                        No leads matching status "{leadStatusFilter}".
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: PROJECTS MANAGEMENT */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-serif text-white">Project Portfolio Manager</h3>
                      <p className="text-xs text-neutral-400">
                        Add, edit, or feature projects displayed on the public architectural portfolio.
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setEditingProject({
                          title: '',
                          category: 'Residential',
                          style: 'Modern Luxury',
                          location: 'Lucknow',
                          description: '',
                          budgetRange: '₹10–20 Lakh',
                          completionDate: '2026',
                          coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
                        })
                      }
                      className="px-4 py-2 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>New Project</span>
                    </button>
                  </div>

                  {/* Projects List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="bg-[#121418] border border-white/10 p-4 flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative aspect-[16/10] overflow-hidden mb-3">
                            <img
                              src={proj.coverImage}
                              alt={proj.title}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-2 right-2 flex items-center gap-1">
                              {proj.featured && (
                                <span className="bg-[#c5a059] text-black text-[9px] font-mono px-1.5 py-0.5 font-bold uppercase">
                                  Featured
                                </span>
                              )}
                            </div>
                          </div>

                          <h4 className="text-base font-serif text-white line-clamp-1">{proj.title}</h4>
                          <p className="text-xs font-mono text-[#c5a059] mt-0.5">
                            {proj.category} · {proj.location}
                          </p>
                          <p className="text-xs text-neutral-400 line-clamp-2 mt-2">
                            {proj.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs mt-4">
                          <button
                            onClick={() => handleToggleProjectFeatured(proj.id)}
                            className={`text-[11px] font-mono ${
                              proj.featured ? 'text-[#c5a059]' : 'text-neutral-500 hover:text-white'
                            }`}
                          >
                            {proj.featured ? '★ Featured' : '☆ Make Featured'}
                          </button>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingProject(proj)}
                              className="p-1.5 text-neutral-400 hover:text-white"
                              title="Edit Project"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteProject(proj.id)}
                              className="p-1.5 text-neutral-400 hover:text-red-400"
                              title="Delete Project"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: SERVICES MANAGEMENT */}
              {activeTab === 'services' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-serif text-white">Services Configuration</h3>
                    <p className="text-xs text-neutral-400">
                      Toggle active services or modify descriptions shown on the main website.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {services.map((srv) => (
                      <div
                        key={srv.id}
                        className="p-5 bg-[#121418] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={srv.image}
                            alt=""
                            className="w-16 h-16 object-cover border border-white/10 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-serif text-white">{srv.title}</h4>
                              <span
                                className={`text-[10px] font-mono px-2 py-0.5 ${
                                  srv.active ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-neutral-800 text-neutral-400'
                                }`}
                              >
                                {srv.active ? 'Active' : 'Disabled'}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-400 mt-1 max-w-xl">{srv.shortDesc}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleToggleService(srv.id)}
                            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border cursor-pointer ${
                              srv.active
                                ? 'bg-red-950/40 border-red-500/30 text-red-300 hover:bg-red-950'
                                : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300 hover:bg-emerald-950'
                            }`}
                          >
                            {srv.active ? 'Disable' : 'Enable'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: STUDIO INFO & SETTINGS */}
              {activeTab === 'settings' && (
                <div className="space-y-6 max-w-3xl">
                  <div>
                    <h3 className="text-xl font-serif text-white">Studio Business Information</h3>
                    <p className="text-xs text-neutral-400">
                      Update official location, phone number, operating hours, and Instagram details.
                    </p>
                  </div>

                  <form onSubmit={handleSaveSettings} className="space-y-4 bg-[#121418] p-6 border border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                          Business Name (English)
                        </label>
                        <input
                          type="text"
                          value={settings.businessName}
                          onChange={(e) => onUpdateSettings({ ...settings, businessName: e.target.value })}
                          className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                          Hindi Business Name
                        </label>
                        <input
                          type="text"
                          value={settings.hindiName}
                          onChange={(e) => onUpdateSettings({ ...settings, hindiName: e.target.value })}
                          className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                        Studio Address
                      </label>
                      <input
                        type="text"
                        value={settings.address}
                        onChange={(e) => onUpdateSettings({ ...settings, address: e.target.value })}
                        className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          value={settings.phone}
                          onChange={(e) => onUpdateSettings({ ...settings, phone: e.target.value })}
                          className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                          WhatsApp Number
                        </label>
                        <input
                          type="text"
                          value={settings.whatsapp}
                          onChange={(e) => onUpdateSettings({ ...settings, whatsapp: e.target.value })}
                          className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                          Instagram Handle
                        </label>
                        <input
                          type="text"
                          value={settings.instagram}
                          onChange={(e) => onUpdateSettings({ ...settings, instagram: e.target.value })}
                          className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                          Business Operating Hours
                        </label>
                        <input
                          type="text"
                          value={settings.hours}
                          onChange={(e) => onUpdateSettings({ ...settings, hours: e.target.value })}
                          className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer mt-4"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Information</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Lead Detail / Notes Sub-Modal */}
        {selectedLead && (
          <div className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center p-4">
            <div className="w-full max-w-xl bg-[#121418] border border-white/15 p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h4 className="text-lg font-serif text-white">{selectedLead.name}</h4>
                  <p className="text-xs text-[#c5a059] font-mono">{selectedLead.projectType} · {selectedLead.location}</p>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 text-xs text-neutral-300">
                <p><strong>Phone:</strong> {selectedLead.phone}</p>
                <p><strong>Email:</strong> {selectedLead.email}</p>
                <p><strong>Property:</strong> {selectedLead.propertyType}</p>
                <p><strong>Budget Scope:</strong> {selectedLead.approxBudget}</p>
                <p><strong>Preferred Contact:</strong> {selectedLead.preferredContact}</p>
                <p><strong>Requirements:</strong> "{selectedLead.message}"</p>
              </div>

              {/* Direct Communication Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#c5a059]" />
                  <span>Call Customer</span>
                </a>
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello ${selectedLead.name}, this is Style Well DYD interior design studio in Lucknow regarding your inquiry.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

              {/* Internal Notes History */}
              <div className="pt-4 border-t border-white/10">
                <h5 className="text-xs uppercase font-mono tracking-wider text-white mb-2">
                  Internal Lead Notes
                </h5>
                <div className="space-y-1.5 max-h-36 overflow-y-auto mb-3">
                  {selectedLead.notes && selectedLead.notes.length > 0 ? (
                    selectedLead.notes.map((note, i) => (
                      <div key={i} className="p-2 bg-[#181a20] border border-white/5 text-xs text-neutral-300">
                        {note}
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-neutral-500 italic">No notes yet.</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add meeting outcome, site visit time, or client remarks..."
                    className="flex-1 bg-[#181a20] border border-white/15 px-3 py-1.5 text-xs text-white"
                  />
                  <button
                    onClick={handleAddNote}
                    className="px-4 py-1.5 bg-[#c5a059] text-black font-semibold text-xs uppercase"
                  >
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Edit Modal */}
        {editingProject && (
          <div className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center p-4">
            <div className="w-full max-w-xl bg-[#121418] border border-white/15 p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h4 className="text-lg font-serif text-white">
                  {editingProject.id ? 'Edit Architectural Project' : 'Add New Project'}
                </h4>
                <button
                  onClick={() => setEditingProject(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProject} className="space-y-3">
                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-neutral-400 mb-1">
                    Project Title
                  </label>
                  <input
                    type="text"
                    required
                    value={editingProject.title || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-neutral-400 mb-1">
                      Category
                    </label>
                    <select
                      value={editingProject.category || 'Residential'}
                      onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                      className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Renovation">Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-neutral-400 mb-1">
                      Design Style
                    </label>
                    <input
                      type="text"
                      value={editingProject.style || 'Modern Luxury'}
                      onChange={(e) => setEditingProject({ ...editingProject, style: e.target.value })}
                      className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-neutral-400 mb-1">
                      Location in Lucknow
                    </label>
                    <input
                      type="text"
                      value={editingProject.location || 'Lucknow'}
                      onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                      className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-neutral-400 mb-1">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      value={editingProject.budgetRange || '₹10–20 Lakh'}
                      onChange={(e) => setEditingProject({ ...editingProject, budgetRange: e.target.value })}
                      className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-neutral-400 mb-1">
                    Cover Image URL
                  </label>
                  <input
                    type="url"
                    value={editingProject.coverImage || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, coverImage: e.target.value })}
                    className="w-full bg-[#181a20] border border-white/15 px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-mono tracking-wider text-neutral-400 mb-1">
                    Project Description
                  </label>
                  <textarea
                    rows={3}
                    value={editingProject.description || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                    className="w-full bg-[#181a20] border border-white/15 p-2 text-xs text-white"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingProject(null)}
                    className="px-4 py-2 bg-white/10 text-white text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#c5a059] text-black font-semibold text-xs uppercase"
                  >
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
