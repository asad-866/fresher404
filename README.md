# Fresher404 🚀

Fresher404 is a scalable resource aggregator designed to help students and freshers find internships, certifications, hackathons, and fellowships without the noise of generic job boards.

## 🌟 Value Proposition & MVP Success Metrics
The goal of the Fresher404 MVP is to provide a clean, community-driven platform. Our target metrics for the MVP launch include:
- Platform live and searchable with **~50+ curated resources**.
- At least **3 contributors onboarded**.
- Active discussions and contributions from communities (LinkedIn, Reddit, Twitter, Medium).
- Initial user feedback gathered via GitHub or embedded forms.

---

## ✨ Features & Functionality

### Core MVP Features
- **Curated Categories:** Dedicated sections for Internships, Certifications, Hackathons, Competitions, and Camps/Fellowships.
- **Smart Tagging & Filtering:** Resources are tagged with attributes like *Remote, Paid, Free, Beginner-friendly, Certificate included, and Team-based* for easy discovery.
- **Community Submissions:** A dedicated /submit portal allowing users to contribute new resources via an embedded form.
- **Responsive UI:** Fully mobile-responsive layout with reusable components (cards, navbars, buttons).

### Interactive Features (Phase 1.5 & Phase 2)
- **Dark Mode:** System-wide dark mode toggle and styled elements.
- **Search:** Real-time search across all resources with tag and category filtering.
- **User Accounts:** Bookmarks and saved resources (/saved), newsletter archives (/newsletter), and roadmap guides (/roadmaps).

---

## 🛠️ Tech Stack
This project follows a clean, scalable full-stack architecture.

### Backend
- **Framework:** FastAPI (Python) for fast, async APIs.
- **Database:** PostgreSQL for structured data storage.
- **ORM & Validation:** SQLAlchemy and Pydantic.

### Frontend
- **Framework:** React + Vite for fast development.
- **Styling:** Tailwind CSS for rapid, utility-first UI design.
- **HTTP Client:** Axios for API communication.

---

## 📂 Project Architecture
fresher404/
├── backend/            # FastAPI + PostgreSQL backend
│   ├── app/
│   │   ├── config/     # db.py, settings.py
│   │   ├── models/     # resource.py, user.py
│   │   ├── routes/     # resource_routes.py, user_routes.py
│   │   ├── schemas/    # resource_schema.py, user_schema.py
│   │   ├── services/   # Business logic layer
│   │   └── utils/      # helpers.py
│   ├── .env
│   └── requirements.txt
├── frontend/           # React + Vite frontend
│   ├── src/
│   │   ├── api/        # axios.js
│   │   ├── components/ # Navbar.tsx, ResourceCard.tsx
│   │   ├── pages/      # Home, Internships, Certifications, etc.
│   │   ├── hooks/      
│   │   └── context/    
│   ├── package.json
│   └── vite.config.js
└── docker-compose.yml  # Optional containerization

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js & npm
- PostgreSQL installed locally

### 1. Database Setup

Create your local database:

CREATE DATABASE fresher404;

Create a .env file in the backend/ directory:

DATABASE_URL=postgresql://postgres:password@localhost:5432/fresher404

### 2. Backend Setup

cd backend
python -m venv venv
# Windows: venv\Scripts\activate | Mac/Linux: source venv/bin/activate
pip install fastapi uvicorn psycopg2-binary sqlalchemy python-dotenv
uvicorn app.main:app --reload

### 3. Frontend Setup

cd frontend
npm install
npm install axios react-router-dom
npm run dev

---

## 🗺️ Sitemap (Top-Level Routes)

- / **(Home):** Project intro, value proposition, featured categories, and top picks.
- /internships: Platforms like Internshala, HelloIntern.
- /certifications: Trusted sites like Coursera, edX, FreeCodeCamp.
- /hackathons: Platforms like Devfolio, MLH, HackerEarth.
- /competitions: Writing contests, biz fests, idea challenges.
- /camps: GSoC, summer programs, fellowships.
- /submit: Community contribution form.
- /about: Mission, story, and team info.

---

## 📅 Development Roadmap (10 Stages)

We are following a strict 10-stage linear workflow to reach MVP:

1. **Planning & Foundation Setup:** Define MVP scope, finalize sitemap, initialize Git/PM tools, and setup frontend/backend boilerplates.
2. **Core Design & Wireframes:** Create lo-fi wireframes, layout grids, and reusable UI components.
3. **Initial Content Drafting:** Collect 10 resources per category and draft page copy.
4. **Frontend Page Structure:** Build static routes, layouts, and sample JSON cards.
5. **Backend Schema & Routes:** Define PostgreSQL schema and setup GET/POST REST endpoints.
6. **Responsive Design & Branding:** Apply design tokens, typography, and mobile responsiveness.
7. **Content Expansion & Filtering:** Add tags logic and connect frontend filters to API.
8. **Interactive Features & Dark Mode:** Implement search, dark mode toggle, and dummy bookmark states.
9. **Testing & Polish:** Refactor code, validate endpoints, and QA microcopy.
10. **Deployment & Feedback:** Deploy full stack, add contribution guidelines, and track user feedback for Phase 2.

---

## 🤝 Contributing

Contributions are the lifeblood of Fresher404! If you want to add a resource, please use the /submit page. For code contributions, please check our upcoming Community Contributor Guide.

## 📄 License

This project is open-source and available under the MIT License.
