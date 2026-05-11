import { useState } from 'react';
import { Search, Launch, Work } from '@mui/icons-material';

// --- Types ---
// Defining the structure of an internship platform based on the sitemap requirements
interface InternshipPlatform {
  id: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
}

// --- Mock Data ---
// Preloaded data as requested in the sitemap for MVP phase
const PLATFORMS: InternshipPlatform[] = [
  {
    id: '1',
    name: 'Internshala',
    url: 'https://internshala.com',
    description: 'India\'s largest internship and online training platform. Great for finding entry-level opportunities across various domains.',
    tags: ['Tech', 'Non-Tech', 'Paid', 'Remote', 'In-Office']
  },
  {
    id: '2',
    name: 'HelloIntern',
    url: 'https://www.hellointern.com/',
    description: 'A platform connecting students with startups and global organizations for meaningful internship experiences.',
    tags: ['Startups', 'Remote', 'Unpaid', 'Global']
  },
  {
    id: '3',
    name: 'Wellfound (formerly AngelList)',
    url: 'https://wellfound.com',
    description: 'The go-to platform for startup jobs and internships. Connect directly with founders and hiring managers.',
    tags: ['Tech', 'Startups', 'Paid', 'Remote']
  },
  {
    id: '4',
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    description: 'Professional networking platform with a massive job board. Best for corporate internships and networking-driven applications.',
    tags: ['Corporate', 'All-Fields', 'Networking', 'Paid']
  },
  {
    id: '5',
    name: 'Y Combinator Work at a Startup',
    url: 'https://www.workatastartup.com/',
    description: 'Apply to hundreds of Y Combinator-backed startups with a single application.',
    tags: ['Tech', 'Startups', 'High-Paying', 'Remote']
  },
  {
    id: '6',
    name: 'Glassdoor',
    url: 'https://www.glassdoor.com',
    description: 'Search for internships while simultaneously checking company reviews, salaries, and interview questions.',
    tags: ['Corporate', 'Reviews', 'All-Fields']
  }
];

export default function Internships() {
  // State for the search functionality
  const [searchQuery, setSearchQuery] = useState('');

  // Filter platforms based on the search query (matching name, description, or tags)
  const filteredPlatforms = PLATFORMS.filter(platform => {
    const query = searchQuery.toLowerCase();
    return (
      platform.name.toLowerCase().includes(query) ||
      platform.description.toLowerCase().includes(query) ||
      platform.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  // Helper function to assign a specific icon or color based on tag name
  const getTagStyle = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes('remote')) return 'bg-blue-50 text-blue-600 border-blue-200';
    if (t.includes('paid') || t.includes('paying')) return 'bg-emerald-50 text-emerald-600 border-emerald-200';
    if (t.includes('tech')) return 'bg-purple-50 text-purple-600 border-purple-200';
    if (t.includes('startup')) return 'bg-orange-50 text-orange-600 border-orange-200';
    return 'bg-gray-50 text-gray-600 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
      {/* Add custom keyframes for entry animation */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header Section */}
      <div className="w-full mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-4xl drop-shadow-sm tracking-tight pb-2">
          Internship Platforms
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-full mx-auto">
          A curated list of the best websites to find internships. Filter by remote, paid, tech, and more to kickstart your career.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="w-full mx-auto mb-8 transition-transform duration-300 hover:scale-[1.02]">
        <div className="relative rounded-2xl shadow-lg bg-white">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-indigo-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 sm:text-lg border-gray-200 rounded-2xl py-4 border shadow-sm transition-all duration-300 outline-none"
            placeholder="Search for platforms, tags (e.g., 'remote', 'tech')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Responsive Grid Layout for Cards */}
      {/* Adjusted grid to 4 columns on large screens to make cards narrower */}
      <div className="w-full mx-auto flex flex-wrap gap-4">
        {filteredPlatforms.length > 0 ? (
          filteredPlatforms.map((platform, index) => (
            <div 
              key={platform.id} 
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 flex flex-col border border-gray-100 overflow-hidden relative w-full sm:w-1/2 lg:w-1/4"
              style={{ 
                animation: `fadeUp 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0 
              }}
            >
              {/* Decorative top border that expands on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              {/* Card Header - Reduced padding and text size */}
              <div className="p-4 pb-2 border-b border-gray-50 flex justify-between items-start">
                <h2 className="text-lg font-extrabold text-gray-800 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                  {platform.name}
                </h2>
                <a 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  title={`Visit ${platform.name}`}
                >
                  <Launch className="h-5 w-5" />
                </a>
              </div>
              
              {/* Card Body - Reduced padding and text size */}
              <div className="p-4 flex-grow">
                <p className="text-gray-600 leading-relaxed text-sm">
                  {platform.description}
                </p>
              </div>

              {/* Card Footer (Tags) */}
              <div className="p-4 pt-0 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {platform.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold border ${getTagStyle(tag)} transition-colors duration-300 hover:brightness-95`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA Button */}
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Explore Platform
                </a>
              </div>
            </div>
          ))
        ) : (
          /* Empty State if search yields no results */
          <div className="col-span-full text-center py-8">
            <Work className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No platforms found</h3>
            <p className="mt-1 text-gray-500">
              We couldn't find any platforms matching "{searchQuery}". Try adjusting your search.
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-indigo-600 font-medium hover:text-indigo-800"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}