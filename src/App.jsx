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

const logoSrc = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCAB3APADASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAwQFAQII/8QARRAAAQMDAQMHBwkGBQUAAAAAAQACAwQFEQYSITEHE0FRYXGBFBUiMjaRsSNCUnJzdKHB0SQzVGKSkxZTVsLhNENVgvD/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQACAgICAgIABwAAAAAAAAAAAQIRAzESIQQyIkEFQlFhgZHR/9oADAMBAAIRAxEAPwCyEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBYaSqirKds8LtqNxIB68Ej8lwdZ3sWu2mCF+KupBazB3tb0u/TtW3pJnN6XtwP+UD7ySgOyiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC0Lxdaez0L6modw3MYOL3dAC+L1eqSy0hmqX5ed0cTfWeez9VU94vFVeaw1FU7cNzI2+qwdQ/VAY7nX1F1rpKqoO1LIcADg0dDR2K5bbT+SW2lp8Y5qJrPcFVGk7cblf6eMtzFEedk6sD9TgK4EB4c4OOPRlRbUGo7nYGMknt1PNA92yJI5juPUQW7lKlFeUUA6WeeqaM/ipjsh6OPT8olVUzxwQWhsksjtlrRMck9XBdbz/qP/AEw/++FXel/aa2feGq71eaUX0isbZEJdS6hiBLtMTYH0ZNr4Bc4cotQKlsMtpEby4NcHSkEZPUWqwVHtW2KO7W90scINbB6cTgN7sHJb2gqqa+0WpkgdnZOzjaxuzwUU1Bqa52DmnVFtp5YpDhskc5xnqILdxUr4hRDlLA/w5GeqoZ8Ckdh6OdS8oVZWVMdPTWhsk0hw1gn4n3LrG+6ka3aOmXY7KgEqv9He1dt+1/2lXUOCtNKL0RG2QkcoIp6gwXO01NK8esA7JHgQFJ7VeaG8QGWhnbIB6zeDm946Fp6sssV4s8zSweUxNL4X9IcBnHceCqG2XGotddFWUry2RhzjocOlp7CiipLohtpl9L4m5zm3cyGGTHo7ZIHjhY6GqZW0UFVH6kzA8dmRlZ1mXIZfNX3GxVTYKu1wkPG0yRk5LXD+latBryvuVRzFFZRNLsl2y2foHTvCx8qYGxbD05kH4NXI5N/ac/d3/Fq1SXGylu6JY7UGooxtSaYkLf5JwT+AWGLlApGTczcaCropBxDm7WPDcfwUywtC62miu9MYK2Fsg+a7g5h6wehUtfaLdmS33OiucPO0VTHOzp2TvHeOIW2qYu1vr9J3ocxO9h9aGdu7bb1EfEKw9I6nZfqd0UwbHWxDL2jg4fSH5joUyjStEJ/RJERFQsERY55o6eJ8s0jY42DLnOOAB2lAZFF9SawpbTt09Ls1NaNxaD6Mf1j+Sjep9cy1ZfSWhzooODp+D3/V6h28e5QsHegNyurqm4VT6irldLK7iT0dgHQOxYWNc97WMaXOcQA0DJJ6l90dJUV1Q2npYXzSu4NaPx7B2qy9N6Wp7FF5dcHsfVNbkuJ9CEdnb2+5AbekrGLJbSZ8eVTYdKfo9TfD4qQqJuu7r1eqejpcika/beemQN3+AzhStVUk9GuTFLHSltnqi3KJ7LSfax/FSlRXlF9lpPtY/irx2YvRXWl/aa2feGq71RNjndTXqinZC+d0czXCOP1nnqCs3/FNf/pm6f0haZFbKw0SleBzXEhpBwcHB4FQm562r6WBzhYKqA49eoBDR34H5roaCqZayxSVNQ/bmlqZHPd1ncs3FpWWsk6iHKV7Ns+8M+BUvUQ5SvZtn3hnwKmO0Hogmjvau2/a/wC0q6uhUfpipho9RUNRUyNihjky57uAGCrX/wAVWINz50pcdj8lXyLsrDR1KqRsVLNI84axjnEnqAX5/wA9PirF1Lqd16p5LXYIJ6rnBiWVkZ9XqA7esrHpfQszKiOsvDWtDDtMpwcknoLujwSPxXYl2THTtM+ksFvgl3PZA0OHUcLpoiyLlfcqf7u2fWk+DVx+Tf2nP3d/xauzyp/urZ9aT4NXG5N/ac/d3/Fq2XoZv2LZREWJoRjXttbXadmmDcy0nyrD2fOHu+Cq+z3GS1XWnrIz+6flw+k3pHuV23NgktlWx28OheD/AElUIN7R3LbH2mjOXTs/Qcb2yRtew5a4Ag9YK+ly9NSOl05bXu4mnZn3LoyyshifJK4MjYC5znHAAHSsTQxV1ZT0FJJU1UrYoYxlzj/9xVRao1TU36cxt2oaFh9CHO938zus9nQmrdSSX6u2Yy5lDCfkmcNr+c9vV1L4sOlLjey2RjPJ6U/9+Qbj9UdPwQHDbkkAZJO4AdKl1h0PXXDZmrs0dMd+HD5Rw7B0ePuUnpqHT+kWBzyJ67HrOAdIe4cGhcq56sra3LKb9lhP0Tl57z0eCpLIonVh8TJm0uv1JBz1l0rTGCljbzxG9jDtPeetxUXut6qro/5V2xED6MTfV8esrl5JJJJJPEldSx2ia61IABbTtPyknV2DtXPKcpukexi8XF4secu2SHRdAWQy1zxgyegzuHE+/wCClaxwxMghZFE0NYwBrQOgLIumMeKo8LPleWbmworyi+y0n2sfxUqUV5RfZaT7aP4rSO0YvRXOl/aa2feGq71SGl/aa2feGq8FbJsrDR8uaHNLXAEHcQeBWhZ7Yy1QzwQ7IhfO+WNrfmh2N3vyuiizLhRDlK9m2feGfAqXqIcpXs2z7wz4FWjsh6IDpKNkup7eyRjXsdJva4ZB3FWffNM0NztksMVPBBUYzHKxgaWu7cdHWqy0d7V237X/AGlXX0K+R0ysdFCxy1lpuBLHSU1VA8g4OCCOg9YVxabvcV8tbKhuGyt9GWMfNd+h4hRrlD09zsXnelZmSMYqGj5zeh3h09ncofpq+SWK6NqBl0D/AEZmD5zevvHEKWuashfF0Xaix088VTBHNC8PikaHNcOBBWRYmhX3Kn+7tn1pPg1cfk39pz93f8Wrscqf7u2fWk+DVyOTf2nP3d/xatl6Gb9i2ERFiaHPv1Q2ksVfO7gyB/vxgKigDgAbzwCsjlJvLGUrLTC/MkhEk2PmtHAHvO/wUe0PY33W7sqJWfslK4PcSNznDeG/mVtD4xtmcu3RaVppjR2mjpjuMULGHvAUI1xeKi51o0/amPmdn5cR7y4/R7hxKnVcKl1K9lG5jJ3+iHv3hmfnY6cdShM10tumYZKSzNFTWuzz1VIdrLunJ6T2DcsHJLtnRjxyyPjFGO26Wtmn4GVuoZo5p+LIBvaD3fOP4LHdtX1VWDDQjySn4Aj1yO/o8Fwf2671bn4mq53cSAXH/gLvUGirjPh1S6OlZ1E7TvcP1WDlKXqepjwYMHyyu2R3aLnFziSSckneStmkpp6uQR00L5X9TBlTel0vZqDBqpDUPHRI7d/SF0hX01NHzdJAGtHAABo9yxk4Q95G0vP+sUbODatHSOIkuT9hvHmozknvP6KV0gp4m+TUrWtZGODBuH/K5UtXPUHZLjg7g1u5dejp/J4A0+sd7u9TgzLJKsa6X2eb5OTJPvI/4NhERdpxhQnlIuVM2zMohMx08krXbAcCQ0byT1dCm3FaXmm3EkmgpSTxPMt/RSnTshlK2Wrjor1RVMrgI4pmuceoZ3q84J4qiMSQSslYd4cxwIPuWt5pt38BS/2W/os9PSU1LteTU8UO1x5tgbn3K0pciEqMyIioWCgnKXcaY2yCiZMx07phIWBwJa0A7z4lTsgEEHeCtLzTbv4Cl/st/RTF07IZTOnayKhv9DUzODYo5QXuzwB3E/irvhmjmYHxSMkYeDmOBB9y1vNNu/gKT+y39Fnp6SnpQRTQRQh28iNgaD7lMpcuyEqMj2te0tcA5pGCDwIVQ6t0vNZqx81PG59vecseBnm/5T+RVwLwgOBBAIPEFIy4ktWVfofVcdtPm+vkDaRxzHITuiJ4g9h/BWdHNHJGJI3sdGRkOa4EHxWs61W5xy6gpSe2Fv6LLHR00UDoI6eJkLuMbWANPgkmn2EqK55S7jTVNXR0sMrJHwBzn7LgQ0nGB37lydEXKjtd+8orZ2wxGFzNo5O8kdXcrW80W3/x9L/Zb+ieabd/AUv9lv6Kymqojj3Zznax0+1uTc4fAOP5LiXLXjZgYLDSzVU7twkMZ2R3N4n8FLRareDkUFLn7Fv6LZjijiGI42MHU0AKtpE9lZWvRNzutUau8yOp2SO2n7RzK/8AIePuVhQxUNktoYwR01LCOk4Hiekn8Vsyy83wjkeepjVzaltbUva6OhhaW72uqH7WyesNG7KrPITGKOPcJbzqHMNvidQ28+tPNljpB3ccLXptPWO24NbUGtmHzB6vuH5ldea0XOrP7VXM2T81oOPduXkemWj1qp3gwBcc5ZX6x/s7FkUVxUqX7f6YxeWQR81Q0kcEY4DGPwC15K+pn/eTOx1DcPwXUZp6nbxllPuCztslI3/MPe5cs8Hk5PZhZMUdI4LTvWxDE+U7MbS49i7rLbSM4Qg/WOVstY1gw1oaOoBRD8OlfzYl5K/KjSoaAQYkkwZOjqC30Renjxxxx4xOWUnJ2wiItCoTK0b5usdfg4/Z37//AFKjejqGJrKSoNlkp3+TgisdOHCQkDPo53Z48FNdAmWUyq2vJpW3W/yVNBUVD2ysbFOyTZbC4sAGTndvwcruakjqYdCNjqpOdqWiBsjg713bTc7+3rSiLJai4OnLeykfPJ5m82PIDc+Uc7tj37sLBps5hvu8nFfMPwCULJLlFV1kY17LHHR0tRTXGWQPNY+TZZKxp9MAZ9Ld0YUp1rWwtgo7dPPzMdZL8s8Zy2Ju93DrOAp49iyUZXmRxUX09X+XaRnj5znJaVkkDnfSAB2T4jC0Kh5PJzbCH73GnGc8TthRQJxlMqIa0hqZ7lZ20Ty2pYZpYsdLmtDgPHGPFcx1wlveoLPcm7cdG2pbBFGd207YLnnwOB4JQssJMrzoUOgtFDdNQ6gdWtcTFLHsSCQtMfyYJIIKJEkyyig8tXUVXJnVyzyukc1rmNmPGRrZMB3uXV01bmU0z5vMvm9xjDRJ5Rzm2DxGM7kogkeUUTtb8WzU2XerVVHE8PRWakt9NcNFW8VkXO81SNezLiMO2OO4pQJNleZHWotpi2Qs0pHUUuKesqqT059on0sHDjk9C1NOwRWq60lNW219LXTROaypjnL46kgZJO/j070oE0yM4zxXuVDbZbaS/vudXdi+SojqZImjnC3ydjfVwAd3XlZrw+ajvtgFDC+tc2GYNaZgC8bI3lx49aUCWZRQ63TVE1fqh9VTmml5iPMXOB+z6Dukbl2tLEnTFsJznyZnHuRqiTr5XmVXQvkB1QLr5Uf+r8k5nfjmMbO11etvXT1EK0atp57e4mopaEzCLomAfhzPEE+OFPEiyZ5RQejro7hbtV1lO9xilYHNJ4j5Hh3grG+igtFrslxt23BWTvga9geSJw4DaBaTv6+xOIsniIEVSTHUQsqaeSCUbUcjSxwzjIIwV80tPHSUsVPC3ZiiYGMGc4AGAiIDWNpo3Gu2odoV2OfDiSH7seG5eTWikqLU22zMe+laGtALznDTkb+PQiIDy3WWjtkr5KYTbT27J25nPGPErNS2+mpG1DYGFoqJHSyekTlzuJREBr+YqAUNLSCIiKkeHwkPO0wg8QeK2DQU5uPl7mbVQI+aDicgNznAHeiIBBb6enq6mqiZsy1Ozzu/c7AwDjhwWhDpe0wVjahlMQWP5xkZkcY2u6w3OAURLB0Z6KCerpqqRhM1Ntc2cndtDBXxNbaSZ9M50IBppDLGG+iA7fvwO8oiA3FxqrTFrrKyWpnhkdJMQZAJXBr8DG8A4REsG7UW2kqba63vhApXNDObZ6IAHQMcFgt1jorbOZqYTB5bsnbmc8Y7iexEQGGt0za66rfUz07tuTHOBkjmtkx9IA4K6phjMBgDQI9nY2RuAGMYREBght9LDbW29sQNK2Pm+bdvBb1Falv09brdUienifzjWlrDJI5/Ng8Q3J3IiA+a/TVruFU+ongcJJN0nNyOYJB/MAd63PNlIJ6SZsQa6kY5kIacBgIwRjuCIlgC20onrJhGdusaGzHaPpAAgd24rTodN26geH0zZ2kMMYBneQARjcCcIiWDY8z0PmjzZzA8k2NjYyc448eOVlbb6dlayrDXc/HDzAcXE+hnOPf0oiAwx2Wgijro4oNhlcSZgHHDiRg46vBYaDTdroKhk8FOTLGMMdJI5+x9XJ3IiWDroiID/9k=";

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
    <a href="#top" className="block shrink-0" aria-label="Zur Startseite">
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
        src="data:image/jpeg;base64,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"
        alt="Deutschlandlandschaft mit Alpen im Süden, ländlichen Regionen in der Mitte und Nordseeküste im Norden"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,242,234,0.96)_0%,rgba(247,242,234,0.86)_28%,rgba(247,242,234,0.42)_46%,rgba(247,242,234,0.10)_62%,rgba(247,242,234,0)_100%)]" />
    </>
  );
}

export default function FRDWebsite() {
  return (
    <main id="top" className="min-h-screen scroll-smooth bg-white text-[#061b4e]">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-4">
          <FRDLogo />

          <div className="hidden items-center gap-9 text-sm font-extrabold uppercase tracking-wide lg:flex">
            <a href="#ueber" className="hover:text-[#d39b00]">Über FRD</a>
            <a href="#programm" className="hover:text-[#d39b00]">Programm</a>
            <a href="#aktuelles" className="hover:text-[#d39b00]">Aktuelles</a>
            <a href="#mitmachen" className="hover:text-[#d39b00]">Mitmachen</a>
            <a href="#kontakt" className="hover:text-[#d39b00]">Kontakt</a>
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="#mitmachen" className="rounded border border-[#061b4e] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide transition hover:bg-slate-50">
              Mitglied werden
            </a>
            <a href="#mitmachen" className="rounded bg-[#061b4e] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0b2d74]">
              Unterstützen
            </a>
          </div>
        </div>
      </nav>

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
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                FRD setzt sich für ein einfaches, transparentes und faires Steuersystem ein. Eine einheitliche Steuer von 25 % auf persönliches Einkommen, Kapitalerträge und Investitionseinkommen soll Arbeit, Leistung und Vermögensaufbau wieder stärker belohnen.
              </p>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Ziel ist weniger Bürokratie, weniger Sonderregeln und eine Steuererklärung, die normale Bürger wieder verstehen können.
              </p>
            </article>

            <article id="buerokratie" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-[#061b4e]">Massiver Bürokratieabbau</h3>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Deutschland braucht einen Staat, der dient statt blockiert. FRD will unnötige Vorschriften streichen, Genehmigungen beschleunigen, Verwaltung digitalisieren und für neue Regeln eine klare Gegenleistung verlangen: eine neue Regel rein, zwei alte raus.
              </p>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Besonders Mittelstand, Handwerk, Gründer, Familien und Eigentümer sollen endlich wieder mehr Zeit für das Wesentliche haben.
              </p>
            </article>

            <article id="wirtschaft" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-[#061b4e]">Mehr wirtschaftliche Freiheit</h3>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Wohlstand entsteht durch Menschen, die arbeiten, gründen, investieren, entwickeln und Verantwortung übernehmen. FRD will Unternehmensgründungen vereinfachen, Arbeit flexibler machen und Leistung wieder respektieren.
              </p>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Deutschland soll wieder ein Standort werden, an dem Innovation, Ingenieurskunst, Handwerk und Unternehmertum wachsen können.
              </p>
            </article>

            <article id="energie" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-[#061b4e]">Technologieoffene Energiepolitik</h3>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Energiepolitik muss bezahlbar, sicher und realistisch sein. FRD setzt auf Technologieoffenheit, Versorgungssicherheit, Innovation und eine neue sachliche Offenheit gegenüber Kernenergie.
              </p>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Klimaschutz soll durch Fortschritt und marktfähige Lösungen erreicht werden — nicht durch immer mehr Verbote im privaten Alltag.
              </p>
            </article>

            <article id="freiheit" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-[#061b4e]">Schutz der Meinungsfreiheit</h3>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Eine freie Demokratie braucht offene Debatten, unterschiedliche Meinungen und Bürger, die ohne Angst vor politischer oder bürokratischer Bevormundung sprechen können.
              </p>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                FRD steht für starke Bürgerrechte, Privatsphäre und einen Staat, der Sicherheit schafft, aber Freiheit respektiert.
              </p>
            </article>

            <article id="familien" className="scroll-mt-28 rounded-2xl border border-slate-200 bg-[#f7f8fb] p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-[#061b4e]">Stärkere Familien und Gemeinschaften</h3>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Familien, Nachbarschaften, Vereine, Betriebe und lokale Gemeinschaften geben Menschen Halt. FRD will diesen Raum stärken, statt immer mehr Verantwortung in zentrale Systeme zu verschieben.
              </p>
              <p className="mt-4 leading-7 text-[#061b4e]/80">
                Ziel ist eine Gesellschaft, in der Bürger wieder mehr selbst entscheiden, füreinander einstehen und ihre Zukunft aktiv gestalten können.
              </p>
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
              <p className="mt-8 text-lg leading-9 text-[#061b4e]/80">
                Unterstütze den Aufbau einer Bewegung für mehr Freiheit, Eigenverantwortung und Vertrauen in die Bürger.
              </p>
            </div>
            <form className="space-y-4">
              <input placeholder="Name" className="w-full rounded-lg border border-slate-300 bg-white px-5 py-4 outline-none focus:border-[#061b4e]" />
              <input placeholder="E-Mail" className="w-full rounded-lg border border-slate-300 bg-white px-5 py-4 outline-none focus:border-[#061b4e]" />
              <textarea placeholder="Nachricht" className="min-h-[140px] w-full rounded-lg border border-slate-300 bg-white px-5 py-4 outline-none focus:border-[#061b4e]" />
              <button type="button" className="w-full rounded-lg bg-[#061b4e] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#0c2f7a]">Nachricht senden</button>
            </form>
          </div>
        </div>
      </section>

      <section id="impressum" className="bg-[#f7f8fb] px-8 py-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm md:p-14">
          <div className="h-[2px] w-16 bg-[#d39b00]" />
          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#061b4e]">Impressum</h2>
          <p className="mt-6 text-lg leading-8 text-[#061b4e]/80">
            Angaben gemäß § 5 DDG.
          </p>

          <div className="mt-8 grid gap-6 text-[#061b4e]/85 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-[#061b4e]">Anbieter</h3>
              <p className="mt-2 leading-7">
                David Nissle<br />
                FRD — Freiraum Deutschland<br />
                71 Randwick Avenue<br />
                Logan Reserve QLD 4133<br />
                Australia
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#061b4e]">Kontakt</h3>
              <p className="mt-2 leading-7">
                E-Mail: david.nissle@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="kontakt" className="border-t border-slate-200 bg-white px-8 py-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <FRDLogo />
          <div className="flex flex-col gap-3 text-sm font-semibold text-[#061b4e]/70 md:items-end">
            <div>© FRD — Freiraum Deutschland.</div>
            <div className="flex gap-5">
              <a href="#impressum" className="hover:text-[#061b4e]">Impressum</a>
              <a href="#impressum" className="hover:text-[#061b4e]">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
