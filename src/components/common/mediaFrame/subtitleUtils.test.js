import assert from "node:assert/strict";
import test from "node:test";
import { formatSubtitleCues, getCueSettings } from "./subtitleUtils.js";

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
    lineAlign: "start",
    vertical: "",
    region: null,
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

test("maps position strings to WebVTT cue settings", () => {
  assert.deepEqual(getCueSettings("top-left"), {
    align: "start", position: 0, positionAlign: "line-left", size: 65, line: 0, snapToLines: true, lineAlign: "start",
  });
  assert.deepEqual(getCueSettings("middle-right"), {
    align: "end", position: 100, positionAlign: "line-right", size: 65, line: 50, snapToLines: false, lineAlign: "center",
  });
  assert.deepEqual(getCueSettings("top"), getCueSettings("top-center"));
});

test("unknown or missing positions fall back to bottom-center", () => {
  const fallback = getCueSettings("bottom-center");
  for (const value of [undefined, "", "sideways", "top-nowhere"]) {
    assert.deepEqual(getCueSettings(value), fallback);
  }
});

test("applies the requested position to every cue", () => {
  const cue = { text: "River" };
  formatSubtitleCues({ cues: [cue] }, "top-right");
  assert.equal(cue.line, 0);
  assert.equal(cue.align, "end");
});

test("supports all nine positions and overrides positioning from the VTT file", () => {
  for (const row of ["top", "middle", "bottom"]) {
    for (const column of ["left", "center", "right"]) {
      const cue = { text: "River", line: 7, position: 12, align: "start", size: 20, lineAlign: "end", vertical: "rl", region: {} };
      formatSubtitleCues({ cues: [cue] }, `${row}-${column}`);
      const expected = getCueSettings(`${row}-${column}`);
      for (const [key, value] of Object.entries(expected)) assert.equal(cue[key], value, `${row}-${column} ${key}`);
      assert.equal(cue.vertical, "");
      assert.equal(cue.region, null);
    }
  }
  assert.equal(new Set(["top", "middle", "bottom"].flatMap((r) => ["left", "center", "right"].map((c) => JSON.stringify(getCueSettings(`${r}-${c}`))))).size, 9);
});
