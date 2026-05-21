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

const logoSrc = "data:image/jpeg;base64,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";

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

function FRDLogo() {
  return (
    <a href="/" className="block shrink-0" aria-label="Zur Startseite">
      <img
        src="/frd-logo.jpg"
        alt="FRD — Freiraum Deutschland"
        className="h-auto w-[230px] object-contain md:w-[320px]"
      />
    </a>
  );
}

function GermanyLandscape() {
  return (
    <>
      <img
        src="/frd-hero-germany.png"
        alt="Deutschlandlandschaft mit Alpen im Süden, ländlichen Regionen in der Mitte und Nordseeküste im Norden"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,242,234,0.96)_0%,rgba(247,242,234,0.86)_28%,rgba(247,242,234,0.42)_46%,rgba(247,242,234,0.10)_62%,rgba(247,242,234,0)_100%)]" />
    </>
  );
}

function DatenschutzPage() {
  return (
    <section className="bg-[#f7f8fb] px-8 py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm md:p-14">
        <div className="h-[2px] w-16 bg-[#d39b00]" />
        <h1 className="mt-5 font-serif text-5xl leading-tight text-[#061b4e]">Datenschutzerklärung</h1>

        <div className="mt-8 space-y-8 text-[#061b4e]/85">
          <div>
            <h2 className="text-xl font-bold text-[#061b4e]">1. Verantwortlicher</h2>
            <p className="mt-3 leading-7">
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
            <h2 className="text-xl font-bold text-[#061b4e]">2. Allgemeine Hinweise</h2>
            <p className="mt-3 leading-7">
              Der Schutz personenbezogener Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur verarbeitet, soweit dies zur Bereitstellung der Website, zur Bearbeitung von Anfragen oder aufgrund gesetzlicher Pflichten erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#061b4e]">3. Kontaktaufnahme</h2>
            <p className="mt-3 leading-7">
              Wenn du uns über das Kontaktformular oder per E-Mail kontaktierst, werden die von dir angegebenen Daten verarbeitet, insbesondere Name, E-Mail-Adresse und Nachrichteninhalt. Diese Daten verwenden wir ausschließlich zur Bearbeitung deiner Anfrage und zur weiteren Kommunikation mit dir.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#061b4e]">4. Server-Logfiles</h2>
            <p className="mt-3 leading-7">
              Beim Besuch der Website können durch den Hosting-Anbieter technische Zugriffsdaten verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem und aufgerufene Seiten. Diese Daten dienen der technischen Bereitstellung, Sicherheit und Stabilität der Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#061b4e]">5. Hosting</h2>
            <p className="mt-3 leading-7">
              Diese Website wird über einen externen Hosting-Anbieter betrieben. Der Anbieter verarbeitet technische Daten, die für den sicheren und zuverlässigen Betrieb der Website erforderlich sind.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#061b4e]">6. Keine Analyse- oder Tracking-Tools</h2>
            <p className="mt-3 leading-7">
              Derzeit verwenden wir keine Analyse-, Werbe- oder Tracking-Cookies. Sollten solche Dienste zukünftig eingesetzt werden, wird diese Datenschutzerklärung entsprechend angepasst.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#061b4e]">7. Rechte betroffener Personen</h2>
            <p className="mt-3 leading-7">
              Betroffene Personen haben im Rahmen der geltenden Datenschutzgesetze insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie Datenübertragbarkeit. Anfragen hierzu können an die oben genannte E-Mail-Adresse gerichtet werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#061b4e]">8. Speicherdauer</h2>
            <p className="mt-3 leading-7">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FRDWebsite() {
  const isDatenschutz = typeof window !== "undefined" && window.location.pathname === "/datenschutz";

  return (
    <main id="top" className="min-h-screen scroll-smooth bg-white text-[#061b4e]">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-4">
          <FRDLogo />

          <div className="hidden items-center gap-9 text-sm font-extrabold uppercase tracking-wide lg:flex">
            <a href="/#ueber" className="hover:text-[#d39b00]">Über FRD</a>
            <a href="/#programm" className="hover:text-[#d39b00]">Programm</a>
            <a href="/#details" className="hover:text-[#d39b00]">Aktuelles</a>
            <a href="/#mitmachen" className="hover:text-[#d39b00]">Mitmachen</a>
            <a href="/#kontakt" className="hover:text-[#d39b00]">Kontakt</a>
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="/#mitmachen" className="rounded border border-[#061b4e] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide transition hover:bg-slate-50">
              Mitglied werden
            </a>
            <a href="/#mitmachen" className="rounded bg-[#061b4e] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0b2d74]">
              Unterstützen
            </a>
          </div>
        </div>
      </nav>

      {isDatenschutz ? (
        <DatenschutzPage />
      ) : (
        <>
          <section className="relative overflow-hidden bg-[#f7f2ea]">
            <GermanyLandscape />
            <div className="relative mx-auto flex min-h-[560px] max-w-[1500px] items-center px-8 py-20">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-[650px]">
                <h1 className="font-serif text-[4.4rem] font-semibold leading-[0.98] tracking-tight text-[#061b4e] md:text-[5.9rem]">
                  Mehr Freiraum<br />für Deutschland.
                </h1>
                <div className="mt-7 h-[3px] w-32 bg-[#d39b00]" />
                <p className="mt-6 text-xl font-extrabold leading-8">Weniger Staat. Mehr Bürger.</p>
                <p className="mt-2 max-w-[480px] text-xl leading-8 text-[#061b4e]/90">
                  Für ein Deutschland, das seinen Bürgern vertraut und ihnen Freiraum gibt, ihr Leben selbstbestimmt zu gestalten.
                </p>
                <div className="mt-9 flex flex-col gap-5 sm:flex-row">
                  <a href="#programm" className="inline-flex min-w-[205px] items-center justify-center rounded bg-[#061b4e] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#0b2d74]">
                    Unser Programm
                  </a>
                  <a href="#mitmachen" className="inline-flex min-w-[170px] items-center justify-center rounded border border-[#061b4e] bg-white/65 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-[#061b4e] transition hover:bg-white">
                    Mitmachen <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="ueber" className="bg-white px-8 py-16">
            <div className="mx-auto max-w-[1400px]">
              <div className="mx-auto h-[2px] w-16 bg-[#d39b00]" />
              <h2 className="mt-4 text-center font-serif text-4xl font-semibold text-[#061b4e] md:text-5xl">Unsere Grundsätze</h2>
              <div className="mt-12 grid gap-0 md:grid-cols-5">
                {principles.map(({ icon: Icon, title, text }, index) => (
                  <div key={title} className={`px-8 text-center ${index !== 0 ? "md:border-l md:border-slate-200" : ""}`}>
                    <Icon className="mx-auto h-14 w-14 stroke-[1.5] text-[#061b4e]" />
                    <h3 className="mt-6 text-sm font-extrabold uppercase tracking-wide text-[#061b4e]">{title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#061b4e]/85">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="programm" className="bg-[#f7f8fb] px-8 py-24">
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
              <div>
                <div className="h-[2px] w-16 bg-[#d39b00]" />
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#061b4e]">Ein einfacheres Deutschland.</h2>
                <p className="mt-8 text-lg leading-9 text-[#061b4e]/80">
                  Deutschland leidet unter übermäßiger Bürokratie, komplexen Regeln und politischer Mikromanagement-Kultur.
                </p>
                <p className="mt-6 text-lg leading-9 text-[#061b4e]/80">
                  FRD will wieder Raum schaffen für Leistung, Unternehmertum, Innovation und persönliche Verantwortung.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  ["25 % Flat Tax", "steuern"],
                  ["Massiver Bürokratieabbau", "buerokratie"],
                  ["Mehr wirtschaftliche Freiheit", "wirtschaft"],
                  ["Technologieoffene Energiepolitik", "energie"],
                  ["Schutz der Meinungsfreiheit", "freiheit"],
                  ["Stärkere Familien und Gemeinschaften", "familien"],
                ].map(([item, href]) => (
                  <a key={item} href={`#${href}`} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <span className="text-lg font-semibold text-[#061b4e]">{item}</span>
                    <ArrowRight className="h-5 w-5 text-[#d39b00]" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section id="details" className="bg-white px-8 py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto h-[2px] w-16 bg-[#d39b00]" />
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#061b4e]">Mehr erfahren</h2>
                <p className="mt-6 text-lg leading-8 text-[#061b4e]/80">
                  Die wichtigsten Programmpunkte von FRD — kurz, verständlich und mit klarem Fokus auf Freiheit, Verantwortung und praktische Lösungen.
                </p>
              </div>

              <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                <article id="steuern" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#061b4e]">25 % Flat Tax</h3>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">FRD setzt sich für ein einfaches, transparentes und faires Steuersystem ein. Eine einheitliche Steuer von 25 % auf persönliches Einkommen, Kapitalerträge und Investitionseinkommen soll Arbeit, Leistung und Vermögensaufbau wieder stärker belohnen.</p>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Ziel ist weniger Bürokratie, weniger Sonderregeln und eine Steuererklärung, die normale Bürger wieder verstehen können.</p>
                </article>

                <article id="buerokratie" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#061b4e]">Massiver Bürokratieabbau</h3>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Deutschland braucht einen Staat, der dient statt blockiert. FRD will unnötige Vorschriften streichen, Genehmigungen beschleunigen, Verwaltung digitalisieren und für neue Regeln eine klare Gegenleistung verlangen: eine neue Regel rein, zwei alte raus.</p>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Besonders Mittelstand, Handwerk, Gründer, Familien und Eigentümer sollen endlich wieder mehr Zeit für das Wesentliche haben.</p>
                </article>

                <article id="wirtschaft" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#061b4e]">Mehr wirtschaftliche Freiheit</h3>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Wohlstand entsteht durch Menschen, die arbeiten, gründen, investieren, entwickeln und Verantwortung übernehmen. FRD will Unternehmensgründungen vereinfachen, Arbeit flexibler machen und Leistung wieder respektieren.</p>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Deutschland soll wieder ein Standort werden, an dem Innovation, Ingenieurskunst, Handwerk und Unternehmertum wachsen können.</p>
                </article>

                <article id="energie" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#061b4e]">Technologieoffene Energiepolitik</h3>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Energiepolitik muss bezahlbar, sicher und realistisch sein. FRD setzt auf Technologieoffenheit, Versorgungssicherheit, Innovation und eine neue sachliche Offenheit gegenüber Kernenergie.</p>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Klimaschutz soll durch Fortschritt und marktfähige Lösungen erreicht werden — nicht durch immer mehr Verbote im privaten Alltag.</p>
                </article>

                <article id="freiheit" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#061b4e]">Schutz der Meinungsfreiheit</h3>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Eine freie Demokratie braucht offene Debatten, unterschiedliche Meinungen und Bürger, die ohne Angst vor politischer oder bürokratischer Bevormundung sprechen können.</p>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">FRD steht für starke Bürgerrechte, Privatsphäre und einen Staat, der Sicherheit schafft, aber Freiheit respektiert.</p>
                </article>

                <article id="familien" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#061b4e]">Stärkere Familien und Gemeinschaften</h3>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Familien, Nachbarschaften, Vereine, Betriebe und lokale Gemeinschaften geben Menschen Halt. FRD will diesen Raum stärken, statt immer mehr Verantwortung in zentrale Systeme zu verschieben.</p>
                  <p className="mt-4 leading-7 text-[#061b4e]/80">Ziel ist eine Gesellschaft, in der Bürger wieder mehr selbst entscheiden, füreinander einstehen und ihre Zukunft aktiv gestalten können.</p>
                </article>
              </div>
            </div>
          </section>

          <section id="mitmachen" className="bg-white px-8 py-24">
            <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-[#f7f8fb] p-10 shadow-sm md:p-14">
              <div className="grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
                <div>
                  <div className="h-[2px] w-16 bg-[#d39b00]" />
                  <h2 className="mt-5 font-serif text-5xl leading-tight text-[#061b4e]">Werde Teil von FRD.</h2>
                  <p className="mt-8 text-lg leading-9 text-[#061b4e]/80">Unterstütze den Aufbau einer Bewegung für mehr Freiheit, Eigenverantwortung und Vertrauen in die Bürger.</p>
                </div>
                <form action="mailto:david.nissle@gmail.com" method="post" encType="text/plain" className="space-y-4">
                  <input placeholder="Name" className="w-full rounded-lg border border-slate-300 bg-white px-5 py-4 outline-none focus:border-[#061b4e]" />
                  <input placeholder="E-Mail" className="w-full rounded-lg border border-slate-300 bg-white px-5 py-4 outline-none focus:border-[#061b4e]" />
                  <textarea placeholder="Nachricht" className="min-h-[140px] w-full rounded-lg border border-slate-300 bg-white px-5 py-4 outline-none focus:border-[#061b4e]" />
                  <button type="submit" className="w-full rounded-lg bg-[#061b4e] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#0c2f7a]">Nachricht senden</button>
                  <p className="text-xs leading-5 text-[#061b4e]/60">Mit dem Absenden der Nachricht erklärst du dich mit der Verarbeitung deiner Angaben zur Bearbeitung deiner Anfrage einverstanden.</p>
                </form>
              </div>
            </div>
          </section>

          <section id="impressum" className="bg-[#f7f8fb] px-8 py-20">
            <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm md:p-14">
              <div className="h-[2px] w-16 bg-[#d39b00]" />
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#061b4e]">Impressum</h2>
              <p className="mt-6 text-lg leading-8 text-[#061b4e]/80">Angaben gemäß § 5 DDG.</p>
              <div className="mt-8 grid gap-6 text-[#061b4e]/85 md:grid-cols-2">
                <div>
                  <h3 className="font-bold text-[#061b4e]">Anbieter</h3>
                  <p className="mt-2 leading-7">David Nissle<br />FRD — Freiraum Deutschland<br />71 Randwick Avenue<br />Logan Reserve QLD 4133<br />Australia</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#061b4e]">Kontakt</h3>
                  <p className="mt-2 leading-7">E-Mail: david.nissle@gmail.com</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <footer id="kontakt" className="border-t border-slate-200 bg-white px-8 py-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <FRDLogo />
          <div className="flex flex-col gap-3 text-sm font-semibold text-[#061b4e]/70 md:items-end">
            <div>© FRD — Freiraum Deutschland.</div>
            <div className="flex gap-5">
              <a href="/#impressum" className="hover:text-[#061b4e]">Impressum</a>
              <a href="/datenschutz" className="hover:text-[#061b4e]">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
