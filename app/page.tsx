import CtaButton from "@/components/Ctabutton";
import ChallengeCards from "@/components/Challengecards";
import Clientswiper from "@/components/Clientswiper";
import AdvantageCards from "@/components/Advantagecards";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";
import ChecklistSection from "@/components/ChecklistSection";
import Link from "next/link";
import PartnerLogosMarquee from "@/components/Partnerlogosmarquee";
import { ReviewCardGroup } from "@/components/ReviewCardGroup";
import { FAQs } from "@/components/Faq";
import Articleslider from "@/components/Articleslider";
import ServicesSlider from "@/components/ServicesSlider";
const page = () => {
  return (
    <>
      <section className="bg-[url(/images/herobg.jpg)] bg-no-repeat bg-cover pt-55.75 pb-5">
        <div className="max-w-208 mx-auto w-full text-center">
          <div className="pb-8">
            <h1 className="text-[70px] pb-4 leading-18 font-extrabold text-shadow-xl text-white-1100 uppercase max-w-153.5 w-full mx-auto">
              10 Neukunden in 45 Tagen
            </h1>
            <p className="text-[32px] leading-9.75 text-white-1100 font-medium">
              Durch gezieltes <br /> Online Marketing!
            </p>
          </div>
          <div className="py-4 px-6 bg-black-1100/40 backdrop-blur-[2.5px] rounded-2xl max-w-113.25 w-full mx-auto">
            <ol>
              <li className="flex items-center gap-4">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Top 3 bei Google – und deine Kunden finden dich sofort.
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Doppelt so viele Anfragen in 3 Monaten – ohne hohe
                  Werbekosten.
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  100 % Betreuung – während du dich auf dein Geschäft
                  fokussierst.
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Langfristig bessere Sichtbarkeit und mehr Umsatz. 
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Lokale Sichtbarkeit stärken – mehr Aufträge aus deiner Region.
                </p>
              </li>
              <li className="items-center gap-4 hidden">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5.5 text-left flex-1 text-white-1100">
                  Offene Stellen 50 % schneller besetzen – ohne teure Anzeigen.
                </p>
              </li>
            </ol>
          </div>
          <div className="pt-8">
            <CtaButton
              className="mb-5"
              href="/"
              label="Jetzt Kennenlerngespräch buchen!"
            />
            <p className="text-sm font-normal text-white-1100 leading-4.25">
              Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
            </p>
          </div>
          <div className="text-center pt-20">
            <img src="images/scroll-icon.svg" alt="" className="mx-auto" />
          </div>
        </div>
      </section>
      <section className="py-45">
        <div className="max-w-338 w-full mx-auto">
          <div className="flex items-center gap-15">
            <div className="w-[40%]">
              <h2 className="text-5xl font-bold leading-16.75 text-white-1100 pb-3">
                Gemeinsam <br /> mehr erreichen.
              </h2>
              <p className="text-base font-normal leading-5.5 text-white-1100">
                Partnerschaft auf Augenhöhe: Zusammen entwickeln wir
                individuelle Strategien und Lösungen für langfristigen Erfolg.
              </p>
            </div>
            <div className="w-[60%]">
              {/* <ol className="flex items-center gap-6 mb-6">
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon1.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon2.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon3.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon4.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon5.svg" alt="" />
                  </div>
                </li>
              </ol>
              <ol className="flex items-center gap-6">
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon6.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon7.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon8.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon9.svg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="rounded-xl w-35 h-25 flex items-center justify-center bg-black-1200">
                    <img src="images/icon10.svg" alt="" />
                  </div>
                </li>
              </ol> */}
              <PartnerLogosMarquee />
            </div>
          </div>
        </div>
      </section>
      <section className="audience-sec">
        <div className="max-w-308 px-4 mx-auto w-full relative">
          <div className="flex items-start gap-17.75 relative z-1 rounded-2xl bg-black-1100 pt-22.75 pr-12 shadow-4xl">
            <div className="w-2/5 relative z-1">
              <img
                src="images/audience-img.png"
                alt=""
                className="h-128 object-cover"
              />
            </div>
            <div className="w-3/5 pt-12.5 relative z-1">
              <h2 className="pb-8 text-5xl font-bold leading-16.75 text-white-1100 text-right">
                Erreiche deine Zielgruppe genau dort, wo sie sucht
              </h2>
              <ol className="flex flex-col items-right">
                <li className="pb-6">
                  <div className="flex items-center justify-end">
                    <p className="text-2xl font-semibold leading-8.25 text-white-1100">
                      Mit maßgeschneiderter
                      <span className="text-orange-1100 mx-3">SEO</span>
                    </p>
                    <span>
                      <img src="images/check-icon.svg" alt="" />
                    </span>
                  </div>
                </li>
                <li className="pb-6">
                  <div className="flex items-center justify-end">
                    <p className="text-2xl font-semibold leading-8.25 text-white-1100">
                      Effektiven
                      <span className="text-orange-1100 mx-3">Google Ads</span>
                    </p>
                    <span>
                      <img src="images/check-icon.svg" alt="" />
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-end">
                    <p className="text-2xl font-semibold leading-8.25 text-white-1100">
                      Strategischem
                      <span className="text-orange-1100 mx-3">
                        Online Marketing
                      </span>
                    </p>
                    <span>
                      <img src="images/check-icon.svg" alt="" />
                    </span>
                  </div>
                </li>
              </ol>
            </div>
            <img
              src="images/dots-shape.svg"
              alt=""
              className="absolute top-12 left-1/2 -translate-x-1/2"
            />
          </div>
          <img
            src="images/shade.png"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>
      <section className="pt-45 pb-20">
        <div className="max-w-308 px-4 mx-auto w-full">
          <div className="border-b border-solid border-white-1100/40">
            <h2 className="text-5xl font-bold pb-10 max-w-294.5 mx-auto w-full text-white-1100 leading-16.75 text-center">
              Warum ist
              <span className="text-orange-1100"> Online Marketing </span>
              mit SEO und Google Ads heute unverzichtbar?
            </h2>
          </div>
          <div className="pt-16 text-center pb-8">
            <p className="text-base font-normal leading-5.5 text-white pb-6">
              Stell dir vor, potenzielle Kunden oder Mitarbeiter suchen nach
              genau dem, was du anbietest – und finden dich nicht. In einer
              Welt, in der täglich 8,5 Milliarden Suchanfragen bei Google
              gestellt werden, bedeutet Unsichtbarkeit verlorene Chancen. Deine
              Online-Präsenz ist der Schlüssel, um genau dort sichtbar zu sein,
              wo deine Zielgruppe nach Lösungen sucht.
            </p>
            <p className="text-base font-normal leading-5.5 text-white pb-6">
              Mit gezieltem Online Marketing, sei es SEO, Google Ads oder Social
              Media, erreichst du nicht nur mehr Sichtbarkeit, sondern sprichst
              auch gezielt die richtigen Menschen an. Du musst dich nicht um
              jeden Schritt kümmern – wir übernehmen die Arbeit, von der Planung
              bis zur Umsetzung, damit du dich auf dein Geschäft konzentrieren
              kannst. So gewinnst du nicht nur neue Kunden, sondern weckst auch
              das Interesse potenzieller Mitarbeiter.
            </p>
            <p className="text-base font-semibold leading-5.5 text-white">
              Ist deine Website optimal aufgestellt? Erhalte eine kostenlose
              Kurz-Analyse deiner Website.
            </p>
          </div>
          <div className="text-center">
            <CtaButton
              href="/"
              className="mb-3"
              label="Website-Analyse anfordern"
            />
            <p className="text-xs font-normal leading-4 text-white-1100">
              Finde heraus, wie Online Marketing dir mehr Kunden bringt.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-yellow-1200 via-orange-1100 to-yellow-1200 py-22">
        <div className="max-w-308 px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 mb-16">
            <h2 className="text-5xl text-white-1100 font-bold leading-16.75">
              Kennst auch du diese Herausforderungen?
            </h2>
          </div>
          <ChallengeCards className="mt-16" />
        </div>
      </section>
      <section className="pt-72 pb-42.5">
        <div className="max-w-308 mx-auto w-full px-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold leading-10.5 text-white-1100">
                Potenziale erkennen und Schichtbarkeit steigern
              </h3>
              <p className="text-white text-base font-normal leading-5.5 pt-2">
                Unsere SEO-Checkliste für die Sichtbarkeit deiner Webseite zeigt
                dir in wenigen Minuten, wo du stehst – und vor allem, wo
                ungenutztes Potenzial schlummert und wie dringend dein
                Handlungsbedarf ist.
              </p>
              <ol className="py-4">
                <li className="flex items-center gap-3 pb-2">
                  <span>
                    <img src="images/orange-check.svg" alt="" />
                  </span>
                  <p className="text-base font-medium text-white">
                    Überprüfen, ob meine Website bei Google sichtbar ist
                  </p>
                </li>
                <li className="flex items-center gap-3 pb-2">
                  <span>
                    <img src="images/orange-check.svg" alt="" />
                  </span>
                  <p className="text-base font-medium text-white">
                    Versteckte SEO-Potenziale entdecken
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <img src="images/orange-check.svg" alt="" />
                  </span>
                  <p className="text-base font-medium text-white">
                    Konkreten Optimierungsbedarf sofort erkennen
                  </p>
                </li>
              </ol>
              <CtaButton href="/" label="Kostenlos herunterladen" />
            </div>
            <div className="bg-orange-1100 rounded-xl pt-7 pl-8 flex items-start justify-between">
              <div className="w-1/2">
                <h3 className="text-[25px] font-bold text-white leading-8.75 pb-3">
                  SEO-Checkliste für deine Sichtbarkeit
                </h3>
                <CtaButton
                  href="/"
                  variant="white"
                  label="Jetzt Checkliste anfordern"
                  className="hover:bg-white hover:text-black! pl-5 pr-3"
                />
              </div>
              <div className="h-full w-1/2">
                <img
                  src="images/identify-img.png"
                  alt=""
                  className="h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-66.25 pb-83.5 bg-[url(/images/missionbg.jpg)] bg-no-repeat bg-cover overflow-hidden">
        <div className="max-w-330 w-full px-5 mx-auto">
          <Clientswiper />
        </div>
      </section>
      <section className="py-45 relative">
        <div className="max-w-308 mx-auto px-4 w-full relative z-1">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8 relative">
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-5xl text-white-1100 font-bold leading-16.75 pb-8">
              Gewinne nachhaltig mehr Neukunden mit deiner Online Marketing
              Agentur aus Hamburg
            </h2>
            <CtaButton
              href="/"
              label="Fragen oder mehr erfahren"
              className="mb-4"
            />
            <p className="text-base leading-5.5 font-normal text-white-1100">
              Nummer eintragen - wir rufen zurück
            </p>
          </div>
          <div className="flex items-center gap-8 pt-16">
            <div className="w-1/2">
              <h3 className="text-[32px] font-medium leading-10 text-white-1100 pb-6">
                Wie kann Online Marketing deine Herausforderungen lösen?
              </h3>
              <p className="text-sm font-normal text-grey-1100 leading-4.25">
                Mit einer gezielten Online Marketing Strategie steigerst du
                deine Reichweite, gewinnst qualifizierte Anfragen und behauptest
                dich am Markt.
                <span className="text-orange-1100">
                  Suchmaschinenoptimierung
                </span>
                (SEO) sorgt dafür, dass deine Website bei Google sichtbar ist,
                wenn potenzielle Kunden und Mitarbeiter nach deinen
                Dienstleistungen suchen.
                <span className="text-orange-1100">Mit Google Ads</span> (SEA)
                erreichst du deine Zielgruppe schnell und gezielt, um
                kurzfristig mehr Anfragen zu generieren. Neben SEO und SEA sind
                Social Media Marketing,
                <span className="text-orange-1100">
                  UI/UX Webdesign und Content-Marketing
                </span>
                wichtig, um langfristig erfolgreich zu bleiben und sowohl Kunden
                als auch Mitarbeiter anzusprechen.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="images/online-marketing.jpg"
                alt=""
                className="rounded-xl shadow-4xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-45">
        <div className="max-w-330 w-full px-5 mx-auto relative z-40">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-white font-bold text-5xl leading-[140%]">
              Full Stack Online Marketing für deinen Erfolg
            </h2>
            <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6 max-w-250 w-full mx-auto">
              Um deine Ziele zu erreichen, bieten wir ein breites Spektrum an
              Online Marketing Dienstleistungen. Diese Dienstleistungen kannst
              du einzeln oder als Teil einer umfassenden Strategie nutzen, um
              deine Geschäftsziele optimal zu erreichen.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8">
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/seo-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Suchmaschinenoptimierung (SEO)
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  SEO
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Erhöhe deine organische Sichtbarkeit in Suchmaschinen und
                  ziehe mehr qualifizierte Besucher auf deine Website.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/sea-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Suchmaschinenwerbung (SEA)
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  SEA
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Setze gezielte Werbekampagnen ein, um sofortige Sichtbarkeit
                  und schnelle Ergebnisse zu erzielen.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/marketing-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Social Media Marketing{" "}
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  Social Media
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Baue eine starke Präsenz auf relevanten
                  Social-Media-Plattformen auf und steigere deine
                  Markenbekanntheit sowie Kundenbindung.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/webdesign-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    UI/UX Webdesign
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  UI/UX Webdesign
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Gestalte benutzerfreundliche und ansprechende Websites, die
                  Besucher in Kunden verwandeln.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/Videoproduktion-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Videoproduktion{" "}
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  Videoproduktion
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Präsentiere deine Produkte oder Dienstleistungen effektiv mit
                  professionellen Videos.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/Werbung-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    TV-Werbung
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  TV-Werbung
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Erweitere deine Reichweite durch strategisch geplante
                  Fernsehwerbung.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/pr-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Public Relations (PR)
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  Public Relations
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Stärke dein Markenimage und baue Vertrauen durch gezielte
                  PR-Maßnahmen auf.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="group cursor-pointer transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl relative overflow-hidden">
              <div className="group-hover:-translate-x-full transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative">
                <img
                  src="../images/Conversion-img.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 px-10 py-12">
                  <h3 className="text-white-1100 font-medium text-[32px] leading-[124%]">
                    Conversion Optimierung
                  </h3>
                </div>
              </div>
              <div className="h-full absolute top-0 group-hover:translate-x-0 translate-x-full transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center p-10 flex flex-col items-center justify-center">
                <h3 className="text-white-1100 font-bold text-5xl leading-[140%]">
                  Conversion
                </h3>
                <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                  Verbessere die Nutzererfahrung auf deiner Website und erhöhe
                  die Anzahl der Besucher, die zu Kunden werden.
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center mt-12 border border-solid border-orange-1100 rounded h-12 pl-4 pr-3 text-white-1100 font-normal text-base leading-[140%] gap-4 hover:bg-orange-1100 hover:text-white"
                >
                  Weitere Informationen{" "}
                  <span className="bg-orange-1100 rounded w-6 h-6 flex items-center justify-center">
                    <img
                      src="../images/right-arrow.svg"
                      alt=""
                      className="group-hover:rotate-45"
                    />{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-45">
        <div className="max-w-308 px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-white-1100 text-5xl font-bold leading-16.75">
              Die Vorteile einer starken Online-Sichtbarkeit
            </h2>
          </div>
          <div className="flex items-center justify-between pt-16 pb-12">
            <h3 className="text-2xl font-semibold leading-8.25 text-grey-1100">
              Dein Nutzen im Überblick:
            </h3>
            <CtaButton
              href="/"
              label="Fragen oder mehr erfahren?"
              variant="transparent"
            />
          </div>
          <AdvantageCards />
        </div>
      </section>
      <section className="pb-45">
        <div className="max-w-308 mx-auto w-full px-4">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 mb-16 relative">
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h4 className="text-2xl font-semibold leading-8.25 text-white-1100 pb-6">
              <span className="text-orange-1100">
                Möchtest du mehr darüber erfahren,
              </span>{" "}
              wie eine Google Ads Agentur dein Unternehmen voranbringen und die
              Vorteile von Suchmaschinenwerbung voll ausschöpfen kann?
            </h4>
            <p className="text-base font-normal text-white-1100 leading-5.5">
              Vereinbare jetzt dein kostenloses Kennenlerngespräch mit unserer
              Ads Agentur und lass uns gemeinsam deine Ziele erreichen!
            </p>
          </div>
          <div className="flex max-w-249.25 w-full mx-auto">
            <div className="bg-white-1100 rounded-tl-2xl rounded-bl-2xl py-9.5 px-6 w-[36%]">
              <Link href="/" className="mb-13.5 inline-flex">
                <img src="images/benchmedia.svg" alt="" />
              </Link>
              <h3 className="text-xl font-extrabold leading-6 text-orange-1100 uppercase">
                KENNENLERNGESPRÄCH
              </h3>
              <p className="text-xs font-light leading-3.5 text-black-1200 -tracking-[0.12px] py-3">
                30 Minuten - Google Meet
              </p>
              <h4 className="text-black-1200 text-base font-bold leading-5.5 pb-1">
                ONLINE MARKETING BERATUNG
              </h4>
              <p className="text-black-1200 text-sm font-semibold leading-4.75">
                DU VERDIENST ES, ONLINE SICHTBAR ZU SEIN!
              </p>
              <div className="pt-8">
                <p className="text-xs font-normal leading-3.5 -tracking-[0.12px] pb-4">
                  Im Kennenlerngespräch analysieren wir gemeinsam deine
                  Online-Präsenz und besprechen, wie du deine Reichweite,
                  Sichtbarkeit und den Erfolg steigern kannst.
                </p>
                <p className="text-xs font-normal leading-3.5 -tracking-[0.12px] pb-4">
                  <span className="text-orange-1100">
                    Wähle einfach deinen Wunschtermin im Kalender aus
                  </span>{" "}
                  und gib deine Kontaktdaten ein. Du erhältst im Anschluss eine
                  E-Mail mit deinem persönlichen Meeting-Link.
                </p>
                <p className="text-xs font-normal leading-3.5 -tracking-[0.12px]">
                  Wir freuen uns auf unser Treffen!
                </p>
              </div>
            </div>
            <div className="w-[64%]">
              <img
                src="images/calendar-img.jpg"
                alt=""
                className="w-full rounded-tr-2xl rounded-br-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-330 w-full px-5 mx-auto relative z-40">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-white font-bold text-5xl leading-[140%]">
              Du fragst dich, ob dein Online Marketing optimal aufgestellt ist?
            </h2>
            <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6 max-w-250 w-full mx-auto">
              Ob du genügend qualifizierte Kunden erreichst und deine Webseite
              wirklich funktioniert, wie sie sollte? Vielleicht stellst du dir
              auch die Frage, ob sich eine Zusammenarbeit mit BMS lohnt? Diese
              Checkliste hilft dir in wenigen Minuten, genau das herauszufinden.
            </p>
          </div>
          <div className="pt-16">
            <ChecklistSection />
          </div>
        </div>
      </section>
      <section className="overflow-hidden py-45">
        <div className="max-w-308 px-4 mx-auto w-full ">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-5xl text-white-1100 font-bold leading-16.75">
              Wie unsere Online Marketing Strategien 10 Neukunden in 45 Tagen
              brachten – Erfolgreiche Case Studies im Überblick
            </h2>
          </div>
        </div>
        <div className="pt-17 -mx-5 ">
          <div className="max-w-308 px-4 mx-auto w-full">
            <CaseStudiesSlider />
          </div>
        </div>
      </section>
      <section className="pb-45">
        <div className="max-w-308 mx-auto px-4 w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-5xl font-bold leading-16.75 text-white-1100 pb-6">
              Gemeinsam zu messbaren Erfolgen mit deiner Marketing Agentur
            </h2>
            <p className="text-base text-white-1100 font-normal leading-5.5">
              Bei Benchmark Media geht es nicht nur um Marketing – es geht um
              messbare Ergebnisse. Als Full-Service-Agentur setzen wir auf
              datenbasierte Strategien, die auf deine Ziele abgestimmt sind, um
              deine Online-Präsenz nachhaltig zu verbessern.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 py-16">
            <div className="bg-[url(/images/border.png)] bg-no-repeat group bg-cover hover:bg-none border-solid border-transparent border hover:border-white-1100 rounded-2xl min-h-47.75">
              <div className="bg-[url(/images/agentur-img1.png)] group-hover:bg-[url(/images/statbg.png)] h-full bg-no-repeat bg-cover rounded-2xl p-8">
                <h3 className="text-gradient text-5xl font-semibold uppercase leading-14.75 pb-4">
                  +312%
                </h3>
                <p className="text-xs font-normal text-white-1100 max-w-53 w-full">
                  Steigerung der organischen Sichtbarkeit mit SEO
                </p>
              </div>
            </div>
            <div className="bg-[url(/images/border.png)] group hover:bg-none border-solid border-transparent border hover:border-white-1100 bg-no-repeat bg-cover rounded-2xl min-h-47.75">
              <div className="bg-[url(/images/agentur-img1.png)] group-hover:bg-[url(/images/statbg.png)] h-full bg-no-repeat bg-cover rounded-2xl p-8">
                <h3 className="text-gradient text-5xl font-semibold uppercase leading-14.75 pb-4">
                  +542%
                </h3>
                <p className="text-xs font-normal text-white-1100 max-w-53 w-full">
                  Anstieg der rankenden Keywords
                </p>
              </div>
            </div>
            <div className="bg-[url(/images/border.png)] group hover:bg-none border-solid border-transparent border hover:border-white-1100 bg-no-repeat bg-cover rounded-2xl min-h-47.75">
              <div className="bg-[url(/images/agentur-img1.png)] group-hover:bg-[url(/images/statbg.png)] h-full bg-no-repeat bg-cover rounded-2xl p-8">
                <h3 className="text-gradient text-5xl font-semibold uppercase leading-14.75 pb-4">
                  +74%
                </h3>
                <p className="text-xs font-normal text-white-1100 max-w-53 w-full">
                  Mehr Umsatz durch zielgerichtete Suchmaschinenwerbung (SEA)
                </p>
              </div>
            </div>
            <div className="bg-[url(/images/border.png)] group hover:bg-none border-solid border-transparent border hover:border-white-1100 bg-no-repeat bg-cover rounded-2xl min-h-47.75">
              <div className="bg-[url(/images/agentur-img1.png)] group-hover:bg-[url(/images/statbg.png)] h-full bg-no-repeat bg-cover rounded-2xl p-8">
                <h3 className="text-gradient text-5xl font-semibold uppercase leading-14.75 pb-4">
                  +103%
                </h3>
                <p className="text-xs font-normal text-white-1100 max-w-53 w-full">
                  Erhöhung der qualifizierten Leads durch eine integrierte
                  Marketingstrategie
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="border border-solid bg-[url(/images/info-bg.png)] bg-no-repeat bg-cover border-white-1100 rounded-2xl py-4 px-6 bg-linear-to-r from-cyan-500 to-blue-500">
              <div className="flex items-center gap-4 mb-4 min-h-16.5">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <h4 className="text-2xl text-white-1100 font-semibold leading-8.25 flex-1">
                  Jahrelange Online Marketing <br /> Erfahrung
                </h4>
              </div>
              <p className="text-base font-normal leading-5.5 text-white-1100">
                Mit umfassender Expertise in SEO, SEA und weiteren Disziplinen
                unterstützen wir Unternehmen dabei, ihre Online-Sichtbarkeit zu
                steigern und greifbare Erfolge zu erzielen. Unsere Maßnahmen
                bringen mehr qualifizierte Anfragen und steigern den Umsatz.
              </p>
            </div>
            <div className="border border-solid bg-[url(/images/info-bg.png)] bg-no-repeat bg-cover border-white-1100 rounded-2xl py-4 px-6 bg-linear-to-r from-cyan-500 to-blue-500">
              <div className="flex items-start gap-4 mb-4 min-h-16.5">
                <span className="block mt-2.25">
                  <img src="images/check.svg" alt="" />
                </span>
                <h4 className="text-2xl text-white-1100 font-semibold leading-8.25 flex-1">
                  Vertrauen und Zusammenarbeit
                </h4>
              </div>
              <p className="text-base font-normal leading-5.5 text-white-1100">
                Als zertifizierter Google-Partner garantieren wir dir modernste
                Lösungen und regelmäßige Kommunikation. Mit Transparenz und
                Fachwissen schaffen wir die Grundlage für deinen Erfolg – denn
                dein Erfolg ist unser Erfolg.
              </p>
            </div>
            <div className="border border-solid bg-[url(/images/info-bg.png)] bg-no-repeat bg-cover border-white-1100 rounded-2xl py-4 px-6 bg-linear-to-r from-cyan-500 to-blue-500">
              <div className="flex items-center gap-4 mb-4 min-h-16.5">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <h4 className="text-2xl text-white-1100 font-semibold leading-8.25 flex-1">
                  Messbare Erfolge dank gezieltem <br /> Marketing-Strategien
                </h4>
              </div>
              <p className="text-base font-normal leading-5.5 text-white-1100">
                Wir bieten keine Standardlösungen. Jede Strategie basiert auf
                einer genauen Analyse und wird präzise auf deine Geschäftsziele
                zugeschnitten. Schritt für Schritt begleiten wir dich, um
                langfristige Erfolge sicherzustellen.
              </p>
            </div>
            <div className="border border-solid bg-[url(/images/info-bg.png)] bg-no-repeat bg-cover border-white-1100 rounded-2xl py-4 px-6 bg-linear-to-r from-cyan-500 to-blue-500">
              <div className="flex items-center gap-4 mb-4 min-h-16.5">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <h4 className="text-2xl text-white-1100 font-semibold leading-8.25 flex-1">
                  Individuelles Full-Stack Marketing, die zu dir passen
                </h4>
              </div>
              <p className="text-base font-normal leading-5.5 text-white-1100">
                Wir bieten keine Standardlösungen. Jede Strategie basiert auf
                einer genauen Analyse und wird präzise auf deine Geschäftsziele
                zugeschnitten. Schritt für Schritt begleiten wir dich, um
                langfristige Erfolge sicherzustellen.
              </p>
            </div>
          </div>
          <div className="text-center">
            <CtaButton
              href="/"
              label="Jetzt Kennenlerngespräch buchen"
              className="mb-3"
            />
            <p className="text-xs text-white-1100 leading-4 font-normal">
              Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-yellow-1200 via-orange-1100 to-yellow-1200 py-10 relative z-1">
        <div className="max-w-346.25 mx-auto px-4 w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10">
            <h2 className="text-[32px] font-medium text-white-1100 leading-9.75">
              Lass dich von den Online Marketing Erfahrungen unserer Kunden
              überzeugen!
            </h2>
          </div>
          <ReviewCardGroup />
        </div>
      </section>
      <section className="py-45 relative">
        <div className="max-w-311.5 mx-auto w-full px-4 relative z-1">
          <div className="flex items-start gap-33.5">
            <div className="max-w-72.5 w-full">
              <div>
                <h2 className="text-5xl text-white font-semibold  leading-14.75">
                  FAQs
                </h2>
                <span className="bg-white-1100/40 h-px block my-8"></span>
                <p className="text-base text-white font-normal leading-5.5 pb-3">
                  Hier findest du Antworten auf häufig gestellte Fragen zum
                </p>
                <p className="text-base text-white font-normal leading-5.5">
                  Thema Suchmaschinenoptimierung
                </p>
                <div className="relative">
                  <img
                    src="images/ai-human.png"
                    alt=""
                    className="relative z-1"
                  />
                  <span className="w-102.75 h-55.25 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[150px] opacity-50"></span>
                </div>
              </div>
            </div>
            <div>
              <FAQs />
            </div>
          </div>
        </div>
        <img
          src="images/faq-bg.png"
          alt=""
          className="absolute -top-20 left-0 w-full h-full"
        />
      </section>
      <section className="overflow-hidden pb-45">
        <div className="max-w-308 px-4 mx-auto w-full ">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="text-5xl text-white-1100 font-bold leading-16.75">
              Insider-Wissen für dein Online Marketing: Full-Stack-Strategien
              für deinen Erfolg
            </h2>
          </div>
        </div>
        <div className="pt-22">
          <div className="max-w-308 px-4 mx-auto w-full ">
            <Articleslider />
            <div className="text-center pt-8">
              <CtaButton
                href="/"
                label="Alle Artikel ansehen"
                variant="transparent"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="relative z-3 bg-[url(/images/securebg.png)] bg-no-repeat bg-cover py-11">
          <div className="max-w-308 mx-auto px-4 w-full">
            <div className="max-w-192.25 w-full">
              <h2 className="text-5xl font-semibold text-white-1100 uppercase pb-10">
                Geh den direkten Weg zu mehr Kunden – sichere dir deine Online
                Marketing Beratung jetzt!
              </h2>
              <CtaButton href="/" label="Jetzt Kennenlerngespräch buchen" />
              <p className="text-xs leading-4 text-white-1100 pt-3">
                Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
              </p>
            </div>
          </div>
          <img
            src="images/secure-img.png"
            alt=""
            className="absolute -top-39.25 right-0 z-1"
          />
        </div>
        <span className="-top-20 right-0 w-196.25 h-41.25 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute  blur-[150px] opacity-60"></span>
      </section>
      <section className="pt-45">
        <div className="max-w-300 mx-auto w-full px-4">
          <div className="text-center pb-16.75 relative">
            <h2 className="text-orange-1100 text-5xl font-bold leading-16.75 pb-3">
              Online Marketing Agentur:
            </h2>
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h3 className="text-[32px] leading-9.75 text-white-1100 font-medium">
              Einführung, Strategien & Full-Service-Pakete
            </h3>
            <p className="text-base text-white-1100 font-normal leading-5.5 pb-6">
              Als deine Online Marketing Agentur bieten wir dir individuelle
              Marketinglösungen, die auf deine Branche und Bedürfnisse
              abgestimmt sind, von der strategischen Beratung bis hin zu
              umfassenden Full-Service-Paketen, die alle Aspekte des digitalen
              Marketings abdecken.
            </p>
            <CtaButton
              href="/"
              label="Fragen oder mehr erfahren?"
              variant="transparent"
            />
            <p className="text-xs font-normal text-white-1100 leading-4 pt-[15px]">
              Nummer eintragen - wir rufen zurück!
            </p>
          </div>
          <div className="sticky top-0 rounded-2xl bg-black-1200 p-8 shadow-4xl mb-11.75">
            <h4 className="text-2xl font-semibold text-white-1100 leading-8.25 pb-8">
              Was ist eine Full-Service Online Marketing Agentur?
            </h4>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Die Rolle einer Full-Service Online Marketing Agentur im
                    digitalen Marketing
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Als Full-Service Online Marketing-Agentur übernimmst du
                    sämtliche digitale Marketingaktivitäten für dein
                    Unternehmen. Das bedeutet, dass du dich nicht auf einzelne
                    Bereiche wie SEO oder Social Media beschränken musst. Eine
                    Full-Service Agentur bietet dir eine umfassende Online
                    Marketing Beratung, die alle relevanten Kanäle und
                    Strategien abdeckt. So kannst du sicherstellen, dass deine
                    Marketing-Strategie auf allen digitalen Ebenen optimal
                    umgesetzt wird.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Warum ist der ganzheitliche Ansatz einer Online
                    Marketing-Agentur so wichtig?
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Der Vorteil einer Full-Service Online Marketing-Agentur
                    liegt darin, dass du alle Marketingkanäle aus einer Hand
                    erhältst. Das spart dir nicht nur Zeit, sondern sorgt auch
                    für eine konsistente und integrierte Strategie. Egal, ob du
                    die Sichtbarkeit deiner Website durch SEO verbessern oder
                    eine gezielte PPC-Kampagne starten möchtest – deine Online
                    Marketing Agentur sorgt dafür, dass alles aufeinander
                    abgestimmt ist und gemeinsam auf deine Unternehmensziele
                    hinarbeitet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Welche Dienstleistungen bietet eine Full-Service Online
                    Marketing-Agentur?
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Eine Full-Service Online Marketing-Agentur stellt dir ein
                    breites Spektrum an Dienstleistungen zur Verfügung. Dazu
                    gehören Suchmaschinenoptimierung (SEO),
                    Pay-per-Click-Anzeigen (PPC), Social Media Marketing,
                    Content Marketing und Webdesign. Durch diese ganzheitliche
                    Herangehensweise kannst du sicher sein, dass deine Online
                    Marketing Strategie alle Aspekte abdeckt und deine
                    Online-Präsenz optimal ausgerichtet ist.{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Maßgeschneiderte Marketinglösungen für dein Unternehmen
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Eine gute Full-Service Online Marketing Agentur entwickelt
                    individuelle Strategien, die genau auf die Bedürfnisse
                    deines Unternehmens abgestimmt sind. Durch gezielte Online
                    Marketing Beratung erarbeitet deine Agentur Lösungen, die
                    deine Zielgruppe erreichen und deinen Umsatz steigern. Ob
                    SEO, PPC oder Social Media – deine Marketing-Agentur sorgt
                    für messbare Ergebnisse und nachhaltigen Erfolg.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-0 rounded-2xl bg-[url(/images/listboxbg.png)] bg-cover bg-no-repeat p-8 shadow-4xl mb-11.75">
            <h4 className="text-2xl font-semibold text-white-1100 leading-8.25 pb-8">
              Warum eine Online Marketing Agentur entscheidend für deinen Erfolg
              ist
            </h4>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Online Marketing Agentur: Deine Präsenz in der digitalen
                    Welt
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    In der heutigen digitalen Landschaft ist eine starke
                    Online-Präsenz für Unternehmen unverzichtbar. Deine Kunden
                    suchen online nach Lösungen, und genau hier kommt eine
                    professionelle Online Marketing Agentur ins Spiel. Sie hilft
                    dir dabei, deine Marke sichtbar zu machen und deine
                    Reichweite signifikant zu erhöhen. Ohne eine klare Strategie
                    im Online Marketing kannst du leicht im Wettbewerb
                    zurückfallen, während deine Konkurrenz bereits erfolgreich
                    im Internet agiert.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Vorteile von Online Marketing im Vergleich zu traditionellen
                    Marketing-Strategien
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Im Gegensatz zu herkömmlichen Marketingstrategien bietet das
                    Online Marketing dir die Möglichkeit, deine Zielgruppe
                    direkt und messbar zu erreichen. Mit einer erfahrenen Online
                    Marketing Agentur kannst du deine Werbebudgets effizient
                    einsetzen und erzielst durch präzises Targeting eine
                    deutlich höhere Conversion-Rate. Die Flexibilität und
                    Skalierbarkeit von Online Marketing Maßnahmen bieten dir
                    einen klaren Vorteil gegenüber Print- oder Fernsehwerbung.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Steigere deine Sichtbarkeit und deinen Umsatz mit einer
                    Marketing-Agentur
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Eine Online Marketing Agentur unterstützt dich dabei, deine
                    Sichtbarkeit auf den relevanten Kanälen zu verbessern. Durch
                    gezielte Maßnahmen wie SEO, Social Media Marketing und
                    PPC-Kampagnen steigert sie nicht nur deinen Traffic, sondern
                    auch deinen Umsatz. Online Marketing Beratung kann dir
                    helfen, die richtige Strategie zu finden, um potenzielle
                    Kunden gezielt anzusprechen und sie von deinem Angebot zu
                    überzeugen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Erreiche mehr durch eine umfassende Online
                    Marketing-Beratung
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Die richtige Beratung durch eine Marketing-Agentur ist der
                    Schlüssel, um das volle Potenzial deines Unternehmens im
                    Online Marketing auszuschöpfen. Eine umfassende Analyse
                    deiner aktuellen Online Präsenz und maßgeschneiderte
                    Strategien sind der erste Schritt zu mehr Reichweite und
                    Wachstum. Investiere in eine Online Marketing Agentur, um
                    langfristig erfolgreich zu sein und deine Marke in der
                    digitalen Welt nachhaltig zu positionieren
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-0 rounded-2xl bg-black-1200 p-8 shadow-4xl mb-11.75">
            <h4 className="text-2xl font-semibold text-white-1100 leading-8.25 pb-8">
              Maßgeschneiderte Lösungen deiner Online Marketing Agentur für jede
              Branche
            </h4>
            <div className="grid grid-cols-2 gap-8 relative">
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Online Marketing Agentur: Individuelle Strategien für jede
                    Branche
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Als erfahrene Online Marketing-Agentur wissen wir, dass jede
                    Branche eigene Herausforderungen und Chancen mit sich
                    bringt. Ob E-Commerce, B2B oder lokale Unternehmen – wir
                    passen unsere Marketingstrategien an deine spezifischen
                    Bedürfnisse an, um maximale Ergebnisse zu erzielen. Deine
                    Branche erfordert individuelle Ansätze, die wir durch
                    gezielte Online Marketing-Beratung und innovative Lösungen
                    entwickeln.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Erfolg durch branchenspezifische Online Marketing-Beratung
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    ede Branche funktioniert anders, und unsere Online
                    Marketing-Beratung zeigt dir, wie du das Beste aus deiner
                    speziellen Marktsituation herausholst. Von gezielten
                    SEO-Kampagnen für lokale Unternehmen bis hin zu umfassenden
                    PPC-Kampagnen für E-Commerce: Wir bieten dir Lösungen, die
                    auf deinen individuellen Bedarf abgestimmt sind. Mit unserer
                    Expertise erlangst du die Sichtbarkeit, die du benötigst, um
                    deine Konkurrenz zu überholen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing Agentur: Maßgeschneiderte Lösungen für dein
                    Unternehmen
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Dein Unternehmen verdient eine maßgeschneiderte Strategie,
                    die genau auf deine Ziele und Marktanforderungen abgestimmt
                    ist. Unsere Marketing-Agentur entwickelt individuelle
                    Lösungen, die genau zu deinem Geschäftsmodell passen. Wir
                    analysieren deinen Markt und deine Zielgruppe, um Online
                    Marketing-Strategien zu implementieren, die deinen Erfolg
                    nachhaltig fördern und deine Online-Präsenz ausbauen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing Agentur: Erfolgreiche Beispiele aus der Praxis
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Unsere Praxis zeigt, dass branchenspezifische Kampagnen
                    entscheidend zum Erfolg beitragen. Ob es darum geht, lokale
                    Unternehmen bei der Sichtbarkeit zu unterstützen oder
                    E-Commerce-Unternehmen bei der Conversion Optimierung zu
                    begleiten – unsere Marketing-Agentur hat zahlreiche
                    erfolgreiche Kampagnen umgesetzt. Lass dich von unserer
                    Expertise inspirieren und starte mit uns deine
                    maßgeschneiderte Marketinglösung.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-0 rounded-2xl bg-[url(/images/listboxbg.png)] bg-cover bg-no-repeat p-8 shadow-4xl mb-11.75">
            <h4 className="text-2xl font-semibold text-white-1100 leading-8.25 pb-8">
              Full-Service Pakete deiner Online Marketing Agentur: Alles aus
              einer Hand
            </h4>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Online Marketing Agentur: Umfassende Full-Service-Angebote
                    für dein Unternehmen
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Unsere Online Marketing Agentur bietet dir maßgeschneiderte
                    Full-Service-Pakete, die alle wichtigen Aspekte des
                    digitalen Marketings abdecken. Von SEO und PPC über Social
                    Media bis hin zu Content Marketing – du bekommst alles aus
                    einer Hand, um deine Online-Präsenz zu maximieren. So sparst
                    du Zeit und Ressourcen, während du gleichzeitig von einer
                    durchdachten, ganzheitlichen Strategie profitierst.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing-Agentur: So läuft dein Marketing-Prozess ab
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Als deine Marketing-Agentur legen wir großen Wert auf einen
                    strukturierten und klaren Prozess. Zunächst analysieren wir
                    dein Unternehmen und deine Zielgruppe, um dir eine
                    individuelle Online Marketing Beratung zu bieten. Im
                    nächsten Schritt entwickeln wir eine maßgeschneiderte
                    Strategie, die genau zu deinen Zielen passt. Die Umsetzung
                    erfolgt mit stetiger Optimierung, um die besten Ergebnisse
                    zu erzielen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Online Marketing Agentur: Beratung und Strategieentwicklung
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Unsere Zusammenarbeit beginnt immer mit einer ausführlichen
                    Online Marketing Beratung. Wir identifizieren deine
                    Bedürfnisse und erstellen einen Maßnahmenkatalog, der auf
                    deinen Erfolg ausgerichtet ist. Ob du neue Leads generieren
                    oder deine Reichweite steigern möchtest – wir entwickeln für
                    dich eine passgenaue Strategie, die alle relevanten
                    Marketingkanäle optimal miteinander verbindet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing-Agentur: Transparente Prozesse und klare
                    Kommunikation
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Du stehst bei uns immer im Mittelpunkt. Als deine
                    Marketing-Agentur legen wir großen Wert auf Transparenz. Du
                    wirst in jeder Phase des Prozesses eingebunden und erhältst
                    regelmäßig Updates zu den Fortschritten deiner Kampagne. So
                    hast du die Kontrolle und kannst jederzeit nachvollziehen,
                    wie sich deine Marketingstrategie entwickelt und welche
                    Erfolge erzielt werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-0 rounded-2xl bg-black-1200 p-8 shadow-4xl">
            <h4 className="text-2xl font-semibold text-white-1100 leading-8.25 pb-8">
              Omnichannel-Marketing und Cross-Channel-Strategien deiner Online
              Marketing Agentur
            </h4>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Wie deine Online Marketing Agentur Omnichannel-Strategien
                    für dein Unternehmen nutzt
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Omnichannel-Marketing bedeutet, dass deine Kunden über
                    verschiedene Kanäle hinweg ein nahtloses Erlebnis erhalten.
                    Deine Online Marketing Agentur sorgt dafür, dass du
                    potenzielle Kunden genau dort erreichst, wo sie sich
                    aufhalten – sei es über Social Media, E-Mail-Marketing, oder
                    bezahlte Anzeigen. So wird sichergestellt, dass du nicht nur
                    online, sondern auch offline präsent bist und deine Marke
                    konsistent auftritt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing-Agentur: Cross-Channel-Strategien für konsistente
                    Botschaften und höhere Conversions
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Cross-Channel-Marketing sorgt dafür, dass deine
                    Marketingbotschaften auf allen Kanälen konsistent sind und
                    deine Kunden eine klare, einheitliche Botschaft erhalten.
                    Eine durchdachte Cross-Channel-Strategie deiner
                    Marketing-Agentur sorgt für höhere Conversion-Raten und eine
                    stärkere Kundenbindung. Wir unterstützen dich dabei, diese
                    Konsistenz zu wahren und deine Reichweite über verschiedene
                    Kanäle hinweg zu maximieren.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Deine Online Marketing Agentur: Integration von Online- und
                    Offline-Marketingkanälen
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Unsere Online Marketing Agentur hilft dir, deine Online- und
                    Offline-Kanäle effektiv zu verbinden. Ob Printwerbung,
                    Events oder E-Commerce – wir schaffen die perfekte Synergie
                    zwischen deinen Kanälen, sodass deine Kunden überall ein
                    nahtloses Erlebnis haben. Dies stärkt nicht nur deine Marke,
                    sondern steigert auch den Erfolg deiner Marketingkampagnen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div>
                  <span>
                    <img src="images/check.svg" alt="" />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Best Practices von deiner Marketing-Agentur für Omnichannel-
                    und Cross-Channel-Marketing
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Bei der Umsetzung von Omnichannel- und
                    Cross-Channel-Strategien setzt unsere Marketing-Agentur auf
                    bewährte Best Practices. Dazu gehört die einheitliche
                    Gestaltung deiner Botschaften, die richtige Verknüpfung der
                    Kanäle und das kontinuierliche Monitoring deiner Kampagnen.
                    So stellst du sicher, dass du deine Zielgruppe effektiv
                    erreichst und das volle Potenzial deiner Marketingstrategie
                    ausschöpfst.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-45">
        <div className="max-w-308 px-4 mx-auto w-full">
          <div className="text-center relative border-b border-solid border-white/50 pb-10 mb-16">
            <h2 className="text-orange-1100 text-5xl font-bold leading-16.75 pb-3">
              Online Marketing Agentur:
            </h2>
            <span className="w-191.5 h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h3 className="text-[32px] font-medium text-white-1100 leading-9.75 pb-6">
              SEO-Strategien & Conversion Optimierung für dein Wachstum
            </h3>
            <p className="text-base font-normal leading-5.5 text-white-1100">
              Unsere Online Marketing Agentur unterstützt dich mit
              maßgeschneiderten SEO-Strategien, lokalem SEO, Conversion
              Optimierung und Pay-per-Click-Kampagnen, um deine
              Online-Sichtbarkeit zu erhöhen, Traffic zu steigern und mehr
              Conversions für dein Unternehmen zu generieren.
            </p>
          </div>
          <div className="-mx-5">
            <ServicesSlider />
          </div>
          <div className="text-center">
            <CtaButton href="/" label="Website-Analyse anfordern" />
            <p className="text-xs text-white-1100 font-normal pt-3">
              Finde heraus, wie Online Marketing dir mehr Kunden bringt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
