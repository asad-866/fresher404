import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on local storage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  // Free inline SVG Icons
  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );

  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );

  return (
    <>
      <style>{`
        .navbar {
          background-color: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin: 0 auto;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.2rem;
          color: var(--text-h);
        }

        .nav-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem 1rem;
          }

          .nav-container {
            justify-content: center;
          }

          .nav-logo {
            width: 100%;
            justify-content: center;
          }

          .nav-links {
            width: 100%;
            justify-content: center;
          }

          .dropdown,
          .theme-toggle,
          .submit-btn {
            width: 100%;
            justify-content: center;
          }

          .dropbtn {
            width: 100%;
            justify-content: center;
            text-align: center;
            padding: 10px 12px;
          }

          .theme-toggle,
          .submit-btn {
            padding: 10px 14px;
          }
        }

        /* Dropdown Styles */
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropbtn {
          background: none;
          border: none;
          color: var(--text);
          font-size: 16px;
          font-family: inherit;
          cursor: pointer;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dropbtn:hover {
          color: var(--accent);
        }

        .dropdown-content {
          position: absolute;
          background-color: var(--bg);
          min-width: 160px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
          border-radius: 6px;
          z-index: 1;
          top: 100%;
          left: 0;
          overflow: hidden;
        }

        .dropdown-content a {
          color: var(--text);
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          font-size: 15px;
          transition: background-color 0.2s;
        }

        .dropdown-content a:hover {
          background-color: var(--accent-bg);
          color: var(--accent);
        }

        /* Theme Toggle Button */
        .theme-toggle {
          background-color: var(--social-bg);
          color: var(--text-h);
          border: 1px solid var(--border);
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .theme-toggle:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
        }

        /* Submit Button */
        .submit-btn {
          background-color: var(--accent, #007bff);
          color: #fff;
          border: none;
          padding: 8px 20px;
          border-radius: 20px;
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: var(--shadow);
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          {/* Logo as Home Button */}
          <Link to="/" className="nav-logo">
            <GraduationCapIcon />
            <span>Fresher404</span>
          </Link>

          <div className="nav-links">
            {/* Explore Dropdown */}
            <div 
              className="dropdown"
              onMouseEnter={() => setIsExploreOpen(true)}
              onMouseLeave={() => setIsExploreOpen(false)}
            >
              <button className="dropbtn">
                Explore <span style={{ fontSize: '10px' }}>{isExploreOpen ? '▲' : '▼'}</span>
              </button>
              
              {isExploreOpen && (
                <div className="dropdown-content">
                  <Link to="/internships" onClick={() => setIsExploreOpen(false)}>Internships</Link>
                  <Link to="/certification" onClick={() => setIsExploreOpen(false)}>Certification</Link>
                  <Link to="/hackaton" onClick={() => setIsExploreOpen(false)}>Hackathon</Link>
                  <Link to="/competition" onClick={() => setIsExploreOpen(false)}>Competition</Link>
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? (
                <>
                  <MoonIcon /> Dark
                </>
              ) : (
                <>
                  <SunIcon /> Light
                </>
              )}
            </button>

            {/* Submit Button */}
            <button className="submit-btn" onClick={() => console.log('Submit clicked!')}>
              Submit
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;