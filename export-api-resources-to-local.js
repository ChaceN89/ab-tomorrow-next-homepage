// export-api-resources-to-local.js (CommonJS + ESM compatibility)
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

// Convert relative path to file:// URL for ESM import
async function exportData() {
  const lessonPath = pathToFileURL('./src/app/_api/resources/lesson-plans/lessonData.js').href;
  const videoPath = pathToFileURL('./src/app/_api/resources/videos/videoData.js').href;

  const { allLessons } = await import(lessonPath);
  const { allVideos } = await import(videoPath);

  const outputDir = path.join(process.cwd(), 'test/api-static-data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(outputDir, 'lesson-plans.json'),
    JSON.stringify(allLessons, null, 2)
  );
  console.log(`✅ Exported ${allLessons.length} lessons to test/api-static-data/lesson-plans.json`);

  fs.writeFileSync(
    path.join(outputDir, 'videos.json'),
    JSON.stringify(allVideos, null, 2)
  );
  console.log(`✅ Exported ${allVideos.length} videos to test/api-static-data/videos.json`);
}

exportData();
