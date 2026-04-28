import React, { useState, useEffect } from 'react';

// Custom SVG Icon Components with fixed base sizes to prevent giant icons
const IconSearch = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const IconChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
const IconChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const IconLayout = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>;
const IconCompass = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>;
const IconZap = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.71 13.18 3l-1.47 8.59h6.43L9.03 21l1.47-8.59H4Z"/></svg>;
const IconUsers = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconArrowRight = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const IconBookOpen = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const IconBriefcase = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconAward = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>;
const IconStar = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Platform Stats State
  const [liveUserCount, setLiveUserCount] = useState(1240);
  const [certificationsCount, setCertificationsCount] = useState(45892);
  const [mentorsCount, setMentorsCount] = useState(342);

  // Dynamically inject Tailwind CSS so the component works even if the project isn't configured for it
  useEffect(() => {
    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);

  // 1. Carousel Data
  const carouselItems = [
    {
      badge: "Featured Content",
      title: "Unlock Your Potential",
      description: "Discover curated courses designed to elevate your career path in the digital age.",
      bg: "bg-gradient-to-r from-blue-700 to-indigo-900",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
    },
    {
      badge: "New Announcement",
      title: "Master New Skills",
      description: "Join over 50,000 students learning everything from design to data science this month.",
      bg: "bg-gradient-to-r from-purple-700 to-pink-800",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      badge: "Platform Update",
      title: "Build Your Future",
      description: "Connect with industry leaders and get certified in the most in-demand technologies.",
      bg: "bg-gradient-to-r from-emerald-700 to-teal-900",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  // 2. Explore Cards Data
  const exploreCards = [
    { id: 1, title: 'Web Development', description: 'Learn React, Node, and modern frameworks.', icon: <IconLayout className="w-6 h-6 text-blue-500" />, count: '120+ Courses' },
    { id: 2, title: 'UI/UX Design', description: 'Master Figma and user-centered design principles.', icon: <IconCompass className="w-6 h-6 text-purple-500" />, count: '85+ Courses' },
    { id: 3, title: 'Data Science', description: 'Analyze data using Python, Pandas, and Machine Learning.', icon: <IconZap className="w-6 h-6 text-yellow-500" />, count: '45+ Courses' },
    { id: 4, title: 'Marketing', description: 'Grow audiences with SEO and social media strategies.', icon: <IconUsers className="w-6 h-6 text-emerald-500" />, count: '60+ Courses' },
    { id: 5, title: 'Business Strategy', description: 'Develop leadership and strategic thinking skills.', icon: <IconBriefcase className="w-6 h-6 text-rose-500" />, count: '30+ Courses' },
    { id: 6, title: 'Graphic Design', description: 'Create stunning visuals with Adobe Creative Suite.', icon: <IconLayout className="w-6 h-6 text-orange-500" />, count: '95+ Courses' },
  ];

  // Auto-play horizontal carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Simulate Live Platform Stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUserCount(prev => prev + Math.floor(Math.random() * 7) - 3);
      
      // Occasionally simulate a new certification being issued
      if (Math.random() > 0.7) {
        setCertificationsCount(prev => prev + 1);
      }
      // Very rarely simulate a new mentor joining
      if (Math.random() > 0.95) {
        setMentorsCount(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  return (
    // Added pb-20 to ensure content doesn't get hidden behind the new thicker footer
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      
      {/* 1. Search Bar Section (Sticky & Prominent) */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
              <IconSearch />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-12 pr-4 py-3.5 bg-slate-100 border border-transparent rounded-full text-base focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-inner outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 2. Important Content Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group">
          {carouselItems.map((item, index) => (
            <div 
              key={index} 
              className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
            >
              <div className={`absolute inset-0 ${item.bg} opacity-80 mix-blend-overlay z-10`}></div>
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="relative h-full flex flex-col justify-center px-8 md:px-20 text-white z-20">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full w-fit border border-white/30 shadow-sm">
                  {item.badge}
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-light drop-shadow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Carousel Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute z-30 left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-all text-white opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <IconChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute z-30 right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-all text-white opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <IconChevronRight />
          </button>

          {/* Carousel Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {carouselItems.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-10 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'w-2.5 bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Main Page Buttons Section */}
      <div className="max-w-5xl mx-auto px-4 mt-12">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
          <a href="#courses" className="group flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl font-bold text-lg shadow-sm hover:shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <IconBookOpen className="w-5 h-5" />
            </div>
            Browse Courses
          </a>
          
          <a href="#jobs" className="group flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl font-bold text-lg shadow-sm hover:shadow-lg hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <IconBriefcase className="w-5 h-5" />
            </div>
            Find Jobs
          </a>

          <a href="#community" className="group flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-md hover:shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
            <div className="p-2 bg-white/20 text-white rounded-xl">
              <IconUsers className="w-5 h-5" />
            </div>
            Join Community
          </a>
        </div>
      </div>

      {/* 4. Explore Menu Cards Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20 mb-24 text-left">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">Explore Categories</h3>
            <p className="text-slate-500">Find the perfect path for your career goals.</p>
          </div>
          <a href="#explore" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center gap-1 group bg-blue-50 px-5 py-2.5 rounded-full transition-colors hover:bg-blue-100 w-fit">
            View All Categories
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {exploreCards.map((card) => (
            <a 
              href={`#category/${card.id}`}
              key={card.id}
              className="group relative bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3.5 bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                  {card.icon}
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  {card.count}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                {card.description}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-auto">
                Explore Courses <IconArrowRight className="w-4 h-4 ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 5. Live Platform Stats Section (Enhanced Footer) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex items-center justify-center gap-4 min-w-max">
            
            {/* Live Users */}
            <div className="flex items-center gap-2 bg-slate-800/60 px-5 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm transition-all hover:bg-slate-700/60 cursor-default">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping opacity-60"></div>
                <div className="relative w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              </div>
              <p className="text-sm font-medium text-slate-300 m-0">
                <span className="text-white font-bold mx-1">{liveUserCount.toLocaleString()}</span> Online
              </p>
            </div>

            {/* Total Certifications */}
            <div className="flex items-center gap-2 bg-slate-800/60 px-5 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm transition-all hover:bg-slate-700/60 cursor-default">
              <IconAward className="w-4 h-4 text-yellow-400" />
              <p className="text-sm font-medium text-slate-300 m-0">
                <span className="text-white font-bold mx-1">{certificationsCount.toLocaleString()}</span> Certifications
              </p>
            </div>

            {/* Active Mentors */}
            <div className="flex items-center gap-2 bg-slate-800/60 px-5 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm transition-all hover:bg-slate-700/60 cursor-default">
              <IconStar className="w-4 h-4 text-purple-400" />
              <p className="text-sm font-medium text-slate-300 m-0">
                <span className="text-white font-bold mx-1">{mentorsCount.toLocaleString()}</span> Mentors
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;