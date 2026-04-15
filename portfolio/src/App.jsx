import React from 'react';
import { motion } from 'framer-motion';

// --- Social & UI Icons (Bina kisi library ke) ---
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00f0ff]"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5 px-8 py-4 flex justify-between items-center">
    <div className="text-[#00f0ff] font-bold text-xl tracking-tighter">SHREE.DEV</div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
      {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#00f0ff] transition-colors">{item}</a>
      ))}
    </div>
    <a href="/resume.pdf" target="_blank" className="px-5 py-2 rounded-full border border-[#00f0ff]/50 text-[#00f0ff] text-sm hover:bg-[#00f0ff]/10 transition-all">Resume</a>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
      <h2 className="text-[#00ff66] font-mono mb-4 tracking-widest text-sm uppercase">Hi, my name is</h2>
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">Shreeprakash.</h1>
      <h2 className="text-3xl md:text-6xl font-bold text-slate-400 mb-8 leading-tight text-center max-w-4xl">I build high-performance web apps.</h2>
      <p className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed text-center">
        I'm a Full Stack Developer specializing in building digital experiences like 
        <span className="text-[#00f0ff]"> Muscle Shree</span>. Currently focused on crafting clean, scalable code.
      </p>
      
      {/* Social Links under Intro */}
      <div className="flex gap-6 mb-10 text-slate-400">
        <a href="https://github.com/Shreewithsh" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><GithubIcon /></a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="hover:text-[#00f0ff] hover:scale-110 transition-all"><LinkedinIcon /></a>
        <a href="mailto:shreeshukla54@gmail.com" className="hover:text-[#00ff66] hover:scale-110 transition-all"><MailIcon /></a>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#projects" className="px-8 py-4 bg-[#00f0ff] text-[#0a0a0f] font-bold rounded-lg hover:scale-105 transition-transform text-center">View My Work</a>
        <a href="#contact" className="px-8 py-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-white text-center">Contact Me</a>
      </div>
    </motion.div>
  </section>
);

const ProjectCard = ({ title, desc, tech, git, link }) => (
  <motion.div whileHover={{ y: -10 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm group hover:border-[#00f0ff]/40 transition-all flex flex-col h-full">
    <div className="flex justify-between items-center mb-6">
      <CodeIcon />
      <div className="flex gap-4 text-slate-400">
        <a href={git} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><GithubIcon /></a>
        <a href={link} target="_blank" rel="noreferrer" className="hover:text-[#00f0ff] transition-colors"><ExternalIcon /></a>
      </div>
    </div>
    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">{title}</h3>
    <p className="text-slate-400 text-base mb-8 leading-relaxed flex-grow">{desc}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tech.map(t => (
        <span key={t} className="text-[11px] font-mono bg-[#00ff66]/10 px-3 py-1.5 rounded text-[#00ff66] border border-[#00ff66]/20">{t}</span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const projects = [
    { 
      title: "Muscle Shree", 
      desc: "Premium supplement store with modern UI, robust product catalog, and built for high performance.", 
      tech: ["Html", "Tailwind", "Firebase","MongoDB"],
      git: "https://github.com/Shreewithsh/MuscleShree-supplement-store",
      link: "#"
    },
    { 
      title: "Digital Forensics Locker", 
      desc: "Java-based secure system for digital evidence management maintaining strict chain of custody protocols.", 
      tech: ["Java", "MySQL", "Cryptography"],
      git: "https://github.com/Shreewithsh/evidence_vault",
      link: "#"
    },
    { 
      title: "Airbnb Clone", 
      desc: "Full-featured rental UI replicating core functionalities with responsive design and modern styling.", 
      tech: ["React", "Tailwind", "Vite"],
      git: "https://github.com/Shreewithsh/RENTAL",
      link: "#"
    },
    { 
  title: "Mini Jira (Bug Tracker)", 
  desc: "A professional-grade issue tracking system featuring automated ticket generation from server errors and a dynamic status dashboard.", 
  tech: ["Node.js", "MongoDB", "Tailwind CSS", "Express"],
  git: "https://github.com/Shreewithsh/bug_tracker-jira-kinda-", 
  link: "#"
  },
  ];

  const skills = [
    // Languages
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },

    // Web & Frameworks
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Vite', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },

    // Databases & Cloud
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Firebase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },

    // Tools
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' }
];

  return (
    <div className="bg-[#0a0a0f] min-h-screen text-slate-300 selection:bg-[#00f0ff]/30 font-sans">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#bf00ff]/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />

        {/* --- Skills Section --- */}
        <section id="skills" className="py-24 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center justify-center gap-4 w-full text-center">
            <span className="text-[#00f0ff] font-mono text-xl">01.</span> Skills & Tech
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center p-6 border border-white/5 bg-white/5 rounded-2xl hover:border-[#00f0ff]/40 hover:bg-white/10 transition-all group hover:-translate-y-1">
                <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                <span className="font-medium text-slate-200 tracking-wide text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center justify-center gap-4 w-full text-center">
            <span className="text-[#00f0ff] font-mono text-xl">02.</span> My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-32 flex flex-col items-center text-center">
          <h2 className="text-[#00f0ff] font-mono mb-4 tracking-widest text-sm uppercase">03. What's Next?</h2>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Get In Touch</h2>
          <p className="max-w-lg text-slate-400 mb-12 leading-relaxed text-lg">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
          </p>
          <a href="mailto:shreeshukla54@gmail.com" className="px-12 py-5 border-2 border-[#00f0ff] text-[#00f0ff] font-bold rounded-lg hover:bg-[#00f0ff]/10 transition-all font-mono inline-block mb-16 hover:scale-105">
            Say Hello
          </a>
          
          {/* Bottom Socials */}
          <div className="flex gap-8 text-slate-500">
             <a href="https://github.com/Shreewithsh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><GithubIcon /></a>
             <a href="https://www.linkedin.com/in/shreeprakash-shukla-a2b1a72a7/" target="_blank" rel="noreferrer" className="hover:text-[#00f0ff] transition-colors"><LinkedinIcon /></a>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t border-white/5 text-xs font-mono text-slate-500 tracking-widest">
        DESIGNED & BUILT BY SHREEPRAKASH &copy; 2026
      </footer>
    </div>
  );
}