import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Award, Search, Filter, Loader2, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  organization: string;
  description: string;
  link: string;
  category?: string;
  tags?: string[];
  date_added?: string;
}

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        // Attempt to fetch from backend
        const response = await axios.get('http://localhost:8000/resources?type=certification');
        if (response.data && response.data.length > 0) {
          setCertifications(response.data);
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        // Fallback mock data for demonstration
        setCertifications([
          {
            id: '1',
            title: 'Google Cloud Digital Leader',
            organization: 'Google Cloud',
            description: 'Covers cloud concepts, Google Cloud products, services, tools, and use cases. Perfect for understanding how cloud technology can power businesses.',
            link: 'https://cloud.google.com/learn/certification/cloud-digital-leader',
            category: 'Cloud'
          },
          {
            id: '2',
            title: 'AWS Certified Cloud Practitioner',
            organization: 'Amazon Web Services',
            description: 'Provides a high-level overview of the AWS Cloud platform, covering basic cloud infrastructure and security.',
            link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
            category: 'Cloud'
          },
          {
            id: '3',
            title: 'Meta Front-End Developer',
            organization: 'Meta / Coursera',
            description: 'Build job-ready skills for front-end development. Learn HTML, CSS, JavaScript, and React from the experts at Meta.',
            link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
            category: 'Web Development'
          },
          {
            id: '4',
            title: 'Oracle Java SE 11 Developer',
            organization: 'Oracle',
            description: 'Demonstrates your proficiency in Java, including the ability to design and implement robust applications.',
            link: 'https://education.oracle.com/java-se-11-developer/pP_900',
            category: 'Software Engineering'
          },
          {
            id: '5',
            title: 'CompTIA Security+',
            organization: 'CompTIA',
            description: 'A global certification that validates the baseline skills necessary to perform core security functions.',
            link: 'https://www.comptia.org/certifications/security',
            category: 'Cybersecurity'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  const categories = ['All', ...new Set(certifications.map(c => c.category).filter(Boolean) as string[])];

  const filteredCerts = certifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cert.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      {/* Header Area */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
            <Award size={16} />
            <span>Upskill your career</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Professional <span className="text-blue-600">Certifications</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Curated list of industry-recognized certifications to help freshers and developers validate their skills and stand out to employers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Controls: Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between mb-12">
          <div className="relative flex-grow max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
            <input
              type="text"
              placeholder="Search certification title or provider..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            <div className="hidden sm:flex items-center gap-2 text-slate-500 font-medium mr-2">
              <Filter size={18} />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
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

        {/* Content Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
            <p className="text-slate-500 font-medium animate-pulse text-lg">Curating top certifications...</p>
          </div>
        ) : filteredCerts.length > 0 ? (
          <div className="flex flex-wrap gap-8 w-full">
            {filteredCerts.map((cert) => (
              <div 
                key={cert.id} 
                className="group relative flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-1/2 lg:w-1/3"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 rounded-2xl transition-colors duration-300">
                      <Award size={28} />
                    </div>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {cert.category || 'Professional'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center text-slate-500 text-sm mb-4 font-medium">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center mr-2">
                      <CheckCircle size={12} className="text-slate-400" />
                    </div>
                    {cert.organization}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center text-slate-400 text-xs font-medium">
                      <Calendar size={14} className="mr-1.5" />
                      <span>Updated 2024</span>
                    </div>
                    
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2 px-4 bg-slate-50 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-200"
                    >
                      Enroll Now
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[2rem] border border-dashed border-slate-300">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 rounded-full mb-6">
              <Search size={32} className="text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">No results found</h3>
            <p className="text-slate-500 max-w-sm mx-auto mb-8">
              We couldn't find any certifications matching your search. Try broadening your keywords.
            </p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Modern CTA Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Abstract blobs for modern look */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-80 h-80 bg-blue-600 opacity-20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-80 h-80 bg-indigo-600 opacity-20 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Suggest a Certification</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Help your fellow developers by sharing valuable certifications you've completed. We'll review and add it to our list!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 hover:bg-blue-50 font-extrabold py-4 px-10 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl">
                Submit Now
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white font-extrabold py-4 px-10 rounded-2xl border border-slate-700 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;