import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

interface params {
  params: {
    name: string;
  };
}

const RepoPage = ({ params: { name } }: params) => {
  return (
    <div className='border border-gray-300 rounded-md p-4 mb-4 bg-white text-gray-800'>
      <Link
        className='inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium no-underline cursor-pointer hover:bg-blue-600 mb-5'
        href='/code/repos'
      >
        Back
      </Link>
      <Suspense fallback={<div className='mt-4'>Loading Repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div className='mt-4'>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
