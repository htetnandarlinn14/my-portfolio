/**
 * portfolioData.js
 * ---------------------------------------------------------------
 * ALL of the website content lives in this one file.
 * To update the portfolio, edit the values below — you rarely need
 * to touch any component file.
 */

// ===== Profile / Hero =====
export const profile = {
  name: "Htet Nandar Linn",
  /***** Professional title *****/
  title: "IT Student | Aspiring Web Developer",
  location: "Yangon, Myanmar",
  email: "htetnandarlinn14@gmail.com",
  // Displayed phone number vs. the value used inside the tel: link
  phone: "+959 752479443",
  phoneLink: "+959752479443",
  github: "https://github.com/htetnandarlinn14",
  // Replace this file with a new photo if you ever change your picture.
  imageSrc: "/images/profile.jpg",
  imageAlt: "Portrait of Htet Nandar Linn",
  // Short hero introduction (keep it truthful and editable).
  intro:
    "I'm an IT student and aspiring web developer based in Yangon, Myanmar. I'm interested in how web applications are built and structured — from a clean interface to the software architecture behind it — and I enjoy creating practical tools that are genuinely useful to the people who use them.",
  // Small pill shown next to the hero (matches the stated purpose of the site).
  availability: "Open to internship & junior developer roles",
};

// ===== Navigation links (used by the navbar and footer) =====
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

// ===== About Me =====
export const about = {
  paragraphs: [
    "I'm currently studying for a Bachelor of Computer Science (B.C.Sc.) at the University of Computer Studies, Meiktila, and I expect to graduate in 2027. Alongside my coursework, I practise web development by building small projects with PHP, JavaScript, and React.",
    "I'm especially interested in software engineering fundamentals — object-oriented programming, the MVC pattern, and Domain-Driven Design — and in writing code that stays readable as a project grows. My goal is to gain internship or junior developer experience where I can keep learning from real codebases and contribute to applications that are well built and genuinely useful.",
  ],
};

// ===== Technical Skills =====
// One flat list rendered as a unified "Skills & Abilities" grid.
// `icon` is a react-icons component, `color` is the official brand color.
// Add or remove entries freely — the UI adapts.
import {
  SiPhp,
  SiLaravel,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiVite,
  SiPostman,
  SiFigma,
  SiGit,
} from "react-icons/si";

export const skills = {
  note: "Technologies and tools I have learned and used in coursework and personal projects. I'm continuing to build depth in each of them.",
  list: [
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "GitHub", icon: SiGithub, color: "#F8FFFC" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ],
};

// ===== Projects =====
// `demoUrl` / `repoUrl` are null until a real, confirmed URL exists.
// While they are null the card links to the GitHub profile instead of
// inventing a repository link.
export const projects = [
  {
    id: 1,
    title: "Media Library Management System",
    description:
      "A library management application organized into modules for catalog management, reservations, invoices, and notifications. The project explores object-oriented programming, the MVC pattern, and separation of application responsibilities.",
    imageSrc: "/placeholders/project-placeholder.svg",
    technologies: ["PHP", "MySQL", "MVC", "Object-Oriented Programming"],
    demoUrl: null,
    repoUrl: null,
  },
  {
    id: 2,
    title: "Grape Cultivation Advisory Chat System",
    description:
      "An advisory chat system concept designed to help users access grape cultivation guidance. The application follows Domain-Driven Design (DDD) concepts to organize business rules and application responsibilities.",
    imageSrc: "/placeholders/project-placeholder.svg",
    technologies: ["PHP", "MySQL", "JavaScript", "Domain-Driven Design (DDD)"],
    demoUrl: null,
    repoUrl: null,
  },
];

// ===== Education =====
export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science (B.C.Sc.)",
    institution: "University of Computer Studies, Meiktila",
    location: "Meiktila, Myanmar",
    period: "Expected graduation: 2027",
    status: "In progress",
  },
];

// ===== Experience =====
// Optional section. It stays hidden while this list is empty, because no
// employment experience has been provided (nothing is invented).
export const experience = [];

// ===== Contact =====
export const contact = {
  heading: "Let's work together",
  subheading:
    "I'm currently looking for internship and junior developer opportunities. If you'd like to get in touch, email and phone are the fastest ways to reach me.",
};

// ===== Social / contact links =====
// Give a link a real `href` to make it clickable. `icon` matches a key in
// the icon map inside the Contact and Footer components.
export const socialLinks = [
  {
    id: 1,
    name: "Email",
    icon: "mail",
    href: "mailto:htetnandarlinn14@gmail.com",
    value: "htetnandarlinn14@gmail.com",
  },
  {
    id: 2,
    name: "Phone",
    icon: "phone",
    href: "tel:+959752479443",
    value: "+959 752479443",
  },
  {
    id: 3,
    name: "GitHub",
    icon: "github",
    href: "https://github.com/htetnandarlinn14",
    value: "github.com/htetnandarlinn14",
  },
];
