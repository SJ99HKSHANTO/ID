/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Youtube, 
  Facebook, 
  Video, 
  Instagram, 
  BookOpen, 
  Code, 
  Palette, 
  TrendingUp, 
  LogIn,
  Home,
  User,
  Mail,
  Share2,
  Newspaper,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // In a real app, this would call an auth service
  };

  return (
    <div className="min-h-screen bg-[#f4f4f9] font-sans text-slate-900 selection:bg-emerald-100">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-4 text-center shadow-lg">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-2 tracking-tight"
        >
          শান্ত (Shanto)
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg"
        >
          আমার ব্যক্তিগত পোর্টফোলিও ও লার্নিং প্ল্যাটফর্ম
        </motion.p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-center py-4 px-4 gap-8">
          <NavLink icon={<Home size={18} />} text="হোম" href="#" />
          <NavLink icon={<User size={18} />} text="এবাউট" href="#" />
          <NavLink icon={<Mail size={18} />} text="যোগাযোগ" href="#" />
          <NavLink icon={<Share2 size={18} />} text="সোশ্যাল মিডিয়া" href="#" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Left Sidebar: Video Platforms */}
        <aside className="md:col-span-1 space-y-6">
          <Section title="ভিডিও প্ল্যাটফর্ম">
            <div className="space-y-3">
import React, { useState } from 'react';
import { Youtube, Facebook, Instagram, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="container">
      <h1>আমার পার্সোনাল ওয়েবসাইট</h1>
      
      <div className="links-section">
        {/* ইউটিউব লিঙ্ক */}
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <button className="social-button">
            <Youtube size={20} /> ইউটিউব সাবস্ক্রাইব করুন
          </button>
        </a>

        {/* ফেসবুক লিঙ্ক */}
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <button className="social-button">
            <Facebook size={20} /> ফেসবুকে যুক্ত হোন
          </button>
        </a>
      </div>
    </div>
  );
}













              
              <PlatformCard icon={<Youtube className="text-red-600" />} text="ইউটিউব ভিডিও" />
              <PlatformCard icon={<Facebook className="text-blue-600" />} text="ফেসবুক ভিডিও" />
              <PlatformCard icon={<Video className="text-pink-600" />} text="টিকটক আপডেট" />
              <PlatformCard icon={<Instagram className="text-purple-600" />} text="ইনস্টাগ্রাম রিলস" />
            </div>
          </Section>
        </aside>

        {/* Middle Content: Blogs & News */}
        <section className="md:col-span-2 space-y-6">
          <Section title="ব্লগ পোস্ট ও নিউজপেপার">
            <div className="space-y-4">
              <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3 text-emerald-600">
                  <Newspaper size={20} />
                  <h3 className="text-xl font-bold">আজকের বিশেষ সংবাদ</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  এখানে আপনার ওয়েবসাইটের লেটেস্ট নিউজ এবং ব্লগ পোস্টগুলো পাবলিশ হবে। আমরা নিয়মিত নতুন নতুন তথ্য শেয়ার করার চেষ্টা করি।
                </p>
                <button className="mt-4 text-emerald-600 font-semibold hover:underline">আরও পড়ুন →</button>
              </article>

              <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3 text-indigo-600">
                  <Cpu size={20} />
                  <h3 className="text-xl font-bold">শিক্ষা ও প্রযুক্তি ব্লগ</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  নতুন নতুন প্রযুক্তি সম্পর্কে জানুন আমাদের এই ব্লগে। এআই, ওয়েব ডেভেলপমেন্ট এবং ফিউচার টেক নিয়ে বিস্তারিত আলোচনা।
                </p>
                <button className="mt-4 text-indigo-600 font-semibold hover:underline">আরও পড়ুন →</button>
              </article>
            </div>
          </Section>
        </section>

        {/* Right Sidebar: Login & Courses */}
        <aside className="md:col-span-1 space-y-6">
          <Section title="লগইন করুন">
            <form onSubmit={handleLogin} className="space-y-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">আপনার জিমেইল</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com" 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">পাসওয়ার্ড</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <LogIn size={18} />
                লগইন
              </button>
            </form>
          </Section>

          <Section title="শিক্ষামূলক কোর্স">
            <div className="space-y-3">
              <CourseCard icon={<Code className="text-blue-500" />} text="ওয়েব ডেভেলপমেন্ট" />
              <CourseCard icon={<Palette className="text-pink-500" />} text="গ্রাফিক্স ডিজাইন" />
              <CourseCard icon={<TrendingUp className="text-emerald-500" />} text="ডিজিটাল মার্কেটিং" />
            </div>
          </Section>
        </aside>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 mt-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-400">&copy; 2026 shanto।  সংরক্ষিত।</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ icon, text, href }: { icon: React.ReactNode, text: string, href: string }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-2 hover:text-emerald-400 transition-colors font-semibold"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold border-b-2 border-slate-900 pb-2 inline-block">
        {title}
      </h2>
      {children}
    </div>
  );
}

function PlatformCard({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:border-emerald-500 transition-all"
    >
      {icon}
      <span className="font-medium">{text}</span>
    </motion.div>
  );
}

function CourseCard({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <motion.div 
      whileHover={{ x: 5 }}
      className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm cursor-pointer hover:bg-slate-50 transition-all"
    >
      <div className="bg-slate-100 p-2 rounded-lg">
        {icon}
      </div>
      <span className="font-bold">{text}</span>
    </motion.div>
  );
}
