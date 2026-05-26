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

function FRDLogo() {
  return (
    <a href="/" className="logo-link" aria-label="Zur Startseite">
      <img src="/frd-logo.jpg" alt="FRD — Freiraum Deutschland" className="logo" />
    </a>
  );
}

function Header() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <FRDLogo />

        <div className="nav-links">
          <a href="/#ueber">Über FRD</a>
          <a href="/#programm">Programm</a>
          <a href="/#details">Aktuelles</a>
          <a href="/#mitmachen">Mitmachen</a>
          <a href="/#kontakt">Kontakt</a>
        </div>

        <div className="nav-actions">
          <a href="/#mitmachen" className="btn btn-outline">Mitglied werden</a>
          <a href="/#mitmachen" className="btn btn-primary">Unterstützen</a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer id="kontakt" className="footer">
      <div className="footer-inner">
        <FRDLogo />
        <div className="footer-meta">
          <div>© FRD — Freiraum Deutschland.</div>
          <div className="footer-links">
            <a href="/#impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <section className="hero">
      <img
        src="/frd-hero-germany.png"
        alt="Deutschlandlandschaft mit Alpen im Süden, ländlichen Regionen in der Mitte und Nordseeküste im Norden"
        className="hero-image"
      />
      <div className="hero-fade" />
      <div className="hero-content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="hero-content"
        >
          <h1>Mehr Freiraum<br />für Deutschland.</h1>
          <div className="gold-line" />
          <p className="hero-kicker">Weniger Staat. Mehr Bürger.</p>
          <p className="hero-text">
            Für ein Deutschland, das seinen Bürgern vertraut und ihnen Freiraum gibt, ihr Leben selbstbestimmt zu gestalten.
          </p>
          <div className="hero-buttons">
            <a href="#programm" className="btn btn-primary btn-large">Unser Programm</a>
            <a href="#mitmachen" className="btn btn-light btn-large">
              Mitmachen <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />

      <section id="ueber" className="principles-section">
        <div className="container-wide">
          <div className="section-center">
            <div className="gold-line small" />
            <h2>Unsere Grundsätze</h2>
          </div>

          <div className="principles-grid">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className={`principle-card ${index !== 0 ? "with-divider" : ""}`}>
                <Icon size={58} strokeWidth={1.55} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programm" className="programme-section">
        <div className="programme-grid container">
          <div>
            <div className="gold-line small-left" />
            <h2>Ein einfacheres Deutschland.</h2>
            <p>
              Deutschland leidet unter übermäßiger Bürokratie, komplexen Regeln und politischer Mikromanagement-Kultur.
            </p>
            <p>
              FRD will wieder Raum schaffen für Leistung, Unternehmertum, Innovation und persönliche Verantwortung.
            </p>
          </div>

          <div className="focus-list">
            {focusItems.map(([item, href]) => (
              <a key={item} href={`#${href}`} className="focus-item">
                <span>{item}</span>
                <ArrowRight size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="details" className="details-section">
        <div className="container">
          <div className="section-center narrow">
            <div className="gold-line small" />
            <h2>Mehr erfahren</h2>
            <p>
              Die wichtigsten Programmpunkte von FRD — kurz, verständlich und mit klarem Fokus auf Freiheit, Verantwortung und praktische Lösungen.
            </p>
          </div>

          <div className="details-grid">
            <article id="steuern" className="detail-card">
              <h3>25 % Flat Tax</h3>
              <p>FRD setzt sich für ein einfaches, transparentes und faires Steuersystem ein. Eine einheitliche Steuer von 25 % auf persönliches Einkommen, Kapitalerträge und Investitionseinkommen soll Arbeit, Leistung und Vermögensaufbau wieder stärker belohnen.</p>
              <p>Ziel ist weniger Bürokratie, weniger Sonderregeln und eine Steuererklärung, die normale Bürger wieder verstehen können.</p>
            </article>

            <article id="buerokratie" className="detail-card">
              <h3>Massiver Bürokratieabbau</h3>
              <p>Deutschland braucht einen Staat, der dient statt blockiert. FRD will unnötige Vorschriften streichen, Genehmigungen beschleunigen, Verwaltung digitalisieren und für neue Regeln eine klare Gegenleistung verlangen: eine neue Regel rein, zwei alte raus.</p>
              <p>Besonders Mittelstand, Handwerk, Gründer, Familien und Eigentümer sollen endlich wieder mehr Zeit für das Wesentliche haben.</p>
            </article>

            <article id="wirtschaft" className="detail-card">
              <h3>Mehr wirtschaftliche Freiheit</h3>
              <p>Wohlstand entsteht durch Menschen, die arbeiten, gründen, investieren, entwickeln und Verantwortung übernehmen. FRD will Unternehmensgründungen vereinfachen, Arbeit flexibler machen und Leistung wieder respektieren.</p>
              <p>Deutschland soll wieder ein Standort werden, an dem Innovation, Ingenieurskunst, Handwerk und Unternehmertum wachsen können.</p>
            </article>

            <article id="energie" className="detail-card">
              <h3>Technologieoffene Energiepolitik</h3>
              <p>Energiepolitik muss bezahlbar, sicher und realistisch sein. FRD setzt auf Technologieoffenheit, Versorgungssicherheit, Innovation und eine neue sachliche Offenheit gegenüber Kernenergie.</p>
              <p>Klimaschutz soll durch Fortschritt und marktfähige Lösungen erreicht werden — nicht durch immer mehr Verbote im privaten Alltag.</p>
            </article>

            <article id="freiheit" className="detail-card">
              <h3>Schutz der Meinungsfreiheit</h3>
              <p>Eine freie Demokratie braucht offene Debatten, unterschiedliche Meinungen und Bürger, die ohne Angst vor politischer oder bürokratischer Bevormundung sprechen können.</p>
              <p>FRD steht für starke Bürgerrechte, Privatsphäre und einen Staat, der Sicherheit schafft, aber Freiheit respektiert.</p>
            </article>

            <article id="familien" className="detail-card">
              <h3>Stärkere Familien und Gemeinschaften</h3>
              <p>Familien, Nachbarschaften, Vereine, Betriebe und lokale Gemeinschaften geben Menschen Halt. FRD will diesen Raum stärken, statt immer mehr Verantwortung in zentrale Systeme zu verschieben.</p>
              <p>Ziel ist eine Gesellschaft, in der Bürger wieder mehr selbst entscheiden, füreinander einstehen und ihre Zukunft aktiv gestalten können.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="mitmachen" className="contact-section">
        <div className="contact-card container-small">
          <div className="contact-grid">
            <div>
              <div className="gold-line small-left" />
              <h2>Werde Teil von FRD.</h2>
              <p>
                Unterstütze den Aufbau einer Bewegung für mehr Freiheit, Eigenverantwortung und Vertrauen in die Bürger.
              </p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value="cc32d958-2593-433c-93c5-87e0792a0904" />
              <input type="hidden" name="subject" value="Neue Nachricht über freiraum-deutschland.de" />
              <input type="hidden" name="from_name" value="FRD Website" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
              <input name="name" required placeholder="Name" />
              <input name="email" type="email" required placeholder="E-Mail" />
              <textarea name="message" required placeholder="Nachricht" />
              <button type="submit" className="btn btn-primary form-button">Nachricht senden</button>
              <p className="form-note">
                Mit dem Absenden der Nachricht erklärst du dich mit der Verarbeitung deiner Angaben zur Bearbeitung deiner Anfrage einverstanden.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="impressum" className="legal-section">
        <div className="legal-card container-small">
          <div className="gold-line small-left" />
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
    </>
  );
}

function DatenschutzPage() {
  return (
    <section className="legal-section page-legal">
      <div className="legal-card container-small">
        <div className="gold-line small-left" />
        <h1>Datenschutzerklärung</h1>

        <div className="privacy-content">
          <div>
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              David Nissle<br />
              FRD — Freiraum Deutschland<br />
              71 Randwick Avenue<br />
              Logan Reserve QLD 4133<br />
              Australia<br />
              E-Mail: david.nissle@gmail.com
            </p>
          </div>

          <div>
            <h2>2. Allgemeine Hinweise</h2>
            <p>
              Der Schutz personenbezogener Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur verarbeitet, soweit dies zur Bereitstellung der Website, zur Bearbeitung von Anfragen oder aufgrund gesetzlicher Pflichten erforderlich ist.
            </p>
          </div>

          <div>
            <h2>3. Kontaktaufnahme</h2>
            <p>
              Wenn du uns über das Kontaktformular oder per E-Mail kontaktierst, werden die von dir angegebenen Daten verarbeitet, insbesondere Name, E-Mail-Adresse und Nachrichteninhalt. Diese Daten verwenden wir ausschließlich zur Bearbeitung deiner Anfrage und zur weiteren Kommunikation mit dir.
            </p>
            <p>
              Für das Kontaktformular nutzen wir den Dienst Web3Forms, der die eingegebenen Daten technisch entgegennimmt und an uns weiterleitet.
            </p>
          </div>

          <div>
            <h2>4. Server-Logfiles</h2>
            <p>
              Beim Besuch der Website können durch den Hosting-Anbieter technische Zugriffsdaten verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem und aufgerufene Seiten. Diese Daten dienen der technischen Bereitstellung, Sicherheit und Stabilität der Website.
            </p>
          </div>

          <div>
            <h2>5. Hosting</h2>
            <p>
              Diese Website wird über Vercel bzw. einen externen Hosting-Anbieter betrieben. Der Anbieter verarbeitet technische Daten, die für den sicheren und zuverlässigen Betrieb der Website erforderlich sind.
            </p>
          </div>

          <div>
            <h2>6. Keine Analyse- oder Tracking-Tools</h2>
            <p>
              Derzeit verwenden wir keine Analyse-, Werbe- oder Tracking-Cookies. Sollten solche Dienste zukünftig eingesetzt werden, wird diese Datenschutzerklärung entsprechend angepasst.
            </p>
          </div>

          <div>
            <h2>7. Rechte betroffener Personen</h2>
            <p>
              Betroffene Personen haben im Rahmen der geltenden Datenschutzgesetze insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie Datenübertragbarkeit. Anfragen hierzu können an die oben genannte E-Mail-Adresse gerichtet werden.
            </p>
          </div>

          <div>
            <h2>8. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const isDatenschutz = typeof window !== "undefined" && window.location.pathname === "/datenschutz";

  return (
    <main id="top" className="app-shell">
      <Header />
      {isDatenschutz ? <DatenschutzPage /> : <HomePage />}
      <Footer />
    </main>
  );
}
