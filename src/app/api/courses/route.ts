import Courses from "./data.json";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function GET() {
  return NextResponse.json(Courses);
}

export async function POST(request: { json: () => any }) {
  const { title, description, level, link } = await request.json();

  const id: number | string = nanoid(5);

  const newCourse = {
    id: parseInt(id), //to get a numeric ID, you can extract the numeric portion
    title,
    description,
    level,
    link,
  };

  Courses.push(newCourse);

  return NextResponse.json(Courses);
}
