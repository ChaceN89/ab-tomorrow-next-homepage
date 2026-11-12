export function formatSubtitleCues(track) {
  if (!track.cues) return;
  // YouTube-exported VTT files pin cues to the left edge.
  for (const cue of Array.from(track.cues)) {
    cue.text = cue.text
      .replace(/<\d{2}:\d{2}(?::\d{2})?\.\d{3}>/g, "")
      .replace(/<\/?c(?:\.[^>]*)?>/g, "")
      .trim();
    cue.align = "center";
    cue.position = 50;
    cue.positionAlign = "center";
    cue.size = 90;
    cue.line = "auto";
    cue.snapToLines = true;
  }
}
