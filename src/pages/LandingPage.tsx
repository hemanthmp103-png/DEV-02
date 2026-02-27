import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, ShieldCheck, Heart, MapPin, ArrowRight, Users, Building2, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export const LandingPage = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">
              <ShieldCheck className="w-4 h-4" />
              Trusted by 50+ NGOs nationwide
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
              Every Life <span className="text-emerald-500">Matters.</span> <br />
              Rescue Together.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              The bridge between compassionate citizens and animal rescue organizations. Report, rescue, and adopt street animals in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-200 text-center">
                Join the Mission
              </Link>
              <Link to="/reports" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all text-center">
                View Reports
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://picsum.photos/seed/rescue-dog/1000/1000" 
                alt="Rescue Dog" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 -rotate-3 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="font-bold text-slate-900">1,200+ Rescued</span>
              </div>
              <p className="text-xs text-slate-500">Animals found new homes and medical care through PawRescue this month.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-display font-bold text-slate-900">How It Works</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Our platform simplifies the rescue process by connecting the right people at the right time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Smartphone className="w-8 h-8 text-emerald-500" />}
            title="Report Instantly"
            description="Found an animal in distress? Upload a photo and location. Local NGOs are notified immediately."
          />
          <FeatureCard 
            icon={<Building2 className="w-8 h-8 text-blue-500" />}
            title="NGO Coordination"
            description="NGOs manage rescue requests through a dedicated dashboard, tracking every animal's journey."
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8 text-purple-500" />}
            title="Community Support"
            description="Express interest in adoption or provide financial support for medical treatments."
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          <StatItem label="Active NGOs" value="150+" />
          <StatItem label="Cities Covered" value="45" />
          <StatItem label="Successful Rescues" value="8.5k" />
          <StatItem label="Adoptions" value="2.1k" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group">
    <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const StatItem = ({ label, value }: { label: string, value: string }) => (
  <div className="space-y-2">
    <p className="text-4xl md:text-5xl font-display font-bold text-emerald-400">{value}</p>
    <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">{label}</p>
  </div>
);
