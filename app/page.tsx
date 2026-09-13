import {
  ArrowUpRight, Github, Linkedin, Mail, Download, BrainCircuit,
  Code2, Database, Bot, ChevronDown
} from "lucide-react";

const skills = [
  "Python", "SQL", "C++", "Machine Learning", "Deep Learning",
  "LLMs", "RAG", "Prompt Engineering", "LangChain", "AI Agents",
  "PyTorch", "Pandas", "NumPy", "Streamlit", "Git", "GitHub"
];

const projects = [
  {
    title: "Banking AI Chatbot",
    type: "AI / LLM / Machine Learning",
    description:
      "A Streamlit banking assistant combining FAQ classification, customer recommendations, bank-statement extraction and conversational AI.",
    tech: ["Python", "Streamlit", "Logistic Regression", "K-Means", "SQLite", "EasyOCR", "LLM"],
    github: "https://github.com/Ponsaranya"
  },
  {
    title: "AI-Assisted SI Governance Automation",
    type: "AI Automation / Governance",
    description:
      "Python-based automation connecting Azure DevOps, Confluence, GFA workflows and communication tools to reduce a multi-step governance process to minutes.",
    tech: ["Python", "Azure DevOps", "Confluence", "Power Automate", "Teams", "GitHub Copilot"],
    github: "https://github.com/Ponsaranya"
  },
  {
    title: "SAP Client MI Reporting & Automation",
    type: "Data / Automation",
    description:
      "Automated reporting and validation workflows using Python, SQL, Excel and SAP data, with quality checks and stakeholder reporting.",
    tech: ["Python", "SQL", "Excel", "SAP"],
    github: "https://github.com/Ponsaranya"
  },
  {
    title: "DDoS Detection",
    type: "Machine Learning",
    description:
      "Machine-learning based network attack detection using Random Forest with reinforcement-learning concepts for adaptive decision making.",
    tech: ["Python", "Random Forest", "Q-Learning", "ML"],
    github: "https://github.com/Ponsaranya"
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#home">PR<span>.</span></a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navbtn" href="https://github.com/Ponsaranya" target="_blank">
          GitHub <ArrowUpRight size={15}/>
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="heroText">
          <div className="eyebrow"><span className="dot"/> Open to AI/ML opportunities</div>
          <h1>Building practical <span>AI</span> that solves real problems.</h1>
          <p className="lead">
            I&apos;m <strong>Ponsaranya R</strong>, a Computer Science graduate and AI/ML engineer
            focused on Python, machine learning, GenAI, LLMs and intelligent automation.
          </p>
          <div className="actions">
            <a className="primary" href="#projects">View Projects <ArrowUpRight size={18}/></a>
            <a className="secondary" href="/resume.pdf" download>Download Resume <Download size={17}/></a>
          </div>
          <div className="socials">
            <a href="https://github.com/Ponsaranya" target="_blank" aria-label="GitHub"><Github/></a>
            <a href="https://linkedin.com/in/ponsaranya-r/" target="_blank" aria-label="LinkedIn"><Linkedin/></a>
            <a href="mailto:ponsaranya2004@gmail.com" aria-label="Email"><Mail/></a>
          </div>
        </div>

        <div className="heroCard">
          <div className="orb"><BrainCircuit size={70}/></div>
          <div className="codeLine"><span>01</span> AI / ML Engineer</div>
          <div className="codeLine"><span>02</span> GenAI &amp; LLMs</div>
          <div className="codeLine"><span>03</span> Python Automation</div>
          <div className="codeLine"><span>04</span> Data &amp; Analytics</div>
        </div>
        <a className="scroll" href="#about"><ChevronDown size={18}/> Scroll to explore</a>
      </section>

      <section id="about" className="section twoCol">
        <div>
          <p className="sectionTag">01 — ABOUT</p>
          <h2>Turning ideas into <span>working software.</span></h2>
        </div>
        <div className="aboutText">
          <p>
            Computer Science graduate with 1 year of experience at Standard Chartered in
            Python-based automation, data analysis, machine learning and AI application development.
          </p>
          <p>
            I enjoy building practical solutions with machine learning, LLMs, RAG, AI agents and
            automation — from prototypes to useful internal applications.
          </p>
          <div className="stats">
            <div><b>1+</b><span>Year Experience</span></div>
            <div><b>AI</b><span>ML &amp; GenAI Focus</span></div>
            <div><b>Python</b><span>Primary Language</span></div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <p className="sectionTag">02 — EXPERIENCE</p>
        <div className="experience">
          <div className="expDate">JUL 2025 — JUL 2026</div>
          <div>
            <h3>Technology Apprentice — AI / ML</h3>
            <p className="company">Standard Chartered Global Business Services · Chennai</p>
            <p>
              Worked on AI/ML applications, Python automation, data analysis and workflow
              automation. Built and supported solutions involving machine learning, OCR,
              LLM concepts, Azure DevOps and business-process automation.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="sectionTag">03 — PROJECTS</p>
        <h2>Selected <span>work.</span></h2>
        <div className="projectGrid">
          {projects.map((project, i) => (
            <article className="project" key={project.title}>
              <div className="projectTop"><span>0{i + 1}</span><a href={project.github} target="_blank"><Github size={18}/></a></div>
              <p className="projectType">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <p className="sectionTag">04 — SKILLS</p>
        <h2>Tools I <span>work with.</span></h2>
        <div className="skillGrid">
          <div className="skillCategory"><Code2/><h3>Programming</h3><p>Python · SQL · C++ · Git · GitHub</p></div>
          <div className="skillCategory"><BrainCircuit/><h3>AI / ML</h3><p>Machine Learning · Deep Learning · PyTorch · LLMs · RAG</p></div>
          <div className="skillCategory"><Bot/><h3>GenAI</h3><p>Prompt Engineering · LangChain · AI Agents · Streamlit</p></div>
          <div className="skillCategory"><Database/><h3>Data</h3><p>Pandas · NumPy · SQL · Excel · Data Analysis</p></div>
        </div>
        <div className="allSkills">{skills.map(s => <span key={s}>{s}</span>)}</div>
      </section>

      <section id="contact" className="contact">
        <p className="sectionTag">05 — CONTACT</p>
        <h2>Let&apos;s build something <span>useful.</span></h2>
        <p>Looking for AI/ML, GenAI, Python or software engineering opportunities.</p>
        <a className="primary" href="mailto:ponsaranya2004@gmail.com">Get in touch <Mail size={17}/></a>
        <div className="footerLinks">
          <a href="https://github.com/Ponsaranya" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/ponsaranya-r/" target="_blank">LinkedIn</a>
          <a href="mailto:ponsaranya2004@gmail.com">Email</a>
        </div>
        <small>© 2026 Ponsaranya R. Built with Next.js.</small>
      </section>
    </main>
  );
}
