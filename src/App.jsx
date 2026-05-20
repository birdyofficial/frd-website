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
  "25 % Flat Tax",
  "Massiver Bürokratieabbau",
  "Mehr wirtschaftliche Freiheit",
  "Technologieoffene Energiepolitik",
  "Schutz der Meinungsfreiheit",
  "Stärkere Familien und Gemeinschaften",
];

function FRDLogo() {
  return <img src="/frd-logo.jpg" alt="FRD — Freiraum Deutschland" className="logo" />;
}

export default function App() {
  return (
    <main>
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
            {focusItems.map((item) => (
              <div className="focus-item" key={item}>
                <span>{item}</span>
                <ArrowRight size={20} />
              </div>
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

      <footer id="kontakt" className="footer">
        <div className="footer-inner">
          <FRDLogo />
          <div className="footer-text">© FRD — Freiraum Deutschland.</div>
        </div>
      </footer>
    </main>
  );
}
