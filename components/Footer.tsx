import Link from "next/link";
import CtaButton from "./Ctabutton";

const Footer = () => {
  return (
    <div className="max-w-333 mx-auto px-4 w-full">
      <div className="max-w-300 mx-auto w-full">
        <div className="flex items-start justify-between gap-10 mb-13.25">
          <div>
            <Link href="/" className="inline-block">
              <img src="images/footer-logo.svg" alt="" />
            </Link>
            <p className="text-xs text-white-1100 my-6 font-normal leading-4">
              Sicher dir jetzt ein kostenloses Beratungsgespräch.
            </p>
            <div className="space-y-3 text-center">
              <CtaButton />
              <p className="text-xs text-white-1100 font-normal leading-4">
                Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
              </p>
            </div>
          </div>
          <div>
            <ul className="space-y-3 mb-5">
              <li className="flex items-center gap-4">
                <span>
                  <img src="images/pin.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100">
                  Ballindamm 15, 20095 Hamburg
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span>
                  <img src="images/clock.svg" alt="" />
                </span>
                <p className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100">
                  Mo-Fr 09:00–20:00 | Sa 09:00–16:00
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span>
                  <img src="images/mail.svg" alt="" />
                </span>
                <Link
                  href="mailto:Info@benchmark-media.de"
                  className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100"
                >
                  Info@benchmark-media.de
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <span>
                  <img src="images/website.svg" alt="" />
                </span>
                <Link
                  href="https://benchmark-media.de/"
                  className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100"
                >
                  Website
                </Link>
              </li>
            </ul>
            <ul className="gap-5.75 flex items-center mb-5">
              <li>
                <Link
                  href="/"
                  className="text-base font-normal leading-5.5 text-white-1100"
                >
                  Datenschutz
                </Link>
              </li>
              <li className="text-base font-normal leading-5.5 text-white-1100">
                |
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base font-normal leading-5.5 text-white-1100"
                >
                  AGB
                </Link>
              </li>
              <li className="text-base font-normal leading-5.5 text-white-1100">
                |
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base font-normal leading-5.5 text-white-1100"
                >
                  Impressum
                </Link>
              </li>
            </ul>
            <p className="text-base font-normal leading-5.5 text-white-1100">
              Alle Rechte vorbehalten 2026
            </p>
          </div>
          <div>
            <Link href="/" className="mb-10 inline-flex">
              <img src="images/rating.svg" alt="" />
            </Link>
            <Link href="/">
              <img src="images/google-rating.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <img src="images/benchmark.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Footer;
