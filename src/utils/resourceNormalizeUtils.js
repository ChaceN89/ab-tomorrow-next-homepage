const DEFAULT_LOCALE = "en";

function isPlaceholderString(value) {
  if (typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "" || normalized === "n/a" || normalized === "na";
}

function hasMeaningfulValue(value) {
  if (value == null) return false;
  if (typeof value === "string") return !isPlaceholderString(value);
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") return Object.keys(value).length > 0;
  return true;
}

function pickLocalizedOrDefault(value, locale = DEFAULT_LOCALE, fallback = "") {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value ?? fallback;
  }

  const localized = value[locale];
  const defaultValue = value[DEFAULT_LOCALE];

  if (hasMeaningfulValue(localized)) return localized;
  if (hasMeaningfulValue(defaultValue)) return defaultValue;

  return fallback;
}

function toTitleFromId(id = "") {
  return String(id)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

export function getLocalizedValue(value, locale = DEFAULT_LOCALE) {
  if (value == null) return "";
  if (typeof value === "string") return isPlaceholderString(value) ? "" : value;
  if (Array.isArray(value)) return value;

  if (typeof value === "object") {
    const localized = pickLocalizedOrDefault(value, locale, "");
    if (typeof localized === "string") {
      return isPlaceholderString(localized) ? "" : localized;
    }
    return localized ?? "";
  }

  return "";
}

export function getLocalizedArray(value, locale = DEFAULT_LOCALE) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.filter(Boolean).map((item) => String(item));
  }

  if (typeof value === "object") {
    const localized = pickLocalizedOrDefault(value, locale, []);
    if (Array.isArray(localized)) {
      return localized.filter(Boolean).map((item) => String(item));
    }

    if (typeof localized === "string" && !isPlaceholderString(localized)) {
      return [localized.trim()];
    }
  }

  return [];
}

function mapObjectEntriesToLinks(obj) {
  return Object.entries(obj)
    .map(([key, value]) => ({ title: toTitleFromId(key), link: value }))
    .filter((item) => typeof item.link === "string" && item.link.trim().length > 0);
}

function normalizeArrayLinks(items, locale) {
  return items
    .map((item) => {
      if (typeof item === "string") {
        return { title: item, link: item };
      }

      if (!item || typeof item !== "object") {
        return null;
      }

      const title = getLocalizedValue(item.title, locale) || item.label || item.name || "Resource";
      const link = item.link || item.url || item.href;

      if (!link || typeof link !== "string") return null;
      return { title, link };
    })
    .filter(Boolean);
}

export function getLocalizedLinks(value, locale = DEFAULT_LOCALE) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return normalizeArrayLinks(value, locale);
  }

  if (typeof value === "object") {
    const localized = pickLocalizedOrDefault(value, locale, undefined);

    if (Array.isArray(localized)) {
      return normalizeArrayLinks(localized, locale);
    }

    if (localized && typeof localized === "object") {
      return mapObjectEntriesToLinks(localized);
    }

    return mapObjectEntriesToLinks(value);
  }

  return [];
}

export function formatThemeId(themeId = "") {
  const id = String(themeId);
  const themeMap = {
    "climate-change": { en: "Climate Change", fr: "Changements climatiques" },
    "glaciers-and-watersheds": { en: "Glaciers and Watersheds", fr: "Glaciers et bassins hydrographiques" },
    "land-use": { en: "Land Use", fr: "Utilisation des terres" },
    "alberta-natural-regions-and-ecosystems": { en: "Alberta Natural Regions and Ecosystems", fr: "Regions naturelles et ecosystemes de l'Alberta" },
    "indigenous-voices": { en: "Indigenous Voices", fr: "Voix autochtones" },
    "bow-river-watershed": { en: "Bow River Watershed", fr: "Bassin hydrographique de la riviere Bow" },
    "energy": { en: "Energy", fr: "Energie" }
  };

  return themeMap[id]?.[DEFAULT_LOCALE] || toTitleFromId(id);
}

export function formatThemeLabel(themeId = "", locale = DEFAULT_LOCALE) {
  const id = String(themeId);
  const themeMap = {
    "climate-change": { en: "Climate Change", fr: "Changements climatiques" },
    "glaciers-and-watersheds": { en: "Glaciers and Watersheds", fr: "Glaciers et bassins hydrographiques" },
    "land-use": { en: "Land Use", fr: "Utilisation des terres" },
    "alberta-natural-regions-and-ecosystems": { en: "Alberta Natural Regions and Ecosystems", fr: "Regions naturelles et ecosystemes de l'Alberta" },
    "indigenous-voices": { en: "Indigenous Voices", fr: "Voix autochtones" },
    "bow-river-watershed": { en: "Bow River Watershed", fr: "Bassin hydrographique de la riviere Bow" },
    "energy": { en: "Energy", fr: "Energie" }
  };

  return themeMap[id]?.[locale] || themeMap[id]?.[DEFAULT_LOCALE] || toTitleFromId(id);
}

export function formatCategoryLabel(categoryId = "", locale = DEFAULT_LOCALE) {
  const id = String(categoryId);
  const categoryMap = {
    "simulator-tutorials": { en: "Simulator Tutorials", fr: "Tutoriels du simulateur" },
    "understanding-the-landscape": { en: "Understanding the Landscape", fr: "Comprendre le paysage" },
    "environmental-indicators": { en: "Environmental Indicators", fr: "Indicateurs environnementaux" },
    "stewardship-and-action": { en: "Stewardship and Action", fr: "Intendance et action" },
    "careers-and-pathways": { en: "Careers and Pathways", fr: "Carrieres et parcours" },
    "webinars-and-events": { en: "Webinars and Events", fr: "Webinaires et evenements" }
  };

  return categoryMap[id]?.[locale] || categoryMap[id]?.[DEFAULT_LOCALE] || toTitleFromId(id);
}

export function formatGradeLabel(gradeId = "", locale = DEFAULT_LOCALE) {
  const id = String(gradeId).toLowerCase();

  if (id === "kindergarten") return locale === "fr" ? "Maternelle" : "Kindergarten";

  const match = id.match(/^grade-(\d+)$/);
  if (!match) return toTitleFromId(id);

  const level = Number(match[1]);
  if (Number.isNaN(level)) return toTitleFromId(id);

  return locale === "fr" ? `${level}e annee` : `Grade ${level}`;
}

export function formatSubjectLabel(subjectId = "", locale = DEFAULT_LOCALE) {
  const id = String(subjectId).toLowerCase();
  const subjectMap = {
    biology: { en: "Biology", fr: "Biologie" },
    chemistry: { en: "Chemistry", fr: "Chimie" },
    physics: { en: "Physics", fr: "Physique" },
    science: { en: "Science", fr: "Sciences" },
    "social-studies": { en: "Social Studies", fr: "Etudes sociales" },
    cts: { en: "CTS", fr: "EPT" },
    math: { en: "Math", fr: "Mathematiques" },
    "english-language-arts": { en: "English Language Arts", fr: "Arts langagiers - English" },
    "physical-education": { en: "Physical Education", fr: "Education physique" },
    health: { en: "Health", fr: "Sante" }
  };

  return subjectMap[id]?.[locale] || subjectMap[id]?.[DEFAULT_LOCALE] || toTitleFromId(id);
}

export function getSearchTerms(value, locale = DEFAULT_LOCALE) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.filter(Boolean).map((item) => String(item));
  }

  if (typeof value === "object") {
    const localized = pickLocalizedOrDefault(value, locale, []);
    if (Array.isArray(localized)) return localized.filter(Boolean).map((item) => String(item));

    return Object.values(value)
      .flatMap((entry) => (Array.isArray(entry) ? entry : []))
      .filter(Boolean)
      .map((item) => String(item));
  }

  return [];
}
