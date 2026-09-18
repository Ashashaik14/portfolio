// UI/UX Portfolio Data — SHAIK GANNARAM ASHABI
export const personalInfo = {
  name: "SHAIK GANNARAM ASHABI",
  firstName: "Ashabi",
  title: "Junior UI/UX Designer",
  bio: "Designing clean, intuitive and responsive digital experiences with a focus on usability, visual consistency and user needs.",
  skillsPills: ["Figma", "Canva", "UI/UX", "HTML", "CSS", "Responsive Design"],
  status: "Available for UI/UX Designer roles",
  email: "ashagannaram@gmail.com",
  linkedIn: "https://www.linkedin.com/in/asha-shaik-b28b62340/",
  github: "https://github.com/Ashashaik14",
  figmaProfile: "https://figma.com/@ashabidesign",
  location: "Hyderabad, India"
};

export const aboutData = {
  heading: "About Me",
  intro: "I am Shaik Gannaram Ashabi, a final-year engineering student with an interest in UI/UX design, product design and data-driven digital experiences. I enjoy transforming complex ideas into simple, intuitive and visually consistent interfaces. I use Figma and Canva for UI design and have basic knowledge of HTML and CSS to understand responsive web layouts.",
  focusAreas: [
    {
      id: "user-centered",
      title: "User-Centered Design",
      description: "Creating interfaces that are simple and easy to understand.",
      tag: "UX Foundation"
    },
    {
      id: "visual-design",
      title: "Visual Design",
      description: "Typography, spacing, colors, hierarchy and consistency.",
      tag: "Craft & Aesthetics"
    },
    {
      id: "responsive-design",
      title: "Responsive Design",
      description: "Designing experiences for desktop, tablet and mobile devices.",
      tag: "Multi-Device"
    },
    {
      id: "product-thinking",
      title: "Product Thinking",
      description: "Understanding the user problem before designing the solution.",
      tag: "Strategy & Impact"
    }
  ]
};

export const skillsData = {
  heading: "Skills",
  categories: [
    {
      name: "Design Skills",
      description: "Core interaction & visual design methodologies",
      skills: [
        "UI Design",
        "UX Design",
        "Wireframing",
        "User Flows",
        "Prototyping",
        "Responsive Design",
        "Visual Hierarchy",
        "Design Systems"
      ]
    },
    {
      name: "Tools",
      description: "Industry-standard design applications",
      skills: [
        "Figma",
        "Canva"
      ]
    },
    {
      name: "Technical Knowledge",
      description: "Basic web fundamentals for seamless developer handoff",
      note: "Basic HTML & CSS knowledge to understand web structure, responsive layout principles, and collaborate effectively with frontend engineers.",
      skills: [
        "HTML",
        "CSS",
        "Basic JavaScript"
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "healthcare-system",
    number: "01",
    title: "AI Healthcare Management System",
    subtitle: "Healthcare Dashboard & Management Interface",
    role: "UI/UX Designer / Project Designer",
    tools: ["Figma", "Canva", "HTML", "CSS"],
    tagline: "Redesigned a healthcare management interface to make patient information, appointments, records and reports easier to access and understand.",
    mainScreens: [
      "Login",
      "Dashboard",
      "Patient Information",
      "Appointments",
      "Medical Records",
      "Reports",
      "Profile",
      "Navigation"
    ],
    problem: {
      statement: "Healthcare management systems can contain large amounts of information, making it difficult for users to quickly find important patient details, appointments and records.",
      goals: [
        "Quickly access patient information",
        "View upcoming appointments",
        "Navigate between different sections",
        "Understand important information at a glance",
        "Access reports easily"
      ]
    },
    userFlow: {
      focus: "Simplified navigation, clear information hierarchy and easy access to frequently used healthcare information.",
      paths: [
        {
          title: "Patient Deep-Dive Flow",
          steps: ["LOGIN", "DASHBOARD", "PATIENTS", "PATIENT PROFILE"],
          branches: ["Medical Records", "Appointments", "Reports"]
        },
        {
          title: "Core Portal Navigation",
          steps: ["LOGIN", "DASHBOARD"],
          branches: ["Patients", "Appointments", "Records", "Reports", "Profile"]
        }
      ]
    },
    wireframe: {
      concept: "Low-Fidelity Black & White Structure",
      description: "Focusing on layout balance, content density, and rapid scanning before any visual styling.",
      elements: [
        "Top Nav: Logo | Global Search | Staff Profile",
        "Hero Banner: Welcome, Ashabi",
        "Primary Action Split: Patients | Appointments",
        "Recent Patients Panel: Patient 1, Patient 2 quick list with vital badges",
        "Quick Tab Switcher: Dashboard | Patients | More"
      ]
    },
    finalUi: {
      stats: [
        { label: "Total Patients", value: "2,840", change: "+12% this month", highlight: true },
        { label: "Today's Appointments", value: "18", change: "4 in progress", highlight: false },
        { label: "Pending Reports", value: "7", change: "Requires review", highlight: false },
        { label: "Completed Visits", value: "142", change: "98% on schedule", highlight: false }
      ],
      recentPatients: [
        { id: "P-8821", name: "Sarah Jenkins", age: "34", condition: "Routine Cardiology", status: "Checked In", time: "10:30 AM" },
        { id: "P-8822", name: "David Chen", age: "48", condition: "Post-Op Follow-up", status: "In Consultation", time: "11:15 AM" },
        { id: "P-8823", name: "Priya Sharma", age: "29", condition: "Annual Wellness", status: "Scheduled", time: "01:00 PM" },
        { id: "P-8824", name: "Marcus Miller", age: "56", condition: "Endocrinology Review", status: "Scheduled", time: "02:30 PM" }
      ],
      upcomingAppointments: [
        { patient: "Dr. Alena Vance with Sarah Jenkins", room: "Room 304 - Cardio", time: "10:30 AM", type: "In-Person" },
        { patient: "Dr. Rohit Gupta with David Chen", room: "Room 108 - Surgery", time: "11:15 AM", type: "Follow-up" },
        { patient: "Dr. Alena Vance with Priya Sharma", room: "Telehealth Room 2", time: "01:00 PM", type: "Remote" }
      ]
    },
    responsive: {
      explanation: "The healthcare dashboard was designed with responsive layouts so that essential information remains accessible across different screen sizes.",
      devices: [
        { name: "Desktop", width: "1440px", note: "Multi-column dashboard with persistent navigation sidebar and expansive telemetry." },
        { name: "Tablet", width: "768px", note: "Adaptive 2-column layout with icon sidebar and collapsible patient queues." },
        { name: "Mobile", width: "390px", note: "Single-column stacked view with bottom sheet navigation and priority alert cards." }
      ]
    }
  },
  {
    id: "customer-system",
    number: "02",
    title: "AI-Driven Customer System",
    subtitle: "Customer Analytics & Management Interface",
    role: "UI/UX Designer / Interface Designer",
    tools: ["Figma", "Canva", "HTML", "CSS"],
    tagline: "Redesigned the existing customer-focused interface into a cleaner and more structured web experience, focusing on information hierarchy, navigation and responsive layouts.",
    mainScreens: [
      "Landing Page",
      "Login",
      "Dashboard",
      "Customer Overview",
      "Customer Details",
      "Analytics",
      "Reports",
      "Profile"
    ],
    problem: {
      statement: "Customer-focused applications may contain multiple types of information, making it important to organize data clearly and provide simple navigation.",
      goals: [
        "Understand customer information quickly",
        "Navigate between sections easily",
        "View important metrics",
        "Access reports",
        "Interact with information without unnecessary complexity"
      ]
    },
    userFlow: {
      focus: "Linear, friction-free progression from authentication to deep customer insights and exportable reporting.",
      paths: [
        {
          title: "End-to-End Customer Journey",
          steps: ["LOGIN", "DASHBOARD", "CUSTOMERS", "CUSTOMER PROFILE", "ANALYTICS", "REPORTS"],
          branches: []
        }
      ]
    },
    finalUi: {
      stats: [
        { label: "Total Customers", value: "14,250", change: "+14.8%", highlight: true },
        { label: "Active Customers", value: "9,820", change: "68.9% engagement", highlight: false },
        { label: "New Customers", value: "412", change: "+24 this week", highlight: false },
        { label: "Customer Activity", value: "99.4%", change: "Healthy retention", highlight: false }
      ],
      customerList: [
        { name: "Acme Cloud Corp", contact: "Alex Rivera", status: "Active", activity: "Logged in 12m ago", ltv: "$24,500" },
        { name: "Nova Fintech Solutions", contact: "Emily Watson", status: "Active", activity: "Generated invoice 1h ago", ltv: "$18,200" },
        { name: "BlueSky Logistics", contact: "Rahul Mehra", status: "Onboarding", activity: "Setup completed", ltv: "$9,400" },
        { name: "Apex Dynamics", contact: "Elena Rostova", status: "Pending Review", activity: "License renewal", ltv: "$31,000" }
      ]
    },
    responsive: {
      explanation: "Adaptive layouts built for customer success teams on the move, with fluid transitions across Desktop, Tablet, and Mobile.",
      features: [
        "Collapsible navigation sidebar for tablet and mobile devices",
        "Responsive cards that reflow from 4-grid to 2-grid to single column",
        "Responsive tables with horizontal scroll and priority column pinning",
        "Mobile-friendly touch targets with minimum 44px hit areas",
        "Proper spacing and proportional typography for small viewports"
      ]
    }
  },
  {
    id: "movie-prediction",
    number: "03",
    title: "Movie Success Prediction",
    subtitle: "Movie Analytics & Prediction Dashboard",
    role: "UI/UX Designer / Dashboard Designer",
    tools: ["Figma", "Canva", "HTML", "CSS"],
    tagline: "Designed a simple analytics interface for exploring movie information and presenting prediction results in a clear and understandable format.",
    problem: {
      statement: "Prediction and analytics interfaces can become difficult to understand when too much technical information is displayed at once.",
      goals: [
        "Present movie information and prediction results in a simple, visually understandable dashboard.",
        "Remove statistical clutter and replace it with digestible outcome cards.",
        "Enable seamless parameter inputs without overwhelming the creator."
      ]
    },
    userFlow: {
      focus: "Straightforward prediction pipeline from query definition to visual metric analysis.",
      paths: [
        {
          title: "Predictive Analytics Flow",
          steps: ["HOME", "MOVIE INFORMATION", "ENTER MOVIE DETAILS", "PREDICT", "RESULT", "ANALYTICS"],
          branches: []
        }
      ]
    },
    inputScreen: {
      title: "Movie Prediction Input",
      fields: [
        { name: "Movie Name", placeholder: "e.g., Inception Horizon", defaultVal: "Vanguard Odyssey" },
        { name: "Genre", placeholder: "Action, Sci-Fi, Drama", defaultVal: "Action / Sci-Fi" },
        { name: "Director", placeholder: "e.g., Christopher Nolan", defaultVal: "Christopher Nolan" },
        { name: "Lead Actor", placeholder: "e.g., Leonardo DiCaprio", defaultVal: "Leonardo DiCaprio" },
        { name: "Budget", placeholder: "₹65 Cr", defaultVal: "₹65 Cr" },
        { name: "Release Year", placeholder: "2026", defaultVal: "2026" }
      ],
      buttonText: "Predict Success"
    },
    resultsScreen: {
      predictedOutcome: "High Box-Office Potential (Hit)",
      summary: "Positive historical performance correlation across genre-director pairing and budget allocation tier.",
      movie: "Vanguard Odyssey",
      genre: "Action / Sci-Fi",
      budget: "₹65 Cr",
      releaseYear: "2026",
      indicators: [
        { metric: "Historical Genre Alignment", score: "88/100", status: "Optimal" },
        { metric: "Director Track Record", score: "91/100", status: "High Impact" },
        { metric: "Budget-to-Screen Ratio", score: "84/100", status: "Balanced" }
      ]
    },
    analytics: {
      title: "Movie Analytics Dashboard",
      highlights: [
        { label: "Movie Trends", detail: "Growing demand for high-concept sci-fi and character-driven thrillers." },
        { label: "Genre Distribution", detail: "Action (36%), Drama (28%), Comedy (18%), Sci-Fi (18%)." },
        { label: "Budget Comparison", detail: "Mid-to-high tier budgets (₹40-80 Cr) show highest recovery ratio." },
        { label: "Performance Metrics", detail: "Clear correlation with premiere screen density and teaser engagement." }
      ]
    }
  }
];

export const designProcessData = {
  heading: "My Design Process",
  intro: "A human-centered, iterative approach that bridges research, structured wireframing, polished visual design, and real user feedback.",
  steps: [
    {
      number: "01",
      name: "Understand",
      description: "Identify the user problem and project requirements.",
      details: "Ask questions, conduct stakeholder kickoff sessions, and define what problem we are truly solving before drawing a single frame."
    },
    {
      number: "02",
      name: "Research",
      description: "Study target users, domain behaviors and design references.",
      details: "Analyze competitor patterns, user behavior data, and accessibility requirements to form a reliable foundation."
    },
    {
      number: "03",
      name: "Define",
      description: "Determine the target user and main objectives.",
      details: "Establish user personas, key functional flows, and measurable UX success metrics."
    },
    {
      number: "04",
      name: "Wireframe",
      description: "Create the basic structure before visual styling.",
      details: "Craft low-fidelity wireframes in Figma to lock down information architecture and visual hierarchy without color distractions."
    },
    {
      number: "05",
      name: "Design",
      description: "Build the final interface in Figma.",
      details: "Apply design tokens, typography scales, cohesive color palettes, and micro-interactions for high-fidelity appeal."
    },
    {
      number: "06",
      name: "Prototype",
      description: "Connect screens and interactions.",
      details: "Link screens using Figma prototyping triggers to simulate realistic transitions, modals, and user pathways."
    },
    {
      number: "07",
      name: "Test",
      description: "Review the design from a user's perspective.",
      details: "Perform usability walkthroughs, evaluate task completion speeds, and locate cognitive friction points."
    },
    {
      number: "08",
      name: "Iterate",
      description: "Improve the interface based on feedback and usability observations.",
      details: "Refine layouts, tighten spacing, adjust typography, and validate the refined solution."
    }
  ]
};

export const figmaSkillsData = {
  heading: "Figma Skills",
  intro: "Leveraging Figma's powerful feature ecosystem to create robust, modular, and developer-ready design assets.",
  skills: [
    {
      title: "Wireframing",
      description: "Creating low-fidelity layouts.",
      details: "Rapid low-fi ideation to test information architecture, layout balance, and hierarchy.",
      badge: "Core Workflow"
    },
    {
      title: "Auto Layout",
      description: "Creating flexible and consistent layouts.",
      details: "Harnessing direction, padding, gap, and hug/fill constraints for genuinely fluid components.",
      badge: "Flexibility"
    },
    {
      title: "Components",
      description: "Creating reusable UI elements.",
      details: "Building master components with variants, properties, and boolean toggles for modular consistency.",
      badge: "Modularity"
    },
    {
      title: "Prototyping",
      description: "Connecting screens and interactions.",
      details: "Crafting interactive user journeys with smart animate, interactive components, and overlays.",
      badge: "Interaction"
    },
    {
      title: "Design Systems",
      description: "Maintaining consistent colors, typography and components.",
      details: "Managing shared color palettes, typography scales, spacing tokens, and asset libraries.",
      badge: "Scalability"
    },
    {
      title: "Responsive Design",
      description: "Adapting interfaces to different screen sizes.",
      details: "Designing device-specific layouts from desktop (1440px) to tablet (768px) and mobile (390px).",
      badge: "Adaptive"
    }
  ]
};

export const designSystemData = {
  heading: "Design System",
  intro: "A cohesive UI system engineered for consistency, visual clarity, and accessible digital interactions.",
  typography: [
    { label: "Heading", font: "Inter", weight: "Bold", size: "32px", sample: "Clean, Intuitive Digital Experiences" },
    { label: "Subheading", font: "Inter", weight: "Semi Bold", size: "20px", sample: "Designing with Clarity & Empathy" },
    { label: "Body", font: "Inter", weight: "Regular", size: "16px", sample: "Transforming complex ideas into simple, structured user interfaces." },
    { label: "Caption", font: "Inter", weight: "Regular", size: "14px", sample: "Updated 5 mins ago • Accessible across all platforms" }
  ],
  colors: [
    { name: "Primary", hex: "#4F46E5", role: "Key actions, focus states & active links", textColor: "#FFFFFF" },
    { name: "Background", hex: "#F8FAFC", role: "Page canvas & clean foundational surfaces", textColor: "#111827" },
    { name: "Text", hex: "#111827", role: "High-contrast primary headers & titles", textColor: "#FFFFFF" },
    { name: "Secondary Text", hex: "#6B7280", role: "Subheadings, supporting metadata & body copy", textColor: "#FFFFFF" },
    { name: "Border", hex: "#E5E7EB", role: "Card outlines, separators & input outlines", textColor: "#111827" }
  ],
  components: [
    "Primary Button",
    "Secondary Button",
    "Input Field",
    "Search Bar",
    "Card",
    "Navigation",
    "Dropdown",
    "Modal"
  ]
};

export const responsiveShowcaseData = {
  heading: "Designed for Every Screen",
  quote: "I design interfaces that maintain usability, hierarchy and consistency across desktop, tablet and mobile experiences.",
  devices: [
    {
      type: "Desktop",
      dimensions: "1440 × 900",
      description: "Expansive layouts with side navigation, detailed telemetry, and multi-column information grids.",
      badge: "Desktop Experience"
    },
    {
      type: "Tablet",
      dimensions: "768 × 1024",
      description: "Balanced touch-first layout with collapsible sidebars and responsive card reflow.",
      badge: "Tablet Experience"
    },
    {
      type: "Mobile",
      dimensions: "390 × 844",
      description: "Single-column hierarchy, thumb-friendly tap targets, and streamlined bottom navigation.",
      badge: "Mobile Experience"
    }
  ]
};

export const htmlCssData = {
  heading: "Design + Development Awareness",
  statement: "I have basic knowledge of HTML and CSS, which helps me understand how UI designs are translated into responsive web interfaces and communicate effectively with developers.",
  html: [
    "Semantic structure",
    "Forms",
    "Basic accessibility"
  ],
  css: [
    "Flexbox",
    "Grid",
    "Responsive layouts",
    "Media queries",
    "Basic styling"
  ]
};
