/**
 * @file route.js
 * @module API/Lessons
 * @desc API endpoint for fetching lesson plan data. Supports optional filtering by theme, subject, grade, or associated tool.
 *
 * @author Chace Nielson
 * @created Apr 1, 2025
 * @updated Apr 13, 2025
 */

import { NextResponse } from "next/server";
import { allLessons } from "./lessonData"; // Assumes allLessons is an array of all lesson plans

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const theme = searchParams.get("theme");
  const subject = searchParams.get("subject");
  const grade = searchParams.get("grade");
  const tool = searchParams.get("tool");

  console.log("➡️ Incoming request to /api/lessons");
  console.log("Theme Filter:", theme);
  console.log("Subject Filter:", subject);
  console.log("Grade Filter:", grade);
  console.log("Tool Filter:", tool);

  let filteredLessons = allLessons;

  // Filter by theme (strict match)
  if (theme) {
    filteredLessons = filteredLessons.filter(
      (lesson) => lesson.theme?.toLowerCase() === theme.toLowerCase()
    );
  }

  // Filter by subject (checks for presence in array)
  if (subject) {
    filteredLessons = filteredLessons.filter(
      (lesson) =>
        lesson.subjects &&
        lesson.subjects.some(
          (s) => s.toLowerCase() === subject.toLowerCase()
        )
    );
  }

  // Filter by grade (checks for presence in array)
  if (grade) {
    filteredLessons = filteredLessons.filter(
      (lesson) =>
        lesson.grades &&
        lesson.grades.some(
          (g) => g.toLowerCase() === grade.toLowerCase()
        )
    );
  }

  // Filter by tool (checks for presence in array)
  if (tool) {
    filteredLessons = filteredLessons.filter(
      (lesson) =>
        lesson.tools &&
        lesson.tools.some(
          (t) => t.toLowerCase() === tool.toLowerCase()
        )
    );
  }

  console.log("✅ Returning lessons:", filteredLessons.length);

  return NextResponse.json(filteredLessons, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
