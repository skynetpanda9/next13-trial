import Link from "next/link";
interface props {
  courses: {
    id: number;
    title: string;
    level: string;
    description: string;
    link: string;
  }[];
}

const Courses = ({ courses }: props) => {
  return (
    <div className='mt-2'>
      {courses?.map(
        (course: {
          id: number;
          title: string;
          level: string;
          description: string;
          link: string;
        }) => (
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
        )
      )}
    </div>
  );
};

export default Courses;
