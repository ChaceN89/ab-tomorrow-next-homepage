// app/api/lesson-plans/route.js

import { NextResponse } from 'next/server';

export async function GET() {
  const lessonPlans = [
    {
      id: 1,
      title: "Grade 6 Science: Watershed Ecosystems",
      description: "Learn about the importance of watersheds in Alberta.",
      link: "/pdfs/lesson-plans/watershed-ecosystems.pdf"
    },
    {
      id: 2,
      title: "Grade 9 Social Studies: Land Use & Economy",
      description: "Understand how land-use planning impacts Alberta’s economy.",
      link: "/pdfs/lesson-plans/land-use-economy.pdf"
    }
  ];

  return NextResponse.json(lessonPlans);
}
