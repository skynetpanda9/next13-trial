"use client";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "../components/Courses";
import CourseSearch from "../components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div>
      <h1 className='text-3xl font-semibold'>Welcome to Github Api Tutorial</h1>
      <CourseSearch getSearchResults={(results: any) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
