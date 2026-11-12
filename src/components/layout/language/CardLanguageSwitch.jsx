"use client";

export default function CardLanguageSwitch({
  availableLanguages = [],
  selectedLanguage = "en",
  onChange,
  label = "Video language",
}) {
  const languages = Array.from(
    new Set(
      (Array.isArray(availableLanguages) ? availableLanguages : [])
        .map((language) => String(language || "").trim().toLowerCase())
        .filter((language) => ["en", "fr"].includes(language))
    )
  );

  if (!languages.length) return null;

  const activeLanguage = languages.includes(selectedLanguage)
    ? selectedLanguage
    : languages[0];

  if (languages.length === 1) {
    return (
      <span
        aria-label={`${label}: ${languages[0].toUpperCase()}`}
        className="inline-flex items-center rounded-full border border-black/10 bg-gray-100 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-700"
      >
        {languages[0]}
      </span>
    );
  }

  const nextLanguage = languages.find((language) => language !== activeLanguage);

  return (
    <button
      type="button"
      aria-label={`${label}: ${nextLanguage.toUpperCase()}`}
      title={`${label}: ${nextLanguage.toUpperCase()}`}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onChange?.(nextLanguage);
      }}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-black/15 bg-white px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-700 shadow-sm transition-colors hover:bg-primary hover:text-white"
    >
      <span>{activeLanguage}</span>
      <span aria-hidden="true" className="text-sm leading-none">↻</span>
    </button>
  );
}
