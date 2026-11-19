const DEFAULT_POSITION = "bottom-center";

const VERTICAL = {
  top: { line: 0, snapToLines: true, lineAlign: "start" },
  middle: { line: 50, snapToLines: false, lineAlign: "center" },
  bottom: { line: "auto", snapToLines: true, lineAlign: "start" },
};

const HORIZONTAL = {
  left: { align: "start", position: 0, positionAlign: "line-left", size: 65 },
  center: { align: "center", position: 50, positionAlign: "center", size: 90 },
  right: { align: "end", position: 100, positionAlign: "line-right", size: 65 },
};

/**
 * Converts a position such as "top-left" or "bottom" into WebVTT cue settings.
 * A single word is treated as the vertical row, centered. Unknown values fall back to "bottom-center".
 */
export function getCueSettings(position) {
  const [row, column = "center"] = String(position ?? "").trim().toLowerCase().split("-");
  const vertical = VERTICAL[row];
  const horizontal = HORIZONTAL[column];
  if (!vertical || !horizontal) return getCueSettings(DEFAULT_POSITION);
  return { ...horizontal, ...vertical };
}

export function formatSubtitleCues(track, position) {
  if (!track.cues) return;
  const settings = getCueSettings(position);
  // YouTube-exported VTT files pin cues to the left edge.
  for (const cue of Array.from(track.cues)) {
    cue.text = cue.text
      .replace(/<\d{2}:\d{2}(?::\d{2})?\.\d{3}>/g, "")
      .replace(/<\/?c(?:\.[^>]*)?>/g, "")
      .trim();
    // Overwrite every layout setting so positioning written into the VTT file is ignored.
    Object.assign(cue, settings, { vertical: "", region: null });
  }
}
