"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Smartphone, Globe, Server, Zap, Award, Calendar, Download, DraftingCompass, ChartNetwork, Webhook, Puzzle, ServerCog, ShipWheel, Container, DatabaseZap } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState<any>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev:any) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
  { 
    name: 'React', 
    icon: <ChartNetwork className="w-6 h-6 text-blue-400" />,
    description: 'Building dynamic and responsive user interfaces with component-based architecture with state management and hooks'
  },
  { 
    name: 'Next JS', 
    icon: <Webhook className="w-6 h-6 text-white" />,
    description: 'Creating server-side rendered and static web applications with optimized performance and SEO '
  },
   { 
    name: 'Tailwind CSS', 
    icon: <DraftingCompass className="w-6 h-6 text-cyan-400" />,
    description: 'Crafting modern, responsive designs with utility-first plugins for rapid UI development'
  },
  { 
    name: 'Nx Workspace', 
    icon: <Puzzle className="w-6 h-6 text-blue-900" />,
    description: 'Managing monorepos with efficient build tools and scalable architecture'
  },
  { 
    name: 'Nest js', 
    icon: <Server className="w-6 h-6 text-green-700" />,
    description: 'Developing scalable backend services and APIs with JavaScript'
  },
  { 
    name: 'MongoDB', 
    icon: <DatabaseZap className="w-6 h-6 text-green-400" />,
    description: 'Working with NoSQL databases for flexible and scalable data storage'
  },
  { 
    name: 'SQL', 
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    description: 'Designing and querying relational databases for structured data management'
  },
  { 
    name: 'Kubernetes', 
    icon: <ShipWheel className="w-6 h-6 text-blue-500" />,
    description: 'Orchestrating containerized applications for high availability and scalability'
  },
  { 
    name: 'Docker', 
    icon: <Container className="w-6 h-6 text-blue-300" />,
    description: 'Containerizing applications for consistent development and deployment'
  },
  { 
    name: 'C# .NET Core', 
    icon: <ServerCog className="w-6 h-6 text-purple-700" />,
    description: 'Developing robust, cross-platform applications and APIs with modern .NET framework'
  }
];

  const projects = [
  {
    title: "cherishchum.com - SaaS Product",
    description: "Complete parent-child platform with child health tracker, filtered web content for children, parent advice, and communication with secure memories storage.",
    tech: ["Next.js", "Redux", "MongoDB", "NestJS", "Vercel", "Storj", ".NET Core", "SQL"],
    liveUrl: "https://cherishchum.com",
    githubUrl: "#"
  },
  {
    title: "avishkarinfra.com",
    description: "Optimized intro website for client with admin CMS content for business recognition and exposure, daily blogs, and optimized SEO.",
    tech: ["Next.js", "Next.js API", "WordPress CMS", "Motion Framer", "Shadcn"],
    liveUrl: "https://www.avishkarinfra.com/",
    githubUrl: "#"
  },
  {
    title: "likhasi.com - Online Book Library",
    description: "Online platform for writers and readers with real-time ranking to help and grow the writers.",
    tech: ["React", "Firebase", "Vercel", "Redux", "MongoDB", "Firebase Cron Job"],
    liveUrl: "https://likhasi.com",
    githubUrl: "#"
  }
];

 const experience = [
  {
    title: "Software Engineer",
    company: "CogitX, Pune",
    period: "Apr 2025 - Present",
    description: "Driving full-stack development and DevOps initiatives to deliver scalable, cost-efficient web solutions. Focused on optimizing system performance, automating workflows, and enhancing cloud infrastructure for high-performance applications.",
    achievements: [
      "Designed and implemented scalable features using React, Next.js, NestJS, .NET Core, and MongoDB, reducing third-party dependencies by 30% and operational costs",
      "Automated CI/CD pipelines, reducing deployment time by 40%, and migrated applications to Azure AKS, Kubernetes, and load balancers for cost efficiency",
      "Enhanced platform performance through SEO improvements, achieving 15% traffic growth, and implemented responsive design",
      "Developed RESTful APIs and microservices, improving data processing efficiency and scalability",
      "Built automation tools for certificate generation and CMS backups, saving 10+ hours weekly in manual effort"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Styava Pvt. Ltd., Pune",
    period: "Mar 2023 - Apr 2025",
    description: "Developed the IQ Rush Learning Platform, leveraging expertise in frontend and backend technologies to deliver scalable, high-performance web solutions. Implemented DevOps practices to optimize development workflows and enhanced data visualization for business insights.",
    achievements: [
      "Delivered three versions of the IQ Rush Learning Platform using NestJS, Three.js, and .NET practices",
      "Established Nx Workspace architecture and Redux store, reducing developer onboarding and setup time",
      "Developed financial dashboards and reports for Yuhh, improving data-driven decision-making",
      "Applied Clean Architecture principles in backend development with .NET Core and NestJS",
      "Contributed to API security and server-side architecture for scalable distributed systems"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Allez Brandworks, Akurdi",
    period: "June 2022 - Feb 2023",
    description: "Built mobile-optimized, client-facing web applications using modern frontend technologies. Focused on performance optimization and collaborated with cross-functional teams to deliver brand-consistent digital experiences.",
    achievements: [
      "Developed 11 client-facing, mobile-optimized web apps using React, Bootstrap, and HTML/CSS",
      "Improved page load times by 15% through bug fixes and frontend optimization techniques",
      "Ensured brand-consistent digital experiences through effective team collaboration"
    ]
  },
 
];
  const ScrollToSection = ({ targetId, children }:any) => {
    const scrollTo = () => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
      <button onClick={scrollTo} className="transition-all duration-300 hover:scale-105">
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black  text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              Sourabh Davari
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <ScrollToSection key={item} targetId={item.toLowerCase()}>
                  <span className={`hover:text-teal-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-gray-300'
                  }`}>
                    {item}
                  </span>
                </ScrollToSection>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black  animate-pulse"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-green-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold">SO</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Sourabh Davari
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">Software Engineer & Full Stack Developer</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate about creating innovative solutions with modern technologies. 
              Specializing in Scalable Full stack development and cloud architecture.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:sourabh.Davari@example.com" className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <button className="border border-teal-400 hover:bg-teal-400/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>

          <ScrollToSection targetId="about">
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-teal-400" />
          </ScrollToSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible?.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate Software Engineer with expertise in full-stack development, 
                  scalable applications, and cloud technologies. With a strong foundation in both 
                  frontend and backend technologies, I create scalable, user-friendly solutions 
                  that drive business growth.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  My journey in tech has led me to work on diverse projects from e-commerce 
                  platforms,Event Platform, Server-Less to AI applications, always focusing on clean code, optimal 
                  performance, and exceptional user experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-teal-400">
                    <MapPin className="w-5 h-5" />
                    <span>Pune, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-teal-400">
                    <Mail className="w-5 h-5" />
                    <span>sourabhdavarisoftwareengineer@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black  p-6 rounded-xl border border-teal-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-6 h-6 text-teal-400" />
                    <h3 className="text-xl font-semibold">Full Stack Development</h3>
                  </div>
                  <p className="text-gray-300">React,Next.js, Nest.js, .NET, MongoDB, SQL</p>
                </div>
                {/* <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black  p-6 rounded-xl border border-teal-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="w-6 h-6 text-teal-400" />
                    <h3 className="text-xl font-semibold">Mobile Development</h3>
                  </div>
                  <p className="text-gray-300">Flutter, React Native, iOS, Android</p>
                </div> */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black  p-6 rounded-xl border border-teal-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-teal-400" />
                    <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
                  </div>
                  <p className="text-gray-300">Azure, Docker, Kubernetes, CI/CD, FIREBASE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
       <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black/20 to-black/40">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 via-green-400 to-red-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-gradient-to-r from-teal-500/10 to-green-500/10 p-6 rounded-xl border border-teal-500/20 
                hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <span className="text-xl font-semibold text-white">{skill.name}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Projects Section */}
       <section id="projects" className="py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="transition-all duration-1000"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible.projects ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md flex flex-col h-full p-8 rounded-2xl border border-white/10 hover:border-teal-400/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:scale-102"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.projects ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <div className='h-96'>

                <h3 className="text-2xl font-bold mb-6 text-teal-300 bg-gradient-to-r from-teal-400/50 to-teal-500/50 bg-clip-text">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-teal-400/10 text-teal-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-400/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </div>
                <div className="flex flex-1 gap-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors font-medium"
                  >
                    <span className="w-5 h-5"> {/* Replace with ExternalLink icon if available */} 🔗</span>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors font-medium"
                  >
                    <span className="w-5 h-5"> {/* Replace with Github icon if available */} 💻</span>
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-500/10 to-green-500/10 p-8 rounded-xl border border-teal-500/20">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-teal-400 mb-2">{job.title}</h3>
                      <p className="text-xl text-gray-300">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                  <div className="space-y-2">
                    {job.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you're looking for a full-time developer or need freelance expertise, let's connect!
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:sourabh.Davari@example.com" className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a href="https://linkedin.com/in/sourabh-Davari" className="border border-teal-400 hover:bg-teal-400/20 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a href="https://github.com/sourabhdawari" className="border border-teal-400 hover:bg-teal-400/20 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-teal-500/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Sourabh Davari.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;