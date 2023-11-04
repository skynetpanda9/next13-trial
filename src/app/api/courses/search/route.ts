import { NextResponse } from "next/server";
import Courses from "../data.json";

export async function GET(req: { nextUrl: string | URL }) {
  const { searchParams } = new URL(req.nextUrl);
  const query = searchParams.get("query");
  const filteredCourses =
    query &&
    Courses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );

  return NextResponse.json(filteredCourses);
}
