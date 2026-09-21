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
  stats?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Full-Stack Web Architecture & Performance Optimization",
    category: "engineering",
    categoryLabel: "# Engineering",
    date: "2026",
    image: "/gallery/web-architecture.jpg",
    description: "Production-grade responsive web systems featuring sub-second load times, optimized asset delivery pipelines, accessible UI components, and modern architecture at Ontek Horizon.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress", "Web Performance"],
    stats: "Sub-second Load",
    link: "/#experience",
  },
  {
    id: "2",
    title: "Spatio-Temporal Graph CNN (ST-GCN) Action Recognition",
    category: "research",
    categoryLabel: "# AI & Research",
    date: "2023 - 2026",
    image: "/gallery/st-gcn-research.jpg",
    description: "Deep learning research leveraging graph convolutional neural networks to model skeletal movement trajectories for medical action classification and healthcare automation.",
    tags: ["PyTorch", "ST-GCN", "Computer Vision", "Graph CNN"],
    stats: "Thesis Research",
    link: "/#more",
  },
  {
    id: "3",
    title: "Leaf Disease Detection CNN & Computer Vision Pipeline",
    category: "research",
    categoryLabel: "# AI & Research",
    date: "2025",
    image: "/gallery/leaf-disease.jpg",
    description: "Convolutional Neural Network system trained on plant imagery datasets to diagnose plant pathologies in early stages with high classification accuracy.",
    tags: ["TensorFlow", "Keras", "OpenCV", "CNN"],
    stats: "Deep Learning",
    link: "/#more",
  },
  {
    id: "4",
    title: "Software Quality Assurance & STLC Automation Suite",
    category: "engineering",
    categoryLabel: "# Engineering",
    date: "2026",
    image: "/gallery/sqa-testing.jpg",
    description: "Comprehensive test suites incorporating functional, usability, and regression test verification frameworks built during SQA training at RiseUp Labs.",
    tags: ["SQA", "Regression Testing", "STLC", "Bug Tracking"],
    stats: "Zero-defect QA",
    link: "/#experience",
  },
  {
    id: "5",
    title: "University Tech Club Leadership & Campus Hackathons",
    category: "leadership",
    categoryLabel: "# Leadership",
    date: "2021 - 2022",
    image: "/gallery/hackathon-lead.jpg",
    description: "Led student developer teams, hosted university-level coding competitions, coordinated algorithmic problem-solving workshops, and mentored junior programmers.",
    tags: ["Team Leadership", "Mentorship", "Community", "Workshops"],
    stats: "15+ Members Led",
    link: "/#more",
  },
  {
    id: "6",
    title: "B.Sc. in Computer Science & Engineering - BAUET",
    category: "certifications",
    categoryLabel: "# Certifications",
    date: "Graduated",
    image: "/gallery/bauet-convocation.jpg",
    description: "Rigorous academic curriculum covering algorithmic foundations, operating systems, data structures, software engineering lifecycle, and AI research.",
    tags: ["Computer Science", "Algorithms", "BAUET", "Academics"],
    stats: "Engineering Graduate",
    link: "/about",
  },
];
