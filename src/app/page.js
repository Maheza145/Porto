"use client";

import { useEffect, useState, useRef } from "react";

/* ─── SVG Icon Components ─── */
function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ProfilePlaceholder() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="45" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path
        d="M25 100c0-19.33 15.67-35 35-35s35 15.67 35 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

/* ─── Intersection Observer Hook ─── */
function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const elements = ref.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ═══════════════════════════════════════
   Navbar
   ═══════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="navbar-inner">
        <a href="#beranda" className="navbar-logo">
          Egga Maheza
        </a>

        <button
          className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links ${mobileOpen ? "open" : ""}`}>
          <li>
            <a href="#beranda" onClick={handleLinkClick}>
              Beranda
            </a>
          </li>
          <li>
            <a href="#tentang" onClick={handleLinkClick}>
              Tentang
            </a>
          </li>
          <li>
            <a href="#karya" onClick={handleLinkClick}>
              Organisasi
            </a>
          </li>
          <li>
            <a href="#kontak" onClick={handleLinkClick}>
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
/* ═══════════════════════════════════════
   Hero Section
   ═══════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-greeting">Halo, saya Egga.</h1>
          <p className="hero-description">
            Saya seorang mahasiswa teknik informatika UMS angkatan 2025 yang suka di bidang teknologi.
          </p>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-container">
            <div className="hero-image-placeholder">
              <img src="egga.jpg"/> 
              <span>Foto Profil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   About Section
   ═══════════════════════════════════════ */
function About() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section text-center" id="tentang" ref={sectionRef}>
      <div className="section-inner flex flex-col items-center">
        <div className="animate-on-scroll">
          <span className="section-label">Perkenalan</span>
          <h2 className="section-title">Tentang Saya</h2>
        </div>

        <div className="animate-on-scroll animate-delay-1" style={{ marginTop: '40px' }}>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Perkenalkan nama saya Egga Maheza, bisa dipanggil Egga saya saat ini sedang berkuliah di Universitas Muhammadiyah Surakarta jurusan Teknik Informatika angkatan 2025. Saya memiliki minat di bidang teknologi dan saat ini sedang belajar framework Next.js dan Laravel. Saya juga memiliki hobi menonton film dan menonton sepakbola. 
          </p>
        </div>
      </div>
    </section>
  );
}

function Pendidikan(){
  const sectionRef = useScrollReveal();

  const pendidikan = [
    {
      number: "",
      title: "Universitas Muhammadiyah Surakarta",
      desc: "2025 - Sekarang",
    },
    {
      number: "",
      title: "SMA Batik 1 Surakarta",
      desc: "2022 - 2025",
    },
    {
      number: "",
      title: "SMP Negeri 9 Surakarta",
      desc: "2019 - 2022",
    },
    {
      number: "",
      title: "SD Negeri Bratan 1 surakarta",
      desc: "2013 - 2019",
    },
  ];
  return (
    <section className="section" id="pendidikan" ref={sectionRef}>
      <div className="section-inner">
        <div className="animate-on-scroll flex flex-col items-center text-center">
          <span className="section-label">Riwayat Pendidikan</span>
          <h2 className="section-title"></h2>
        </div>

        <div className="animate-on-scroll animate-delay-1" style={{ marginTop: '40px' }}>
          {pendidikan.map((p, index) => (
            <div key={index} className="project" style={{ marginBottom: '20px' }}>
              <span className="project-number">{p.number}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skill(){
  const sectionRef = useScrollReveal();

  const skills = [
    {
      number: "",
      title: "HTML, CSS, JavaScript",
      desc: "Intermediate",
    },
    {
      number: "",
      title: "Laragon",
      desc: "Intermediate",
    },
    {
      number: "",
      title: "Microsoft Office",
      desc: "Beginner",
    },
    {
      number: "",
      title: "React Js",
      desc: "Intermediate",
    },
    {
      number:"",
      title: "Next.Js",
      desc: "beginner",
    },
    {
      number: "",
      title: "Laravel",
      desc: "beginner",
    }
  ];

   return (
    <section className="section" id="skill" ref={sectionRef}>
      <div className="section-inner">
        <div className="animate-on-scroll flex flex-col items-center text-center">
          <span className="section-label">kemampuan saya</span>
          <h2 className="section-title"></h2>
        </div>
        <div className="projects-grid">
          {skills.map((skill, i) => (
            <article
              key={i}
              className={`project-card animate-on-scroll animate-delay-${(i % 4) + 1}`}
            >
              <span className="project-number">{skill.number}</span>
              <h3 className="project-title">{skill.title}</h3>
              <p className="project-desc">{skill.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Projects Section
   ═══════════════════════════════════════ */
function Projects() {
  const sectionRef = useScrollReveal();

  const projects = [
    {
      number: "Organisasi",
      title: "HIMATIF ",
      desc: "Himatif adalah Himpunan Mahasiswa Informatika Universitas Muhammadiyah Surakarta.Saya dipercaya untuk menjabat sebagai anggota bidang keilmuan dan penelitian.",
    },
    {
      number: "Organisasi",
      title: "Batik One Society",
      desc: "Batik One Society adalah sebuah organisasi yang berada di SMA Batik 1 Surakarta yang biasanya menjadi suporter saat ada sebuah perlombaan, disini saya dipercaya sebagai anggota.",
    },
    {
      number:"Organisasi",
      title:"Toxido Esport",
      desc:"Toxido Esport adalah sebuah organisasi yang bergerak di bidang esport,disini saya sebagai member atau anggota di divisi delta force warfare,disini saya bermain dengan role engineer."
    },
    {
      number:"Achievement",
      title:"Runner Up DFNC Operation S2 Campus Series",
      desc:"DFNC atau bisa disebut Delta Force National Championship adalah sebuah kejuaraan game delta force yang diikuti oleh seluruh mahasiswa di Indonesia yang diselenggarakan oleh Garena Delta Force."
    },
    {
      number:"Organisasi",
      title:"NOTS Esport",
      desc:"NOTS Esport adalah sebuah organisasi yang bergerak di bidang esport,disini saya sebagai member atau anggota di divisi delta force warfare, disini saya bermain dengan role medic dan assault."
    },
  ];

  return (
    <section className="section" id="karya" ref={sectionRef}>
      <div className="section-inner">
        <div className="animate-on-scroll flex flex-col items-center text-center">
          <span className="section-label">Riwayat Organisasi dan Achievement</span>
          <h2 className="section-title"></h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              key={i}
              className={`project-card animate-on-scroll animate-delay-${(i % 4) + 1}`}
            >
              <span className="project-number">{project.number}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              {project.link && (
                <a href={project.link} className="project-link">
                  {project.linkText}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Contact Section
   ═══════════════════════════════════════ */
function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section className="contact" id="kontak" ref={sectionRef}>
      <div className="contact-inner">
        <div className="animate-on-scroll">
          <span className="section-label">Kontak</span>
          <h2 className="section-title">Mari Bekenalan!</h2>
        </div>
        <p className="contact-text animate-on-scroll animate-delay-1">
          Ayo berkenalan dengan saya
        </p>
        <div className="contact-links animate-on-scroll animate-delay-2">
          <a
            href="https://github.com/Maheza145"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/egga-maheza-01669a384/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:eggamaheza@gmail.com"
            className="contact-icon"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
          <a
            href="https://wa.me/+6287820775262"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="https://instagram.com/mhzaegga"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Footer
   ═══════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Dibuat oleh Egga Maheza.</p>
    </footer>
  );
}

/* ═══════════════════════════════════════
   Main Page
   ═══════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pendidikan />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
