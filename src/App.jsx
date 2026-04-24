import { useState, useEffect } from 'react'
import { data } from './data'
import styles from './App.module.css'

// ── Avatar con iniciales ──────────────────────────────────
function Avatar() {
  return (
    <div className={styles.avatar}>
      <span className={styles.avatarInitials}>{data.initials}</span>
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────
function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <span className={styles.navLogo}>{data.name.split(' ')[0]}<span>.</span></span>
      <div className={styles.navLinks}>
        {['proyectos', 'servicios', 'sobre-mi', 'contacto'].map(s => (
          <a key={s} href={`#${s}`} className={activeSection === s ? styles.navActive : ''}>
            {s.replace('-', ' ')}
          </a>
        ))}
      </div>
      <a href={`mailto:${data.email}`} className={styles.navCta}>Contactar</a>
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <p className={styles.heroTag}>
            <span className={styles.dot} /> Disponible para proyectos
          </p>
          <h1 className={styles.heroTitle}>
            Desarrollo web
            <em> que funciona</em>
            <br />y se ve bien.
          </h1>
          <p className={styles.heroSub}>
            Full stack developer en Santiago. React, Node.js y buenas ideas para llevar tu negocio online.
          </p>
          <div className={styles.heroActions}>
            <a href="#proyectos" className={styles.btnPrimary}>Ver proyectos</a>
            <a href="#contacto" className={styles.btnGhost}>Hablemos</a>
          </div>
        </div>
        <div className={styles.heroRight}>
          <Avatar />
          <div className={styles.heroCard}>
            <span className={styles.heroCardLabel}>Stack principal</span>
            <div className={styles.heroTags}>
              {data.stack.slice(0, 6).map(s => (
                <span key={s} className={styles.heroTag2}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Projects ──────────────────────────────────────────────
function Projects() {
  return (
    <section className={styles.section} id="proyectos">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNum}>01</span>
        <h2 className={styles.sectionTitle}>Proyectos</h2>
      </div>
      <div className={styles.projectsGrid}>
        {data.projects.map((p, i) => (
          <div key={p.id} className={styles.projectCard} style={{ animationDelay: `${i * 80}ms` }}>
            <div className={styles.projectPreview} style={{ background: p.color }}>
              <div className={styles.projectAccentBar} style={{ background: p.accent }} />
              <span className={styles.projectPreviewName} style={{ color: p.accent }}>{p.name}</span>
            </div>
            <div className={styles.projectInfo}>
              <p className={styles.projectType}>{p.type}</p>
              <h3 className={styles.projectName}>{p.name}</h3>
              <p className={styles.projectDesc}>{p.description}</p>
              <div className={styles.projectTags}>
                {p.stack.map(s => <span key={s} className={styles.projectTag}>{s}</span>)}
              </div>
              <div className={styles.projectLinks}>
                {p.demo !== '#' && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className={styles.btnSmall}>
                    Demo ↗
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer" className={styles.btnSmallGhost}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────
function Services() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`} id="servicios">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNum} style={{ color: '#888' }}>02</span>
        <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Servicios</h2>
      </div>
      <div className={styles.servicesGrid}>
        {data.services.map((s, i) => (
          <div key={i} className={styles.serviceCard}>
            <div className={styles.serviceTop}>
              <h3 className={styles.serviceName}>{s.name}</h3>
              <span className={styles.servicePrice}>{s.price}</span>
            </div>
            <p className={styles.serviceDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────
function About() {
  return (
    <section className={styles.section} id="sobre-mi">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNum}>03</span>
        <h2 className={styles.sectionTitle}>Sobre mí</h2>
      </div>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutText}>
          {data.about.map((p, i) => <p key={i}>{p}</p>)}
          <div className={styles.aboutStack}>
            {data.stack.map(s => (
              <span key={s} className={styles.stackTag}>{s}</span>
            ))}
          </div>
        </div>
        <div className={styles.aboutRight}>
          <div className={styles.aboutInfo}>
            <div className={styles.aboutInfoItem}>
              <span className={styles.aboutInfoLabel}>Ubicación</span>
              <span>{data.location}</span>
            </div>
            <div className={styles.aboutInfoItem}>
              <span className={styles.aboutInfoLabel}>Disponibilidad</span>
              <span className={styles.available}>● Disponible ahora</span>
            </div>
            <div className={styles.aboutInfoItem}>
              <span className={styles.aboutInfoLabel}>Modalidad</span>
              <span>Remoto / presencial</span>
            </div>
            <div className={styles.aboutInfoItem}>
              <span className={styles.aboutInfoLabel}>Respuesta</span>
              <span>Menos de 24 horas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────
function Contact() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNum}>04</span>
        <h2 className={styles.sectionTitle}>Contacto</h2>
      </div>
      <div className={styles.contactBox}>
        <h3 className={styles.contactTitle}>
          ¿Tienes un proyecto<br />en mente?
        </h3>
        <p className={styles.contactSub}>
          Cuéntame qué necesitas y te respondo con una propuesta en menos de 24 horas.
        </p>
        <div className={styles.contactLinks}>
          <a href={`mailto:${data.email}`} className={styles.contactLink}>
            <span>✉</span> {data.email}
          </a>
          <a href={data.whatsapp} target="_blank" rel="noreferrer" className={styles.contactLink}>
            <span>💬</span> WhatsApp
          </a>
          <a href={data.github} target="_blank" rel="noreferrer" className={styles.contactLink}>
            <span>⌥</span> GitHub
          </a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" className={styles.contactLink}>
            <span>👔</span> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────
function Footer() {
  return (
    <footer className={styles.footer}>
      <span>{data.name} · {new Date().getFullYear()}</span>
      <span>Hecho con React</span>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.4 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
