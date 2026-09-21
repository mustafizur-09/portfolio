export interface GalleryItem {
  id: string;
  title: string;
  category: "engineering" | "research" | "leadership" | "certifications";
  categoryLabel: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
  demoUrl?: string;
  repoUrl?: string;
  stats?: string;
  isFeatured?: boolean;
  dashboardTitle?: string;
  metrics?: { label: string; value: string }[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: "5",
    title: "University Tech Club Leadership & Campus Hackathons",
    category: "leadership",
    categoryLabel: "# Flagship Leadership Milestone",
    date: "2021 - 2022",
    image: "/gallery/hackathon-lead.jpg",
    description: "Spearheaded campus developer initiatives, organized inter-departmental coding hackathons, directed technical workshops, and mentored 15+ core student developers in algorithmic problem-solving and full-stack software development.",
    tags: ["Tech Community Leadership", "Campus Hackathons", "Team Mentorship", "Event Organization", "Algorithmic Workshops"],
    stats: "500+ Students Impacted",
    link: "/leadership",
    demoUrl: "/leadership",
    repoUrl: "https://github.com/mustafizur-09",
    isFeatured: true,
    metrics: [
      { label: "Community Members Impacted", value: "500+" },
      { label: "Campus Hackathons Spearheaded", value: "3+" },
      { label: "Core Student Developers Mentored", value: "15+" },
    ],
  },
  {
    id: "1",
    title: "Full-Stack Web Architecture & Performance Suite",
    category: "engineering",
    categoryLabel: "# Engineering & Web",
    date: "2026",
    image: "/gallery/web-architecture.jpg",
    dashboardTitle: "Production Web Dashboard",
    description: "Production-grade responsive web systems featuring sub-second load times, optimized asset delivery pipelines, accessible UI components, and modern architecture at Ontek Horizon.",
    tags: ["Next.js", "HTML", "CSS", "JavaScript", "WordPress", "Web Performance"],
    stats: "Sub-second Load",
    link: "/#experience",
    demoUrl: "https://ontekhorizon.com",
    repoUrl: "https://github.com/mustafizur-09",
  },
  {
    id: "2",
    title: "Spatio-Temporal Graph CNN (ST-GCN) Action Recognition",
    category: "research",
    categoryLabel: "# AI & Research",
    date: "2023 - 2026",
    image: "/gallery/st-gcn-research.jpg",
    dashboardTitle: "PyTorch Deep Learning Model",
    description: "Deep learning research leveraging graph convolutional neural networks to model skeletal movement trajectories for medical action classification and healthcare automation.",
    tags: ["Python", "PyTorch", "ST-GCN", "Computer Vision", "Graph CNN"],
    stats: "Thesis Research",
    link: "/about#research",
    demoUrl: "/about#research",
    repoUrl: "https://github.com/mustafizur-09",
  },
  {
    id: "3",
    title: "Leaf Disease Detection CNN & Computer Vision Pipeline",
    category: "research",
    categoryLabel: "# AI & Research",
    date: "2025",
    image: "/gallery/leaf-disease.jpg",
    dashboardTitle: "Plant Pathology Vision Model",
    description: "Convolutional Neural Network system trained on plant imagery datasets to diagnose plant pathologies in early stages with high classification accuracy.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    stats: "Deep Learning",
    link: "/about#projects",
    demoUrl: "/about#projects",
    repoUrl: "https://github.com/mustafizur-09",
  },
  {
    id: "4",
    title: "Software Quality Assurance & STLC Automation Suite",
    category: "engineering",
    categoryLabel: "# Engineering & SQA",
    date: "2026",
    image: "/gallery/sqa-testing.jpg",
    dashboardTitle: "STLC Regression QA Suite",
    description: "Comprehensive test suites incorporating functional, usability, and regression test verification frameworks built during SQA training at RiseUp Labs.",
    tags: ["SQA", "Regression Testing", "STLC", "Bug Tracking", "Test Execution"],
    stats: "Zero-defect QA",
    link: "/#experience",
    demoUrl: "/#experience",
    repoUrl: "https://github.com/mustafizur-09",
  },
  {
    id: "6",
    title: "B.Sc. in Computer Science & Engineering - BAUET",
    category: "certifications",
    categoryLabel: "# Academic Milestone",
    date: "Graduated",
    image: "/gallery/bauet-convocation.jpg",
    dashboardTitle: "Academic Degree & Thesis",
    description: "Rigorous academic curriculum covering algorithmic foundations, operating systems, data structures, software engineering lifecycle, and AI research.",
    tags: ["Computer Science", "Algorithms", "BAUET", "Academics"],
    stats: "Engineering Graduate",
    link: "/about",
    demoUrl: "/about",
    repoUrl: "https://github.com/mustafizur-09",
  },
];
