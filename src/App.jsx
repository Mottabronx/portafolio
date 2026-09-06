import { useEffect, useRef, useState } from 'react'
import { content, profile } from './content'
import styles from './App.module.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add(styles.shown))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.shown)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])
  return ref
}

function Nav({ t, lang, onLang }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <a href="#inicio" className={styles.brand} aria-label={profile.name}>
        <span className={styles.stamp} aria-hidden="true">{profile.initials}</span>
        <span className={styles.brandName}>{profile.name}</span>
      </a>
      <nav className={styles.navLinks} aria-label="Principal">
        {t.nav.map((l) => (
          <a key={l.id} href={`#${l.id}`}>{l.label}</a>
        ))}
      </nav>
      <div className={styles.navSide}>
        <button type="button" className={styles.langBtn} onClick={onLang} aria-label="Cambiar idioma / Switch language">
          {t.langLabel}
        </button>
        <a href={profile.cv} target="_blank" rel="noreferrer" className={styles.cvBtn}>{t.cvLabel}</a>
        <a href="#contacto" className={styles.navCta}>{t.navCta}</a>
      </div>
    </header>
  )
}

function Hero({ t }) {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.heroGrid}>
        <div className={styles.heroMain}>
          <p className={styles.seal}><span className={styles.sealDot} aria-hidden="true" />{t.seal}</p>
          <p className={styles.kicker}>{t.heroKicker}</p>
          <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
          <p className={styles.heroSub}>{t.heroSub}</p>
          <div className={styles.heroActions}>
            <a href="#proyectos" className={styles.btnSolid}>{t.primaryCta}</a>
            <button type="button" className={styles.btnLine} onClick={copyEmail} aria-live="polite">
              {copied ? t.copied : t.secondaryCta}
            </button>
          </div>
          <p className={styles.heroMail}>{profile.email}</p>
        </div>
        <aside className={styles.specSheet} aria-label="Spec sheet">
          <div className={styles.specHead}>
            <span>{profile.initials} — {profile.name}</span>
            <span className={styles.specIndex}>FT-01</span>
          </div>
          <dl>
            {t.specs.map(([k, v]) => (
              <div key={k} className={styles.specRow}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}

function Projects({ t }) {
  const [p1, p2] = t.projects
  return (
    <section className={styles.block} id="proyectos" data-reveal>
      <div className={styles.blockHead}>
        <h2>{t.projectsTitle}</h2>
        <p>{t.projectsIntro}</p>
      </div>

      <article className={styles.featured}>
        <div className={styles.shotWrap}>
          <img
            src="/weathernow.png"
            alt="Captura de WeatherNow mostrando el clima de Santiago"
            loading="lazy"
          />
        </div>
        <div className={styles.featuredBody}>
          <p className={styles.projKind}>{p1.kind}</p>
          <h3>{p1.name}</h3>
          <p className={styles.projSummary}>{p1.summary}</p>
          <ul className={styles.builtList}>
            {p1.built.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <div className={styles.tagRow}>
            {p1.stack.map((s) => <span key={s}>{s}</span>)}
          </div>
          <div className={styles.projLinks}>
            <a href={p1.demo} target="_blank" rel="noreferrer" className={styles.btnSolid}>{t.viewLive}</a>
            <a href={p1.github} target="_blank" rel="noreferrer" className={styles.btnLine}>{t.viewCode}</a>
          </div>
        </div>
      </article>

      <article className={styles.featured}>
        <div className={styles.shotWrap}>
          <img
            src="/shopflow.png"
            alt="Captura de ShopFlow mostrando el catálogo de la tienda"
            loading="lazy"
          />
        </div>
        <div className={styles.featuredBody}>
          <p className={styles.projKind}>{p2.kind}</p>
          <h3>{p2.name}</h3>
          <p className={styles.projSummary}>{p2.summary}</p>
          <ul className={styles.builtList}>
            {p2.built.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <div className={styles.tagRow}>
            {p2.stack.map((s) => <span key={s}>{s}</span>)}
          </div>
          <div className={styles.projLinks}>
            <a href={p2.demo} target="_blank" rel="noreferrer" className={styles.btnSolid}>{t.viewLive}</a>
            <a href={p2.github} target="_blank" rel="noreferrer" className={styles.btnLine}>{t.viewCode}</a>
          </div>
        </div>
      </article>
    </section>
  )
}

function Path({ t }) {
  return (
    <section className={styles.block} id="trayectoria" data-reveal>
      <div className={styles.blockHead}>
        <h2>{t.pathTitle}</h2>
        <p>{t.pathIntro}</p>
      </div>
      <div className={styles.logTable} role="table" aria-label={t.pathTitle}>
        {t.path.map((p) => (
          <div key={p.period} className={styles.logRow} role="row">
            <span className={styles.logPeriod} role="cell">{p.period}</span>
            <div role="cell">
              <p className={styles.logRole}>{p.role}</p>
              <p className={styles.logPlace}>{p.place}</p>
              <p className={styles.logDetail}>{p.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Stack({ t }) {
  return (
    <section className={styles.block} id="stack" data-reveal>
      <div className={styles.blockHead}>
        <h2>{t.stackTitle}</h2>
        <p>{t.stackIntro}</p>
      </div>
      <div className={styles.stackGrid}>
        {t.stackGroups.map((g) => (
          <div key={g.name} className={styles.stackCol}>
            <div className={styles.stackColHead}>
              <h3>{g.name}</h3>
              <span>{g.note}</span>
            </div>
            <ul>
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function About({ t }) {
  return (
    <section className={styles.block} id="sobre-mi" data-reveal>
      <div className={styles.blockHead}>
        <h2>{t.aboutTitle}</h2>
      </div>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutText}>
          {t.about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        </div>
        <dl className={styles.factList}>
          {t.facts.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Contact({ t }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <section className={styles.block} id="contacto" data-reveal>
      <div className={styles.contactBox}>
        <h2>{t.contactTitle}</h2>
        <p className={styles.contactLead}>{t.contactLead}</p>
        <div className={styles.contactMailRow}>
          <a className={styles.mailBig} href={`mailto:${profile.email}`}>{profile.email}</a>
          <button type="button" className={styles.btnLine} onClick={copy} aria-live="polite">
            {copied ? t.copied : t.secondaryCta}
          </button>
        </div>
        <p className={styles.contactNote}>{t.contactNote}</p>
        <div className={styles.contactLinks}>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.cv} target="_blank" rel="noreferrer">{t.cvLabel}</a>
          <span className={styles.contactLoc}>{profile.location}</span>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [lang, setLang] = useState('es')
  const t = content[lang]
  const rootRef = useReveal()

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div ref={rootRef}>
      <a className="skipLink" href="#inicio">{lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}</a>
      <Nav t={t} lang={lang} onLang={() => setLang((l) => (l === 'es' ? 'en' : 'es'))} />
      <main className={styles.page}>
        <Hero t={t} />
        <Projects t={t} />
        <Path t={t} />
        <Stack t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <footer className={styles.footer}>
        <span>{profile.name} · {new Date().getFullYear()} · {profile.location}</span>
      </footer>
    </div>
  )
}
