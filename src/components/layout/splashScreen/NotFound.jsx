/**
 * @file NotFound.jsx
 * @module components/layout/splashScreen/NotFound
 * @description Branded 404 page that determines the language from the
 * requested URL pathname.
 *
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated Jul 14, 2026 - set up hard coded localizaation since this componet is outsid ethe localizaed shell
 *
 * @dependencies
 * - next/navigation
 * - HexSeparator
 * - HexButton
 */

"use client";

import { usePathname } from "next/navigation";
import HexSeparator from "../../common/hexSparator/HexSeparator";
import HexButton from "../../common/hexButton/HexButton";

const translations = {
  en: {
    heading: "Oops! You're off the map.",
    descriptionLine1: "The page or resource you’re looking for doesn’t exist or might’ve moved.",
    descriptionLine2: "But no worries — let’s get you back on track.",
    backHome: "Return Home"
  },
  fr: {
    heading: "Oups ! Vous n’êtes plus sur la carte.",
    descriptionLine1: "La page ou la ressource que vous recherchez n’existe pas ou a peut-être été déplacée.",
    descriptionLine2: "Mais pas d’inquiétude — remettons-vous sur la bonne voie.",
    backHome: "Retour à l’accueil"
  }
};

export default function NotFound() {
  const pathname = usePathname();

  const firstPathSegment = pathname
    ?.split("/")
    .filter(Boolean)[0];

  const locale = firstPathSegment === "fr" ? "fr" : "en";
  const content = translations[locale];

  return (
    <div className="page-width mt-20 relative">
      <div className="page flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-9xl font-extrabold text-primary-alt large-shadow relative mt-8">
          404
        </h1>

        <HexSeparator
          randomColors
          bottom
          rows={9}
          hexClass="opacity-40"
        />

        <div className="space-y-6">
          <h2 className="text-2xl mt-10 md:text-3xl font-semibold text-secondary-alt">
            {content.heading}
          </h2>

          <div className="text-lg opacity-80 max-w-xl">
            <p>{content.descriptionLine1}</p>
            <p>{content.descriptionLine2}</p>
          </div>

          <div className="w-full flex items-center justify-center">
            <HexButton
              color="accent"
              textColor="black"
              link={`/${locale}`}
              asLink={true}
              text={content.backHome}
            >
              {content.backHome}
            </HexButton>
          </div>
        </div>
      </div>
    </div>
  );
}