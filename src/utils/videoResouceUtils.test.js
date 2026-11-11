import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { extractYouTubeId, normalizeVideoMedia } from "./videoResouceUtils.js";

test("preserves primary video and separate YouTube fallback", () => {
  const media = normalizeVideoMedia({
    media: {
      primaryUrl: " https://example.com/tutorial.mp4 ",
      youtubeUrl: "https://www.youtube.com/watch?v=5Qi8v-Y3iXM",
      thumbnailUrl: "https://example.com/tutorial.jpg",
      is360: true,
    },
  });

  assert.equal(media.primaryUrl, "https://example.com/tutorial.mp4");
  assert.equal(media.url, media.youtubeUrl);
  assert.equal(extractYouTubeId(media.url), "5Qi8v-Y3iXM");
  assert.equal(media.thumbnailUrl, "https://example.com/tutorial.jpg");
  assert.equal(media.is360, true);
});

test("missing and placeholder primary URLs leave the YouTube fallback available", () => {
  for (const primaryUrl of [undefined, null, "", "N/A", " n/a ", "na"]) {
    const media = normalizeVideoMedia({
      media: { primaryUrl, youtubeUrl: "https://youtu.be/5Qi8v-Y3iXM" },
    });
    assert.equal(media.primaryUrl, "");
    assert.equal(extractYouTubeId(media.youtubeUrl), "5Qi8v-Y3iXM");
  }
});

test("supports legacy YouTube URL and thumbnail fields", () => {
  const media = normalizeVideoMedia({
    media: {
      primaryUrl: "N/A",
      youtubeUrl: "N/A",
      url: "https://www.youtube.com/watch?v=5Qi8v-Y3iXM",
      thumbUrl: "/thumbnail.jpg",
    },
  });

  assert.equal(media.primaryUrl, "");
  assert.equal(extractYouTubeId(media.url), "5Qi8v-Y3iXM");
  assert.equal(media.thumbnailUrl, "/thumbnail.jpg");
  assert.equal(normalizeVideoMedia({}).url, "");
});

test("register-account data provides the homepage primary video and subtitle tracks", () => {
  const videos = JSON.parse(readFileSync(new URL("../../public/api-static-data/videos.json", import.meta.url), "utf8"));
  const video = videos.find(({ id }) => id === "tutorial-01a-register-account");
  assert.ok(video);
  const media = normalizeVideoMedia(video);
  assert.match(media.primaryUrl, /tutorial-01a-register-account\/.+\.mp4$/);
  assert.equal(extractYouTubeId(media.youtubeUrl), "5Qi8v-Y3iXM");
  for (const language of ["en", "fr"]) {
    assert.match(video.subtitles[language], /\.vtt$/);
  }
  for (const entry of videos) {
    assert.ok(extractYouTubeId(normalizeVideoMedia(entry).youtubeUrl), `Missing YouTube fallback: ${entry.id}`);
  }
});
