
// Add or edit projects here. `featured: true` shows the project on the homepage.
// `id` becomes the URL slug at /projects/:id — keep it lowercase, no spaces.

export const projects = [
  {
    id: "nurtura",
    title: "Nurtura",
    description:
      "A caregiving coordination backend powering secure, real-time collaboration between caregivers.",
    longDescription:
      "Nurtura is a scalable backend for a caregiving coordination platform, built with a modular architecture across six core modules. It exposes secure RESTful APIs for scheduling, communication, and record-keeping between caregivers, with real-time updates powered by WebSockets and a React Native mobile client on top.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    thumbnail: "/projects/nurtura/thumbnail.png",
    images: [
      "/projects/nurtura/1.png",
      "/projects/nurtura/2.png",
      "/projects/nurtura/3.png",
      "/projects/nurtura/4.png",
    ],
    features: [
      "Modular backend architecture across 6 core modules",
      "Secure RESTful APIs with JWT authentication and bcrypt password hashing",
      "Real-time communication via WebSockets",
      "Scheduled tasks and reminders with APScheduler",
      "Gemini AI API integration for smart assistance features",
    ],
    role: "Sole backend engineer, designing the API architecture and data model from scratch.",
    implementation:
      "Built on FastAPI with PostgreSQL, SQLAlchemy, and Alembic for migrations. Authentication uses JWT with bcrypt-hashed passwords. Real-time features run over WebSockets, background jobs are scheduled with APScheduler, and the whole backend is containerized with Docker and deployed on Render. It integrates with a React Native mobile client and the Gemini AI API.",
    challenges: [
      "Designing a modular schema that stayed clean across 6 interdependent modules",
      "Keeping real-time updates reliable across WebSocket connections and scheduled jobs",
    ],
    solutions: [
      "Split the backend into clearly bounded modules with their own models and routers before wiring them together",
      "Used APScheduler alongside WebSocket broadcast events to keep clients in sync without polling",
    ],
    github: "https://github.com/ralphgacusan/nurtura-backend",
    demo: "https://nurtura-backend-zgz8.onrender.com",
    year: "2026",
    featured: true,
  },

  {
    id: "timplato",
    title: "Timplato",
    description:
      "A full-stack Laravel e-commerce platform for a kitchenware business.",
    longDescription:
      "Timplato is a full-stack e-commerce platform built in Laravel for a kitchenware business, covering everything from product browsing to order fulfillment. It includes role-based access control, secure authentication, and full CRUD across products, orders, users, inventory, and content.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    thumbnail: "/projects/timplato/thumbnail.png",
    images: [
      "/projects/timplato/1.png",
      "/projects/timplato/2.png",
      "/projects/timplato/3.png",
      "/projects/timplato/4.png",
      "/projects/timplato/5.png",
      "/projects/timplato/6.png",
      "/projects/timplato/7.png",
      "/projects/timplato/8.png",
    ],
    features: [
      "Role-based access control for admins, staff, and customers",
      "Full CRUD for products, orders, users, inventory, and content",
      "Google OAuth login alongside standard authentication",
      "Online payments through PayMongo",
      "AI-assisted customer support via Tawk.to",
    ],
    role: "Solo full-stack developer, from database design through deployment.",
    implementation:
      "Built with Laravel and MySQL, powering six core shopping features end to end. Integrates Google OAuth for login, PayMongo for payment processing, and Tawk.to for live chat support, deployed on Hostinger.",
    challenges: [
      "Handling role-based permissions cleanly across admin, staff, and customer-facing views",
    ],
    solutions: [
      "Implemented RBAC at the route and policy level so permission logic stayed out of the views",
    ],
    github: "https://github.com/ralphgacusan/timplato",
    demo: "https://timplato-djia.onrender.com/",
    year: "2025",
    featured: true,
  },

  {
    id: "lecture-to-document",
    title: "Lecture-to-Document",
    description:
      "A lecture digitization app that turns photographed slides and notes into editable documents.",
    longDescription:
      "A lecture digitization system that accepts photo uploads, browser camera shots, or images from a Raspberry Pi capture device. A FastAPI backend runs OCR through the Google Vision API, lets users review the text, and exports editable DOCX and PDF documents.",
    technologies: ["Python", "FastAPI", "Firebase"],
    thumbnail: "/projects/lecture-to-document/thumbnail.png",
    images: [
      "/projects/lecture-to-document/1.png",
      "/projects/lecture-to-document/2.png",
      "/projects/lecture-to-document/3.png",
      "/projects/lecture-to-document/4.png",
      "/projects/lecture-to-document/5.png",
      "/projects/lecture-to-document/6.png",
      "/projects/lecture-to-document/7.png",
      "/projects/lecture-to-document/8.png",
    ],
    features: [
      "Three input paths: file upload, in-browser camera, and Raspberry Pi capture",
      "Batch image upload API with duplicate-line removal",
      "Google Vision API OCR with automatic PyTesseract fallback",
      "Firebase-based real-time Raspberry Pi status monitoring and control",
      "Editable text review, then export to DOCX and PDF",
    ],
    role: "Full-stack and systems engineer, covering the Raspberry Pi device, the cloud API and the web interface.",
    implementation:
      "Images arrive by upload, browser camera, or Raspberry Pi and go to a FastAPI backend. It runs OCR via the Google Vision API, falling back to PyTesseract when needed, and removes duplicate lines. Users edit the text before exporting, while Firebase monitors and controls the Pi.",
    challenges: [
      "Keeping OCR reliable when the Vision API was unavailable or rate-limited",
    ],
    solutions: [
      "Added an automatic PyTesseract fallback so document generation never fully blocked on one OCR provider",
    ],
    github: "https://github.com/ralphgacusan/lecture-to-document",
    demo: "https://lecture-to-document-ek6l.onrender.com/",
    year: "2025",
    featured: true,
  },

  {
    id: "pawmilya",
    title: "Pawmilya",
    description:
      "A full-stack Laravel platform for pet adoption, rehoming, and animal welfare services.",
    longDescription:
      "Pawmilya is a full-stack pet adoption platform designed to connect potential adopters with animals while streamlining shelter operations. It provides searchable pet listings, online adoption and rehoming applications, donation and service pages, user accounts, and an administrative panel for managing pets, users, applications, and services.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    thumbnail: "/projects/pawmilya/thumbnail.png",
    images: [
      "/projects/pawmilya/1.png",
      "/projects/pawmilya/2.png",
      "/projects/pawmilya/3.png",
      "/projects/pawmilya/4.png",
      "/projects/pawmilya/5.png",
      "/projects/pawmilya/6.png",
      "/projects/pawmilya/7.png",
      "/projects/pawmilya/8.png",
      "/projects/pawmilya/9.png",
      "/projects/pawmilya/10.png",
      "/projects/pawmilya/11.png",
      "/projects/pawmilya/12.png",
      "/projects/pawmilya/13.png",
      "/projects/pawmilya/14.png",
      "/projects/pawmilya/15.png",
    ],
    features: [
      "Searchable pet listings with detailed animal profiles",
      "Online adoption and rehoming applications",
      "User authentication and account management",
      "Admin panel for managing pets, users, and applications",
      "Donation, volunteering, and animal welfare service pages",
      "Service appointment management",
    ],
    role: "Full-stack developer, contributing to requirements gathering, UI development, database design, backend development, authentication, deployment, and documentation.",
    implementation:
      "Built with Laravel, MySQL, Blade, and JavaScript using controllers, models, migrations, routes, and relational database structures. Implemented authentication, CRUD operations, adoption and rehoming workflows, service appointments, and administrative management. Also handled deployment, environment configuration, and production issues.",
    challenges: [
      "Managing relationships between pets, users, applications, services, and appointments",
      "Keeping frontend forms and backend data structures consistent across multiple workflows",
    ],
    solutions: [
      "Designed relational database structures and connected them through Laravel models and migrations",
      "Aligned routes, controllers, validation, forms, and database fields for consistent end-to-end data handling",
    ],
    github: "https://github.com/ralphgacusan/pawmilya",
    demo: "",
    year: "2025",
    featured: false,
  },

  {
    id: "household-segmentation",
    title: "Household Segmentation & KADIWA Eligibility",
    description:
      "A machine learning pipeline segmenting households and predicting KADIWA program eligibility.",
    longDescription:
      "An end-to-end machine learning pipeline analyzing over 41,000 household records to segment households and predict eligibility for the KADIWA program, integrating PSA agricultural datasets to improve data quality.",
    technologies: ["Python", "SQL"],
    thumbnail: "/projects/household-segmentation/thumbnail.png",
    images: [
      "/projects/household-segmentation/1.png",
      "/projects/household-segmentation/2.png",
      "/projects/household-segmentation/3.png",
      "/projects/household-segmentation/4.png",
      "/projects/household-segmentation/5.png",
    ],
    features: [
      "Preprocessing pipeline for 41,554 household records",
      "30+ engineered features integrating PSA agricultural datasets",
      "Random Forest eligibility prediction model — 91.72% accuracy, 0.972 ROC-AUC",
      "K-Means clustering identifying 4 behavioral household segments",
      "PCA, silhouette, and inertia evaluation for cluster validation",
    ],
    role: "Solo data science project.",
    implementation:
      "Built in Python with Pandas, Scikit-learn, and NumPy. Preprocessed and engineered features across 41,554 household records, integrated PSA agricultural datasets, then trained and evaluated a Random Forest classifier and a K-Means clustering model, validated with PCA, silhouette score, and inertia analysis.",
    challenges: [
      "Engineering features from messy, inconsistently formatted household survey data",
    ],
    solutions: [
      "Built a dedicated preprocessing pipeline with validation steps before any feature engineering or modeling began",
    ],
    github: "https://github.com/ralphgacusan/kadiwa-household-ml",
    demo: "",
    year: "2026",
    featured: false,
  },
];

