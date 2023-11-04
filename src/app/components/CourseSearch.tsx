"use client";
import { useState } from "react";

interface props {
  getSearchResults: (courses: any) => void;
}

const CourseSearch = ({ getSearchResults }: props) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!query.trim()) {
      const res = await fetch(`/api/courses/`);
      const courses = await res.json();
      getSearchResults(courses);
    } else {
      const res = await fetch(`/api/courses/search?query=${query}`);
      const courses = await res.json();
      getSearchResults(courses);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center mt-4'>
      <input
        type='text'
        className='flex-grow px-4 py-2 border-0 rounded-md text-lg'
        placeholder='Search for a course...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className='px-4 py-2 ml-2 bg-blue-500 text-white border-0 rounded-md text-lg cursor-pointer hover:bg-blue-600'
        type='submit'
      >
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
