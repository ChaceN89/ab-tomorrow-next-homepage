import assert from "node:assert/strict";
import test from "node:test";
import { formatSubtitleCues } from "./subtitleUtils.js";

test("centers YouTube captions and removes karaoke markup for both players", () => {
  const cue = { text: " <00:01.250><c.color>Water</c> <00:02.500>quality " };
  formatSubtitleCues({ cues: [cue] });
  assert.deepEqual(cue, {
    text: "Water quality",
    align: "center",
    position: 50,
    positionAlign: "center",
    size: 90,
    line: "auto",
    snapToLines: true,
  });
});

test("tracks without loaded cues are safe to format", () => {
  assert.doesNotThrow(() => formatSubtitleCues({ cues: null }));
  assert.doesNotThrow(() => formatSubtitleCues({ cues: [] }));
});

test("supports Video.js array-like cue lists without an iterator", () => {
  const cue = { text: "<c>River</c>" };
  formatSubtitleCues({ cues: { 0: cue, length: 1 } });
  assert.equal(cue.text, "River");
  assert.equal(cue.position, 50);
});
