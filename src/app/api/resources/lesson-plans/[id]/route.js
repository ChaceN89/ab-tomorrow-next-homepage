/**
 * @file [id]/route.js
 * @module API/Lessons/Single
 * @desc API endpoint for fetching a single lesson plan by ID.
 *
 * @author Chace Nielson
 * @created Apr 13, 2025
 * @updated Apr 13, 2025
 */

import { NextResponse } from "next/server";
import { allLessons } from "../lessonData";

/**
 * GET /api/lessons/[id]
 */
export async function GET(_, { params }) {
  const { id } = params;

  console.log("➡️ Fetching lesson by ID:", id);

  const lesson = allLessons.find((l) => String(l.id) === String(id));

  if (!lesson) {
    console.warn("❌ Lesson not found:", id);
    return NextResponse.json(
      { error: `Lesson with ID ${id} not found` },
      { status: 404 }
    );
  }

  console.log("✅ Found lesson:", lesson.title);
  return NextResponse.json(lesson);
}
