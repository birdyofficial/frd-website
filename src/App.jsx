import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  BriefcaseBusiness,
  TrendingUp,
  Users,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Sicherheit & Recht",
    text: "Ein starker Staat schützt, schafft Gerechtigkeit und sichert Freiheit.",
  },
  {
    icon: FileText,
    title: "Einfache Steuern",
    text: "25 % Flat Tax für alle. Einfach, fair und transparent.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Freiheit & Verantwortung",
    text: "Freiheit bedeutet Verantwortung. Wir vertrauen den Bürgern, ihr Leben selbst zu gestalten.",
  },
  {
    icon: TrendingUp,
    title: "Wachstum & Innovation",
    text: "Wir fördern Leistung, Unternehmertum und Innovation — für Wohlstand und Zukunft.",
  },
  {
    icon: Users,
    title: "Familie & Gemeinschaft",
    text: "Starke Familien und Gemeinschaften sind das Fundament unserer Gesellschaft.",
  },
];

const focusItems = [
  ["25 % Flat Tax", "steuern"],
  ["Massiver Bürokratieabbau", "buerokratie"],
  ["Mehr wirtschaftliche Freiheit", "wirtschaft"],
  ["Technologieoffene Energiepolitik", "energie"],
  ["Schutz der Meinungsfreiheit", "freiheit"],
  ["Stärkere Familien und Gemeinschaften", "familien"],
];

const detailItems = [
  {
    id: "steuern",
    title: "25 % Flat Tax",
    paragraphs: [
      "FRD setzt sich für ein einfaches, transparentes und faires Steuersystem ein. Eine einheitliche Steuer von 25 % auf persönliches Einkommen, Kapitalerträge und Investitionseinkommen soll Arbeit, Leistung und Vermögensaufbau wieder stärker belohnen.",
      "Ziel ist weniger Bürokratie, weniger Sonderregeln und eine Steuererklärung, die normale Bürger wieder verstehen können.",
    ],
  },
  {
    id: "buerokratie",
    title: "Massiver Bürokratieabbau",
    paragraphs: [
      "Deutschland braucht einen Staat, der dient statt blockiert. FRD will unnötige Vorschriften streichen, Genehmigungen beschleunigen, Verwaltung digitalisieren und für neue Regeln eine klare Gegenleistung verlangen: eine neue Regel rein, zwei alte raus.",
      "Besonders Mittelstand, Handwerk, Gründer, Familien und Eigentümer sollen endlich wieder mehr Zeit für das Wesentliche haben.",
    ],
  },
  {
    id: "wirtschaft",
    title: "Mehr wirtschaftliche Freiheit",
    paragraphs: [
      "Wohlstand entsteht durch Menschen, die arbeiten, gründen, investieren, entwickeln und Verantwortung übernehmen. FRD will Unternehmensgründungen vereinfachen, Arbeit flexibler machen und Leistung wieder respektieren.",
      "Deutschland soll wieder ein Standort werden, an dem Innovation, Ingenieurskunst, Handwerk und Unternehmertum wachsen können.",
    ],
  },
  {
    id: "energie",
    title: "Technologieoffene Energiepolitik",
    paragraphs: [
      "Energiepolitik muss bezahlbar, sicher und realistisch sein. FRD setzt auf Technologieoffenheit, Versorgungssicherheit, Innovation und eine neue sachliche Offenheit gegenüber Kernenergie.",
      "Klimaschutz soll durch Fortschritt und marktfähige Lösungen erreicht werden — nicht durch immer mehr Verbote im privaten Alltag.",
    ],
  },
  {
    id: "freiheit",
    title: "Schutz der Meinungsfreiheit",
    paragraphs: [
      "Eine freie Demokratie braucht offene Debatten, unterschiedliche Meinungen und Bürger, die ohne Angst vor politischer oder bürokratischer Bevormundung sprechen können.",
      "FRD steht für starke Bürgerrechte, Privatsphäre und einen Staat, der Sicherheit schafft, aber Freiheit respektiert.",
    ],
  },
  {
    id: "familien",
    title: "Stärkere Familien und Gemeinschaften",
    paragraphs: [
      "Familien, Nachbarschaften, Vereine, Betriebe und lokale Gemeinschaften geben Menschen Halt. FRD will diesen Raum stärken, statt immer mehr Verantwortung in zentrale Systeme zu verschieben.",
      "Ziel ist eine Gesellschaft, in der Bürger wieder mehr selbst entscheiden, füreinander einstehen und ihre Zukunft aktiv gestalten können.",
    ],
  },
];

function FRDLogo() {
  return (
    <a href="#top" className="logo-link" aria-label="Zur Startseite">
      <img src="/frd-logo.jpg" alt="FRD — Freiraum Deutschland" className="logo" />
    </a>
  );
}

export default function App() {
  return (
    <main id="top">
      <nav className="nav">
        <div className="nav-inner">
          <FRDLogo />

          <div className="nav-links">
            <a href="#ueber">Über FRD</a>
            <a href="#programm">Programm</a>
            <a href="#aktuelles">Aktuelles</a>
            <a href="#mitmachen">Mitmachen</a>
            <a href="#kontakt">Kontakt</a>
          </div>

          <div className="nav-actions">
            <a href="#mitmachen" className="btn btn-secondary">Mitglied werden</a>
            <a href="#mitmachen" className="btn btn-primary">Unterstützen</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="hero-content"
          >
            <h1>
              Mehr Freiraum
              <br />
              für Deutschland.
            </h1>
            <div className="gold-line" />
            <p className="hero-slogan">Weniger Staat. Mehr Bürger.</p>
            <p className="hero-text">
              Für ein Deutschland, das seinen Bürgern vertraut und ihnen Freiraum gibt,
              ihr Leben selbstbestimmt zu gestalten.
            </p>
            <div className="hero-buttons">
              <a href="#programm" className="btn btn-primary">Unser Programm</a>
              <a href="#mitmachen" className="btn btn-secondary">
                Mitmachen <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="ueber" className="section">
        <div className="container">
          <div className="section-title">
            <div className="gold-line" />
            <h2>Unsere Grundsätze</h2>
          </div>

          <div className="principles">
            {principles.map(({ icon: Icon, title, text }) => (
              <div className="principle" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programm" className="programme">
        <div className="programme-grid">
          <div className="programme-copy">
            <div className="gold-line" />
            <h2>Ein einfacheres Deutschland.</h2>
            <p>
              Deutschland leidet unter übermäßiger Bürokratie, komplexen Regeln und
              politischer Mikromanagement-Kultur.
            </p>
            <p>
              FRD will wieder Raum schaffen für Leistung, Unternehmertum,
              Innovation und persönliche Verantwortung.
            </p>
          </div>

          <div className="focus-list">
            {focusItems.map(([item, id]) => (
              <a className="focus-item" href={`#${id}`} key={item}>
                <span>{item}</span>
                <ArrowRight size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="aktuelles" className="details-section">
        <div className="container">
          <div className="section-title details-title">
            <div className="gold-line" />
            <h2>Mehr erfahren</h2>
            <p>
              Die wichtigsten Programmpunkte von FRD — kurz, verständlich und mit klarem Fokus auf Freiheit, Verantwortung und praktische Lösungen.
            </p>
          </div>

          <div className="detail-grid">
            {detailItems.map((item) => (
              <article className="detail-card" id={item.id} key={item.id}>
                <h3>{item.title}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mitmachen" className="signup">
        <div className="signup-card">
          <div>
            <div className="gold-line" />
            <h2>Werde Teil von FRD.</h2>
            <p>
              Unterstütze den Aufbau einer Bewegung für mehr Freiheit,
              Eigenverantwortung und Vertrauen in die Bürger.
            </p>
          </div>

          <form className="form">
            <input placeholder="Name" />
            <input placeholder="E-Mail" />
            <textarea placeholder="Nachricht" />
            <button type="button" className="btn btn-primary">Nachricht senden</button>
          </form>
        </div>
      </section>

      <section id="impressum" className="impressum">
        <div className="impressum-card">
          <div className="gold-line" />
          <h2>Impressum</h2>
          <p className="legal-intro">Angaben gemäß § 5 DDG.</p>
          <div className="legal-grid">
            <div>
              <h3>Anbieter</h3>
              <p>
                David Nissle<br />
                FRD — Freiraum Deutschland<br />
                71 Randwick Avenue<br />
                Logan Reserve QLD 4133<br />
                Australia
              </p>
            </div>
            <div>
              <h3>Kontakt</h3>
              <p>E-Mail: david.nissle@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="kontakt" className="footer">
        <div className="footer-inner">
          <FRDLogo />
          <div className="footer-text">
            <div>© FRD — Freiraum Deutschland.</div>
            <div className="footer-links">
              <a href="#impressum">Impressum</a>
              <a href="#impressum">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
