import Link from "next/link";
interface course {
  id: number;
  title: string;
  level: string;
  description: string;
  link: string;
}
const fetchCourses = async () => {
  const res = await fetch("http://localhost:3000/api/courses");
  const courses = await res.json();
  return courses;
};

const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <div className='mt-2'>
      {courses.map((course: course) => (
        <div
          key={course.id}
          className='border border-gray-300 rounded-md p-4 mb-4 bg-white text-gray-800'
        >
          <h2 className='mb-0'>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link
            href={course.link}
            target='_black'
            className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium no-underline cursor-pointer hover:bg-blue-600'
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
