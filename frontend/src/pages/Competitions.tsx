import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Trophy, 
  Search, 
  Loader2, 
  ExternalLink, 
  Calendar, 
  Users, 
  Target, 
  Globe,
  AlertCircle
} from 'lucide-react';

// Define the Competition interface
interface Competition {
  id: string;
  title: string;
  organization: string;
  description: string;
  link: string;
  category?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  status?: 'Ongoing' | 'Upcoming' | 'Archived';
}

// Initial mock data to prevent a blank screen while loading or if API fails
const MOCK_COMPETITIONS: Competition[] = [
  {
    id: 'c1',
    title: 'Google Kick Start',
    organization: 'Google',
    description: 'A global online coding competition, offering programmers of all skill levels the opportunity to develop their skills through algorithmic rounds.',
    link: 'https://codingcompetitions.withgoogle.com/kickstart',
    category: 'Competitive Programming',
    difficulty: 'Intermediate',
    status: 'Ongoing'
  },
  {
    id: 'c2',
    title: 'Kaggle Titanic Challenge',
    organization: 'Kaggle',
    description: 'The legendary Titanic ML competition – the best first challenge for you to dive into ML competitions and familiarize yourself with Kaggle.',
    link: 'https://www.kaggle.com/competitions/titanic',
    category: 'Data Science',
    difficulty: 'Beginner',
    status: 'Ongoing'
  },
  {
    id: 'c3',
    title: 'LeetCode Weekly Contest',
    organization: 'LeetCode',
    description: 'Participate in weekly and bi-weekly contests to test your coding speed and problem-solving skills against a global audience.',
    link: 'https://leetcode.com/contest/',
    category: 'Coding',
    difficulty: 'Intermediate',
    status: 'Ongoing'
  },
  {
    id: 'c4',
    title: 'Meta Hacker Cup',
    organization: 'Meta',
    description: "Meta's annual open algorithmic programming competition. Push your limits and solve increasingly difficult problems for glory and prizes.",
    link: 'https://www.facebook.com/codingcompetitions/hacker-cup',
    category: 'Competitive Programming',
    difficulty: 'Advanced',
    status: 'Upcoming'
  }
];

const Competitions: React.FC = () => {
  // Initialize with mock data so page is never "blank" initially
  const [competitions, setCompetitions] = useState<Competition[]>(MOCK_COMPETITIONS);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchCompetitions = async () => {
      setLoading(true);
      try {
        // Replace with your actual backend URL
        const response = await axios.get('http://localhost:8000/resources?type=competition');
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          setCompetitions(response.data);
        }
      } catch (err) {
        console.warn("Backend fetch failed, using internal database.", err);
        // Error is caught, but we keep mock data so user sees content
      } finally {
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, []);

  const categories = ['All', ...new Set(competitions.map(c => c.category).filter(Boolean) as string[])];

  const filteredItems = competitions.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (diff?: string) => {
    switch (diff) {
      case 'Beginner': return 'text-emerald-600 bg-emerald-50';
      case 'Intermediate': return 'text-amber-600 bg-amber-50';
      case 'Advanced': return 'text-rose-600 bg-rose-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            <Trophy size={14} />
            <span>Compete with the Best</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Global <span className="text-blue-600">Competitions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Test your limits, solve complex problems, and win recognition. Explore prestigious technical challenges worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between mb-12">
          <div className="relative flex-grow max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by contest name or platform..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Competitions Grid */}
        {loading && competitions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
            <p className="text-slate-500 font-medium animate-pulse">Loading challenges...</p>
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="flex flex-wrap gap-8 w-full">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden w-full md:w-1/2 lg:w-1/3"
              >
                <div className="p-8 pb-0">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Trophy size={20} />
                      </div>
                      <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                        {item.category}
                      </span>
                    </div>
                    {item.status && (
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${
                        item.status === 'Ongoing' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {item.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <Globe size={14} className="mr-1.5" />
                    <span className="font-semibold">{item.organization}</span>
                  </div>
                </div>

                <div className="px-8 flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.difficulty && (
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${getDifficultyColor(item.difficulty)}`}>
                        <Target size={12} />
                        {item.difficulty}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-600">
                      <Users size={12} />
                      Global
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center text-slate-400 text-xs font-medium">
                      <Calendar size={14} className="mr-1.5" />
                      <span>Season 2024</span>
                    </div>
                    
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2.5 px-5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-slate-900 transition-all shadow-md shadow-blue-100"
                    >
                      Participate
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[2.5rem] border border-dashed border-slate-300">
            <AlertCircle size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No competitions found</h3>
            <p className="text-slate-500">Try adjusting your search or filter.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
              className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Host your own?</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              If you represent an organization or have a competition you'd like to feature on Fresher404, we'd love to hear from you.
            </p>
            <button className="bg-white text-slate-900 font-black py-4 px-12 rounded-2xl transition-all hover:scale-105">
              Get Featured
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;