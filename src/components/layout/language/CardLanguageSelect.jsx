


export default function CardLanguageSelect({
  availableLanguages = [],
  selectedLanguage = "en",
  onChange,
  className = "",
}) {
  const normalizedLanguages = Array.from(
    new Set(
      (Array.isArray(availableLanguages) ? availableLanguages : [])
        .map((lang) => String(lang || "").trim().toLowerCase())
        .filter((lang) => ["en", "fr"].includes(lang))
    )
  );

  if (!normalizedLanguages.length) return null;

  const safeSelectedLanguage = normalizedLanguages.includes(selectedLanguage)
    ? selectedLanguage
    : normalizedLanguages[0];

  const activeIndex = normalizedLanguages.indexOf(safeSelectedLanguage);

  if (normalizedLanguages.length === 1) {
    return (
      <div
        className={`inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-700 shadow-sm ${className}`}
      >
        {safeSelectedLanguage}
      </div>
    );
  }

  return (
    <div
      className={`relative grid w-full overflow-hidden rounded-full border border-black/15 bg-white/80 p-1 shadow-[0_2px_10px_rgba(15,23,42,0.08)] ${className}`}
      style={{
        gridTemplateColumns: `repeat(${normalizedLanguages.length}, minmax(0, 1fr))`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-1 left-1 rounded-full bg-primary shadow-[0_2px_10px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out"
        style={{
          // Subtract horizontal inset (left-1 + right-1 = 0.5rem) before splitting into segments.
          width: `calc((100% - 0.5rem) / ${normalizedLanguages.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {normalizedLanguages.map((lang, index) => (
        <button
          key={lang}
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onChange?.(lang);
          }}
          className={`relative z-10 flex items-center justify-center cursor-pointer px-2 py-1 text-[10px] font-semibold uppercase tracking-wide transition-colors duration-300 ease-out first:rounded-l-full last:rounded-r-full ${index > 0 ? "border-l border-white/0" : ""} ${safeSelectedLanguage === lang
            ? "text-white"
            : "text-gray-700 hover:bg-gray-100/100"
            }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
