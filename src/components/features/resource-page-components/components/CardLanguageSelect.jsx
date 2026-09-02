


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
          width: `calc((100% - ${(normalizedLanguages.length - 1) * 0.25}rem) / ${normalizedLanguages.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {normalizedLanguages.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onChange?.(lang);
          }}
          className={`relative z-10 cursor-pointer rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide transition-all duration-300 ease-out ${safeSelectedLanguage === lang
              ? "text-white"
              : "text-gray-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(15,23,42,0.08)] hover:bg-gray-100/80"
            }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
